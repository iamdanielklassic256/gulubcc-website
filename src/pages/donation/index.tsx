import { useEffect } from "react";
import { Link } from "react-router-dom";


const Donation = () => {

    useEffect(() => {
        // Set the title when the component mounts
        document.title = 'Give  || GBCC'; // Replace 'New Page Title' with your desired title
        return () => {
            // Reset the title when the component unmounts
            document.title = 'Gulu Bible Community Church'; // Set the default title
        };
    }, []); // Empty dependency array ensures this effect runs only once (on mount)

    useEffect(() => {
        // Dynamically set Open Graph metadata when the component mounts
        const metaTags = [
            { property: 'og:title', content: 'Give || GBCC' }, // Replace with your page title
            { property: 'og:description', content: "Tithing is a way of teaching us that God must be our first priority. You must tithe all of your crops every year. Bring this tithe to eat before the Lord your God at the place he shall choose as his sanctuary; this applies to your tithes of grain, new wine, olive oil, and the firstborn of your flocks and herds. The purpose of tithing is to teach you always to put God first in your lives." }, // Replace with your description
            { property: 'og:image', content: '/logo.png' }, // Replace with the URL of the image to display
            { property: 'og:url', content: window.location.href }, // URL of the current page
        ];

        const head = document.querySelector('head');
        metaTags.forEach((tag) => {
            const metaTag = document.createElement('meta');
            metaTag.setAttribute('property', tag.property);
            metaTag.setAttribute('content', tag.content);
            head?.appendChild(metaTag);
        });

        // Clean up when the component unmounts
        return () => {
            metaTags.forEach((tag) => {
                const existingTag = document.querySelector(`meta[property="${tag.property}"]`);
                if (existingTag) {
                    head?.removeChild(existingTag);
                }
            });
        };
    }, []);

    return (
        <div className="">
            <section className='bg-orange-700 w-full md:h-[300px] h-[150px]'>
                <div className="absolute top-0 left-0 bottom-0  right-0">
                    <div className="px-2 text-black z-[2] md:mt-48 mt-10 flex items-center flex-col">
                        <h1 className="md:text-4xl text-2xl font-semibold text-white">Give Now</h1>
                        <p className="md:text-xl text-md text-xl lg:py-0 md:py-5 py-10 text-white">
                            <Link to='/' className='hover:font-bold underline'>Home</Link>
                            /Give
                        </p>
                        {/* <p className="md:text-8xl text-3xl font-bold">{slider.subtitle}</p> */}
                    </div>
                </div>
            </section>
            <main className="">
                <div className="bg-orange-700 lg:mt-10 mt-10 lg:mx-24 mx-2 flex flex-col items-center justify-center lg:p-10 md:p-8 p-4 rounded-sm space-y-4">
                    <h1 className="lg:text-5xl md:text-4xl text-2xl text-white font-bold">Why should I give?</h1>
                    <p className="lg:text-2xl md:text-xl text-lg lg:text-start text-center font-bold">Tithing is a way of teaching us that God must be our first priority.</p>
                    <p className="text-center lg:px-36 p-2 text-white">“You must tithe all of your crops every year. Bring this tithe to eat before the Lord your God at the place he shall choose as his sanctuary; this applies to your tithes of grain, new wine, olive oil, and the firstborn of your flocks and herds. The purpose of tithing is to teach you always to put God first in your lives.”</p>
                    <p className="text-center lg:px-36 text-white font-bold lg:text-2xl text-lg">DEUTERONOMY 14:22-23, TLB.</p>
                </div>
                <div className=" lg:mt-10 mt-10 lg:mx-24 mx-2 flex flex-col items-center justify-center lg:p-10 md:p-8 p-4 rounded-sm space-y-4">
                    <h1 className="lg:text-5xl md:text-4xl text-2xl  font-bold">ONLINE</h1>
                    <p className="lg:text-2xl md:text-xl text-lg lg:text-start text-center font-bold">Simple and secure giving. Give one-time or schedule recurring giving using the options below.</p>
                    <p className="text-center lg:px-36 p-0">Therefore you can send your tithe/offering via <span className="font-bold">MTN Mobile Money</span> or <span className="font-bold">Airtel Money</span> below with specific reason if it is offering or tithe</p>

                </div>

                <div className="lg:mx-24 mx-4 flex lg:flex-row md:flex-row flex-col lg:items-center lg:justify-center md:justify-center lg:gap-20 gap-10">
                    <div className="flex">
                        <div className="bg-yellow-700 lg:w-32 w-24 lg:h-24 h-16 rounded-md flex items-center justify-center font-extrabold text-white lg:text-4xl text-2xl">
                            MTN
                        </div>
                        <div className="p-2 font-bold flex flex-col justify-center lg:text-base text-[11px]">
                            <a href="tel:+256784653714" className="relative cursor-pointer  ">0784653714 - CANDIRU GLORIA REBECCA
                            </a>
                            <a href="tel:+256778444772" className="relative cursor-pointer ">0778444772 - ABALO SCOVIA
                            </a>
                        </div>
                    </div>
                    <div className="flex ">
                        <div className="bg-red-700 lg:w-32 w-24 lg:h-24 h-16 rounded-md flex items-center justify-center font-extrabold text-white lg:text-4xl text-2xl">
                            AIRTEL
                        </div>
                        <div className="p-2 font-bold lg:text-base text-[11px]">
                            <a href="tel:+256700537788" className="relative cursor-pointer flex flex-col ">0700537788
                                <p>CANDIRU GLORIA  </p>
                                <p>REBECCA  </p>
                            </a>

                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Donation;
