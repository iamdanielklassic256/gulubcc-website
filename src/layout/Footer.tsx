import { useAppDispatch, useAppSelector } from "@/app/hooks"
import FooterCard from "@/components/layout/FooterCard"
import { currentYear } from "@/data/data"
import { subscribeNow } from "@/features/subscribers/subscriberSlice";
import { Subscribers } from "@/types/subscriber";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";


const Footer = () => {
  const isLoading = useAppSelector(state => state.subscribers.loading);

  const dispatch = useAppDispatch()

  const { register, handleSubmit, formState, reset } = useForm<Subscribers>();
  const { errors } = formState;

  const handleSubscription: SubmitHandler<Subscribers> = async (data, e: any) => {
    e.preventDefault();
    try {
      await dispatch(subscribeNow(data));
      toast.success(`Subscription successful`);
      reset();
      // console.log("Subscription data:", data);
    } catch (error) {
      // if (error?.message === 'Subscriber with this email already exists') {
      //     toast.error('Subscription failed: Subscriber with this email already exists');
      // } else {
      //     toast.error('Subscription failed: Unknown error occurred');
      // }
      console.error("Subscription Error:", error);
    }
  };
  return (
    <footer className=" bg-gradient-to-b from-[#162352] to-[#222020] text-white mt-10 " >
      <div className="flex lg:flex-row md:flex-row flex-col justify-between lg:items-center px-4 bg-[#222020] py-7 pb-4">
        <h1 className="lg:text-4xl md:text-3xl text-2xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5 w-full md:text-start text-center ">
          <span className="text-[#D67314] md:px-0 ">Subscribe {""}</span>
          for our newsletter
        </h1>
        <form className="flex lg:flex-row flex-col lg:px-10" onSubmit={handleSubmit(handleSubscription)}>
          <input
            type="email"
            {...register("email", { required: "Please enter your email" })}
            placeholder="Enter your email address"
            className="text-gray-800 sm:w-72 w-auto sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 outline-none	"

          />
          <p>{errors?.email?.message}</p>
          <button type="submit" className="bg-[#D67314] hover:bg-[#e5bc5ddf] p-2 rounded-sm font-semibold md:w-auto w-full">
            {isLoading ? 'subscribing' : 'SUBSCRIBE NOW'}</button>
        </form>
      </div>
      <FooterCard />
      <div className=" bg-[#162352] py-2">
        <p className="md:text-base text-sm  text-center items-center justify-center">GBCC &copy; All Rights Reserved {currentYear}</p>
      </div>
    </footer>
  )
}

export default Footer