import React from 'react'

const Asidebar = () => {
  return (
    <aside className='flex flex-col justify-end w-fit flex-end'>
      <div className='text-center'>radio button</div>

      <div className=' w-[40vh] h-[45vh] bg-orange-100 rounded-[10px] p-7 m-5 border-[2px]'>
        <h3 className='font-bold mb-2'>Amandine, HR PayFit</h3>
        <p className='mb-2'>We recommended to have no more than <span className='font-bold'>10 questions</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto velit saepe aliquam?</p>
        <p>Currently the<span className='font-bold'>Reviewee</span> answer to 
          <span className='w-[25px] h-[25px] text-white-600 bg-gray-300 rounded-full text-center justify-center inline-flex'>3</span> 
          questions and the <span className='font-bold'>Manager</span> to 
          <span className='w-[25px] h-[25px] text-white-600 bg-gray-300 rounded-full text-center justify-center inline-flex'>0</span>question
        </p>
      </div>
    </aside>
  )
}

export default Asidebar;