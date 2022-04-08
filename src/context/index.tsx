import React, { useContext, useState, useEffect, createContext } from "react";
import axios from "axios";
import { StudentOrder, StudentContextType, StudentInfo } from "../types";

const endpoints = [
  "https://ec2-3-239-221-74.compute-1.amazonaws.com:8000/api/v1/students/3b35fb50-3d5e-41b3-96d6-c5566141fab0/",
  "https://ec2-3-239-221-74.compute-1.amazonaws.com:8000/api/v1/students/3b35fb50-3d5e-41b3-96d6-c5566141fab0/orders/",
];

const APIContext = createContext<StudentContextType | null>(null);

export const APIContextProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [student, setStudent] = useState<StudentInfo | null>(null);
  const [orders, setOrders] = useState<StudentOrder[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      Promise.all(
        endpoints.map((endpoint) =>
          axios.get(endpoint, {
            headers: {
              hash: "OcJn4jYChW",
            },
          })
        )
      )
        .then(([{ data: student }, { data: orders }]) => {
          setStudent(student);
          setOrders(orders);
          setLoading(false);
        })
        .catch((error) => {
          axios.get("orders.json", { headers: { hash: "OcJn4jYChW" } }).then((res => setOrders(res.data)))
          setError(error);
          setLoading(false);
        });
    };
    fetchData();
  }, []);

  return <APIContext.Provider value={{ student, orders, loading, error }}>{children}</APIContext.Provider>;
};

export const useStudent = () => {
  const context = useContext(APIContext);
  if (context === null) {
    throw new Error("useStudent must be used within a APIContextProvider");
  }
  return {
    student: context.student,
    loading: context.loading,
    error: context.error,
  };
};

export const useOrders = () => {
  const context = useContext(APIContext);
  if (context === null) {
    throw new Error("useOrders must be used within a APIContextProvider");
  }
  return {
    orders: context.orders,
    loading: context.loading,
    error: context.error,
  };
};
