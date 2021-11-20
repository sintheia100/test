import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
const Dashboard = () => {
  const [translate, setTranslate] = useState("-50rem");
  const [width, setWidth] = useState("0rem");
  const location = useLocation();
  const [menu, setMenu] = useState({
    dashboard: "",
    assignments: "",
    notes: "",
  });
  const menuHandler = () => {
    setTranslate(() => (translate === "0rem" ? "-50rem" : "0rem"));
    setWidth(() => (width === "0rem" ? "30rem" : "0rem"));
  };
  return <div></div>;
};

export default Dashboard;
