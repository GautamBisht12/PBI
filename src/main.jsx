import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";
import App from "./App.jsx";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";

// Use a public key for demo purposes
// In production, use environment variables
const clerkPubKey =
  "pk_test_YWJvdmUtZ2xvd3dvcm0tODMuY2xlcmsuYWNjb3VudHMuZGV2JA";

if (!clerkPubKey) {
  throw new Error("Missing Publishable Key");
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={clerkPubKey}>
      <HelmetProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </HelmetProvider>
    </ClerkProvider>
  </StrictMode>
);
