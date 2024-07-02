
import React, { useContext, useEffect, useState } from 'react'
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
import AddWarehouseModal from '../components/AddBrandModal';
import UpdateWarehouseModal from '../components/UpdateBrandModal';

import BrandContext from "../context/brand/BrandContext";

const Brand = () => {
  const context = useContext(BrandContext);
  const { brands, loading, error, deleteBrand } = context;
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [brandToEdit, setBrandToEdit] = useState(null);

  console.log(brands);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading brands: {error.message}</p>;

  const handleUpdate = (brand) => {
    setBrandToEdit(brand);
    setIsUpdateModalOpen(true);
  };
  return (
    <div className='home-page container'>
      <div className='flex justify-between'>
        <h1 className='text-3xl font-bold mb-5 '> Brand List</h1>
        <button onClick={() => setIsAddModalOpen(true)}><IoIosAddCircle size={50} className='text-green-700 hover:text-green-500' /></button>
      </div>
      <AddWarehouseModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} />
      <UpdateWarehouseModal isOpen={isUpdateModalOpen} onClose={() => setIsUpdateModalOpen(false)} brandToEdit={brandToEdit} />
      <div class="rounded-xl relative overflow-x-auto">
        <table class=" w-full text-sm text-left rtl:text-right">
          <thead class=" bg-blue-900 text-white text-lg border-b  uppercase">
            <tr>
              <th scope="col" class="px-6 py-3">
                #
              </th>
              <th scope="col" class="px-6 py-3 text-center">
                Name
              </th>
              <th scope="col" class="px-6 py-3 text-center">
                Description
              </th>
              <th scope="col" class="px-6 py-3 text-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>

            {brands.map((brand, index) => (
               <tr key={brand._id} class=" border-blue-900 text-lg bg-white border-b">
                 <td class="px-6 py-4 text-gray-900 whitespace-nowrap ">
                   {index + 1}
                 </td>
                 <td class="px-6 py-4 text-center">
                   {brand.name}
                 </td>
                 <td class="px-6 py-4 text-center">
                   {brand.description}
                 </td>
                 <td class="px-6 py-4 space-x-2 text-center">
                   <button onClick={() => handleUpdate(brand)}><FaEdit size={25} className='text-yellow-600 hover:text-yellow-500' /></button>
                   <button onClick={() => deleteBrand(brand._id)}><MdDelete size={25} className='text-red-600 hover:text-red-500' /></button>
                 </td>
               </tr>
             ))}
            <tr className=' bg-white text-white border-b'>
              <td>a</td>
              <td>a</td>
              <td>a</td>
              <td>a</td>
            </tr>

          </tbody>
        </table>
      </div>

    </div>
  )
}

export default Brand