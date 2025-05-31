import { BusinessProfile } from "@/models/business-profile";
import { useQuery } from "@tanstack/react-query";

// Mock API functions (replace with actual axios/react-query implementation)
const fetchBusinessProfiles = async (): Promise<BusinessProfile[]> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 800));

  return [
    {
      id: 1,
      token: "token_1",
      icon: "building",
      companyName: "Acme Industries",
      contactPerson: "Jane Doe",
      email: "jane@acme.com",
      phoneNumber: "+91 9876543210",
      sector: "Manufacturing",
      subSector: "Automobile",
      enterpriseType: "Small",
      address: "123 Industrial Area",
      city: "Mumbai",
      pincode: "400001",
      assetsOwned: "Machinery, Vehicles",
      annualTurnover: "2 Crore",
      bankLoanStatus: "Approved",
      employeeCount: "50",
      womenEmployees: "10",
      yearsOfOperation: "5",
      commencementDate: "2019-01-01",
      legalEntityType: "Private Limited",
      gstNumber: "27ABCDE1234F1Z5",
      promoters: [
        {
          name: "Jane Doe",
          age: "38",
          aadhar: "123412341234",
          pan: "ABCDE1234F",
          gender: "Female",
          category: "General",
          sharePercentage: "60",
        },
        {
          name: "John Smith",
          age: "40",
          aadhar: "567856785678",
          pan: "FGHIJ5678K",
          gender: "Male",
          category: "OBC",
          sharePercentage: "40",
        },
      ],
    },
    {
      id: 2,
      token: "token_2",
      icon: "cpu",
      companyName: "Bright Future Tech",
      contactPerson: "Ravi Kumar",
      email: "ravi@brightfuture.com",
      phoneNumber: "+91 9123456780",
      sector: "Technology",
      subSector: "Software",
      enterpriseType: "Micro",
      address: "456 Tech Park",
      city: "Bangalore",
      pincode: "560001",
      assetsOwned: "Computers, Servers",
      annualTurnover: "50 Lakh",
      bankLoanStatus: "Not Applied",
      employeeCount: "12",
      womenEmployees: "4",
      yearsOfOperation: "2",
      commencementDate: "2022-03-15",
      legalEntityType: "Partnership",
      gstNumber: "29FGHIJ5678K2Z6",
      promoters: [
        {
          name: "Ravi Kumar",
          age: "32",
          aadhar: "234523452345",
          pan: "KLMNO2345P",
          gender: "Male",
          category: "SC",
          sharePercentage: "100",
        },
      ],
    },
    {
      id: 3,
      token: "token_3",
      icon: "utensils",
      companyName: "GreenLeaf Organics",
      contactPerson: "Priya Singh",
      email: "priya@greenleaf.com",
      phoneNumber: "+91 9988776655",
      sector: "Agriculture",
      subSector: "Organic Farming",
      enterpriseType: "Medium",
      address: "789 Farm Lane",
      city: "Pune",
      pincode: "411001",
      assetsOwned: "Land, Tractors",
      annualTurnover: "5 Crore",
      bankLoanStatus: "Pending",
      employeeCount: "80",
      womenEmployees: "30",
      yearsOfOperation: "8",
      commencementDate: "2016-07-10",
      legalEntityType: "LLP",
      gstNumber: "27KLMNO2345P3Z7",
      promoters: [
        {
          name: "Priya Singh",
          age: "36",
          aadhar: "345634563456",
          pan: "PQRST3456Q",
          gender: "Female",
          category: "ST",
          sharePercentage: "70",
        },
        {
          name: "Amit Patel",
          age: "39",
          aadhar: "678967896789",
          pan: "UVWXY6789R",
          gender: "Male",
          category: "General",
          sharePercentage: "30",
        },
      ],
    },
    {
      id: 4,
      token: "token_4",
      icon: "globe",
      companyName: "Urban Style Fashions",
      contactPerson: "Meera Nair",
      email: "meera@urbanstyle.com",
      phoneNumber: "+91 9001122334",
      sector: "Textiles",
      subSector: "Apparel",
      enterpriseType: "Small",
      address: "321 Fashion Street",
      city: "Delhi",
      pincode: "110001",
      assetsOwned: "Sewing Machines, Showroom",
      annualTurnover: "1 Crore",
      bankLoanStatus: "Rejected",
      employeeCount: "25",
      womenEmployees: "18",
      yearsOfOperation: "3",
      commencementDate: "2021-05-20",
      legalEntityType: "Sole Proprietorship",
      gstNumber: "07PQRST3456Q4Z8",
      promoters: [
        {
          name: "Meera Nair",
          age: "29",
          aadhar: "456745674567",
          pan: "ZABCD4567S",
          gender: "Female",
          category: "General",
          sharePercentage: "100",
        },
      ],
    },
  ];
};

export const useBusinessProfiles = () => {
  const query = useQuery({
    queryKey: ["businessProfiles"],
    queryFn: fetchBusinessProfiles,
  });

  return query;
};

export const createBusinessProfile = async (profileData: BusinessProfile) => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1200));

  return profileData;
};
