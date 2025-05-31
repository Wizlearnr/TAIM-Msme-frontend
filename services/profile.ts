import { BusinessProfile } from "@/models/business-profile";
import { useQuery } from "@tanstack/react-query";

// Mock API functions (replace with actual axios/react-query implementation)
const fetchBusinessProfiles = async (): Promise<BusinessProfile[]> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 800));

  return [
    {
      id: 1,
      name: "Green Tech Manufacturing",
      category: "Technology",
      description: "Sustainable technology solutions for modern manufacturing",
      icon: "cpu",
      token: "",
    },
    {
      id: 2,
      name: "Textile Solutions Pvt Ltd",
      category: "Textile",
      description: "Premium textile manufacturing and export services",
      icon: "building",
      token: "",
    },
    {
      id: 3,
      name: "Fresh Foods Processing",
      category: "Food & Beverages",
      description: "Organic food processing and distribution network",
      icon: "utensils",
      token: "",
    },
    {
      id: 4,
      name: "Digital Services Hub",
      category: "IT Services",
      description: "Comprehensive digital transformation solutions",
      icon: "globe",
      token: "",
    },
  ];
};

export const UseBusinessProfiles = () => {
  const query = useQuery({
    queryKey: ["businessProfiles"],
    queryFn: fetchBusinessProfiles,
  });

  return query;
};

export const createBusinessProfile = async (profileData: any) => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1200));

  return {
    data: {
      id: Date.now(),
      ...profileData,
      message: "Profile created successfully",
    },
  };
};
