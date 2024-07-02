import React from 'react'

const Warehouse = () => {
  return (
    <div className='home-page container '>
      <h1 className='text-3xl font-bold mb-5 '> Warehouse</h1>
      <div class="rounded-xl relative overflow-x-auto">
        <table class=" w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class=" bg-white text-xs border-b text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                #
              </th>
              <th scope="col" class="px-6 py-3">
                Name
              </th>
              <th scope="col" class="px-6 py-3">
                Location
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td scope="row" class="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                Apple MacBook Pro 17"
              </td>
              <td class="px-6 py-4">
                Silver
              </td>
              <td class="px-6 py-4">
                Laptop
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td scope="row" class="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                Microsoft Surface Pro
              </td>
              <td class="px-6 py-4">
                White
              </td>
              <td class="px-6 py-4">
                Laptop PC
              </td>
            </tr>
            
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default Warehouse
