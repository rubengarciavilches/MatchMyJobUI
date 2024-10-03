import { ScrollArea } from "@/components/ui/scroll-area";
import { Job } from "@/lib/db/jobs";
import SkeletonCard from "./SkeletonCard";
import { JobCard } from "./JobCard";
import { arrayOfNums } from "@/lib/helper";

interface JobBoardAsideListProps {
	isLoading: boolean;
	jobs: Job[];
	selectedJob: Job | null;
	setSelectedJob: (job: Job) => void;
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
