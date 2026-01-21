# Campus Rent Frontend - Complete File Structure

## 1. package.json
```json
{
  "name": "campus-rent-frontend",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.21.0",
    "lucide-react": "^0.263.1",
    "axios": "^1.6.5"
  },
  "devDependencies": {
    "@types/react": "^18.2.43",
    "@types/react-dom": "^18.2.17",
    "@typescript-eslint/eslint-plugin": "^6.14.0",
    "@typescript-eslint/parser": "^6.14.0",
    "@vitejs/plugin-react": "^4.2.1",
    "autoprefixer": "^10.4.16",
    "eslint": "^8.55.0",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.5",
    "postcss": "^8.4.32",
    "tailwindcss": "^3.4.0",
    "typescript": "^5.2.2",
    "vite": "^5.0.8"
  }
}
```

## 2. tsconfig.json
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@/components/*": ["./src/components/*"],
      "@/pages/*": ["./src/pages/*"],
      "@/services/*": ["./src/services/*"],
      "@/hooks/*": ["./src/hooks/*"],
      "@/types/*": ["./src/types/*"],
      "@/utils/*": ["./src/utils/*"],
      "@/context/*": ["./src/context/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

## 3. tsconfig.node.json
```json
{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true
  },
  "include": ["vite.config.ts"]
}
```

## 4. vite.config.ts
```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@/components': path.resolve(__dirname, './src/components'),
      '@/pages': path.resolve(__dirname, './src/pages'),
      '@/services': path.resolve(__dirname, './src/services'),
      '@/hooks': path.resolve(__dirname, './src/hooks'),
      '@/types': path.resolve(__dirname, './src/types'),
      '@/utils': path.resolve(__dirname, './src/utils'),
      '@/context': path.resolve(__dirname, './src/context')
    }
  },
  server: {
    port: 3000,
    host: true
  }
});
```

## 5. tailwind.config.js
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        secondary: {
          50: '#fdf4ff',
          100: '#fae8ff',
          200: '#f5d0fe',
          300: '#f0abfc',
          400: '#e879f9',
          500: '#d946ef',
          600: '#c026d3',
          700: '#a21caf',
          800: '#86198f',
          900: '#701a75',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
```

## 6. postcss.config.js
```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

## 7. .env.example
```env
# API Configuration
VITE_API_BASE_URL=http://localhost:5000/api

# Paystack Configuration
VITE_PAYSTACK_PUBLIC_KEY=pk_test_xxxxxxxxxxxxxxxxxxxxx

# Application Configuration
VITE_APP_NAME=Campus Rent
VITE_APP_URL=http://localhost:3000
```

## 8. .gitignore
```
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

# Environment variables
.env
.env.local
.env.production
```

## 9. index.html
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Campus Rent - Find your perfect student accommodation" />
    <meta name="keywords" content="student housing, campus rent, accommodation, student apartments" />
    <title>Campus Rent - Student Housing Made Easy</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

## 10. src/main.tsx
```typescript
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
```

## 11. src/App.tsx
```typescript
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastProvider } from '@/context/ToastContext';
import Layout from '@/components/layout/Layout';
import HomePage from '@/pages/HomePage';
import ListingDetailPage from '@/pages/ListingDetailPage';
import PaymentSuccessPage from '@/pages/PaymentSuccessPage';
import NotFoundPage from '@/pages/NotFoundPage';

const App: React.FC = () => {
  return (
    <Router>
      <ToastProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/listing/:id" element={<ListingDetailPage />} />
            <Route path="/payment/success" element={<PaymentSuccessPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </ToastProvider>
    </Router>
  );
};

export default App;
```

## 12. src/styles/index.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  * {
    @apply border-border;
  }
  
  body {
    @apply bg-gray-50 text-gray-900 font-sans;
  }

  html {
    scroll-behavior: smooth;
  }
}

@layer components {
  .container-custom {
    @apply mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl;
  }

  .btn-primary {
    @apply bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed;
  }

  .btn-secondary {
    @apply bg-gray-200 hover:bg-gray-300 text-gray-900 font-medium py-2 px-4 rounded-lg transition-colors duration-200;
  }

  .btn-outline {
    @apply border-2 border-primary-600 text-primary-600 hover:bg-primary-50 font-medium py-2 px-4 rounded-lg transition-colors duration-200;
  }

  .input-field {
    @apply w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all duration-200;
  }

  .card {
    @apply bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300;
  }
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}

/* Loading animation */
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.animate-spin {
  animation: spin 1s linear infinite;
}

/* Fade in animation */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in {
  animation: fadeIn 0.3s ease-in-out;
}
```

## 13. src/types/listing.types.ts
```typescript
export type AvailabilityStatus = 'available' | 'rented' | 'pending';

