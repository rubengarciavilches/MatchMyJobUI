import { ScrollArea } from "@/components/ui/scroll-area";
import SkeletonCard from "./SkeletonCard";
import { JobCard } from "./JobCard";
import { arrayOfNums } from "@/lib/helper";
import { JobWithRating } from "@/lib/db/jobsRatings";

interface JobBoardAsideListProps {
	isLoading: boolean;
	jobs: JobWithRating[];
	selectedJob: JobWithRating | null;
	setSelectedJob: (job: JobWithRating) => void;
}

function JobBoardAsideList({
	isLoading,
	jobs,
	selectedJob,
	setSelectedJob,
}: JobBoardAsideListProps) {
	return (
		<ScrollArea className={"w-full"}>
			{isLoading
				? arrayOfNums(20).map((num) => (
						<SkeletonCard key={num} hasImage={true}></SkeletonCard>
					))
				: jobs.map((job, idx) => (
						<JobCard
							job={job}
							key={idx}
							isSelected={
								selectedJob ? job.id === selectedJob.id : false
							}
							setSelectedJob={setSelectedJob}
							isLoading={isLoading}
						></JobCard>
					))}
		</ScrollArea>
	);
}

export default JobBoardAsideList;
