"use strict";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import React from "react";
import { AgGridReact } from "ag-grid-react";
import { useDispatch } from "react-redux";
import { fetchBooks } from "../../redux/slices/BookSlice/slice";

export const AgGridBooks = () => {
  const dispatch = useDispatch();
  const [selectedBook, setSelectedBook] = React.useState(null);
  const [columnDefs, setColumnDefs] = React.useState([
    {
      field: "id",
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
    { field: "pagecount" },
    { field: "price" },
    {
      field: "release",
      cellDataType: "dateString",
    },
    { field: "title" },
  ]);

  const onGridReady = React.useCallback((params) => {
    const dataSource = {
      getRows: (params) => {
        dispatch(fetchBooks(params)).then((response) => {
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

  const onSelectionChanged = (params) => {
    const selectedRows = params.api.getSelectedRows();
    setSelectedBook(selectedRows);
  };

  const deleteBook = () => {
    if (!selectedBook) {
      alert("Необходимо выделить книгу в таблтце, чтобы ее удалить.");
      return;
    }
    console.log(selectedBook.title);
    if (
      window.confirm(`Вы точно хотите удалить книгу ${selectedBook.title}?`)
    ) {
      alert("Book deleted");
    }
  };

  return (
    <div className="mb-10">
      <div className="flex gap-15 mb-10">
        <button className="bttn bttn-create">Добавить запись</button>
        <button className="bttn bttn-update">Изменить запись</button>
        <button onClick={deleteBook} className="bttn bttn-delete">
          Удалить запись
        </button>
      </div>
      <div className="ag-theme-alpine" style={{ height: 400 }}>
        <AgGridReact
          columnDefs={columnDefs}
          rowSelection="single"
          onSelectionChanged={onSelectionChanged}
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
