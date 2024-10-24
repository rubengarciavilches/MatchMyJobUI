import { useEffect, useState } from "react";
import { Separator } from "@/components/ui/separator.tsx";
import JobDetails from "@/job-board/pages/JobDetails.tsx";
import JobBoardAsideList from "../components/JobBoardAsideList";
import JobFilters from "./JobFilters";
import { useFetchData } from "@/lib/db/useFetchData";
import { JOBS_WITH_RATINGS_SELECT, JobWithRating } from "@/lib/db/jobsRatings";
import React from "react";
import { useFilters, ValidDates } from "@/lib/useFilters";

function useValidJobsWithRatings(datePosted: ValidDates) {
	const {
		data: jobs,
		isLoading,
		isDisabled,
	} = useFetchData<JobWithRating>("job", JOBS_WITH_RATINGS_SELECT);

	const pastDate = React.useMemo(() => {
		const daysToSubtract = datePosted === 0 ? 365 : datePosted;
		const newDate = new Date();
		newDate.setDate(newDate.getDate() - daysToSubtract);
		return newDate;
	}, [datePosted]);

	const filteredJobs: JobWithRating[] = React.useMemo(
		() =>
			jobs
				.filter(
					(job) =>
						((new Date(job.created_at) >= pastDate &&
							job.rating?.at(0)?.rating) ??
							0 > 0) &&
						(job.description?.length ?? 0 > 20)
				)
				.map(
					(job) =>
						({
							...job,
							rating: job.rating,
						}) as JobWithRating
				)
				.sort((a, b) => {
					if (a.rating[0].rating && b.rating[0].rating) {
						return b.rating[0].rating - a.rating[0].rating;
					}
					return 0;
				}),
		[jobs, pastDate]
	);

	return {
		jobs: filteredJobs,
		isLoading,
		isDisabled,
	};
}

function JobBoard() {
	const [selectedJob, setSelectedJob] = useState<JobWithRating | null>(null);
	const filters = useFilters();

	const { jobs, isLoading, isDisabled } = useValidJobsWithRatings(
		filters.getters.datePosted
	);

	useEffect(() => {
		setSelectedJob(jobs ? jobs[0] : null);
	}, [jobs]);

	return (
		<div>
			<JobFilters filters={filters}></JobFilters>
			<main
				className={
					"relative z-1 h-screen max-w-6xl mx-auto bg-rose-950 flex flex-row"
				}
			>
				<section
					className={
						"w-2/6 bg-rose-950 flex-grow flex flex-col border-l-2 border-rose-50"
					}
				>
					<div className={"h-14 bg-rose-500"}>
						<h3 className="text-xl font-semibold tracking-tight ml-2 pt-2 mb-2">
							{isDisabled
								? "No jobs found"
								: isLoading
									? "Loading jobs..."
									: `Found ${jobs.length} jobs`}
						</h3>
					</div>
					<JobBoardAsideList
						isLoading={isLoading}
						jobs={jobs}
						selectedJob={selectedJob}
						setSelectedJob={setSelectedJob}
					></JobBoardAsideList>
				</section>
				<Separator
					className={"h-auto w-0.5 m-1 bg-rose-200"}
				></Separator>
				<aside className={"w-2/5 bg-rose-950 flex flex-grow"}>
					{selectedJob && (
						<JobDetails
							job={selectedJob}
							isLoading={isLoading}
						></JobDetails>
					)}
				</aside>
			</main>
		</div>
	);
}

export default JobBoard;