export interface Listing {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  images: string[];
  availability_status: AvailabilityStatus;
  inspection_fee: number;
  inspection_enabled: boolean;
  landlord_whatsapp: string;
  rooms: number;
  bathrooms: number;
  amenities: string[];
  created_at?: string;
  updated_at?: string;
}

export interface ListingResponse {
  success: boolean;
  data: Listing[];
  total: number;
  page: number;
  limit: number;
}

export interface SingleListingResponse {
  success: boolean;
  data: Listing;
}
```

## 14. src/types/payment.types.ts
```typescript
export type PaymentStatus = 'idle' | 'pending' | 'success' | 'failed';

export interface PaymentInitializeRequest {
  listingId: string;
  email: string;
  amount: number;
}

export interface PaymentInitializeResponse {
  success: boolean;
  message: string;
  data: {
    authorization_url: string;
    access_code: string;
    reference: string;
  };
}

export interface PaymentVerifyResponse {
  success: boolean;
  message: string;
  data: {
    reference: string;
    amount: number;
    status: string;
    paid_at: string;
    listing_id: string;
  };
}

export interface PaystackResponse {
  status: boolean;
  message: string;
  reference: string;
}
```

## 15. src/types/filter.types.ts
```typescript
export interface Filters {
  location: string;
  minPrice: number;
  maxPrice: number;
  rooms: number;
  availability: string;
  search: string;
}

export type FilterKey = keyof Filters;
```

## 16. src/utils/constants.ts
```typescript
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';
export const PAYSTACK_PUBLIC_KEY = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY || '';
export const APP_NAME = import.meta.env.VITE_APP_NAME || 'Campus Rent';
export const APP_URL = import.meta.env.VITE_APP_URL || 'http://localhost:3000';

export const AVAILABILITY_STATUS = {
  AVAILABLE: 'available',
  RENTED: 'rented',
  PENDING: 'pending',
} as const;

export const PAYMENT_STATUS = {
  IDLE: 'idle',
  PENDING: 'pending',
  SUCCESS: 'success',
  FAILED: 'failed',
} as const;

export const LOCATIONS = [
  'Yaba, Lagos',
  'Akoka, Lagos',
  'Surulere, Lagos',
  'Ikeja, Lagos',
  'Victoria Island, Lagos',
  'Lekki, Lagos',
  'Ikoyi, Lagos',
  'Ajah, Lagos',
];

export const PRICE_RANGES = [
  { label: 'Under ₦200k', min: 0, max: 200000 },
  { label: '₦200k - ₦400k', min: 200000, max: 400000 },
  { label: '₦400k - ₦600k', min: 400000, max: 600000 },
  { label: '₦600k - ₦800k', min: 600000, max: 800000 },
  { label: 'Above ₦800k', min: 800000, max: Infinity },
];

export const ROOM_OPTIONS = [1, 2, 3, 4, 5];

export const MESSAGES = {
  ERROR: {
    FETCH_LISTINGS: 'Failed to fetch listings. Please try again.',
    FETCH_LISTING: 'Failed to fetch listing details. Please try again.',
    PAYMENT_INIT: 'Failed to initialize payment. Please try again.',
    PAYMENT_VERIFY: 'Failed to verify payment. Please try again.',
    NETWORK: 'Network error. Please check your connection.',
  },
  SUCCESS: {
    PAYMENT: 'Payment successful! Redirecting to WhatsApp...',
  },
};
```

## 17. src/utils/format.utils.ts
```typescript
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0,
  }).format(amount);
};

export const formatDate = (date: string): string => {
  return new Intl.DateTimeFormat('en-NG', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date));
};

export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

export const generateWhatsAppUrl = (
  phone: string,
  message: string
): string => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encodedMessage}`;
};

export const getWhatsAppMessage = (
  listingTitle: string,
  location: string,
  paymentReference?: string
): string => {
  let message = `Hello, I am interested in the property: ${listingTitle} located at ${location}.`;
  
  if (paymentReference) {
    message += ` I have completed the inspection payment. Reference: ${paymentReference}`;
  }
  
  return message;
};
```

## 18. src/utils/validation.utils.ts
```typescript
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^(\+234|234|0)[789]\d{9}$/;
  return phoneRegex.test(phone);
};

export const sanitizeInput = (input: string): string => {
  return input.trim().replace(/<[^>]*>?/gm, '');
};

export const isValidPrice = (price: number): boolean => {
  return price > 0 && Number.isFinite(price);
};
```

---

### Continue to Part 2 for remaining files (Services, Hooks, Context, Components, Pages)...

// ============================================
// PART 2: SERVICES, HOOKS, CONTEXT
// ============================================

// ============================================
// 19. src/services/api.service.ts
// ============================================
import axios, { AxiosInstance, AxiosError } from 'axios';
import { API_BASE_URL } from '@/utils/constants';
import type { Filters } from '@/types/filter.types';
import type { 
  ListingResponse, 
  SingleListingResponse 
} from '@/types/listing.types';

