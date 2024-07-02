import React, {useContext} from 'react';
import WarehouseContext from "../context/warehouse/ContextAPI";
import BrandContext from "../context/brand/BrandContext";
import { AiOutlineApartment } from "react-icons/ai";
import { MdWarehouse } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { SiBrandfolder } from "react-icons/si";

const Dashboard = () => {
    const context1 = useContext(WarehouseContext);
    const context2 = useContext(BrandContext);
    const { warehouses } = context1;
    const { brands } = context2;
    console.log(brands)
    return (
        <div className='dashboard '>
            <div className='grid grid-cols-4 space-x-6 my-10'>
                <div className='flex bg-white  rounded-lg '>
                    <MdWarehouse  size={180} className='bg-green-400 px-5 rounded-l-lg'/>
                    <div className='w-full flex flex-col justify-center space-y-3'>
                        <h1 className='text-center text-xl font-bold'>Warehouse</h1>
                        <h1 className='text-center text-lg font-semibold'>{warehouses.length}</h1>
                    </div>
                </div>
                <div className='flex bg-white  rounded-lg '>
                    <SiBrandfolder  size={180} className='bg-red-400 px-5 rounded-l-lg'/>
                    <div className='w-full flex flex-col justify-center space-y-3'>
                        <h1 className='text-center text-xl font-bold'>Brand</h1>
                        <h1 className='text-center text-lg font-semibold'>{brands.length}</h1>
                    </div>
                </div>
                <div className='flex bg-white  rounded-lg '>
                    <AiOutlineApartment  size={180} className='bg-violet-400 px-5 rounded-l-lg'/>
                    <div className='w-full flex flex-col justify-center space-y-3'>
                        <h1 className='text-center text-xl font-bold'>Parts</h1>
                        <h1 className='text-center text-lg font-semibold'>300</h1>
                    </div>
                </div>
                <div className='flex bg-white  rounded-lg '>
                    <FaCartShopping  size={180} className='bg-yellow-400 px-5 rounded-l-lg'/>
                    <div className='w-full flex flex-col justify-center space-y-3'>
                        <h1 className='text-center text-xl font-bold'>Order</h1>
                        <h1 className='text-center text-lg font-semibold'>50</h1>
                    </div>
                </div>
                
            </div>

        </div>
    )
}

export default Dashboard