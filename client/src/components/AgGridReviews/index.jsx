"use strict";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import React from "react";
import { AgGridReact } from "ag-grid-react";
import { useDispatch } from "react-redux";
import { fetchReviews } from "../../redux/slices/ReviewsSlice/sllice";

export const AgGridReviews = () => {
  const dispatch = useDispatch();

  const [columnDefs, setColumnDefs] = React.useState([
    {
      field: "id",
      hide: true,
      cellRenderer: (props) => {
        if (props.value !== undefined) {
          return props.value;
        } else {
          return (
            <img src="https://www.ag-grid.com/example-assets/loading.gif" />
          );
        }
      },
    },
    { field: "login" },
    { field: "description", resizable: true },
    { field: "likes" },
    {
      field: "createdat",
      cellDataType: "dateString",
    },
    { field: "titlebook" },
  ]);

  const onGridReady = React.useCallback((params) => {
    const dataSource = {
      getRows: (params) => {
        dispatch(fetchReviews(params)).then((response) => {
          setTimeout(function () {
            params.successCallback(
              response.payload.rows,
              response.payload.count
            );
          }, 500);
        });
      },
    };
    params.api.setDatasource(dataSource);
  }, []);

  return (
    <div>
      <div className="ag-theme-alpine" style={{ height: 400 }}>
        <AgGridReact
          columnDefs={columnDefs}
          rowModelType="infinite"
          cacheOverflowSize="1"
          maxConcurrentDatasourceRequests="1"
          infiniteInitialRowCount="10"
          maxBlocksInCache="10"
          cacheBlockSize="10"
          onGridReady={onGridReady}
        />
      </div>
    </div>
  );
};
