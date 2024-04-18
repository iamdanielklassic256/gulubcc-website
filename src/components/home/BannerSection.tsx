import { useAppSelector } from '@/app/hooks'
import BannerImg from '@/assets/svg/martin.svg'
import { motion } from 'framer-motion'

const BannerSection = () => {

	const loading = useAppSelector(state => state.insights.loading)


	return (
		<section className="relative -z-10 lg:mx-0 mx-4 flex flex-row items-center h-auto w-full lg:pt-28 md:pt-24 pt-24">
			{/* left section */}
			<div className='relative z-10 w-1/2'>
				{
					loading ? <div className='lg:h-[525px] h-[200px] w-[350px] '> </div> : (
						<motion.img
							initial={{ opacity: 0, }}
							animate={{ x: 30, opacity: 1 }}
							transition={{ ease: "easeOut", duration: 4, delay: 1 }}
							src={BannerImg}
							alt="#yearofrest"
							className='lg:w-[700px] md:w-[500px] w-[250px]'
						/>
					)
				}

				<div className='absolute lg:top-24 md:top-24 top-8 lg:left-10 md:left-2 left-2 lg:w-52 md:w-52 w-16 lg:h-52 md:h-52 h-16 bg-[#162352] rounded-full -z-10'></div>
				<div className='absolute lg:top-24 md:top-24 top-10 lg:-right-24 md:right-0 right-4 xl:w-96 lg:w-80 md:w-40 w-16 xl:h-96 lg:h-80 md:h-40 h-16 bg-[#D67314] rounded-full -z-10'></div>

			</div>
			{/* right section */}
			<div className='w-1/2'>
				<div
					className='relative z-10 xl:text-7xl lg:text-6xl md:text-3xl text-[12px] text-[#162352] font-bold '
					style={{ fontFamily: 'Inknut Antiqua', fontWeight: 800 }}

				>
					<motion.h1
						className=''
						initial={{ opacity: 0, }}
						animate={{ opacity: 1, }}
						transition={{ ease: "easeIn", duration: 2, delay: 2 }}
						exit={{ opacity: 0 }}
					>
						STEPPING INTO
					</motion.h1>
					<motion.h1
						className=''
						initial={{ opacity: 0, }}
						animate={{ opacity: 1, }}
						transition={{ ease: "easeIn", duration: 2, delay: 2 }}
						exit={{ opacity: 0 }}
					>
						A YEAR OF REST
					</motion.h1>
					<motion.p
						className='absolute text-white bg-[#162352] text-center xl:text-[40px] lg:text-[30px] text-[10px] xl:p-3 lg:p-2 rounded-md p-1 z-10'
						initial={{ opacity: 0, }}
						animate={{ opacity: 1, }}
						transition={{ ease: "easeIn", duration: 2, delay: 2 }}
						exit={{ opacity: 0 }}
					>
						Exodus 33:14
					</motion.p>
					<div className='absolute -bottom-36	right-0 lg:w-72 md:w-64 lg:h-72 md:h-64  bg-gradient-to-tl from-[#D67314] to-[#d08641] rounded-full -z-10'></div>
				</div>
			</div>
		</section>
	)
}

export default BannerSection