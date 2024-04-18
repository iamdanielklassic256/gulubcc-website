import {
	Menubar,
	MenubarContent,
	MenubarItem,
	MenubarMenu,
	MenubarTrigger,
} from "@/components/ui/menubar"
import { NavLink } from "react-router-dom"

const MenuBar = () => {
	return (
		<div className="hidden lg:flex  font-bold">
			<Menubar>
				<MenubarMenu >
					<NavLink
						to='/'
						className={({ isActive, isPending }) =>
							isPending ? "pending" : isActive ? "border-b-2 border-black" : ""
						}
					>
						<MenubarTrigger className="text-lg cursor-pointer">Home</MenubarTrigger>
					</NavLink>

				</MenubarMenu>
				<MenubarMenu>
					<MenubarTrigger className="text-lg cursor-pointer">About Us</MenubarTrigger>
					<MenubarContent>
						<NavLink to='/about-us'

						>
							<MenubarItem className=" cursor-pointer">Who We Are </MenubarItem>
						</NavLink>
						<NavLink to='/our-leadership' >
							<MenubarItem className=" cursor-pointer">Our Leadership</MenubarItem>
						</NavLink>
						<NavLink to='/church-services' >
							<MenubarItem className=" cursor-pointer">Church Services  </MenubarItem>
						</NavLink>
						<NavLink to='/church-ministries' >
							<MenubarItem className=" cursor-pointer">Church Ministries  </MenubarItem>
						</NavLink>
					</MenubarContent>
				</MenubarMenu>
				<MenubarMenu >
					<NavLink
						to='/upcoming-events'
						className={({ isActive, isPending }) =>
							isPending ? "pending" : isActive ? "border-b-2 border-black" : ""
						}
					>
						<MenubarTrigger className="text-lg cursor-pointer">Upcoming Events</MenubarTrigger>
					</NavLink>

				</MenubarMenu>
				<MenubarMenu >
					<NavLink
						to='/insights'
						className={({ isActive, isPending }) =>
							isPending ? "pending" : isActive ? "border-b-2 border-black" : ""
						}
					>
						<MenubarTrigger className="text-lg cursor-pointer">Insights</MenubarTrigger>
					</NavLink>

				</MenubarMenu>
				<MenubarMenu >
					<NavLink
						to='/watch-sermons'
						className={({ isActive, isPending }) =>
							isPending ? "pending" : isActive ? "border-b-2 border-black" : ""
						}
					>
						<MenubarTrigger className="text-lg cursor-pointer">Watch Sermons</MenubarTrigger>
					</NavLink>

				</MenubarMenu>
				<MenubarMenu >
					<NavLink
						to='/contact-us'
						className={({ isActive, isPending }) =>
							isPending ? "pending" : isActive ? "border-b-2 border-black" : ""
						}
					>
						<MenubarTrigger className="text-lg cursor-pointer">Contact Us</MenubarTrigger>
					</NavLink>
				</MenubarMenu>
			</Menubar>
		</div>
	)
}

export default MenuBar