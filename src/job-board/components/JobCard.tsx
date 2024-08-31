import {Job} from "@/lib/db/jobs.ts";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar.tsx"
import {Skeleton} from "@/components/ui/skeleton.tsx";

interface JobCardProps {
    job: Job;
    setSelectedJob: (job) => void;
    isSelected: boolean;
    isLoading: boolean;
}

export function JobCard({job, setSelectedJob, isSelected, isLoading}: JobCardProps) {
    return (
        <div className={"w-full h-32 bg-rose-900 border-b-2 border-rose-50 border-opacity-25 cursor-pointer"}
             onClick={() => setSelectedJob(job)}>
            {isLoading ? (
                <div className={"p-4"}>
                    <Skeleton className="h-16 w-16 rounded-full"/>
                    <div className="space-y-2 flex-1">
                        <Skeleton className="h-4 w-auto"/>
                        <Skeleton className="h-4 w-4/6"/>
                    </div>
                </div>
            ) : (
                <div className={isSelected ? "p-4 border-l-2 border-blue-500" : "p-4"}>
                    <Avatar>
                        <AvatarImage src={job.logo_photo_url} alt={job.logo_photo_url}/>
                        <AvatarFallback>{job.company?.substring(0, 2).toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <h4>{job.title}</h4>
                </div>
            )}
        </div>
    )
}