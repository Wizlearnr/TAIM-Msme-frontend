// axiosConfig.js
import { getSelectedProfileFromLS } from "@/utils/localstorage";
import axios from "axios";

const PUBLIC_ENDPOINTS = [
  {
    path: "/business-profiles",
    methods: ["GET"],
  },
];

// Create axios instance with base configuration
export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 10000, // 10 seconds timeout
  headers: {
    "Content-Type": "application/json",
  },
});

const isPublicEndpoint = (url: string, method = "GET") => {
  return PUBLIC_ENDPOINTS.some((endpoint) => {
    const urlMatches = url.includes(endpoint.path);
    const methodMatches = endpoint.methods.includes(method.toUpperCase());
    return urlMatches && methodMatches;
  });
};

// Request interceptor to add token and business ID to every request
apiClient.interceptors.request.use(
  (config) => {
    if (isPublicEndpoint(config.url || "", config.method)) {
      return config;
    }

    // Get token and business ID from localStorage
    const selectedProfile = getSelectedProfileFromLS();
    if (!selectedProfile) {
      console.error("No selected profile found in localStorage.");
      window.location.href = "/";
      return Promise.reject(new Error("No authentication token found"));
    }
    const token = selectedProfile.token;
    const businessId = selectedProfile.business_id;

    // Add token to Authorization header if it exists
    if (token) {
      config.headers.token = token;
    }

    // Add business ID to query parameters if it exists
    if (businessId) {
      // Initialize params if it doesn't exist
      if (!config.params) {
        config.params = {};
      }
      config.params.business_id = businessId;
    }

    return config;
  },
  (error) => {
    console.error("Request interceptor error:", error);
    return Promise.reject(error);
  }
);
