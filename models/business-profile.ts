export type Promoter = {
  name: string;
  age: string;
  aadhar_card: string;
  pan: string;
  gender: string;
  category: string;
  share_percent: string;
};

export type BusinessProfile = {
  business_id: number;
  token: string;
  icon?: string;

  // business details
  business_name: string;
  contact_person: string;
  email: string;
  phone: string;
  years_operation: number;
  registration_date: string;
  legal_entity_type: string;
  udyam_registration_number: string; // TODO: to be added in FE
  gst_number: string;
  enterprise_type: string;
  sector: string;
  sub_sector: string;
  promoters?: Promoter[];

  // location details
  address: string | null;
  city: string;
  state: string;
  pincode: string;

  // financial details
  total_assets: number;
  total_liabilities: number;
  total_revenue: number;
  investment_amount: number;
  annual_turnover: number;
  bank_loan_status?: string;

  // workforce details
  total_employees: number;
  women_employees: number;
};
