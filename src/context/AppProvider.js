import React from "react";
import BrandProvider from "./brand/brandState";
import WarehouseProvider from "./warehouse/StateAPI";
import PartProvider from "./parts/PartState";

const AppProvider = ({ children }) => {
  return (
    <BrandProvider>
      <WarehouseProvider>
        <PartProvider>{children}</PartProvider>
      </WarehouseProvider>
    </BrandProvider>
  );
};

export default AppProvider;
