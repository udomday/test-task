import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { selectAllConsts } from "../../redux/slices/ConstsSlice/selectors";
import {
  setIsOpenSideBar,
  setScrollTop,
  setWindowWidth,
} from "../../redux/slices/ConstsSlice/slice";

export const Header = React.memo(() => {
  const navigate = useNavigate();
  const location = useLocation().pathname.replace("/", "");
  const { scrollTop, windowWidth, isOpenSideBar } =
    useSelector(selectAllConsts);
  const dispatch = useDispatch();
  const refHeader = React.useRef();

  React.useEffect(() => {
    const onScroll = () => {
      dispatch(setScrollTop(window.pageYOffset));
    };

    const onResize = () => {
      dispatch(setWindowWidth(window.innerWidth));
    };

    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onResize);

    if (scrollTop === 0) {
      refHeader.current && refHeader.current.classList.remove("header-scroll");
    } else {
      refHeader.current && refHeader.current.classList.add("header-scroll");
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [scrollTop]);

  return (
    <div
      ref={refHeader}
      className="header sticky flex flex-justify-between flex-align-center"
    >
      <div className="header__links gap-5">
        <div className="flex gap-5">
          <span
            onClick={() => navigate("/tables")}
            className="material-icons-round pointer"
          >
            home
          </span>
          <span>/</span>
          <span>{location.charAt(0).toUpperCase() + location.slice(1)}</span>
        </div>
        <h4>{location.charAt(0).toUpperCase() + location.slice(1)}</h4>
      </div>
      <div className="header__body flex gap-15">
        <span className="material-icons-round pointer">account_circle</span>
        {windowWidth < 1200 &&
          (isOpenSideBar ? (
            <span
              onClick={() => dispatch(setIsOpenSideBar(false))}
              className="material-icons-round pointer"
            >
              menu
            </span>
          ) : (
            <span
              onClick={() => dispatch(setIsOpenSideBar(true))}
              className="material-icons-round pointer"
            >
              menu_open
            </span>
          ))}
        <span className="material-icons-round pointer">settings</span>
      </div>
    </div>
  );
});
