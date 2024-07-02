import React, { useState, useEffect, useContext } from 'react';
import ContextAPI from "../context/warehouse/ContextAPI";

const UpdateWarehouseModal = ({ isOpen, onClose, warehouseToEdit }) => {
  const context = useContext(ContextAPI);
  const { updateWarehouse } = context;
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');

  useEffect(() => {
    if (warehouseToEdit) {
      setName(warehouseToEdit.name);
      setLocation(warehouseToEdit.location);
    }
  }, [warehouseToEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateWarehouse(warehouseToEdit.id, warehouseToEdit);
    setName('');
    setLocation('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="z-10 fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Update Warehouse</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location:</label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="flex justify-end">
            <button type="button" onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded mr-2">Cancel</button>
            <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded">Update Warehouse</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateWarehouseModal;