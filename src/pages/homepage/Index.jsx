import React from "react";
import Introduction from "./Intoduction";
import Header from "../../components/Header/Index";
import SnipeMovement from "./SnipeMovement";
import Benefits from "./Benifits";
import Footer from "../../components/footer/Footer";
import Registration from "./Register";
import Enquire from "./Enquire";

const HomePage = () => {
  return (
    <>
      <Header />
      <Introduction />
      <Registration />
      <Enquire />
      <SnipeMovement />
      <Benefits />
      <Footer />
    </>
  );
};

export default HomePage;
