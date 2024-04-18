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

}

const RecentBlogs = ({ name, category, message, images }: Props): ReactElement => {




	// console.log('insights,,,,', insights)
	return (
		<section className='space-y-4'>
			<Link
				to='#'
				className="flex lg:flex-row md:flex-row  flex-col items-center bg-[#2A385E] lg:w-[500px] md:w-[450px] w-full  px-4 lg:h-[150px] md:h-[210px] h-[450px]  rounded-lg  cursor-pointer lg:pt-0 md:pt-24  mt-4"
			>
				<div className='lg:w-[490px] md:w-[560px] w-[300px] lg:h-[300px] md:h-[250px] h-[430px] flex items-center lg:mt-0 -mt-20 '>
					<img src={images} alt="" className='object-contain   rounded-l-lg' />
				</div>
				<div className='px-2 text-white lg:mt-0 -mt-20'>
					<p className='font-bold bg-gradient-to-b from-[#D6A533] to-[#ab8e4b] text-center text-white'>{category}</p>
					<p className='font-bold md:text-xl text-lg'>{name}</p>
					<p className='hidden lg:flex md:text-base text-[12px]'>
						<TextTruncate
							line={3}
							element="span"
							truncateText="…"
							text={message}
						/>
					</p>
					<p className='lg:hidden md:text-base text-[12px]'>
						<TextTruncate
							line={3}
							element="span"
							truncateText="…"
							text={message}
						/>
					</p>
				</div>

			</Link>
		</section>
	)
}

export default RecentBlogs