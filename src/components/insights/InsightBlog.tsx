import SkeletonBlogImage from '@/utils/SkeletonBlogImage'
import { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import TextTruncate from 'react-text-truncate'

interface Props {
	id?: string
	name?: string
	images?: string
	message?: string
	category?: string
	slug?: string
	comments?: string[]
	loading?: boolean

}

const InsightBlog = ({ id, name, category, message, comments, images, loading }: Props): ReactElement => {
	console.log(comments?.length)

	console.log(loading)
	return (
		<Link
			to={`/insights/${id}`}
			className="relative   shadow-2xl shadow-black lg:h-[500px] h-[480px] bg-white max-w-sm cursor-pointer rounded-lg z-40 overflow-hidden"
		>
			{loading ? <SkeletonBlogImage /> : (
				<img
					className="relative rounded-lg object-cover  hover:scale-110 transition-all duration-300 "
					src={images}
					alt=""
				/>
			)}
			<div className="bg-[#0e172c] rounded-lg px-2 p-2 w-auto mx-4 text-white uppercase absolute  top-4 z-10">
				{category}
			</div>
			<div className="mt-2">
				<h5 className="text-gray-900 md:text-lg uppercase text-justify text-xl font-extrabold  px-2">{name}</h5>
				{/* <div className="mx-2 flex items-center justify-between text-gray-500 text-[10px] font-bold">
					<p >Comments: <span>{comments.length}</span></p>
					<p>Date: <span className="">12/August/2023</span></p>
				</div> */}
				<p className="text-gray-700 lg:text-[15px] text-justify text-[14px] md:mb-4 mb-2 md:px-2 px-2">
					<TextTruncate
						line={5}
						element="span"
						truncateText="…"
						text={message}
					/>
				</p>
				<div className='absolute bottom-4 left-0 right-0 mx-2 flex items-center justify-center'>
					<Link to={`/insights/${id}`} className=' bg-gradient-to-b from-[#D6A533] to-[#ab8e4b] p-2 rounded-lg text-white text-center lg:text-base text-sm w-full  cursor-pointer'>
						Read more
					</Link>
				</div>
			</div>
		</Link>
	)
}
export default InsightBlog