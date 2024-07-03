import React, { useState, useEffect, useContext } from "react";
import BrandContext from "../context/brand/BrandContext";

const UpdateBrandModal = ({ isOpen, onClose, brandToEdit }) => {
  const context = useContext(BrandContext);
  const { updateBrand } = context;
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (brandToEdit) {
      setName(brandToEdit.name);
      setDescription(brandToEdit.description);
    }
  }, [brandToEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateBrand(brandToEdit._id, { name, description });
    setName("");
    setDescription("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="z-10 fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Update Brand</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name:
            </label>
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
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description:
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-indigo-600 text-white px-4 py-2 rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateBrandModal;
