
import React from "react";
import Image from "next/image";
import { TbHomeSearch} from "react-icons/tb"
import {  FaXTwitter} from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { IoNotifications } from "react-icons/io5";
import { AiOutlineMessage } from "react-icons/ai";
import { GiAbstract016 } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { CiCircleMore } from "react-icons/ci";
import { IoIosPeople } from "react-icons/io";

import FeedCard from "@/components/FeedCard";



interface TwitterSidebarButton {
  title:string;
  icon:React.ReactNode;
}
const sidebarMenuItems :TwitterSidebarButton [ ]= [
{
  title:'Home',
  icon:<TbHomeSearch />
},
{
  title:'Explore',
  icon:<IoIosSearch />
},
{
  title:'Notification',
  icon: <IoNotifications />
},
{
  title:'Messages',
  icon:<AiOutlineMessage />
},
{
  title:'Grok',
  icon:<GiAbstract016 />
},
{
  title:'Communities',
  icon:<IoIosPeople />
},
{
  title:'Premium',
  icon:<FaXTwitter />
},
{
  title:'Profile',
  icon:<CgProfile />
},
{
  title:'More',
  icon:<CiCircleMore />
}
]

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen px-52 ">
        <div className="col-span-3 pt-8  ">
          <div className="text-4xl h-fit hover:bg-gray-600 rounded-full p-1 cursor-pointer transition-all w-fit" >
            <FaXTwitter    />
          </div>
          <div className="mt-3 text-2xl font-semibold">
                <ul> {sidebarMenuItems.map((item)=>(
                    <li className="flex  justify-start items-center gap-4  hover:bg-gray-600  rounded-full p-4 px-3 py-2 w-fit cursor-pointer transition-all" key={item.title}>
                      <span>{item.icon}</span>
                      <span>{item.title}</span>
                    </li>
                ))}
                  
                </ul>
                <div className="mt-5 pr-9">
                  <button className="bg-sky-200 text-black text-lg p-4 mt-5 rounded-full w-full">Post</button>
                </div>
                
            </div>
         </div>
        <div className="col-span-5 border-r-[1px] border-l-[1px] h-screen overflow-scroll  border-gray-600">
            <FeedCard />
            <FeedCard />
            <FeedCard />
            <FeedCard />
            <FeedCard />
            <FeedCard />
            <FeedCard />
            <FeedCard />
            <FeedCard />
            <FeedCard />
            <FeedCard />
            <FeedCard />

        </div>
        <div className="col-span-4"></div>
      </div>
    </div>
  );
}
