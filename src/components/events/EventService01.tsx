import SkeletonBlogImage from "@/utils/SkeletonBlogImage"
import { ReactElement } from "react"

interface Props {
	id?: string
	name?: string
	image?: string
	message?: string
	category?: string
	event_date?: string
	loading?: boolean

}

const EventService01 = ({ loading, name, message, image, category, event_date }: Props): ReactElement => {
	return (
		<div
			className="relative   shadow-2xl shadow-black  lg:h-[500px] h-[480px] bg-white cursor-pointer rounded-lg z-40 overflow-hidden"
		>
			{!loading ? <SkeletonBlogImage /> : (
				<img
					className="relative rounded-lg  object-cover  hover:scale-110 transition-all duration-300 "
					src={image}
					alt=""
				/>
			)}
			{loading ? <div className="bg-gray-300 rounded-sm px-2 mx-4 p-2 w-[350px] mt-2 pt-4 animate-pulse absolute  top-4 z-10">{""}</div> : (
				<div className="bg-[#0e172c] rounded-lg px-2 p-2 w-auto mx-4 text-white uppercase absolute  top-4 z-10">

					{category}

				</div>
			)}
			{loading ? <div className="bg-gray-300 rounded-sm px-2 mx-1 p-2  mt-2 pt-4 animate-pulse">{""}</div> : (
				<div className="bg-[#0e172c] rounded-lg px-2 p-2 w-auto mx-4 text-white uppercase absolute  top-4 z-10">

					{name}
					<span>{event_date}</span>
				</div>
			)}
			{loading ? <div className="bg-gray-300 rounded-sm px-2 mx-1 p-2 h-[200px]  mt-2 pt-4 animate-pulse">{""}</div> : (
				<div className="bg-[#0e172c] rounded-lg px-2 p-2 w-auto mx-4 text-white uppercase absolute  top-4 z-10">

					{message}
				</div>
			)}

		</div>
	)
}

export default EventService01