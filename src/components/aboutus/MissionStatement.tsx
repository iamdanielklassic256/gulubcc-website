import { BiTargetLock } from "react-icons/bi"
import { BsBullseye } from "react-icons/bs"
import { RxDotFilled } from "react-icons/rx"
import overseer from '@/assets/images/martin.jpg'


const MissionStatement = () => {
  return (
    <div className='flex lg:flex-row-reverse md:flex-row flex-col md:justify-between items-center border-black  shadow-sm mt-10'>
      {/* left section */}
      <div className='md:px-10 space-y-5 mx-auto md:w-1/2 w-full'>
        <img
          className='  w-[700px] relative rounded-lg shadow-lg shadow-[#D67315]'
          src={overseer}
          alt=""
        />

      </div>
      {/* right section */}
      <div className='mx-10 rounded-lg md:w-1/2 w-full' >
        <div className='grid md:grid-cols-2 grid-cols-1  gap-4'>
          <div className='flex flex-col items-center justify-center rounded bg-white/90 px-4 p-10 gap-2'>
            <BiTargetLock color="black" size={30} />
            <h1 className='text-[#D67315] font-semibold text-xl'>Our Mission</h1>
            <p className='text-center text-sm'>
              To equip the communities with Christ centred  knowledge and skills for holistic sustainable transformation/development
            </p>
          </div>
          <div className='flex flex-col items-center justify-center rounded bg-white/90 px-4 p-10 gap-2'>
            <BsBullseye color="black" size={20} />
            <h1 className='text-[#D67315] font-semibold text-xl'>Our Vision</h1>
            <p className='text-center text-sm'>A changed community, freed from all kinds of oppression for holistic Godly progressive transformation with dignity</p>
          </div>


        </div>
        <div className='flex flex-col justify-center rounded bg-white/90 px-4 p-10 gap-6 mt-8'>
          <h1 className='text-[#D67315] font-semibold text-xl text-center '>Our Core Values</h1>
          <ul className='list-square flex flex-col md:items-start '>
            <li className='flex items-center text-lg'>
              <RxDotFilled />
              Living a Life of Faith
            </li>
            <li className='flex items-center text-lg'>
              <RxDotFilled />
              Prayer
            </li>
            <li className='flex items-center text-lg'>
              <RxDotFilled />
              Integrity
            </li>
            <li className='flex items-center text-lg'>
              <RxDotFilled />
              Love & Compassion
            </li>
            <li className='flex items-center text-lg'>
              <RxDotFilled />
              Servanthood Leadership
            </li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default MissionStatement