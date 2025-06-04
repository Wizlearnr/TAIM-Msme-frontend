import { BusinessProfile } from "@/models/business-profile";

export const defaultFormData: BusinessProfile = {
  business_id: 0,
  token: "",
  icon: "",
  business_name: "",
  contact_person: "",
  email: "",
  phone: "",
  sector: "",
  sub_sector: "",
  enterprise_type: "",
  address: "",
  city: "",
  pincode: "",
  total_assets: "",
  annual_turnover: "",
  bankLoanStatus: "",
  total_employees: "",
  women_employees: "",
  years_operation: "",
  registration_date: "",
  legal_entity_type: "",
  gst_number: "",
  promoters: [],
};


export const SECTOROPTIONS = [
  "Agriculture & Allied Activities",
  "Manufacturing",
  "Food & Beverage",
  "Textiles & Apparel",
  "Construction & Real Estate",
  "Retail & Wholesale Trade",
  "Transportation & Logistics",
  "Healthcare & Social Services",
  "Education & Training",
  "Financial Services",
  "Information & Communication",
  "Energy & Utilities",
  "Tourism & Hospitality",
  "Arts, Entertainment & Recreation",
  "Other Services"
];

export const SUBSECTOROPTIONS = [
  "Crop Production & Horticulture",
  "Animal Husbandry & Fisheries",
  "Food Processing & Preservation",
  "Textile Manufacturing & Garmenting",
  "Building Construction & Infrastructure",
  "Automobile & Components",
  "Retail Stores & E-commerce",
  "Warehousing & Supply Chain",
  "Passenger & Goods Transport",
  "Medical Services & Diagnostics",
  "Education Services",
  "Banking & Insurance",
  "Power Generation & Renewable Energy",
  "Hotels, Restaurants & Catering",
  "Personal & Community Services",
  "Others",
]

export const ENTERPRISETYPES = [
  "Micro Enterprise",
  "Small Enterprise",
  "Medium Enterprise",
  "Large Enterprise",
  "Startup",
  "Government Business Enterprise (GBE)",
  "Public Sector Undertaking (PSU)",
  "Non-Profit Organization",
  "Others"
];

export const LEGALENTITYTYPES = [
  "Sole Proprietorship",
  "Partnership",
  "LLP",
  "Private Limited Company",
  "Public Limited Company",
  "One Person Company",
  "Trust",
  "Cooperative Society",
  "Joint Venture",
  "Others"
];
