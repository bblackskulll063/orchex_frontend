import React from "react";
import BrandProvider from "./brand/brandState";
import WarehouseProvider from "./warehouse/StateAPI";

const AppProvider = ({ children }) => {
  return (
    <BrandProvider>
      <WarehouseProvider>{children}</WarehouseProvider>
    </BrandProvider>
  );
};

export default AppProvider;
