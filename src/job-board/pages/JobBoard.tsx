import {useEffect, useState} from "react";
import {getJobs, Job} from "@/lib/db/jobs.ts";
import {ScrollArea} from "@/components/ui/scroll-area.tsx";
import {JobCard} from "@/job-board/components/JobCard.tsx";
import {Separator} from "@/components/ui/separator.tsx";
import {markdownToHtml} from "@/lib/markdown.ts";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.tsx";
import {useGetJobs} from "@/lib/db/useGetJobs.ts";
import SkeletonCard from "@/job-board/components/SkeletonCard.tsx";
import {arrayOfNums} from "@/lib/helper.ts";
import JobDetails from "@/job-board/pages/JobDetails.tsx";

interface JobBoardAsideListProps {
    isLoading: boolean;
    jobs: Job[];
    selectedJob: Job;
    setSelectedJob: (Job) => void;
}

function JobBoardAsideList({isLoading, jobs, selectedJob, setSelectedJob}: JobBoardAsideListProps) {
    return (
        <ScrollArea className={"w-full"}>
            {
                isLoading ? (
                    arrayOfNums(20).map((num) =>
                        <SkeletonCard key={num} hasImage={true}></SkeletonCard>
                    )
                ) : (
                    jobs.map((job, idx) =>
                        <JobCard
                            job={job}
                            key={idx}
                            isSelected={selectedJob && job.id === selectedJob.id}
                            setSelectedJob={setSelectedJob}
                            isLoading={isLoading}
                        >
                        </JobCard>)
                )
            }
        </ScrollArea>
    )
}

function JobBoard() {
    // const [jobs, setJobs] = useState<Job[]>([]);
    const [selectedJob, setSelectedJob] = useState<Job>(null);
    const {jobs, isLoading, isDisabled} = useGetJobs();

    useEffect(() => {
        setSelectedJob(jobs ? jobs[0] : null);
    }, [jobs]);

    return (
        <main className={"h-screen max-w-6xl mx-auto bg-rose-950 flex flex-row"}>
            <section className={"w-2/6 bg-rose-950 flex-grow flex flex-col border-l-2 border-rose-50"}>
                <div className={"h-14 bg-rose-500"}>
                    <h3 className="text-xl font-semibold tracking-tight ml-2 pt-2 mb-2">
                        {isLoading ? `Loading jobs...` : `Found ${jobs.length} jobs`}
                    </h3>
                </div>
                <JobBoardAsideList
                    isLoading={isLoading}
                    jobs={jobs}
                    selectedJob={selectedJob}
                    setSelectedJob={setSelectedJob}
                ></JobBoardAsideList>
            </section>
            <Separator className={"h-auto w-0.5 m-1 bg-rose-200"}></Separator>
            <aside className={"w-2/5 bg-rose-950 flex flex-grow"}>
                {selectedJob && <JobDetails job={selectedJob} isLoading={isLoading}></JobDetails>}
            </aside>
        </main>
    )
}

export default JobBoard