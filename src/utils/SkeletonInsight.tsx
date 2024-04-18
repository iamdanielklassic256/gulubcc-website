import SkeletonExtraLargeImage from "./SkeletonExtraLargeImage"


const SkeletonInsight = () => {
	return (
		<main className='relative w-full '>
			<section className=''>
				<div className="absolute top-0 left-0 bottom-0  right-0">
					<div className="px-2 text-black z-[2] md:mt-48 mt-24 flex items-center flex-col">
					</div>
				</div>
				<img src='/banner1.jpg' alt="" className='md:h-[300px] h-[150px] w-full flex-1' />
			</section>
			{/* main body */}
			<section className='mt-4 lg:mx-10 md:mx-6 mx-1'>
				<div className="flex flex-row ">
					<div className="flex flex-col gap-1">
						<div className='lg:hidden md:font-extrabold font-bold flex lg:flex-row flex-col items-center  gap-2	mb-4'>
							<h1 className='bg-yellow-600 animate-pulse lg:p-2 md:p-2 p-4 lg:px-4 md:px-4 px-20 rounded text-white lg:text-xl md:text-xl text-sm uppercase lg:w-full w-full text-center'></h1>
							<p className='lg:text-3xl md:text-xl lg:text-center uppercase'> </p>
						</div>
						<div className='flex flex-row  gap-3 items-center'>
							{/*big image here */}
							<div className=''>
								<SkeletonExtraLargeImage />

								{/* )} */}
								<div className='flex flex-row items-center justify-between mt-4 relative'>
									<div className='flex items-center gap-1 cursor-pointer'>
										{/* <AiFillLike size={25} /> */}
										<p className='font-bold'>
											0
										</p>
										<p>Likes</p>
									</div>
									<div className='flex items-center gap-1 cursor-pointer'>
										<p className='font-bold'>
											0
										</p>
										<p>Comment</p>
									</div>
								</div>

							</div>
							{/* other images */}

							<div className='hidden lg:flex flex-col items-center gap-4 relative duration-100 transition-all mx-10'>
								{/* {insight?.image?.map((imgUrl, index) => (
              <img key={index} src={imgUrl} alt="" className='w-[350px] hover:scale-110 hover:overflow-hidden cursor-pointer' />
            ))} */}
							</div>
						</div>
					</div>
					{/* <div className="relative hidden lg:flex flex-col">
              <h1 className="font-bold text-xl border-b-4 border-yellow-500 w-full">RECENT BLOGS</h1>
              {insights?.map((event) => (
                <RecentBlogs
                  key={event.id}
                  id={event.id}
                  name={event.name}
                  images={event.images}
                  message={event.message}
                  category={event.category}
                  comments={event.comments}
                />
              ))}

            </div> */}
				</div>
				{/* main body */}

			</section>
		</main>
	)
}

export default SkeletonInsight