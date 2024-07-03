import React, { useContext, useState } from 'react';
import PartContext from '../context/parts/PartContext';
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
import AddPartModal from '../components/AddPartModal';
import UpdatePartModal from '../components/UpdatePartModal';

const Parts = () => {
  const context = useContext(PartContext);
  const { parts, loading, error, deletePart } = context;
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [partToEdit, setPartToEdit] = useState(null);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading parts: {error.message}</p>;

  const handleUpdate = (part) => {
    setPartToEdit(part);
    setIsUpdateModalOpen(true);
  };
  console.log(parts);
  return (
    <div className="p-4">

      <div className="flex justify-between">
        <h1 className="text-2xl font-bold mb-4">Parts List</h1>
        <button onClick={() => setIsAddModalOpen(true)}>
          <IoIosAddCircle
            size={50}
            className="text-green-700 hover:text-green-500"
          />
        </button>
      </div>
      <AddPartModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} />
      <UpdatePartModal isOpen={isUpdateModalOpen} onClose={() => setIsUpdateModalOpen(false)} partToEdit={partToEdit} />
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
                Image
              </th>
              <th scope="col" class="px-6 py-3 text-center">
                Brand
              </th>
              <th scope="col" class="px-6 py-3 text-center">
                Description
              </th>
              <th scope="col" class="px-6 py-3 text-center">
                Single_Price
              </th>
              <th scope="col" class="px-6 py-3 text-center">
                Quantity
              </th>
              <th scope="col" class="px-6 py-3 text-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {parts.map((part, index) => (
              <tr
                key={part._id}
                class=" border-blue-900 text-lg bg-white border-b"
              >
                <td class="px-6 py-4 text-gray-900 whitespace-nowrap ">
                  {index + 1}
                </td>
                <td class="px-6 py-4 text-center">{part.name}</td>
                <td class="px-6 py-4 text-center">image</td>
                <td class="px-6 py-4 text-center">{part.brand.name}</td>
                <td class="px-6 py-4 text-center">{part.description}</td>
                <td class="px-6 py-4 text-center">{part.price_single}</td>
                <td class="px-6 py-4 text-center">{part.quantity}</td>
                 <td class="px-6 py-4 space-x-2 text-center">
                  <button onClick={() => handleUpdate(part)}>
                    <FaEdit
                      size={25}
                      className="text-yellow-600 hover:text-yellow-500"
                    />
                  </button>
                  <button onClick={() => deletePart(part._id)}>
                    <MdDelete
                      size={25}
                      className="text-red-600 hover:text-red-500"
                    />
                  </button>
                </td> 
              </tr>
            ))}
            <tr className=" bg-white text-white border-b">
              <td>a</td>
              <td>a</td>
              <td>a</td>
              <td>a</td>
              <td>a</td>
              <td>a</td>
              <td>a</td>
              <td>a</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default Parts