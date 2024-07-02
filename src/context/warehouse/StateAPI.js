import React, { useState, useEffect} from 'react';
import ContextAPI from "./ContextAPI";
import axios from 'axios';

const StateAPI = ({ children }) => {
  const host = "http://localhost:5000";

  const [warehouses, setWarehouses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch all warehouses
  const fetchWarehouses = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${host}/warehouse`);
      setWarehouses(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
    
  };

  // Create a new warehouse
  const createWarehouse = async (warehouse) => {
    try {
      const response = await axios.post(`${host}/warehouse`, warehouse);
      console.log("hello")
      setWarehouses([...warehouses, response.data]);
    } catch (err) {
      setError(err);
    }
  };

  // Update an existing warehouse
  const updateWarehouse = async (id, updatedWarehouse) => {
    try {
      const response = await axios.put(`${host}/warehouse/${id}`, updatedWarehouse);
      setWarehouses(warehouses.map(warehouse => warehouse.id === id ? response.data : warehouse));
    } catch (err) {
      setError(err);
    }
  };

  // Delete a warehouse
  const deleteWarehouse = async (id) => {
    try {
      await axios.delete(`${host}/warehouse/${id}`);
      const NewWarehouses = warehouses.filter((warehouse) => {
        return warehouse.id !== id;
      });
      setWarehouses(NewWarehouses);
      fetchWarehouses();
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    fetchWarehouses();
  }, []);

  return (
    <ContextAPI.Provider value={{ warehouses, loading, error, createWarehouse, updateWarehouse, deleteWarehouse }}>
      {children}
    </ContextAPI.Provider>
  );
};

export default StateAPI;