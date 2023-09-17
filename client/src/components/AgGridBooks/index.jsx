"use strict";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import React from "react";
import { AgGridReact } from "ag-grid-react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBook, fetchBooks } from "../../redux/slices/BookSlice/slice";
import { selectReloadAg } from "../../redux/slices/ConstsSlice/selectors";
import { setReloadAg } from "../../redux/slices/ConstsSlice/slice";
import { BookModal } from "../BookModal";

export const AgGridBooks = () => {
  const dispatch = useDispatch();
  const [isVisibleWarning, setIsVisibleWarning] = React.useState(false);
  const [isVisibleModal, setIsVisibleModal] = React.useState(false);
  const [isUpdate, setIsUpdate] = React.useState(false);
  const [modalData, setModalData] = React.useState([]);
  const gridRef = React.useRef();

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

  const onClickCreateBook = React.useCallback(() => {
    gridRef.current.api.deselectAll();
    setModalData([]);
    setIsUpdate(false);
    setIsVisibleModal(true);
    setIsVisibleWarning(false);
  }, []);

  const onClickUpdateBook = React.useCallback(() => {
    const selectedData = gridRef.current.api.getSelectedRows();

    if (selectedData.length === 0) {
      setIsVisibleWarning(true);
      return;
    }

    setIsUpdate(true);
    setIsVisibleModal(true);
    setIsVisibleWarning(false);
    setModalData(...selectedData);
    gridRef.current.api.deselectAll();
  }, []);

  const onCLickDeleteBook = React.useCallback(() => {
    const selectedData = gridRef.current.api.getSelectedRows();

    if (selectedData.length === 0) {
      setIsVisibleWarning(true);
      return;
    }

    dispatch(deleteBook(selectedData[0].id));
    dispatch(setReloadAg());
    setIsVisibleWarning(false);
    gridRef.current.api.deselectAll();
    gridRef.current.api.purgeInfiniteCache();
  }, []);

  return (
    <div className="mb-10">
      <div className="flex gap-15 mb-10">
        <button onClick={onClickCreateBook} className="bttn bttn-create">
          Добавить запись
        </button>
        <button onClick={onClickUpdateBook} className="bttn bttn-update">
          Изменить запись
        </button>
        <button onClick={onCLickDeleteBook} className="bttn bttn-delete">
          Удалить запись
        </button>
      </div>
      <div className={isVisibleWarning ? "warning" : "hidden"}>
        Необходимо выделить книгу в таблтце, чтобы её удалить или изменить.
      </div>
      <BookModal
        isVisibleModal={isVisibleModal}
        setIsVisibleModal={setIsVisibleModal}
        modalData={modalData}
        setModalData={setModalData}
        isUpdate={isUpdate}
        gridRef={gridRef}
      />
      <div className="ag-theme-alpine" style={{ height: 400, width: "90%" }}>
        <AgGridReact
          ref={gridRef}
          columnDefs={columnDefs}
          rowSelection="single"
          rowModelType="infinite"
          cacheOverflowSize="1"
          maxConcurrentDatasourceRequests="1"
          infiniteInitialRowCount="5"
          maxBlocksInCache="5"
          cacheBlockSize="5"
          onGridReady={onGridReady}
        />
      </div>
    </div>
  );
};
