"use client";
import React from 'react';
import { useState } from 'react';
import { BiSolidUserCircle } from "react-icons/bi";
import { MdTextFields } from "react-icons/md";
import { IoEyeSharp } from "react-icons/io5";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Asidebar from './Asidebar';

const QuestionPage = () => {

  const reviewItem = review();

  const [cards] = useState([
    {
      id: "1",
      title: "Text Answer",
      icon: "icon",
      text: "Do you find yourself struggling more than usual with the current COVID-19 situation?",
    },
    {
      id: "2",
      title: "Text Answer",
      icon: "icon",
      text: "Do you find yourself struggling more than usual with the current COVID-19 situation?",
    },
    {
      id: "3",
      title: "Rating Scale",
      icon: "icon",
      text: "Do you find yourself struggling more than usual with the current COVID-19 situation?",
    },
  ]);

  return (
    <section className="min-h-screen max-h-screen items-center w-fit pt-2 flex flex-col">
    <Image src='/image.png' alt='image' width={100} height={100} />
      <div className='flex gap-2 pt-5 pb-5'>
        <h1 className='text-2xl font-bold'>Question list</h1>
        <div className='w-[30px] h-[20px] mt-1.5 flex justify-center items-center rounded-full text-white-600 bg-gray-300 '>12</div> 
      </div>
      <p className='w-[50%] text-center'>These are the questions corresponding to the template you have selected, you can modify, add or delete them.</p>
    
      <div className='flex gap-2 pt-5 pb-5'>
        <IoEyeSharp className="text-blue-900 mt-1" />
        <p className='text-blue-900 font-semibold text-center'>Preview questions</p>
      </div>

        {/* card  */}

        <div className='cards'>
          {
            cards.map((card, i) => (
          <div key={i} className='card w-fit h-[20vh] bg-white-600 rounded-[10px] p-7 m-5 border-[2px]'>
            <div>{reviewItem}</div> 
            <div className='flex gap-4'>
             <h3 className='w-[25px] h-[25px] bg-blue-900 text-white-600 rounded-full text-center'>{card.id}</h3>
              <p className='font-bold'>{card.text}</p>
            </div>
          </div>
            ))
        }
        </div>
    </section>
  )
}

function review() {
  return (
    <div className='flex items-center justify-between mb-2'> 
      <div className='flex gap-2'>
        <h3 className='text-gray-400'>Asked to: Reviewee</h3>
        <BiSolidUserCircle className="text-gray-400 mt-1" />
      </div>  
      <div className='flex gap-2'>    
        <h3 className="text-gray-500 text-center">Text Answer</h3>  
        <MdTextFields className="text-gray-500 mt-1" /> 
      </div>
    </div>
  )
};

  

export default QuestionPage;