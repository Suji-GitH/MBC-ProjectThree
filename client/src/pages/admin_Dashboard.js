import React from "react";
import Header from "../components/BO_Layout/Header";
import Footer from "../components/BO_Layout/Footer";
import DashboardGrid from "../components/BO_Layout/DashboardGrid";

function Dashboard(){

  return (
    <>
      <Header />
      <DashboardGrid />
      <Footer />
    </>
  );
}

export default Dashboard;