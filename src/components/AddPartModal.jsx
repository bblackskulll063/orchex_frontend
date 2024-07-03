import React, { useContext, useState, useEffect } from 'react';
import PartContext from "../context/parts/PartContext";
import BrandContext from "../context/brand/BrandContext";
import WarehouseContext from "../context/warehouse/ContextAPI";

const AddPartModal = ({ isOpen, onClose }) => {
    const partContext = useContext(PartContext);
    const { createPart } = partContext;

    const brandContext = useContext(BrandContext);
    const { brands } = brandContext;

    const warehouseContext = useContext(WarehouseContext);
    const { warehouses } = warehouseContext;

    const [name, setName] = useState('');
    const [brand, setBrand] = useState('');
    const [warehouse, setWarehouse] = useState('');
    const [image, setImage] = useState(null);
    const [quantity, setQuantity] = useState('');
    const [priceSingle, setPriceSingle] = useState('');
    const [description, setDescription] = useState('');

    // useEffect(() => {
    //     fetchBrands();
    //     fetchWarehouses();
    // }, [fetchBrands, fetchWarehouses]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('brand', brand);
        formData.append('warehouse', warehouse);
        formData.append('quantity', quantity);
        formData.append('price_single', priceSingle);
        formData.append('description', description);
        if (image) {
            formData.append('image', image);
        }

        await createPart(formData);
        setName('');
        setBrand('');
        setWarehouse('');
        setImage(null);
        setQuantity('');
        setPriceSingle('');
        setDescription('');
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="z-10 fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
            <div className="bg-white p-6 rounded shadow-lg max-w-md w-full">
                <h2 className="text-2xl font-bold mb-4">Add New Part</h2>
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <div className='grid grid-cols-2 space-x-4'>

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
                            <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image:</label>
                            <input
                                type="file"
                                id="image"
                                onChange={(e) => setImage(e.target.files[0])}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="brand" className="block text-sm font-medium text-gray-700">Brand:</label>
                            <select
                                id="brand"
                                value={brand}
                                onChange={(e) => setBrand(e.target.value)}
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            >
                                <option value="">Select a brand</option>
                                {brands.map((brand) => (
                                    <option key={brand._id} value={brand._id}>{brand.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="warehouse" className="block text-sm font-medium text-gray-700">Warehouse:</label>
                            <select
                                id="warehouse"
                                value={warehouse}
                                onChange={(e) => setWarehouse(e.target.value)}
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            >
                                <option value="">Select a warehouse</option>
                                {warehouses.map((warehouse) => (
                                    <option key={warehouse._id} value={warehouse._id}>{warehouse.name}</option>
                                ))}
                            </select>
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
                    </div>

                    <div className="mb-4 grid scale">
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

export default AddPartModal;
