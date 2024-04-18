import { API_BASE_URL } from "@/app/api";
import SkeletonExtraLargeImage from "@/utils/SkeletonExtraLargeImage";
import SkeletonInsight from "@/utils/SkeletonInsight";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import ReactTimeAgo from 'react-time-ago'

interface Comment {
  id: string;
  createdAt: string;
  name: string;
  message: string;
}

interface Insight {
  id: string;
  name: string;
  message: string;
  category: string;
  images: string;
  likes: string;
  comments: Comment[]; // Define the comments property here
}


const SingleInsight = () => {
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")
  const [insight, setInsight] = useState<Insight>({} as Insight);
  const [loading, setLoading] = useState<boolean>(true);
  const [comments, setComments] = useState<Comment[]>([]);
  const { id } = useParams(); // Retrieve the id parameter from the URL

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${API_BASE_URL}/insights/${id}`)
      .then((response) => {
        setInsight(response.data)
        setComments(response.data.comments);

        setLoading(false)
      }
      )
      .catch((error) => {
        console.error(error)
        setLoading(false)
      })
  }, []);







  // const commentNums = (insight as { comments: string }).comments

  console.log(insight)


  const numOfComments: number = insight.comments?.length || 0; // Ensure insight.comments is defined before accessing its length
  console.log('comments', comments);


  const handlePostComment = async (e: any) => {
    e.preventDefault()
    try {
      const response = await axios.post(`${API_BASE_URL}/comments`, {
        insightId: id,
        name,
        message
      });

      if (response.status === 201) {
        toast.success("Comment posted successfully");
        console.log(response.data)
        setName("")
        setMessage("")
        // Optionally, you can update the state to refresh comments after posting
        // For example:
        // setInsight({ ...insight, comments: [...insight?.comments, response.data] });
        const updatedInsightResponse = await axios.get(`${API_BASE_URL}/insights/${id}`);
        setComments(updatedInsightResponse.data.comments);
      } else {
        throw new Error("Failed to post comment");
      }
    } catch (error) {
      console.error("Error posting comment:", error);
      toast.error("Failed to post comment. Please try again later.");
    }
  }




  return (
    <>

      {loading ? (
        <div>
          <SkeletonInsight />
        </div>
      )
        : (
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
                    <h1 className='bg-yellow-600 lg:p-2 md:p-2 p-1 lg:px-4 md:px-4 px-20 rounded text-white lg:text-xl md:text-xl text-sm uppercase lg:w-full w-auto text-center'> {(insight as { category: string }).category} </h1>
                    <p className='lg:text-3xl md:text-xl lg:text-center uppercase'> {(insight as { name: string }).name}</p>
                  </div>
                  <div className='flex flex-row  gap-3 items-center'>
                    {/*big image here */}
                    <div className=''>
                      {loading ? <SkeletonExtraLargeImage /> : (
                        <img
                          src={(insight as { images: string }).images}
                          alt={(insight as { name: string }).name}
                          className="w-[70rem] rounded shadow-md shadow-orange-600"
                        />
                      )}
                      {/* )} */}
                      <div className='flex flex-row items-center justify-between mt-4 relative'>
                        <div className='flex items-center gap-1 cursor-pointer'>
                          {/* <AiFillLike size={25} /> */}
                          <p className='font-bold'>
                            {(insight as { likes: string }).likes}
                          </p>
                          <p>Likes</p>
                        </div>
                        <div className='flex items-center gap-1 cursor-pointer'>
                          <p className='font-bold'>
                            {numOfComments}
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
              <div className='hidden  md:font-extrabold font-bold lg:flex flex-row items-center gap-2	mb-4'>
                <h1 className='bg-yellow-600 lg:p-2 md:p-2 p-1 lg:px-4 md:px-4 px-20 rounded text-white lg:text-xl md:text-xl text-sm uppercase'> {(insight as { category: string }).category} </h1>
                <p className='lg:text-3xl md:text-xl text-center uppercase'> {(insight as { name: string }).name}</p>
              </div>
              <div className="flex mt-4 mb-4">
                <p className="lg:text-lg text-[15px] text-justify"> {(insight as { message: string }).message}</p>
              </div>

              {/* comment section */}
              {/* view comment */}
              <div>
                <h1 className="font-bold text-xl">Comments</h1>
                <div className=" rounded-sm space-y-5">
                  {comments?.map((item: any) => {
                    const date = new Date(item.createdAt);
                    console.log('date', date)
                    return (
                      <div className="  bg-gray-200 p-4" key={item}>
                        <h1 className=" font-bold lg:text-base text-[14px]">{item?.name}
                          <span className="px-10 text-[12px] text-yellow-600">
                            <ReactTimeAgo date={date} locale="en-US" />
                          </span>

                        </h1>
                        <p className="text-gray-500 lg:text-base text-[13px]">{item?.message}</p>
                      </div>
                    )

                  })}
                </div>
              </div>

              {/* post comment */}
              <div className="mt-4  mb-4">
                <div className='font-bold md:text-2xl text-xl'>
                  <h1>Post your comment</h1>
                </div>
                <div className='bg-slate-200 w-full rounded-sm md:p-8 p-2 relative'>
                  <form onSubmit={handlePostComment} >
                    <div className=' gap-3 items-center md:mb-10 mb-4'>

                      <input
                        type="hidden"
                        value={id}
                        className='px-2 p-[2px] w-full outline-none'
                      />
                    </div>
                    <div className=' gap-3 items-center md:mb-10 mb-4'>
                      <p className='text-lg'>Name:</p>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className='px-2 p-[2px] w-full outline-none'
                      />
                    </div>
                    <div className='gap-3 items-center'>
                      <p className='text-lg'>Comment:</p>
                      <textarea
                        name=""
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className='w-full outline-none px-2 h-[200px]'
                      >

                      </textarea>
                    </div>
                    <button className='bg-[#D67315] px-10  text-center justify-center text-white mt-2 p-2 rounded-lg lg:w-auto w-full' type='submit'>{loading ? 'Sending...' : 'Send'}</button>
                  </form>
                </div>
              </div>
            </section>
          </main>
        )
      }
    </>
  )
}

export default SingleInsight