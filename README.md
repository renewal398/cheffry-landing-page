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

