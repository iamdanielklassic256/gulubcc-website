import { insightData } from '@/data/data'
import { Link } from 'react-router-dom'
import TextTruncate from 'react-text-truncate'

const SingleEventCard = () => {
	return (
		<>
			<div className='lg:space-y-3 md:space-y-10 space-y-4'>
				{insightData.slice(0, 2)?.map(item => (
					<Link
						to="#"
						className="flex lg:flex-row md:flex-row  flex-col items-center bg-[#2A385E] lg:w-[800px] md:w-[750px] w-full  px-4 lg:h-[230px] md:h-[210px] h-[450px]  rounded-lg  cursor-pointer lg:pt-0 md:pt-24  pt-0"
						key={item._id}
					>
						<div className='lg:w-[990px] md:w-[960px] w-[300px] lg:h-[400px] md:h-[350px] h-[430px] flex items-center lg:mt-0 -mt-20 '>
							<img src={item.image[0]} alt="" className='object-contain   rounded-l-lg' />
						</div>
						<div className='px-2 text-white lg:mt-0 -mt-20'>
							<p className='font-bold bg-gradient-to-b from-[#D6A533] to-[#ab8e4b] text-center text-white'>{item.category}</p>
							<p className='font-bold md:text-xl text-lg'>{item.name}</p>
							<p className='hidden lg:flex md:text-base text-[12px]'>
								<TextTruncate
									line={3}
									element="span"
									truncateText="…"
									text={item.message}
								/>
							</p>
							<p className='lg:hidden md:text-base text-[12px]'>
								<TextTruncate
									line={5}
									element="span"
									truncateText="…"
									text={item.message}
								/>
							</p>
						</div>

					</Link>
				))}


			</div>
		</>
	)
}

export default SingleEventCard