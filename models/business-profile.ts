export type Promoter = {
  name: string;
  age: string;
  aadhar: string;
  pan: string;
  gender: string;
  category: string;
  sharePercentage: string;
};

export type BusinessProfile = {
  id: number;
  token: string;
  icon: string;

  companyName: string;
  contactPerson: string;
  email: string;
  phoneNumber: string;
  sector: string;
  subSector: string;
  enterpriseType: string;
  address: string;
  city: string;
  pincode: string;
  assetsOwned: string;
  annualTurnover: string;
  bankLoanStatus: string;
  employeeCount: string;
  womenEmployees: string;
  yearsOfOperation: string;
  commencementDate: string;
  legalEntityType: string;
  gstNumber: string;
  promoters: Promoter[];
};
