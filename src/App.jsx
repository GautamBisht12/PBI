import { Routes, Route } from "react-router-dom";
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from "@clerk/clerk-react";

import { lazy, Suspense } from "react";

// Layouts
import HomePageLayout from "./layouts/HomePageLayout.jsx";

import RootLayout from "./layouts/RootLayout.jsx";

// Pages
const HomePage = lazy(() => import("./pages/HomePage.jsx"));
const AboutPage = lazy(() => import("./pages/AboutPage.jsx"));
const ContactPage = lazy(() => import("./pages/ContactPage.jsx"));

const Pricing = lazy(() => import("./pages/Pricing.jsx"));

// Services Pages
const Services = lazy(() => import("./pages/Services.jsx"));
const Bookkeeping = lazy(() => import("./pages/services/Bookkeeping.jsx"));
const FinanceManagement = lazy(() =>
  import("./pages/services/FinanceManagement.jsx")
);
const Accounting = lazy(() => import("./pages/services/Accounting.jsx"));

// Industry Pages
const Industry = lazy(() => import("./pages/Industry.jsx"));
const Construction = lazy(() => import("./pages/industry/Construction.jsx"));
const Ecommerce = lazy(() => import("./pages/industry/Ecommerce.jsx"));
const Healthcare = lazy(() => import("./pages/industry/Healthcare.jsx"));
const Hospitality = lazy(() => import("./pages/industry/Hospitality.jsx"));
const ManufacturingWholesale = lazy(() =>
  import("./pages/industry/ManufacturingWholesale.jsx")
);
const ProfitableBookkeeping = lazy(() =>
  import("./pages/ProfitableBookkeeping.jsx")
);

// Policies
const PrivacyPolicy = lazy(() => import("./pages/policies/PrivacyPolicy.jsx"));

// Other imports
const NotFoundPage = lazy(() => import("./pages/NotFoundPage.jsx"));

const LoadingSpinner = lazy(() => import("./components/ui/LoadingSpinner.jsx"));

function App() {
  return (
    <>
      <ClerkLoading>
        <div className="flex justify-center items-center min-h-screen">
          <LoadingSpinner size="large" />
        </div>
      </ClerkLoading>

      <ClerkLoaded>
        <Suspense
          fallback={
            <div className="flex justify-center items-center min-h-screen">
              <LoadingSpinner size="large" />
            </div>
          }
        >
          <Routes>
            {/* Public routes with home page layout */}
            <Route element={<RootLayout />}>
              <Route element={<HomePageLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />

                <Route path="/services/bookkeeping" element={<Bookkeeping />} />
                <Route path="/pricing" element={<Pricing />} />

                <Route path="/services" element={<Services />} />
                <Route
                  path="/services/finance"
                  element={<FinanceManagement />}
                />
                <Route path="/services/accounting" element={<Accounting />} />

                <Route path="/industry" element={<Industry />} />
                <Route
                  path="/industry/construction"
                  element={<Construction />}
                />
                <Route path="/industry/ecommerce" element={<Ecommerce />} />
                <Route path="/industry/healthcare" element={<Healthcare />} />
                <Route path="/industry/hospitality" element={<Hospitality />} />
                <Route
                  path="/industry/manufacturing"
                  element={<ManufacturingWholesale />}
                />

                {/* Policies  */}
                <Route
                  path="/profitable-bookkeeping-and-finance-management"
                  element={<ProfitableBookkeeping />}
                />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              </Route>

              {/* Protected dashboard routes */}
              {/* <Route
                path="/dashboard"
                element={
                  <>
                    <SignedIn>
                      <DashboardLayout />
                    </SignedIn>
                    <SignedOut>
                      <RedirectToSignIn />
                    </SignedOut>
                  </>
                }
              >
                <Route index element={<DashboardPage />} />
                <Route path="reports/:reportId" element={<ReportPage />} />
              </Route> */}

              {/* 404 page */}
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </Suspense>
      </ClerkLoaded>
    </>
  );
}

export default App;
