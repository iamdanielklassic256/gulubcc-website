import overseer2 from '@/assets/images/martin.jpg'


const WhoWeAre = () => {
  return (
    <>
      <div className='flex items-center lg:flex-row  flex-col justify-evenly  border-black  shadow-sm mt-10 mx-10'>
        {/* left section */}
        <div className='lg:w-1/2 md:w-full w-full rounded-lg'>
          {/* image here for the online service */}
          <img
            className='hidden lg:flex w-[700px] relative rounded-lg shadow-lg shadow-[#D67315]'
            src={overseer2}
            alt=""
          />
        </div>

        {/* right section */}
        <div className='  lg:w-1/2 md:w-full w-full space-y-6 '>
          <h5 className='md:text-5xl text-3xl pt-4 text-[#D67315] font-extrabold'>Who We Are</h5>
          <img
            className='flex lg:hidden w-[500px] relative rounded-lg shadow-lg shadow-[#D67315]'
            src={overseer2}
            alt=""
          />
          <p className='lg:text-lg  text-sm text-[#2A385E] mb-44 '>
            Gulu Bible Community Church was founded in December 2006 through a remarkable partnership between Ggaba Community Church in Kampala, Uganda, and Rock Habor Church in California, USA. This indigenous, non-denominational evangelical church was intentionally planted in the heart of Gulu City to bring hope, transformation, and spiritual nourishment to the local community. Initially led by Pastor Chris Isabirye and Betty from 2006 to 2010, they faithfully laid the foundation of the church. In 2011, the mantle was passed to Pastor Martin (Overseer) and Hope Onen, who have been faithfully shepherding the congregation since then. Their dedicated leadership and unwavering commitment have fueled the church's growth, impacting countless lives and fostering a vibrant community of believers. Today, Gulu Bible Community Church stands as a beacon of faith, love, and unity, radiating God's light throughout the city.
          </p>

          <p></p>

        </div>
      </div>
    </>
  )
}

export default WhoWeAre