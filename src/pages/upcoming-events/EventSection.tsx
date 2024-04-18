// import BlogCard from "@/components/home/BlogCard"
// import { insightData } from "@/data/data"

import { useAppDispatch, useAppSelector } from "@/app/hooks"
import EventService01 from "@/components/events/EventService01"
import { getAllUpcomingEvents } from "@/features/upcoming-events/upcomingEventSlice"
import { SkeletonCard } from "@/utils/SkeletonCard"
import { useEffect } from "react"


const EventSection = () => {

	const dispatch = useAppDispatch()
	// const contacts = useAppSelector(state => state.contacts.data)

	const upcoming_events = useAppSelector(state => state.events.data)
	const loading = useAppSelector(state => state.events.loading)


	useEffect(() => {
		dispatch(getAllUpcomingEvents())
	}, [])

	console.log('...', upcoming_events)

	return (
		<>
			{loading ? (
				<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-5 lg:gap-10 md:gap-4 gap-3">
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
				<>
					{upcoming_events?.length === 0 ? (
						<div className="m-24 text-xl font-bold">No upcoming events</div>
					) : (
						<div className="grid items-center lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-10 mx-4 gap-6">
							{upcoming_events?.map(event => (
								<EventService01
									key={event.id}
									name={event.name}
									image={event.images}
									category={event.category}
									event_date={event.event_date}
									loading={loading}
								/>
							))}
						</div>
					)}
				</>
			)}
		</>
	)
}

export default EventSection