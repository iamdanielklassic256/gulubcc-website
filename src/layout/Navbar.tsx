import { Link } from "react-router-dom"
import MenuBar from "./MenuBar"
import logo from '/logo.png'
import xmassCap from '../assets/images/xmass.png'
import { useEffect, useState } from "react";
import MobileView from "./MobileView";


const Navbar = () => {
	const [showXmassCap, setShowXmassCap] = useState(false);

	useEffect(() => {
		const currentDate = new Date();
		const currentMonth = currentDate.getMonth() + 1; // JavaScript months are zero-based (0-11)
		const isChristmasTime = currentMonth === 12; // Assuming December is the Christmas month
		setShowXmassCap(isChristmasTime);
	}, []);

	return (
		<div className="fixed w-full z-10 mb-24 flex items-center justify-between lg:px-10 md:px-8 px-4 pt-4 pb-4 bg-[#D67314]">
			<Link to='/' className="relative z-10">
				<img src={logo} alt="gbcc_logo" className="lg:w-24 md:w-16 w-16" />
				{showXmassCap &&
					<img src={xmassCap} alt="" className="absolute -top-4 -right-2 w-20 z-10" />
				}
			</Link>
			<MenuBar />
			<div className="flex items-center gap-4">
				<Link to='/give-to-gbcc' className="bg-[#162352] lg:p-3 p-2 text-white rounded-lg font-bold">
					<p>Give 2 GBCC</p>
				</Link>
				
				<MobileView />
			</div>
		</div>
	)
}

export default Navbar