export interface DoctorsAllProps {
  id: string;
  name: string;
  email: string;
  userId: string;
  type: string;
  specialization: string;
  experience: string;
  rating: string;
  fees: string;
}

export interface DoctorsContextType {
  doctors: DoctorsAllProps[];
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  fetchAllDoctors: () => Promise<void>;
}
