import React from 'react';
import Image from 'next/image';
import { BiMessageRounded, BiRepost } from 'react-icons/bi';
import { IoIosHeartEmpty } from 'react-icons/io';
import { MdBarChart } from 'react-icons/md';

const FeedCard:React.FC = () =>{
 return (
 <div className="border border-r-0 border-l-0 border-b-0 border-gray-600 p-4 hover:bg-slate-900 transition-all cursor-pointer ">
      <div className="grid grid-cols-12">
          <div className="col-span-1">
            <Image className="rounded-full" src="https://pbs.twimg.com/profile_images/1791946761302659072/kun55vGC_400x400.jpg" alt="user-profile" 
             height={50} 
             width={50} />
          </div>
          <div className="col-span-11">
            <h5>MD FAZAL</h5>
            <p>
              Here you go,<br />
              my journey 
              keeping it short<br />
              Got into the final year, completely lost.<br />
              Felt like I wasted my whole life.<br />
              got into depression(existential crises in general)
            </p>
            <div className='flex justify-evenly mt-5 text-xl item-center'>
              <div>
                <BiMessageRounded />
              </div>
              <div>
                <BiRepost />
              </div>
              <div>
                <IoIosHeartEmpty />
              </div>
              <div>
                <MdBarChart />
              </div>
            </div>
          </div>
      </div>
 </div>
)};

export default  FeedCard;