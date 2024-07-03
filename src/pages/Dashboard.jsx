import React, { useContext, useEffect, useState } from "react";
import WarehouseContext from "../context/warehouse/ContextAPI";
import BrandContext from "../context/brand/BrandContext";
import { AiOutlineApartment } from "react-icons/ai";
import { MdWarehouse } from "react-icons/md";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { FaCartShopping } from "react-icons/fa6";
import { SiBrandfolder } from "react-icons/si";
import axios from "axios";

const Dashboard = () => {
  const warehouseContext = useContext(WarehouseContext);
  const brandContext = useContext(BrandContext);
  const [salesAmt, setSalesAmt] = useState(0);
  const [purchasesAmt, setPurchasesAmt] = useState(0);
  const { warehouses } = warehouseContext;
  const { brands } = brandContext;
  const [loading, setLoading] = useState(false);
  const host = "http://localhost:5000";
  const getTotalSales = async () => {
    try {
      const resp = await axios.get(`${host}/order/total/sales`);
      setSalesAmt(resp.data.data[0].totalAmount);
      console.log(resp.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const getTotalPurchases = async () => {
    try {
      const resp = await axios.get(`${host}/order/total/purchase`);
      setPurchasesAmt(resp.data.data[0].totalAmount);
      console.log(resp.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    getTotalSales();
    getTotalPurchases();
  }, []);

  console.log(brands);
  return (
    <div className="dashboard ">
      <div className="grid grid-cols-4 grid-rows-2 gap-y-6 gap-x-6 my-10">
        <div className="flex bg-white  rounded-lg ">
          <MdWarehouse size={180} className="bg-green-400 px-5 rounded-l-lg" />
          <div className="w-full flex flex-col justify-center space-y-3">
            <h1 className="text-center text-xl font-bold">Warehouse</h1>
            <h1 className="text-center text-lg font-semibold">
              {warehouses.length}
            </h1>
          </div>
        </div>
        <div className="flex bg-white  rounded-lg ">
          <SiBrandfolder size={180} className="bg-red-400 px-5 rounded-l-lg" />
          <div className="w-full flex flex-col justify-center space-y-3">
            <h1 className="text-center text-xl font-bold">Brand</h1>
            <h1 className="text-center text-lg font-semibold">
              {brands.length}
            </h1>
          </div>
        </div>
        <div className="flex bg-white  rounded-lg ">
          <AiOutlineApartment
            size={180}
            className="bg-violet-400 px-5 rounded-l-lg"
          />
          <div className="w-full flex flex-col justify-center space-y-3">
            <h1 className="text-center text-xl font-bold">Parts</h1>
            <h1 className="text-center text-lg font-semibold">300</h1>
          </div>
        </div>
        <div className="flex bg-white  rounded-lg ">
          <FaCartShopping
            size={180}
            className="bg-yellow-400 px-5 rounded-l-lg"
          />
          <div className="w-full flex flex-col justify-center space-y-3">
            <h1 className="text-center text-xl font-bold">Order</h1>
            <h1 className="text-center text-lg font-semibold">50</h1>
          </div>
        </div>
        <div className="flex bg-white rounded-lg col-start-2 ">
          <RiMoneyDollarCircleFill
            size={180}
            className="bg-yellow-600 px-5 rounded-l-lg"
          />
          {!loading ? (
            <div className="w-full flex flex-col justify-center space-y-3">
              <h1 className="text-center text-xl font-bold">Sales</h1>
              <h1 className="text-center text-lg font-semibold">{salesAmt}</h1>
            </div>
          ) : (
            <div>Loading...</div>
          )}
        </div>
        <div className="flex bg-white rounded-lg ">
          <RiMoneyDollarCircleFill
            size={180}
            className="bg-red-600 px-5 rounded-l-lg"
          />
          {!loading ? (
            <div className="w-full flex flex-col justify-center space-y-3">
              <h1 className="text-center text-xl font-bold">Purchases</h1>
              <h1 className="text-center text-lg font-semibold">
                {purchasesAmt}
              </h1>
            </div>
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
