import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.tsx";
import {markdownToHtml} from "@/lib/markdown.ts";
import {Job} from "@/lib/db/jobs.ts";
import SkeletonCard from "@/job-board/components/SkeletonCard.tsx";
import {ScrollArea} from "@/components/ui/scroll-area.tsx";

interface JobDetailsProps {
    job: Job;
    isLoading: boolean;
}

function JobDetails({job, isLoading}: JobDetailsProps) {
    return (
        <ScrollArea className={"w-full"}>
            <div className={"m-6 flex flex-col gap-2"}>
                <div className={"flex flex-row items-center gap-3"}>
                    {isLoading ? (
                        <SkeletonCard hasImage={true}></SkeletonCard>
                    ) : (
                        <div>
                            <Avatar>
                                <AvatarImage src={job.logo_photo_url} alt={job.logo_photo_url}/>
                                <AvatarFallback>{job.company?.substring(0, 2).toUpperCase()}</AvatarFallback>
                            </Avatar>
                            <h4>{job.company}</h4>
                        </div>
                    )}
                </div>
                {isLoading ? (
                    <SkeletonCard hasImage={true}></SkeletonCard>
                ) : (
                    <div>
                        <h4 className={"text-2xl font-bold"}>{job.title}</h4>
                        <p>About the job</p>
                        <div dangerouslySetInnerHTML={{__html: markdownToHtml(job.description || "")}}/>
                    </div>
                )}
            </div>
        </ScrollArea>
    )
}

export default JobDetails;