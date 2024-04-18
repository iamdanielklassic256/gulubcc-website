import { useAppSelector } from '@/app/hooks'
import churchImg from '../../assets/images/finalbanner.jpg'
import { AboutDataApi } from '@/data/data'
import SkeletonLargeImage from '@/utils/SkeletonLargeImage'
import { Link } from 'react-router-dom'

const AboutUsCard = () => {
	const loading = useAppSelector(state => state.insights.loading)

	return (
		<div className="lg:mt-10 mt-6">
			<div className="flex  items-center justify-center">
				<h1 className="text-[#162352] xl:text-5xl lg:text-4xl md:text-3xl text-xl font-bold ">
					<span className="bg-[#D67314] rounded-l-2xl p-2 px-4 text-white ">ABOUT</span>
					GBCC
				</h1>
			</div>
			{AboutDataApi && (
				<div className='flex  lg:flex-row flex-col-reverse items-center lg:gap-10 gap-6 mx-4 lg:mt-10 mt-6'>
					<div>
						{loading ? <SkeletonLargeImage /> : (
							<img src={churchImg} alt="church" className='xl:w-[650px] lg:w-[550px] md:w-[750px] w-[750px] rounded-lg' />
						)}
						<Link to={AboutDataApi.link} className='lg:hidden flex justify-center my-6 bg-[#162352]  text-center lg:w-32 w-full p-2 text-white rounded-md'>
							<p className='text-center'>Discover More</p>
						</Link>
					</div>
					<div className='flex flex-col xl:space-y-10 space-y-6'>
						<div className='h-2 lg:w-64 w-full bg-gradient-to-br from-[#D67314]'></div>
						<h1 className='font-bold text-[#162352] xl:text-3xl lg:text-xl text-lg lg:text-start text-center'>{AboutDataApi.title}</h1>
						<div className='text-[#162352]'>
							<h1 className='font-bold xl:text-2xl text-lg'>{AboutDataApi.mission}</h1>
							<p className='lg:text-base text-[14px]'>{AboutDataApi.missionDescription}</p>
						</div>
						<div className='text-[#162352]'>
							<h1 className='font-bold xl:text-2xl text-lg'>{AboutDataApi.vision}</h1>
							<p className='lg:text-base text-[14px]'>{AboutDataApi.visionDescription}</p>
						</div>
						<Link to={AboutDataApi.link} className='hidden lg:flex  bg-[#162352]  text-center lg:w-32 w-full p-2 text-white rounded-md'>
							Discover More
						</Link>
					</div>
				</div>
			)}
		</div>
	)
}
export default AboutUsCard