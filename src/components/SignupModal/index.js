import React from 'react'

const SignupModal = ({ onClose }) => {
  const handleOutsideClick = (event) => {
    if (event.target.id === 'modalBackdrop') {
      onClose()
    }
  }
  return (
    <div
      id='modalBackdrop'
      className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-40'
      onClick={handleOutsideClick}
    >
      <div
        className='w-1/3 p-8 bg-white border-gray-600 border-2 rounded-lg shadow-md flex flex-col items-center text-black'
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <h2 className='text-4xl font-normal'>Sign up for free</h2>
          <p className='mb-4 mt-4 text-black'>
            We recommend using your{' '}
            <span className='font-bold'>work email</span> — it keeps work and
            life separate.
          </p>
        </div>
        <div className='w-full'>
          <h2 className='text-sm font-bold mb-2'>Work email</h2>
          <div className='flex items-center border border-gray-400 rounded-md mb-4'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='1.7em'
              height='1.7em'
              fill='none'
              viewBox='0 0 24 24'
              class='icon icon-ds-300 icon-sw-150 icon-inherit  undefined'
            >
              <path
                stroke='currentColor'
                stroke-linecap='round'
                stroke-width='1.5'
                d='M5 21v-17.75a.25.25 0 0 1 .25-.25h13.5a.25.25 0 0 1 .25.25v17.75m-14 0h-2m2 0h5m9 0h-5m5 0h2m-11 0v-5.75a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v5.75m-4 0h4m-5-14h1m4 0h1m-6 4h1m4 0h1'
                vector-effect='non-scaling-stroke'
              ></path>
            </svg>
            <input
              className='w-full p-2'
              type='email'
              placeholder='Work email'
            />
          </div>
        </div>
        <button className='w-full p-2 mb-4 bg-blue-700 text-white rounded-md hover:bg-blue-800'>
          Continue
        </button>
        <div className='w-full text-center border-b border-black my-4' />
        <button class='flex justify-center border-[1px] border-black p-2 m-4 w-full rounded-lg hover:bg-black hover:text-white'>
          <div class='flex align-items-center gap-2 justify-content-center'>
            <span class='d-flex me-50' data-icon='true'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                fill='none'
                viewBox='0 0 24 24'
                data-testid='google-icon'
                aria-hidden='true'
              >
                <path
                  d='M1.24182 6.67897C1.98432 5.13169 3.03341 3.82393 4.35554 2.73652C6.14713 1.2563 8.20219 0.365299 10.5063 0.0922493C13.2129 -0.228704 15.7566 0.283863 18.1086 1.69222C18.693 2.04192 19.2391 2.43952 19.7613 2.87065C19.8906 2.97604 19.8763 3.03831 19.7661 3.1437C18.6978 4.20715 17.6296 5.27061 16.5709 6.34365C16.4464 6.4682 16.3793 6.45862 16.2452 6.35802C13.141 3.96764 8.61416 4.61433 6.30042 7.77596C5.89324 8.33164 5.56271 8.93043 5.33277 9.58192C5.31361 9.6394 5.27529 9.6921 5.24655 9.74958C4.62859 9.28013 4.00585 8.81067 3.39269 8.33643C2.67413 7.78554 1.95558 7.23465 1.24182 6.67897Z'
                  fill='#E94335'
                ></path>
                <path
                  d='M5.24646 14.2429C5.45244 14.698 5.62489 15.1722 5.88357 15.5986C6.97098 17.3806 8.52305 18.5255 10.5685 18.9327C12.4128 19.3015 14.1852 19.0524 15.8379 18.1279C15.8954 18.0991 15.9529 18.0704 16.0056 18.0417C16.0343 18.0704 16.0583 18.1039 16.087 18.1279C17.3229 19.086 18.5636 20.044 19.7995 21.0021C19.2055 21.5913 18.5301 22.0656 17.8115 22.4775C15.7277 23.6655 13.4715 24.1446 11.0955 23.9625C8.13503 23.7326 5.58178 22.5637 3.47403 20.456C2.54949 19.5315 1.78783 18.4872 1.23694 17.2944C1.74951 16.9016 2.26207 16.5135 2.77464 16.1207C3.59858 15.4932 4.42252 14.8705 5.24646 14.2429Z'
                  fill='#34A853'
                ></path>
                <path
                  d='M19.8044 21.0021C18.5685 20.044 17.3278 19.086 16.0919 18.1279C16.0632 18.1039 16.0344 18.0704 16.0105 18.0417C16.4368 17.7111 16.8727 17.3902 17.2224 16.9686C17.8069 16.2692 18.1949 15.4788 18.3961 14.5926C18.42 14.4824 18.4009 14.4441 18.2907 14.4489C18.2332 14.4537 18.1805 14.4489 18.123 14.4489C16.1686 14.4489 14.2093 14.4441 12.2548 14.4537C12.0393 14.4537 11.9914 14.3962 11.9962 14.1902C12.0057 12.801 12.0057 11.4118 11.9962 10.0226C11.9962 9.84539 12.0441 9.79749 12.2213 9.79749C15.8045 9.80228 19.3877 9.80228 22.9756 9.79749C23.1289 9.79749 23.1912 9.83581 23.2295 9.99868C23.5217 11.316 23.5026 12.6382 23.3253 13.9699C23.1816 15.0333 22.9229 16.0633 22.5253 17.0596C21.9361 18.5303 21.0691 19.8141 19.929 20.9159C19.8859 20.9494 19.8427 20.9734 19.8044 21.0021Z'
                  fill='#4285F3'
                ></path>
                <path
                  d='M5.24651 14.2429C4.42257 14.8705 3.59863 15.4932 2.77469 16.1208C2.26213 16.5088 1.74956 16.9016 1.23699 17.2944C0.839395 16.5567 0.580717 15.7758 0.369942 14.9711C-0.0324468 13.4142 -0.0947213 11.8334 0.125634 10.2478C0.298087 9.0023 0.657362 7.80472 1.23699 6.68378C1.95555 7.23467 2.66931 7.79035 3.38786 8.34124C4.00581 8.81548 4.62377 9.28493 5.24172 9.75439C5.13633 10.267 4.98783 10.7699 4.93993 11.2969C4.8537 12.2549 4.94472 13.1891 5.21777 14.1088C5.23693 14.1471 5.24172 14.195 5.24651 14.2429Z'
                  fill='#FABB06'
                ></path>
              </svg>
            </span>
            <span>Sign up with Google</span>
          </div>
        </button>
        <button class='flex justify-center border-[1px] border-black p-2 mb-4 w-full rounded-lg hover:bg-black hover:text-white'>
          <div class='flex align-items-center gap-2 justify-content-center'>
            <span class='d-flex me-50' data-icon='true'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                fill='none'
                viewBox='0 0 24 24'
                data-testid='microsoft-icon'
                aria-hidden='true'
              >
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M14.8521 3.76288C12.0362 4.43752 9.22419 5.11168 6.40068 5.7883V17.5408C4.94708 18.1124 3.49862 18.6817 2.05089 19.2502C2.00636 19.1744 2.00049 19.1306 2.00049 19.0858C2 14.3372 2 9.58783 2 4.85053C2.06484 4.77029 2.14852 4.7602 2.22143 4.73337C6.35982 3.17437 10.4994 1.61685 14.6383 0.0578532C14.7817 0.00370416 14.9116 -0.0226319 15.0706 0.0243792C17.3414 0.687459 19.6147 1.34291 21.8872 2.00057C21.9202 2.01066 21.9533 2.02248 22 2.03749V22.0532C21.3475 22.2358 20.7008 22.4182 20.0534 22.5979C18.4055 23.0549 16.7567 23.5086 15.11 23.9691C14.9485 24.0144 14.8076 24.0109 14.6491 23.9521C10.5785 22.4389 6.50588 20.9303 2.43478 19.421C2.35429 19.391 2.27575 19.3575 2.20797 19.2854C6.41927 19.867 10.6306 20.4479 14.8411 21.0293C14.8776 20.7989 14.8869 4.12666 14.8521 3.76288Z'
                  fill='#C93E2B'
                ></path>
              </svg>
            </span>
            <span> Sign up with Microsoft</span>
          </div>
        </button>
        <button class='flex justify-center border-[1px] border-black p-2 mb-4 w-full rounded-lg hover:bg-black hover:text-white'>
          <div class='flex align-items-center gap-2 justify-content-center'>
            <span class='d-flex me-50' data-icon='true'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                fill='none'
                viewBox='0 0 24 24'
                data-testid='slack-icon'
                aria-hidden='true'
              >
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M5.43126 15.0896C5.43126 16.4784 4.35695 17.6045 3.03126 17.6045C1.70621 17.6045 0.631264 16.4784 0.631264 15.0896C0.631264 13.7007 1.70621 12.5746 3.03126 12.5746H5.43126V15.0896Z'
                  fill='#E51859'
                ></path>
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M6.63126 15.0896C6.63126 13.7007 7.70558 12.5746 9.03126 12.5746C10.3563 12.5746 11.4313 13.7007 11.4313 15.0896V21.3769C11.4313 22.7658 10.3563 23.8919 9.03126 23.8919C7.70558 23.8919 6.63126 22.7658 6.63126 21.3769V15.0896Z'
                  fill='#E51859'
                ></path>
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M9.03113 5.02983C7.70545 5.02983 6.63113 3.90373 6.63113 2.51489C6.63113 1.12604 7.70545 -6.10352e-05 9.03113 -6.10352e-05C10.3568 -6.10352e-05 11.4311 1.12604 11.4311 2.51489V5.02983H9.03113Z'
                  fill='#18C6F0'
                ></path>
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M9.03114 6.28737C10.3568 6.28737 11.4311 7.41347 11.4311 8.80232C11.4311 10.1912 10.3568 11.3173 9.03114 11.3173H3.03114C1.70608 11.3173 0.631767 10.1912 0.631767 8.80232C0.631767 7.41347 1.70608 6.28737 3.03114 6.28737H9.03114Z'
                  fill='#18C6F0'
                ></path>
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M18.6306 8.80226C18.6306 7.41341 19.7049 6.28731 21.0306 6.28731C22.3557 6.28731 23.4306 7.41341 23.4306 8.80226C23.4306 10.1911 22.3557 11.3172 21.0306 11.3172H18.6306V8.80226Z'
                  fill='#0AB77F'
                ></path>
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M17.4307 8.80225C17.4307 10.1911 16.3564 11.3172 15.0307 11.3172C13.7056 11.3172 12.6307 10.1911 12.6307 8.80225V2.51489C12.6307 1.12604 13.7056 -6.10352e-05 15.0307 -6.10352e-05C16.3564 -6.10352e-05 17.4307 1.12604 17.4307 2.51489V8.80225Z'
                  fill='#0AB77F'
                ></path>
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M15.0308 18.8619C16.3565 18.8619 17.4308 19.988 17.4308 21.3769C17.4308 22.7657 16.3565 23.8918 15.0308 23.8918C13.7051 23.8918 12.6308 22.7657 12.6308 21.3769V18.8619H15.0308Z'
                  fill='#EFB32F'
                ></path>
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M15.0308 17.6044C13.7051 17.6044 12.6308 16.4783 12.6308 15.0895C12.6308 13.7007 13.7051 12.5746 15.0308 12.5746H21.0302C22.3559 12.5746 23.4302 13.7007 23.4302 15.0895C23.4302 16.4783 22.3559 17.6044 21.0302 17.6044H15.0308Z'
                  fill='#EFB32F'
                ></path>
              </svg>
            </span>
            <span> Sign up with Slack</span>
          </div>
        </button>
        <p className='text-xs'>
          By signing up, you agree with Miro&apos;s{' '}
          <a href='#' className='underline'>
            Terms & Conditions
          </a>{' '}
          and{' '}
          <a href='#' className='underline'>
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  )
}

export default SignupModal
