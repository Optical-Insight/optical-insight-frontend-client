"use client";
import React, { createContext, useState, useContext, ReactNode } from "react";
import axios from "axios";
import { DoctorsAllProps, DoctorsContextType } from "@/utils/doctor";
import {
  GET_ALL_USERS_BY_TYPE_URL,
  GET_ALL_SUGGESTED_DOCTORS_URL,
} from "@/constants/config";
import { useAuth } from "./AuthContext";

const defaultState: DoctorsContextType = {
  doctors: [],
  suggestedDoctors: [],
  searchTerm: "",
  setSearchTerm: () => {},
  fetchAllDoctors: async () => {},
  getSuggestedDoctors: async (patientID: string) => {},
};

const DoctorsContext = createContext<DoctorsContextType>(defaultState);

interface DoctorsProviderProps {
  children: ReactNode; // Define a type for children
}

export const DoctorsProvider: React.FC<DoctorsProviderProps> = ({
  children,
}) => {
  const [doctors, setDoctors] = useState<DoctorsAllProps[]>([]);
  const [suggestedDoctors, setsuggestedDoctors] = useState<DoctorsAllProps[]>(
    []
  );
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
    } catch (err: any) {
      console.error(
        "Error in retrieving data",
        err.response?.data || err.message
      );
    }
  };

  const getSuggestedDoctors = async (patientID: string) => {
    try {
      const response = await axios.get(
        `${GET_ALL_SUGGESTED_DOCTORS_URL}/${patientID}`,
        {
          headers: {
            Authorization: `Bearer ${storedAuthData.accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Suggested doctors:", response);
      setsuggestedDoctors(response.data);
    } catch (err: any) {
      console.error(
        "Error in retrieving data",
        err.response?.data || err.message
      );
    }
  };

  return (
    <DoctorsContext.Provider
      value={{
        doctors,
        suggestedDoctors,
        searchTerm,
        setSearchTerm,
        fetchAllDoctors,
        getSuggestedDoctors,
      }}
    >
      {children}
    </DoctorsContext.Provider>
  );
};

// Custom hook to use the context
export const useDoctors = () => useContext(DoctorsContext);
