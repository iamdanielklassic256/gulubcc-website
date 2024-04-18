import { Skeleton } from '@/components/ui/skeleton'

const SkeletonImage = () => {
	return (
		<div className="flex flex-col space-y-3 mx-4">
			<Skeleton className="h-[525px] w-[350px] rounded-xl " />
		</div>
	)
}

export default SkeletonImage