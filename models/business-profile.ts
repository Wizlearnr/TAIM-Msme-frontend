export type Promoter = {
  name: string;
  age: string;
  aadhar: string;
  pan: string;
  gender: string;
  category: string;
  sharePercentage: string;
};


const tempBusinessProfile:BusinessProfile = {
  "business_name": "Tech Solutions Ltd",
    "contact_person": "John Doe",
    "email": "john@techsolutions.com",
    "phone": "9876543210",
    "address": null,
    "sector": "Technology",
    "sub_sector": "Software",
    "enterprise_type": "Small",
    "legal_entity_type": "Private Limited",
    "gst_number": "22AAAAA0000A1Z5",
    "udyam_registration_number": "UDYAM-XX-00-0000000",
    "city": "Bangalore",
    "state": "Karnataka",
    "pincode": "560001",
    "annual_turnover": 5000000,
    "total_employees": 50,
    "women_employees": 20,
    "total_assets": 2000000,
    "total_liabilities": 1000000,
    "total_revenue": 5000000,
    "investment_amount": 3000000,
    "registration_date": "2024-01-01",
    "years_operation": 2.5,
    "business_id": 3,
    "token": "7c46cbcb-ca57-4fab-9e2a-90f1cbb47e75"
}


export type BusinessProfile = {
  business_id: number;
  token: string;
  icon?: string;
  business_name: string;
  contact_person: string;
  email: string;
  phone: string;
  sector: string;
  sub_sector: string;
  enterprise_type: string;
  address: string | null;
  udyam_registration_number: string; // TODO: to be added in FE
  city: string;
  state: string;
  pincode: string;
  total_assets: number;
  total_liabilities: number;
  total_revenue: number;
  investment_amount: number;
  annual_turnover: number;
  bankLoanStatus?: string;
  total_employees: number;
  women_employees: number;
  years_operation: number;
  registration_date: string;
  legal_entity_type: string;
  gst_number: string;
  promoters?: Promoter[];
};
