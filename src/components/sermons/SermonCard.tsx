import { ReactElement } from "react";
interface Props {
	name?: string
	pastor?: string
	link?: string

}

const SermonCard = ({ name, pastor, link, }: Props): ReactElement => {
	return (
		<div
			className="relative   shadow-2xl bg-white max-w-sm cursor-pointer  "
		>
			<div className="w-full rounded-lg ">
				<iframe
					aria-controls="true"
					className="rounded-t-lg w-full lg:h-[250px] h-[200px]"
					src={link}
					title={name}
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				>

				</iframe>
			</div>
			<div className=" flex items-center justify-between px-4 bg-gray-400 p-4 rounded-b-lg ">
				<a href={link} target="_blank" className="text-gray-900 lg:text-2xl capitalize md:text-xl text-sm font-extrabold  px-2">{name}</a>
				<span className="lg:text-lg font-semibold">{pastor}</span>
			</div>
		</div>
	)
}

export default SermonCard