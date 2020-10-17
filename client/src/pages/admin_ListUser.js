import React from "react";
import Header from "../components/BO_Layout/Header";
import Footer from "../components/BO_Layout/Footer";
import ListGrid from "../components/CustomerList/Main";



function ListUser() {

  return (
    <>
      <Header />
      <ListGrid />
      <Footer />
    </>
  );
};

export default ListUser;