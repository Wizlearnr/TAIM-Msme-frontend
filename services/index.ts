// axiosConfig.js
import {
  getSelectedProfileFromLS,
  getSessionDataFromLS,
} from "@/utils/localstorage";
import axios from "axios";

const PUBLIC_ENDPOINTS = [
  {
    path: "/business-profiles",
    methods: ["GET", "POST"],
  },
];

// Create axios instance with base configuration
export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 1000 * 60 * 10, // 10 minutes timeout
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
    const session = getSessionDataFromLS();
    if (!selectedProfile) {
      console.error("No selected profile or session found in localStorage.");
      window.location.href = "/";
      return Promise.reject(new Error("No authentication token found"));
    }
    const token = selectedProfile.token;
    const businessId = selectedProfile.business_id;
    const sessionId = session?.session_id;

    // Add token to Authorization header if it exists
    if (token) {
      config.headers.token = token;
    }

    // Initialize params if it doesn't exist
    if (!config.params) {
      config.params = {};
    }

    // Add business ID to query parameters if it exists
    if (businessId) {
      config.params.business_id = businessId;
    }

    if (sessionId) {
      config.params.session_id = sessionId;
    }

    return config;
  },
  (error) => {
    console.error("Request interceptor error:", error);
    return Promise.reject(error);
  }
);
