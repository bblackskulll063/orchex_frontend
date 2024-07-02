import React, { useState, useEffect } from "react";
import BrandContext from "./BrandContext";
import axios from "axios";

const BrandState = ({ children }) => {
  const host = "http://localhost:5000";
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

   // Fetch all brand
  const fetchBrands = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${host}/brand`);
      setBrands(response.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

    // Create a new brand
  const createBrand = async (brand) => {
    try {
      const response = await axios.post(`${host}/brand`, brand);
      setBrands([...brands, response.data]);
    } catch (error) {
      setError(error);
    }
  };

  const updateBrand = async (id, updatedBrand) => {
    try {
      const response = await axios.put(`${host}/brand/${id}`, updatedBrand);
      setBrands(
        brands.map((brand) => (brand.id === id ? response.data : brand))
      );
    } catch (error) {
      setError(error);
    }
  };

  const deleteBrand = async (id) => {
    try {
      await axios.delete(`${host}/brand/${id}`);
      setBrands(brands.filter((brand) => brand.id !== id));
    } catch (error) {
      setError(error);
      fetchBrands();

    }
  };

  useEffect(() => {
    fetchBrands();
  }, []);


  return (
    <BrandContext.Provider
      value={{ brands, loading, error, createBrand, updateBrand, deleteBrand }}
    >
      {children}
    </BrandContext.Provider>
  );
};


export default BrandState;