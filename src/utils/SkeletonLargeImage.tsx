import { Skeleton } from '@/components/ui/skeleton'

const SkeletonLargeImage = () => {
	return (
		<div className="flex flex-col space-y-3 mx-4">
			<Skeleton className="h-[525px] xl:w-[650px] lg:w-[550px] md:w-[750px] w-[750px]  rounded-xl " />
		</div>
	)
}

export default SkeletonLargeImage