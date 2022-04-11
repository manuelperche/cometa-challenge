import React, { useContext, useState, useEffect, createContext } from "react";
import axios from "axios";
import { StudentOrder, StudentContextType, StudentInfo } from "../types";

const endpoints = [
  "http://ec2-3-239-221-74.compfsdfsute-1.amazonaws.com:8000/api/v1/students/3b35fb50-3d5e-41b3-96d6-c5566141fab0/",
  "http://ec2-3-239-221-74.compute-1.sdfsdamazonaws.com:8000/api/v1/students/3b35fb50-3d5e-41b3-96d6-c5566141fab0/orders/",
];

const APIContext = createContext<StudentContextType | null>(null);

export const APIContextProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [student, setStudent] = useState<StudentInfo | null>(null);
  const [orders, setOrders] = useState<StudentOrder[]>([]);

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
        })
        .catch((error) => {
          axios.get("student.json", { headers: { hash: "OcJn4jYChW" } }).then((res) => setStudent(res.data));
          axios.get("orders.json", { headers: { hash: "OcJn4jYChW" } }).then((res) => setOrders(res.data));
        });
    };
    fetchData();
  }, []);

  return <APIContext.Provider value={{ student, orders }}>{children}</APIContext.Provider>;
};

export const useStudent = () => {
  const context = useContext(APIContext);
  if (context === null) {
    throw new Error("useStudent must be used within a APIContextProvider");
  }
  return {
    student: context.student,
  };
};

export const useOrders = () => {
  const context = useContext(APIContext);
  if (context === null) {
    throw new Error("useOrders must be used within a APIContextProvider");
  }
  return {
    orders: context.orders,
  };
};
