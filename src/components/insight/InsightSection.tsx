import { useAppDispatch, useAppSelector } from "@/app/hooks"
import { useEffect } from "react"
import { getAllInsights } from "@/features/insights/insightSlice"
import { SkeletonCard } from "@/utils/SkeletonCard"
import InsightBlog from "../insights/InsightBlog"




const InsightSection = () => {
	const dispatch = useAppDispatch()
	// const contacts = useAppSelector(state => state.contacts.data)

	const insights = useAppSelector(state => state.insights.data)
	const loading = useAppSelector(state => state.insights.loading)


	useEffect(() => {
		dispatch(getAllInsights())
	}, [])

	console.log('insights,,,,', insights)
	return (
		<>
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
					{insights?.map((event) => (
						<InsightBlog
							key={event.id}
							id={event.id}
							name={event.name}
							images={event.images}
							message={event.message}
							category={event.category}
							comments={event.comments}
							loading={loading}
						/>
					))}
				</div>
			)}
		</>

	)
}

export default InsightSection