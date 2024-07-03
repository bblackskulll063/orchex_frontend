import React, { useContext, useState } from "react";
import ContextAPI from "../context/warehouse/ContextAPI";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";

import AddWarehouseModal from "../components/AddWarehouseModal";

import UpdateWarehouseModal from "../components/updateWarehouseModal";

const Warehouse = () => {
  const context = useContext(ContextAPI);
  const { warehouses, loading, error, deleteWarehouse } = context;
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [warehouseToEdit, setWarehouseToEdit] = useState(null);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error.message}</h1>;

  const handleUpdate = (warehouse) => {
    setWarehouseToEdit(warehouse);
    setIsUpdateModalOpen(true);
  };

  return (
    <div className="home-page container">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold mb-5 "> Warehouse List</h1>
        <button onClick={() => setIsAddModalOpen(true)}>
          <IoIosAddCircle
            size={50}
            className="text-green-700 hover:text-green-500"
          />
        </button>
      </div>
      <AddWarehouseModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
      />
      <UpdateWarehouseModal
        setWarehouseToEdit={setWarehouseToEdit}
        isOpen={isUpdateModalOpen}
        onClose={() => setIsUpdateModalOpen(false)}
        warehouseToEdit={warehouseToEdit}
      />
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
                Location
              </th>
              <th scope="col" class="px-6 py-3 text-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {warehouses.map((warehouse, index) => (
              <tr
                key={warehouse._id}
                class=" border-blue-900 text-lg bg-white border-b"
              >
                <td class="px-6 py-4 text-gray-900 whitespace-nowrap ">
                  {index + 1}
                </td>
                <td class="px-6 py-4 text-center">{warehouse.name}</td>
                <td class="px-6 py-4 text-center">{warehouse.location}</td>
                <td class="px-6 py-4 space-x-2 text-center">
                  <button onClick={() => handleUpdate(warehouse)}>
                    <FaEdit
                      size={25}
                      className="text-yellow-600 hover:text-yellow-500"
                    />
                  </button>
                  <button onClick={() => deleteWarehouse(warehouse._id)}>
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
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Warehouse;
