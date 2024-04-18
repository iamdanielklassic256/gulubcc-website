import { useAppDispatch, useAppSelector } from "@/app/hooks"
import { useEffect } from "react"
import { getAllSermons } from "@/features/sermons/sermonSlice"
import { SkeletonCard } from "@/utils/SkeletonCard"
import SermonCard from "@/components/sermons/SermonCard"




const SermonSection = () => {
	const dispatch = useAppDispatch()
	// const contacts = useAppSelector(state => state.contacts.data)

	const sermons = useAppSelector(state => state.sermons.data)
	const loading = useAppSelector(state => state.sermons.loading)


	useEffect(() => {
		dispatch(getAllSermons())
	}, [])

	// console.log('sermons,,,,', loading)
	return (
		<>
			{loading ? (
				<div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-5 lg:gap-10 space-x-4 md:gap-4 gap-3">
					{/* {sermons?.map((event) => (
						<SkeletonCard key={event.id} />
					))} */}
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
				<div className="grid items-center lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-10 mx-4 gap-6">
					{sermons?.map((event) => (
						<SermonCard
							key={event.id}
							name={event.name}
							pastor={event.pastor}
							link={event.link}
						/>
					))}
				</div>
			)}
		</>
	)
}

export default SermonSection