class ApiService {
  private api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: API_BASE_URL,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Request interceptor
    this.api.interceptors.request.use(
      (config) => {
        // Add any auth tokens here if needed in future
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // Response interceptor
    this.api.interceptors.response.use(
      (response) => response,
      (error: AxiosError) => {
        if (error.response) {
          // Server responded with error
          console.error('API Error:', error.response.data);
        } else if (error.request) {
          // Request made but no response
          console.error('Network Error:', error.message);
        } else {
          console.error('Error:', error.message);
        }
        return Promise.reject(error);
      }
    );
  }

  async getListings(filters?: Partial<Filters>): Promise<ListingResponse> {
    const params = new URLSearchParams();
    
    if (filters?.location) params.append('location', filters.location);
    if (filters?.minPrice) params.append('minPrice', filters.minPrice.toString());
    if (filters?.maxPrice && filters.maxPrice !== Infinity) {
      params.append('maxPrice', filters.maxPrice.toString());
    }
    if (filters?.rooms) params.append('rooms', filters.rooms.toString());
    if (filters?.availability) params.append('availability', filters.availability);
    if (filters?.search) params.append('search', filters.search);

    const response = await this.api.get<ListingResponse>(`/listings?${params}`);
    return response.data;
  }

  async getListing(id: string): Promise<SingleListingResponse> {
    const response = await this.api.get<SingleListingResponse>(`/listings/${id}`);
    return response.data;
  }

  async healthCheck(): Promise<boolean> {
    try {
      const response = await this.api.get('/health');
      return response.status === 200;
    } catch {
      return false;
    }
  }
}

export const apiService = new ApiService();

// ============================================
// 20. src/services/payment.service.ts
// ============================================
import axios from 'axios';
import { API_BASE_URL, PAYSTACK_PUBLIC_KEY } from '@/utils/constants';
import type {
  PaymentInitializeRequest,
  PaymentInitializeResponse,
  PaymentVerifyResponse,
  PaystackResponse,
} from '@/types/payment.types';

class PaymentService {
  async initializePayment(
    data: PaymentInitializeRequest
  ): Promise<PaymentInitializeResponse> {
    const response = await axios.post<PaymentInitializeResponse>(
      `${API_BASE_URL}/payment/initialize`,
      data
    );
    return response.data;
  }

  async verifyPayment(reference: string): Promise<PaymentVerifyResponse> {
    const response = await axios.get<PaymentVerifyResponse>(
      `${API_BASE_URL}/payment/verify/${reference}`
    );
    return response.data;
  }

  openPaystackPopup(
    email: string,
    amount: number,
    reference: string,
    onSuccess: (response: PaystackResponse) => void,
    onClose: () => void
  ): void {
    // @ts-ignore - Paystack is loaded via script tag
    const handler = window.PaystackPop.setup({
      key: PAYSTACK_PUBLIC_KEY,
      email: email,
      amount: amount * 100, // Convert to kobo
      ref: reference,
      currency: 'NGN',
      onClose: onClose,
      callback: (response: PaystackResponse) => {
        onSuccess(response);
      },
    });

    handler.openIframe();
  }

  loadPaystackScript(): Promise<void> {
    return new Promise((resolve, reject) => {
      // Check if script already loaded
      // @ts-ignore
      if (window.PaystackPop) {
        resolve();
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://js.paystack.co/v1/inline.js';
      script.async = true;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error('Failed to load Paystack script'));
      document.head.appendChild(script);
    });
  }
}

export const paymentService = new PaymentService();

// ============================================
// 21. src/services/whatsapp.service.ts
// ============================================
import { generateWhatsAppUrl, getWhatsAppMessage } from '@/utils/format.utils';

class WhatsAppService {
  redirectToWhatsApp(
    phone: string,
    listingTitle: string,
    location: string,
    paymentReference?: string
  ): void {
    const message = getWhatsAppMessage(listingTitle, location, paymentReference);
    const url = generateWhatsAppUrl(phone, message);
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  isWhatsAppAvailable(): boolean {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  }
}

export const whatsAppService = new WhatsAppService();

// ============================================
// 22. src/hooks/useListings.ts
// ============================================
import { useState, useEffect, useCallback } from 'react';
import { apiService } from '@/services/api.service';
import type { Listing } from '@/types/listing.types';
import type { Filters } from '@/types/filter.types';
import { MESSAGES } from '@/utils/constants';

interface UseListingsReturn {
  listings: Listing[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
  applyFilters: (filters: Partial<Filters>) => Promise<void>;
}

export const useListings = (): UseListingsReturn => {
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentFilters, setCurrentFilters] = useState<Partial<Filters>>({});

