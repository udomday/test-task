import React from "react";
import { useDispatch } from "react-redux";
import { createBook, updateBook } from "../../redux/slices/BookSlice/slice";
import { setReloadAg } from "../../redux/slices/ConstsSlice/slice";

export const BookModal = ({
  isVisibleModal,
  setIsVisibleModal,
  modalData,
  setModalData,
  isUpdate,
  gridRef,
}) => {
  const [titleInput, setTitleInput] = React.useState("");
  const [pageCountInput, setPageCountInput] = React.useState("");
  const [priceInput, setPriceInput] = React.useState("");
  const [dateInput, setDateInput] = React.useState("");
  const dispatch = useDispatch();

  React.useEffect(() => {
    setTitleInput(modalData?.title ? modalData?.title : "");
    setPageCountInput(modalData?.pagecount ? modalData?.pagecount : "");
    setPriceInput(modalData?.price ? modalData?.price : "");
    setDateInput(modalData?.release ? modalData?.release : "");
  }, [modalData]);

  const clickCreateBook = () => {
    dispatch(
      createBook({
        title: titleInput,
        pagecount: pageCountInput,
        price: priceInput,
        release: dateInput,
      })
    );
    gridRef.current.api.purgeInfiniteCache();
    closeModal();
    dispatch(setReloadAg());
  };

  const clickUpdateBook = () => {
    dispatch(
      updateBook({
        id: modalData?.id,
        title: titleInput,
        pagecount: pageCountInput,
        price: priceInput,
        release: dateInput,
      })
    );
    gridRef.current.api.purgeInfiniteCache();
    closeModal();
    dispatch(setReloadAg());
  };

  const closeModal = () => {
    setIsVisibleModal(false);
    setModalData([]);
  };

  return (
    <div
      className={
        isVisibleModal
          ? "bookmodal flex flex-column flex-align-center gap-15"
          : "hidden"
      }
    >
      <h2>Изменить данные книги</h2>
      <input
        onChange={(e) => setTitleInput(e.target.value)}
        value={titleInput}
        placeholder="Название"
      />
      <input
        onChange={(e) => setPageCountInput(e.target.value)}
        value={pageCountInput}
        type="number"
        placeholder="Количество страниц"
      />
      <input
        onChange={(e) => setPriceInput(e.target.value)}
        value={priceInput}
        type="number"
        placeholder="Цена"
      />
      <input
        onChange={(e) => setDateInput(e.target.value)}
        value={dateInput}
        type="date"
        placeholder="Дата публикации"
      />
      <div style={{ width: "100%" }} className="flex flex-justify-between">
        <button onClick={closeModal} className="bttn bttn-delete">
          Закрыть
        </button>
        {isUpdate ? (
          <button onClick={clickUpdateBook} className="bttn bttn-create">
            Сохранить
          </button>
        ) : (
          <button onClick={clickCreateBook} className="bttn bttn-create">
            Добавить
          </button>
        )}
      </div>
    </div>
  );
};
