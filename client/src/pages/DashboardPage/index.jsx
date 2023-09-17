import React from "react";
import { ChartBox, InfoBox } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { selectAllBooks } from "../../redux/slices/BookSlice/selectors";
import { fetchBooks } from "../../redux/slices/BookSlice/slice";
import { fetchReviews } from "../../redux/slices/ReviewsSlice/sllice";
import { selectAllReviews } from "../../redux/slices/ReviewsSlice/selectors";

export const DashboardPage = React.memo(() => {
  const { books, statusBook } = useSelector(selectAllBooks);
  const { reviews, statusReviews } = useSelector(selectAllReviews);
  const reloadRef = React.useRef(false);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (reloadRef.current) {
      dispatch(fetchBooks({ startRow: 0, endRow: 5 }));
      dispatch(fetchReviews({ startRow: 0, endRow: 5 }));
    }

    reloadRef.current = true;
  }, []);

  return (
    <div style={{ paddingTop: "20px", width: "100%" }}>
      <div
        style={{ paddingTop: "20px", width: "100%" }}
        className="grid grid-columns-4"
      >
        <InfoBox
          icon={"book"}
          styleBlockIcon={"flex icon-block icon-block-gray"}
          title={"Books"}
          count={281}
          procent={55}
        />
        <InfoBox
          icon={"leaderboard"}
          styleBlockIcon={"flex icon-block icon-block-blue"}
          title={"Statistics"}
          count={512}
          procent={2}
        />
        <InfoBox
          icon={"store"}
          styleBlockIcon={"flex icon-block icon-block-green"}
          title={"Sales"}
          count={3452}
          procent={1}
        />
        <InfoBox
          icon={"person_add"}
          styleBlockIcon={"flex icon-block icon-block-pink"}
          title={"Followers"}
          count={91}
          procent={20}
        />
      </div>
      <div className="grid grid-columns-2 mt-60">
        {statusBook === "SUCCESS" && (
          <ChartBox
            data={books.rows}
            dataKeyOne={"title"}
            dataKeyTwo={"price"}
            title={"Книги"}
            description={"Статистика книг"}
            styles={"chartbox-root-chart chartbox-root-chart-blue"}
          />
        )}
        {statusReviews === "SUCCESS" && (
          <ChartBox
            data={reviews.rows}
            dataKeyOne={"login"}
            dataKeyTwo={"likes"}
            title={"Отзывы"}
            description={"Статистика отзывов"}
            styles={"chartbox-root-chart chartbox-root-chart-green"}
          />
        )}
      </div>
    </div>
  );
});
