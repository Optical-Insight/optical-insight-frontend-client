"use client";
import React, { createContext, useState, useContext, ReactNode } from "react";
import axios from "axios";
import { DoctorsAllProps, DoctorsContextType } from "@/utils/doctor"; // Ensure these types are correctly defined
import { GET_ALL_USERS_BY_TYPE_URL } from "@/constants/config";
import { useAuth } from "./AuthContext";

const defaultState: DoctorsContextType = {
  doctors: [],
  searchTerm: "",
  setSearchTerm: () => {},
  fetchAllDoctors: async () => {},
};

const DoctorsContext = createContext<DoctorsContextType>(defaultState);

interface DoctorsProviderProps {
  children: ReactNode; // Define a type for children
}

export const DoctorsProvider: React.FC<DoctorsProviderProps> = ({
  children,
}) => {
  const [doctors, setDoctors] = useState<DoctorsAllProps[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { storedAuthData } = useAuth();

  const fetchAllDoctors = async () => {
    try {
      const response = await axios.get(GET_ALL_USERS_BY_TYPE_URL, {
        headers: {
          Authorization: `Bearer ${storedAuthData.accessToken}`,
          "Content-Type": "application/json",
        },
      });
      setDoctors(response.data);
      console.log("Doctors data", response.data);
    } catch (err: any) {
      console.error(
        "Error in retrieving data",
        err.response?.data || err.message
      );
    }
  };

  return (
    <DoctorsContext.Provider
      value={{ doctors, searchTerm, setSearchTerm, fetchAllDoctors }}
    >
      {children}
    </DoctorsContext.Provider>
  );
};

// Custom hook to use the context
export const useDoctors = () => useContext(DoctorsContext);
