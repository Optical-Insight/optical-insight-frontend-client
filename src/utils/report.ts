export interface ReportListAllProps {
  reportId: string;
  name: string;
  createdAt: string;
  createdBy: string;
  patientId: string;
  status: string;
  leftEyeImageUrl: string;
  rightEyeImageUrl: string;
}

export interface ReportListCardProps {
  reportId: string;
  createdBy: string;
  createdAt: string;
  status: string;
  onClick?: () => void;
}
