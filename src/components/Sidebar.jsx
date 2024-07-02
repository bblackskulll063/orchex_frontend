import React from 'react'
import { AiOutlineApartment } from "react-icons/ai";
import { MdSpaceDashboard } from "react-icons/md";
import { MdWarehouse } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { SiBrandfolder } from "react-icons/si";

const Sidebar = () => {
   return (
      <div class="h-full px-5 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
         <ul class="space-y-2 font-medium">
            <li>
               <a href="/" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <MdSpaceDashboard class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                  <span class="ms-3">Dashboard</span>
               </a>
            </li>
            <li>
               <a href="/warehouse" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <MdWarehouse class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                  <span class="flex-1 ms-3 whitespace-nowrap">Warehouse</span>
               </a>
            </li>
            <li>
               <a href="/brand" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <SiBrandfolder class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
                  <span class="flex-1 ms-3 whitespace-nowrap">Brand</span>
               </a>
            </li>
            <li>
               <a href="/parts" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <AiOutlineApartment class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                  <span class="flex-1 ms-3 whitespace-nowrap">Parts</span>
               </a>
            </li>
            <li>
               <a href="/order" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <FaCartShopping class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                  <span class="flex-1 ms-3 whitespace-nowrap">Order</span>
               </a>
            </li>

         </ul>
      </div>
   )
}

export default Sidebar