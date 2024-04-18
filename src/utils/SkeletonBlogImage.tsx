import { Skeleton } from '@/components/ui/skeleton'

const SkeletonBlogImage = () => {
	return (
		<div className="flex flex-col space-y-3 ">
			<Skeleton className="h-[250px] w-auto rounded-xl " />
		</div>
	)
}

export default SkeletonBlogImage