import React, { useState, useEffect } from "react";
import PartContext from "./PartContext";
import axios from "axios";

const PartState = ({ children }) => {
  const host = "http://localhost:5000";
  const [parts, setParts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch all Part
  const fetchParts = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${host}/part`);
      setParts(response.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  // Create a new Part
  const createPart = async (part) => {
    try {
      const response = await axios.post(`${host}/part`, part);
      setParts([...parts, response.data]);
    } catch (error) {
      setError(error);
    }
  };

//   edit a Part 
const updatePart = async (id, updatedPart) => {
    try {
      const response = await axios.put(`${host}/part/${id}`, updatedPart);
      setParts(parts.map(part => part._id === id ? response.data : part));
    } catch (error) {
      setError(error);
    }
  };

//   delete a Part 
  const deletePart = async (id) => {
    try {
      await axios.delete(`${host}/part/${id}`);
      setParts(parts.filter(part => part._id !== id));
      fetchParts();
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchParts();
  }, []);

  return (
    <PartContext.Provider value={{ parts, loading, error, createPart, updatePart, deletePart }}>
      {children}
    </PartContext.Provider>
  );
};

export default PartState;
