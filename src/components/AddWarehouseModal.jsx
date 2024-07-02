import React, { useContext, useState } from 'react';
import ContextAPI from "../context/warehouse/ContextAPI";

const AddWarehouseModal = ({ isOpen, onClose }) => {
    const context = useContext(ContextAPI);
    const { createWarehouse } = context;
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createWarehouse({ name, location });
        setName('');
        setLocation('');
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="z-10 fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
            <div className="bg-white p-6 rounded shadow-lg max-w-md w-full">
                <h2 className="text-2xl font-bold mb-4">Add New Warehouse</h2>
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
                    <div className="flex justify-end space-x-6 mt-10">
                        <button type="submit" className="bg-blue-900 text-white px-4 py-2 rounded">Add Warehouse</button>
                        <button type="button" onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded mr-2">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddWarehouseModal;
