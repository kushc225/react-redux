import React from "react";
import "./Sidebar.css";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
const Sidebar = () => {
  const arrowBtnEvent = () => {};
  return (
    <>
      <div className="sidebar-container">
        <div className="sidebar-second-container">
          <div className="sidebar-heading">
            <h3>Admin</h3>
          </div>
          <div className="sidebar-content">
            <div className="sidebar-group">
              <div className="sidebar-single-element">
                <Person2OutlinedIcon className="sidebar-icon-sm" />
                <p>first element</p>
              </div>
              <div className="sidebar-single-element">
                <Person2OutlinedIcon className="sidebar-icon-sm" />
                <p>first element</p>
              </div>
            </div>
            <hr />
            <div className="sidebar-group">
              <div className="sidebar-single-element">
                <Person2OutlinedIcon className="sidebar-icon-sm" />
                <p>first element</p>
              </div>
              <div className="sidebar-single-element">
                <Person2OutlinedIcon className="sidebar-icon-sm" />
                <p>first element</p>
              </div>
            </div>
            <hr />
            <div className="sidebar-group">
              <div className="sidebar-single-element">
                <Person2OutlinedIcon className="sidebar-icon-sm" />
                <p>first element</p>
              </div>
              <div className="sidebar-single-element">
                <Person2OutlinedIcon className="sidebar-icon-sm" />
                <p>first element</p>
              </div>
            </div>
            <hr />
            <div className="sidebar-group">
              <div className="sidebar-single-element">
                <Person2OutlinedIcon className="sidebar-icon-sm" />
                <p>first element</p>
              </div>
              <div className="sidebar-single-element">
                <Person2OutlinedIcon className="sidebar-icon-sm" />
                <p>first element</p>
              </div>
            </div>
            <hr />
            <div className="sidebar-group">
              <div className="sidebar-single-element">
                <Person2OutlinedIcon className="sidebar-icon-sm" />
                <p>first element</p>
              </div>
              <div className="sidebar-single-element">
                <Person2OutlinedIcon className="sidebar-icon-sm" />
                <p>first element</p>
              </div>
            </div>
            <hr />
          </div>
        </div>
        <ArrowBackIosNewOutlinedIcon
          onClick={arrowBtnEvent}
          className="sidebar-arrow-icon"
        />
      </div>
    </>
  );
};

export default Sidebar;
