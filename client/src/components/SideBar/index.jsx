import React from "react";
import { MainLayoutRouts } from "../../utils/routes";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectAllConsts } from "../../redux/slices/ConstsSlice/selectors";
import { setIsOpenSideBar } from "../../redux/slices/ConstsSlice/slice";

export const SideBar = React.memo(() => {
  const location = useLocation().pathname.replace("/", "");
  const navigate = useNavigate();
  const { windowWidth, isOpenSideBar } = useSelector(selectAllConsts);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (windowWidth < 1200) {
      dispatch(setIsOpenSideBar(false));
    } else {
      dispatch(setIsOpenSideBar(true));
    }
  }, [windowWidth]);

  return (
    <div
      className={
        isOpenSideBar
          ? "sidebar sticky flex flex-column"
          : "sidebar sidebar-close sticky flex flex-column"
      }
    >
      <div className="sidebar__header">
        <h4>TEST-TASK</h4>
        <hr className="hr-line" />
      </div>
      <ul className="sidebar__body flex flex-column flex-align-center">
        {MainLayoutRouts.map((el, index) => (
          <li
            key={index}
            onClick={() => navigate(`/${el.path}`)}
            className={
              el.path === location
                ? "sidebar__body_element sidebar__body_element-active flex flex-align-center flex-justify-center"
                : "sidebar__body_element flex flex-align-center flex-justify-center"
            }
          >
            <div>{el.title}</div>
          </li>
        ))}
      </ul>
    </div>
  );
});
