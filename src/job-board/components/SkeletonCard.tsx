import {Skeleton} from "@/components/ui/skeleton"

interface SkeletonCardProps {
    hasImage: boolean | undefined;
}

function SkeletonCard({hasImage}: SkeletonCardProps) {
    hasImage = hasImage ?? false;
    return (
        <div className="flex items-center space-x-4 m-4 w-auto">
            {hasImage && (<Skeleton className="h-16 w-16 rounded-full"/>)}
            <div className="space-y-2 flex-1">
                <Skeleton className="h-4 w-auto"/>
                <Skeleton className="h-4 w-4/6"/>
            </div>
        </div>
    )
}

export default SkeletonCard