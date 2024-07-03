import React, { useState, useEffect, useContext } from 'react';
import PartContext from '../context/parts/PartContext';

const UpdatePartModal = ({ isOpen, onClose, partToEdit }) => {
  const context = useContext(PartContext);
  const {updatePart} = context
  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [warehouse, setWarehouse] = useState('');
  const [image, setImage] = useState('');
  const [quantity, setQuantity] = useState('');
  const [priceSingle, setPriceSingle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (partToEdit) {
      setName(partToEdit.name);
      setBrand(partToEdit.brand);
      setWarehouse(partToEdit.warehouse);
      setImage(partToEdit.image);
      setQuantity(partToEdit.quantity);
      setPriceSingle(partToEdit.price_single);
      setDescription(partToEdit.description);
    }
  }, [partToEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updatePart(partToEdit._id, { name, brand, warehouse, image, quantity, price_single: priceSingle, description });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="z-10 fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Update Part</h2>
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
            <label htmlFor="brand" className="block text-sm font-medium text-gray-700">Brand:</label>
            <input
              type="text"
              id="brand"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="warehouse" className="block text-sm font-medium text-gray-700">Warehouse:</label>
            <input
              type="text"
              id="warehouse"
              value={warehouse}
              onChange={(e) => setWarehouse(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image URL:</label>
            <input
              type="text"
              id="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">Quantity:</label>
            <input
              type="number"
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="priceSingle" className="block text-sm font-medium text-gray-700">Price per unit:</label>
            <input
              type="number"
              id="priceSingle"
              value={priceSingle}
              onChange={(e) => setPriceSingle(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description:</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="flex justify-end space-x-2">
            <button type="button" onClick={onClose} className="bg-gray-300 text-gray-700 px-4 py-2 rounded">Cancel</button>
            <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdatePartModal;
