import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3 mx-4">
      <Skeleton className="h-[225px] w-[350px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[350px]" />
        <Skeleton className="h-4 w-[350px]" />
      </div>
    </div>
  )
}