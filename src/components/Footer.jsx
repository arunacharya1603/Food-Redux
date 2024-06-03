import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-center gap-8 h-12 ml-8'>
      <div className='flex g-10'>
        <p className='text-gray-500 text-sm'>
          &copy; 2024 All Rights Reserved
        </p>
      </div>
      <div>
        <p className='text-gray-500 text-sm'>
          Made with ❤️ by <a href='https://github.com/arunacharya1603'>arunacharya1603</a>
        </p>
      </div>
    </div>
  )
}

export default Footer