  const fetchListings = useCallback(async (filters?: Partial<Filters>) => {
    setLoading(true);
    setError(null);

    try {
      const response = await apiService.getListings(filters);
      setListings(response.data);
    } catch (err) {
      setError(MESSAGES.ERROR.FETCH_LISTINGS);
      console.error('Error fetching listings:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  const applyFilters = useCallback(async (filters: Partial<Filters>) => {
    setCurrentFilters(filters);
    await fetchListings(filters);
  }, [fetchListings]);

  const refetch = useCallback(async () => {
    await fetchListings(currentFilters);
  }, [fetchListings, currentFilters]);

  useEffect(() => {
    fetchListings();
  }, [fetchListings]);

  return {
    listings,
    loading,
    error,
    refetch,
    applyFilters,
  };
};

// ============================================
// 23. src/hooks/usePayment.ts
// ============================================
import { useState, useCallback, useEffect } from 'react';
import { paymentService } from '@/services/payment.service';
import type { PaymentStatus, PaystackResponse } from '@/types/payment.types';
import { MESSAGES } from '@/utils/constants';

interface UsePaymentProps {
  listingId: string;
  amount: number;
  onSuccess?: (reference: string) => void;
  onError?: (error: string) => void;
}

interface UsePaymentReturn {
  status: PaymentStatus;
  error: string | null;
  initiatePayment: (email: string) => Promise<void>;
  verifyPayment: (reference: string) => Promise<boolean>;
  resetPayment: () => void;
}

export const usePayment = ({
  listingId,
  amount,
  onSuccess,
  onError,
}: UsePaymentProps): UsePaymentReturn => {
  const [status, setStatus] = useState<PaymentStatus>('idle');
  const [error, setError] = useState<string | null>(null);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    paymentService
      .loadPaystackScript()
      .then(() => setScriptLoaded(true))
      .catch(() => {
        setError('Failed to load payment system');
      });
  }, []);

  const initiatePayment = useCallback(
    async (email: string) => {
      if (!scriptLoaded) {
        setError('Payment system not ready. Please try again.');
        return;
      }

      setStatus('pending');
      setError(null);

      try {
        const response = await paymentService.initializePayment({
          listingId,
          email,
          amount,
        });

        if (response.success) {
          // Open Paystack popup
          paymentService.openPaystackPopup(
            email,
            amount,
            response.data.reference,
            async (paystackResponse: PaystackResponse) => {
              // Payment successful
              const verified = await verifyPayment(paystackResponse.reference);
              if (verified) {
                setStatus('success');
                onSuccess?.(paystackResponse.reference);
              } else {
                setStatus('failed');
                setError('Payment verification failed');
                onError?.('Payment verification failed');
              }
            },
            () => {
              // User closed popup
              setStatus('idle');
            }
          );
        } else {
          throw new Error(response.message);
        }
      } catch (err) {
        setStatus('failed');
        const errorMessage = err instanceof Error ? err.message : MESSAGES.ERROR.PAYMENT_INIT;
        setError(errorMessage);
        onError?.(errorMessage);
      }
    },
    [listingId, amount, onSuccess, onError, scriptLoaded]
  );

  const verifyPayment = useCallback(async (reference: string): Promise<boolean> => {
    try {
      const response = await paymentService.verifyPayment(reference);
      return response.success && response.data.status === 'success';
    } catch (err) {
      console.error('Payment verification error:', err);
      return false;
    }
  }, []);

  const resetPayment = useCallback(() => {
    setStatus('idle');
    setError(null);
  }, []);

  return {
    status,
    error,
    initiatePayment,
    verifyPayment,
    resetPayment,
  };
};

// ============================================
// 24. src/hooks/useToast.ts
// ============================================
import { useContext } from 'react';
import { ToastContext } from '@/context/ToastContext';

export const useToast = () => {
  const context = useContext(ToastContext);
  
  if (!context) {
    throw new Error('useToast must be used within ToastProvider');
  }
  
  return context;
};

// ============================================
// 25. src/context/ToastContext.tsx
// ============================================
import React, { createContext, useState, useCallback, ReactNode } from 'react';

export type ToastType = 'success' | 'error' | 'info' | 'warning';

interface Toast {
  id: string;
  message: string;
  type: ToastType;
}

interface ToastContextType {
  toasts: Toast[];
  showToast: (message: string, type?: ToastType) => void;
  removeToast: (id: string) => void;
}

export const ToastContext = createContext<ToastContextType | undefined>(undefined);

interface ToastProviderProps {
  children: ReactNode;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = useCallback((message: string, type: ToastType = 'info') => {
    const id = Date.now().toString();
    const newToast: Toast = { id, message, type };
    
    setToasts((prev) => [...prev, newToast]);

    // Auto remove after 5 seconds
    setTimeout(() => {
      removeToast(id);
    }, 5000);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ toasts, showToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
};
