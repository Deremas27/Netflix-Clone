import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Banner/Banner";

function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Footer />
      {/* <h3>{JSON.stringify(import.meta.env)}</h3> */}
    </>
  );
}

export default Home;
