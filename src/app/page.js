'use client'
import Navbar from '../components/Navbar'

export default function Home() {
  const handleClick = (event) => {
    console.log(`${event.target.name} was clicked`)
  }

  return (
    <div className='font-sans bg-[#fbf7ef] h-screen'>
      <Navbar />
      {/* Rest of your component */}
      <div className='flex flex-col justify-center items-center text-center mt-24'>
        <h1 className='text-[55px] text-black font-normal leading-tight'>
          Enter with a dream.
          <br /> Exit with the next big thing.
        </h1>

        <p className='my-5 text-lg text-black'>
          Build, iterate, and design faster with Miro — the visual workspace for
          innovation.
        </p>
        <div className='my-5 w-[30%]'>
          <input
            type='email'
            placeholder='Enter your work email'
            className='p-2 w-full bg-white border border-gray-400 rounded-lg text-xl'
          />
        </div>
        <div className='w-[30%]'>
          <button
            onClick={handleClick}
            name='signup'
            className='p-2 h-[50px] cursor-pointer bg-blue-700 text-white border-none rounded-lg w-full text-xl'
          >
            Sign up free
          </button>
        </div>
        <small className='block my-5 text-gray-600'>
          Keep work and life separate by using your work email
        </small>
        <div className='p-3 text-black mt-12'>
          <p className='text-xl text-black'>
            Rated 4.8 out of 5,134+ G2 reviews
          </p>
        </div>
      </div>
      <div
        className='flex gap-2 fixed top-1/2 right-[-50px] cursor-pointer bg-white text-gray-700 p-2 px-4 rounded-tl-xl rounded-tr-xl transform -rotate-90 border-l border-r border-t border-gray-700 transition-all duration-300 hover:bg-black hover:text-white'
        onClick={() => alert('Good attention to detail. Might as well hire me!')}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
        >
          <rect
            x='3'
            y='20'
            width='18'
            height='1.5'
            rx='0.5'
            fill='currentColor'
          ></rect>
          <path
            d='M13.8889 5.55556L6.31708 13.1274C6.03788 13.4066 5.84757 13.7622 5.77013 14.1493L5.07354 17.6323C5.03856 17.8072 5.19279 17.9614 5.36772 17.9265L8.85065 17.2299C9.23784 17.1524 9.59343 16.9621 9.87263 16.6829L17.4444 9.11111M13.8889 5.55556L16.0302 3.41421C16.8113 2.63316 18.0776 2.63316 18.8587 3.41421L19.5858 4.14134C20.3668 4.92239 20.3668 6.18872 19.5858 6.96977L17.4444 9.11111M13.8889 5.55556L17.4444 9.11111'
            stroke='currentColor'
            stroke-width='1.5'
            stroke-linecap='round'
            stroke-linejoin='round'
          ></path>
          <path
            d='M11.8105 12.3875V12.3876'
            stroke='currentColor'
            stroke-width='2'
          ></path>
        </svg>
        Feedback
      </div>
    </div>
  )
}
