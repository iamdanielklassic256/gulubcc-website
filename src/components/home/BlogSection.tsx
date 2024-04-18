import { useAppDispatch, useAppSelector } from "@/app/hooks"
import { useEffect } from "react"
import { getAllInsights } from "@/features/insights/insightSlice"
import { SkeletonCard } from "@/utils/SkeletonCard"
import InsightBlog from "../insights/InsightBlog"


const BlogSection = () => {

	const dispatch = useAppDispatch()
	// const contacts = useAppSelector(state => state.contacts.data)

	const insights = useAppSelector(state => state.insights.data)
	const loading = useAppSelector(state => state.insights.loading)


	useEffect(() => {
		dispatch(getAllInsights())
	}, [])



	return (
		<div className="mt-10 mx-4 relative z-0">
			<div className="flex flex-col items-center justify-center">
				<p className=' lg:w-44 w-full  h-2 bg-gradient-to-b from-[#D6A533] to-[#ab8e4b]'></p>
				<h1 className='md:text-base text-[12px] md:text-start text-center font-semibold'>Get to know us more</h1>
				<p className='font-bold md:text-5xl text-2xl md:text-start text-center'>Popular Blogs</p>
			</div>
			{/* <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 items-center justify-center mb-4 gap-10 mt-10"> */}
			{loading ? (
				<div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-5 lg:gap-10 md:gap-4 gap-3">
					<SkeletonCard />
					<SkeletonCard />
					<SkeletonCard />
					<SkeletonCard />
					<SkeletonCard />
					<SkeletonCard />
					<SkeletonCard />
					<SkeletonCard />

				</div>
			) : (
				<div className=" grid items-center lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-10 mx-4 gap-6">
					{insights?.slice(0, 4)?.map((event) => (
						<InsightBlog
							key={event.id}
							id={event.id}
							name={event.name}
							images={event.images}
							message={event.message}
							category={event.category}
							comments={event.comments}
						/>
					))}
				</div>
			)}
			{/* </div> */}
		</div>
	)
}

export default BlogSection