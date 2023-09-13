import React from "react";
import { AgGridBooks, AgGridReviews } from "../../components";

export const TablesPage = () => {
  return (
    <div className="container">
      <AgGridBooks />
      <AgGridReviews />
    </div>
  );
};
