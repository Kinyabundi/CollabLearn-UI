import { Toaster } from "@/components/ui/sonner";
import Web3ContextProvider from "@/context/Web3Provider";
import router from "@/router";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";

const AppProvider = () => {
  return (
    <HelmetProvider>
      <Web3ContextProvider>
        <RouterProvider router={router} />
      </Web3ContextProvider>
      <Toaster />
    </HelmetProvider>
  );
};

export default AppProvider;
