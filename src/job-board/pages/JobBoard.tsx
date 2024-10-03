import { useEffect, useState } from "react";
import { Job } from "@/lib/db/jobs.ts";
import { Separator } from "@/components/ui/separator.tsx";
import JobDetails from "@/job-board/pages/JobDetails.tsx";
import JobBoardAsideList from "../components/JobBoardAsideList";
import JobFilters from "./JobFilters";
import { useFetchData } from "@/lib/db/useFetchData";
/*import { JOBS_WITH_RATINGS_SELECT, JobWithRating } from "@/lib/db/jobsRatings";*/

function JobBoard() {
	const [selectedJob, setSelectedJob] = useState<Job | null>(null);
	const { data: jobs, isLoading, isDisabled } = useFetchData<Job>("job");
	/*const {
		data: jobsWithRatings,
		isLoading: isLoadingJobsWithRatings,
		isDisabled: isDisabledJobsWithRatings,
	} = useFetchData<JobWithRating>("job", JOBS_WITH_RATINGS_SELECT);*/

	useEffect(() => {
		setSelectedJob(jobs ? jobs[0] : null);
	}, [jobs]);

	return (
		<div>
			<JobFilters></JobFilters>
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
