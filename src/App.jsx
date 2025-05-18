import { Routes, Route } from "react-router-dom";
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from "@clerk/clerk-react";

import RootLayout from "./layouts/RootLayout.jsx";
import HomePageLayout from "./layouts/HomePageLayout.jsx";
import DashboardLayout from "./layouts/DashboardLayout.jsx";

import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import DashboardPage from "./pages/DashboardPage.jsx";
import ReportPage from "./pages/ReportPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import LoadingSpinner from "./components/ui/LoadingSpinner.jsx";
import BookkeepingAccounting from "./pages/BookkeepingAccounting.jsx";
import BookkeepingService from "./pages/BookkeepingServices.jsx";
// import Industries from "./pages/Industries.jsx";
import Pricing from "./pages/Pricing.jsx";
import Services from "./pages/Services.jsx";
import Industry from "./pages/Industry.jsx";
import FinanceManagement from "./pages/FinanceManagement.jsx";
import Construction from "./pages/industry/Construction.jsx";
import Ecommerce from "./pages/industry/Ecommerce.jsx";
import Healthcare from "./pages/industry/Healthcare.jsx";
import Hospitality from "./pages/industry/Hospitality.jsx";
import ManufacturingWholesale from "./pages/industry/ManufacturingWholesale.jsx";

function App() {
  return (
    <>
{/*       <ClerkLoading>
        <div className="flex justify-center items-center min-h-screen">
          <LoadingSpinner size="large" />
        </div>
      </ClerkLoading> */}

{/*       <ClerkLoaded> */}
        <Routes>
          {/* Public routes with home page layout */}
          <Route element={<RootLayout />}>
            <Route element={<HomePageLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />

              <Route
                path="/services/bookkeeping"
                element={<BookkeepingService />}
              />
              <Route path="/pricing" element={<Pricing />} />

              <Route path="/services" element={<Services />} />
              <Route path="/services/finance" element={<FinanceManagement />} />
              <Route
                path="/services/accounting"
                element={<BookkeepingAccounting />}
              />

              <Route path="/industry" element={<Industry />} />
              <Route path="/industry/construction" element={<Construction />} />
              <Route path="/industry/ecommerce" element={<Ecommerce />} />
              <Route path="/industry/healthcare" element={<Healthcare />} />
              <Route path="/industry/hospitality" element={<Hospitality />} />
              <Route
                path="/industry/manufacturing"
                element={<ManufacturingWholesale />}
              />
            </Route>

            {/* Protected dashboard routes */}
            <Route
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
            </Route>

            {/* 404 page */}
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
{/*       </ClerkLoaded> */}
    </>
  );
}

export default App;
