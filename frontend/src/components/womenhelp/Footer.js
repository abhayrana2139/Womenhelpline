import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { AiFillAndroid } from "react-icons/ai";

function Footer() {
  return (
    <footer className="  bg-gray-800 text-white py-4 bottom-4">
   
      <div className="container mx-auto flex justify-between items-center px-6">
        <div>
          <p className="text-sm">Contact us at:</p>
          <p className="text-lg font-bold">7018799374</p>
        </div>
        <div>
          <a href="#" className="text-white hover:text-gray-400">
          <div className='flex space-x-4 justify-center m-auto p-auto bg-red-2'>  <FaPhoneAlt size={20} />
           < AiFillAndroid size={24} />
          </div>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;