import { Link } from "react-router-dom"
import bannerimg01 from '@/assets/images/banner1.jpg'

const SermonBanner = () => {
	return (
		<section className='bg-black/40 w-full md:h-[300px]'>
			<div className="absolute top-0 left-0 bottom-0  right-0">
				<div className="px-2 text-black z-[2] md:mt-48 mt-28 flex items-center flex-col">
					<h1 className="md:text-4xl text-2xl font-semibold shadow-white">Watch Sermons </h1>
					<p className="md:text-xl text-md">
						<Link to='/' className='hover:font-bold underline'>Home</Link>
						/Sermons
					</p>
					{/* <p className="md:text-8xl text-3xl font-bold">{slider.subtitle}</p> */}
				</div>
			</div>
			<img src={bannerimg01} alt="" className='md:h-[300px] h-[200px] w-full flex-1' />
		</section>
	)
}

export default SermonBanner