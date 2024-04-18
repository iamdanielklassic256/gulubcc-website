import { Skeleton } from "@/components/ui/skeleton"


const SkeletonExtraLargeImage = () => {
	return (
		<div className="flex flex-col space-y-3 mx-4">
			<Skeleton className="lg:h-[525px] h-[300px] lg:w-[1000px] md:w-[750px] w-[350px]  rounded-xl " />
		</div>
	)
}

export default SkeletonExtraLargeImage