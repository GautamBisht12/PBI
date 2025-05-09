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
import Industries from "./pages/Industries.jsx";
import Pricing from "./pages/Pricing.jsx";
import Services from "./pages/Services.jsx";

function App() {
  return (
    <>
      <ClerkLoading>
        <div className="flex justify-center items-center min-h-screen">
          <LoadingSpinner size="large" />
        </div>
      </ClerkLoading>

      <ClerkLoaded>
        <Routes>
          {/* Public routes with home page layout */}
          <Route element={<RootLayout />}>
            <Route element={<HomePageLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route
                path="/bookkeeping-accounting"
                element={<BookkeepingAccounting />}
              />
              {/* <Route path="/top-firms" element={<TopFirms />} /> */}
              <Route
                path="/Bookkeeping-services"
                element={<BookkeepingService />}
              />
              <Route path="/industries" element={<Industries />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/services" element={<Services />} />
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
      </ClerkLoaded>
    </>
  );
}

export default App;
