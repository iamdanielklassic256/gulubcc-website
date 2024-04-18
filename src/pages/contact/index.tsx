import { AiOutlineMail, AiFillYoutube, AiFillFacebook, AiFillTwitterCircle, AiFillInstagram } from 'react-icons/ai';
import { BiPhoneCall } from 'react-icons/bi';
import { TiLocationOutline } from 'react-icons/ti';
import { SubmitHandler, useForm } from "react-hook-form";
import { Contact } from '@/types/contact';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { createNewContact } from '@/features/contact/contactSlice';
import toast from 'react-hot-toast';
import { useEffect } from 'react';

const ContactPage = () => {


  const isLoading = useAppSelector(state => state.contacts.loading)

  const dispatch = useAppDispatch()

  const { register, handleSubmit, formState, reset } = useForm<Contact>();
  const { errors } = formState;

  const handlePostContactSubmit: SubmitHandler<Contact> = async (data) => {
    try {
      await dispatch(createNewContact(data));
      await reset();
      await toast.success(`Messages submitted successfully`);
      // console.log("...", data);
    }
    catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    // Set the title when the component mounts
    document.title = 'Contact Us || GBCC'; // Replace 'New Page Title' with your desired title
    return () => {
      // Reset the title when the component unmounts
      document.title = 'Gulu Bible Community Church'; // Set the default title
    };
  }, []); // Empty dependency array ensures this effect runs only once (on mount)


  return (
    <>
      <section className='pt-10 '>
        <div className="absolute top-0 left-0 bottom-0 right-0">
          <div className="px-2 text-black z-[2] flex items-center flex-col">
            {/* <h1 className="md:text-4xl text-xl font-semibold shadow-white">Reach Us</h1>
            <p className="md:text-md text-xs">
              <Link to='/' className='hover:font-bold underline'>Home</Link>
              /Contact Us
            </p> */}
          </div>
        </div>
        <img src='/contact.jpg' alt="" className='md:h-[300px] h-[150px] w-full flex-1' />
      </section>
      <main className="flex flex-1 lg:flex-row  flex-col justify-evenly w-full space-x-2 -mt-1 bg-sky-50">
        <div className="lg:mx-1 mx-3 md:mt-14 mt-8">
          {/* Email Address */}
          <div className="bg-slate-200 px-4 p-4 flex items-center gap-2 mb-10">
            {/* icon */}
            <div className="hidden lg:flex">
              <AiOutlineMail size={30} color="blue" />
            </div>
            {/* list */}
            <div className="flex flex-col">
              <h1 className="font-bold text-[#D67315] text-xl flex items-center gap-2"><span className="lg:hidden"><AiOutlineMail size={30} color="blue" /></span>Email on: </h1>
              <a href="mailto:leadpastor@gulubcc.org" className="relative "> <span className="font-bold">Overseer</span> leadpastor@gulubcc.org </a>
              <a href="mailto:administrator@gulubcc.org" className="relative "><span className="font-bold">Admin</span> administrator@gulubcc.org </a>
              <a href="mailto:finance@gulubcc.org" className="relative "> <span className="font-bold">Finance Department</span>finance@gulubcc.org </a>
              <a href="mailto:media@gulubcc.org" className="relative "> <span className="font-bold">Media & IT </span>ict.media@gulubcc.org </a>
              <a href="mailto:mission@gulubcc.org" className="relative "> <span className="font-bold">Mission </span>mission@gulubcc.org </a>
            </div>
          </div>
          {/* Phone Number */}
          <div className="bg-slate-200 px-4 p-4 flex flex-col  gap-2 mb-10">
            <div className='flex items-center'>
              {/* icon */}
              <div className=''>
                <AiFillFacebook color='blue' size={60} />
              </div>
              {/* list */}
              <div className='text-sm'>
                <h1>Follow Us</h1>
                <a href="https://www.facebook.com/100069158540592/posts/731501205831824/?mibextid=rS40aB7S9Ucbxw6v" target="_blank" className="relative cursor-pointer text-black font-semibold">Facebook Account</a>
              </div>
            </div>
            <div className='flex items-center'>
              {/* icon */}
              <div className=''>
                <AiFillTwitterCircle color='blue' size={60} />
              </div>
              {/* list */}
              <div className='text-sm'>
                <h1>Follow Us on:</h1>
                <a href="https://twitter.com/gulubible/status/1763419415356309952?t=KL0H6mzCfjzoyFk7KEiQ0w&s=19" target="_blank" className="relative cursor-pointer text-black font-semibold">X app (Twitter App)</a>
              </div>
            </div>
            <div className='flex items-center'>
              {/* icon */}
              <div className=''>
                <AiFillInstagram color='orangered' size={60} />
              </div>
              {/* list */}
              <div className='text-sm'>
                <h1>Follow Us on:</h1>
                <a href="https://www.instagram.com/gulubiblecommunitychurch/?igsh=MzltM21keXU5cnF6" target="_blank" className="relative cursor-pointer text-black font-semibold">Instagram</a>
              </div>
            </div>
            <div className='flex items-center'>
              {/* icon */}
              <div className=''>
                <AiFillYoutube color='red' size={60} />
              </div>
              {/* list */}
              <div className='text-sm'>
                <h1>Subscribe Our Youtube Channel:</h1>
                <a href="https://www.youtube.com/@gulubiblecommunitychurch7832" target="_blank" className="relative cursor-pointer text-black font-semibold">Gulu Bible Community Church</a>
              </div>
            </div>
          </div>
          {/* Phone Number */}
          <div className="bg-slate-200 px-4 p-4 flex items-center gap-2 mb-10">
            {/* icon */}
            <div>
              <BiPhoneCall size={30} color="green" />
            </div>
            {/* list */}
            <div>
              <h1>Call Us:</h1>
              <a href="tel:+256778444772" className="relative cursor-pointer flex items-center gap-2 ">
                {/* <span><MdAddIcCall size={20} /></span> */}
                +256(7) 7844 4772</a>
              <a href="tel:+256772449491" className="relative cursor-pointer flex items-center gap-2 ">
                {/* <span><AiOutlineWhatsApp size={20} color="green" /></span> */}
                +256(7) 7244 9491</a>
            </div>
          </div>
          {/* Location */}
          <div className="bg-slate-200 px-4 p-4 flex items-center gap-2 mb-10">
            {/* icon */}
            <div>
              <TiLocationOutline size={30} color="green" />
            </div>
            {/* list */}
            <div>
              <h1>Location:</h1>
              <p>Airfield road, Opposite Gulu Independent Hospital</p>
              <p>Gulu City, Uganda</p>
            </div>
          </div>
        </div>

        <div className="md:mt-14 mt-0 bg-white px-4 p-4 mb-10">
          <div className="flex flex-col items-center justify-center font-bold text-3xl pt-3 pb-16">
            <h1>Get In Touch With Us</h1>
            <div className="h-2 w-56 bg-[#D67315]"></div>

          </div>
          <p className="px-10 flex text-start justify-start mt-3 text-sm font-normal"></p>
          <form onSubmit={handleSubmit(handlePostContactSubmit)}>
            <div className="md:flex md:items-center w-full md:gap-10 gap-24 md:px-10 ">
              {/* name field */}
              <div className="relative flex flex-col md:mb-auto mb-4 md:w-1/2" >
                <label htmlFor="name">Name: <span className="text-red-500 text-sm">* {""} {errors?.name?.message}</span></label>
                <input
                  type="text"
                  {...register("name", { required: "Please insert your name" })}
                  disabled={isLoading}
                  id="name"
                  placeholder=""
                  className="bg-gray-200 rounded px-4 p-1 outline-none"
                />

              </div>
              <div className="relative flex flex-col md:mb-auto mb-4  md:w-1/2">
                <label htmlFor="email">Email: <span className="text-red-500">*{""} {errors?.email?.message}</span></label>
                <input
                  type="email"
                  {...register("email", { required: "Please enter your email" })}
                  id="email"
                  placeholder=""
                  className="bg-gray-200 rounded px-4 p-1 outline-none"
                />
              </div>
            </div>
            <div className="md:flex items-center w-full gap-10 md:px-10 mt-4">
              {/* phone number field */}
              <div className="relative flex flex-col md:mb-auto mb-4 md:w-1/2">
                <label htmlFor="phone">Phone: <span className="text-red-500">*{""} {errors?.telephone?.message}</span></label>
                <input
                  type="text"
                  {...register("telephone", { required: "Please enter phone number" })}
                  id="telephone"
                  placeholder=""
                  className="bg-gray-200 rounded px-4 p-1 outline-none"
                />
              </div>
              <div className="relative flex flex-col md:mb-auto mb-4 md:w-1/2">
                <label htmlFor="subject">Subject: <span className="text-gray-500">optional</span></label>
                <input
                  type="text"
                  {...register("subject")}
                  id="subject"
                  placeholder=""
                  className="bg-gray-200 rounded px-4 p-1 outline-none"
                />
              </div>
            </div>
            <div className="md:mx-10 relative flex flex-col mt-4">
              <label htmlFor="message">Message: <span className="text-red-500">*{""} {errors?.message?.message}</span> </label>
              <textarea
                {...register("message", { required: "Please enter your message here" })}
                id="message"
                rows={8}
                className="bg-gray-200 outline-none px-2 p-1"
              />
            </div>
            <div className="md:mx-10 mt-4">
              <button
                className="bg-[#D67315] px-10 uppercase text-white animate-pulse p-2 rounded-lg  w-full"
                type="submit"
              >
                {isLoading ? 'Processing...' : 'Send'}
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default ContactPage;