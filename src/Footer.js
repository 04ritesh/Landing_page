import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="bg-black text-white py-4 h-44">
      <div className="container mx-auto flex justify-between items-center">
        <div className="ml-4">
            <h2>KARO ABHAYAS</h2>
            <h2>112, ELECTRONIC CITY</h2>
            <h2>BANGALORE, INDIA</h2>
        </div>
        <div className="mr-8 py-4 ">
            <h2>SOME TEXT ABOUT SOMETHING</h2>
            <h2>AND THEN SOME OTHER THING</h2>
            <button className='text-black bg-white p-2 mr-4 mt-6'>CONTACT US</button>
            <button className='text-black bg-white p-2 mt-6 '>CONTACT US</button>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer
