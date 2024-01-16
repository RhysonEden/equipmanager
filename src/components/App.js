import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Main";
import Start from "./Start";
import Details from "./Details";
import AppAppBar from "./modules/views/AppAppBar";
import Right from "./Right";
import {
  getSomething,
  getReportData,
  getEmail,
  addSite,
  addEmail,
  createDisp,
  getTicketing,
} from "../api";
import logo from "../assests/logo.gif";
import Project from "./Project";
import SideBar from "./SideBar";
import Report from "./Report";
import CsvDownload from "react-json-to-csv";
import Contact from "./Contact";
import Allsites from "./Allsites";
import Gctracker from "./Gctracker";
import Gctrackerdisplay from "./Gctrackerdisplay";
import { addTicket } from "../api";
import Login from "./Login";
import Alerticket from "./Alerticket";
import Inboundcalldisplay from "./Inboundcalldisplay";
import Inboundcall from "./Inboundcall";
import Projectdisplay from "./Projectdisplay";
import Pcntracker from "./Pcntracker";
import Addresslookup from "./Addresslookup";
import { getBfr } from "../api";
const App = () => {
  // const user = sessionStorage.getItem("token");
  const [errormessage, setMessage] = useState([]);
  const [contactInfo, setContactInfo] = useState([]);
  const message = JSON.parse(sessionStorage.getItem("dispinf"));
  let [count, setCount] = useState(0);
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(true);
  const [nameButton, setNameButton] = useState("");
  const [mockData, setMockData] = useState("");
  useEffect(async () => {
    // await getSomething()
    //   .then((response) => {
    //     sessionStorage.setItem("dispinf", JSON.stringify(response.dispinfo));
    //     // sessionStorage.setItem("dispinfo", 1);
    //     setMockData(response.dispinfo);
    //     // getTicketing();
    //   })
    //   .catch((error) => {
    //     setMessage(error.message);
    //   });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  React.useEffect(async () => {
    await getBfr();
  }, []);

  if (sessionStorage.getItem("token") < 27) {
    return (
      <Login
        setMockData={setMockData}
        getSomething={getSomething}
        setMessage={setMessage}
      />
    );
  } else {
    return (
      <>
        {/* loading icon to help with re-rendering etc*/}
        {/* {console.log("user?", user.length)} */}
        {loading ? (
          <div className="AppLoading">
            <img src={logo} alt="Loading..." className="loading" />
          </div>
        ) : (
          <Router>
            <SideBar mockData={mockData} setSearchInput={setSearchInput} />
            <Right />

            <div>
              <AppAppBar
                contactInfo={contactInfo}
                setContactInfo={setContactInfo}
                searchInput={searchInput}
                setSearchInput={setSearchInput}
                count={count}
              />
            </div>
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <Start
                    message={message}
                    setMessage={setMessage}
                    count={count}
                    setCount={setCount}
                    searchInput={searchInput}
                    setSearchInput={setSearchInput}
                  />
                }
              ></Route>
              <Route
                path="/second"
                element={
                  <Project
                    searchInput={searchInput}
                    setSearchInput={setSearchInput}
                  />
                }
              ></Route>
              <Route
                path="/alerticket"
                element={
                  <Alerticket
                    searchInput={searchInput}
                    setSearchInput={setSearchInput}
                  />
                }
              ></Route>
              <Route
                path="/report"
                element={
                  <Report
                    searchInput={searchInput}
                    setSearchInput={setSearchInput}
                  />
                }
              ></Route>
              <Route
                exact
                path="/addresslookup"
                element={<Addresslookup />}
              ></Route>
              <Route
                path="/gctrackerdisplay"
                element={
                  <Gctrackerdisplay
                    searchInput={searchInput}
                    setSearchInput={setSearchInput}
                  />
                }
              ></Route>
              <Route
                path="/details"
                element={
                  <Details
                    searchInput={searchInput}
                    setSearchInput={setSearchInput}
                  />
                }
              ></Route>
              <Route
                path="/contact"
                element={
                  <Contact
                    contactInfo={contactInfo}
                    searchInput={searchInput}
                    setSearchInput={setSearchInput}
                  />
                }
              ></Route>
              <Route
                path="/inbounddisplay"
                element={
                  <Inboundcalldisplay
                    contactInfo={contactInfo}
                    searchInput={searchInput}
                    setSearchInput={setSearchInput}
                  />
                }
              ></Route>
              <Route
                path="/inboundcall"
                element={
                  <Inboundcall
                    contactInfo={contactInfo}
                    searchInput={searchInput}
                    setSearchInput={setSearchInput}
                  />
                }
              ></Route>
              <Route
                path="/allsites"
                element={
                  <Allsites
                    addSite={addSite}
                    addEmail={addEmail}
                    createDisp={createDisp}
                  />
                }
              ></Route>
              <Route
                path="/gctracker"
                element={
                  <Gctracker
                    addTicket={addTicket}
                    message={message}
                    setMessage={setMessage}
                  />
                }
              ></Route>
              <Route
                path="/pcnalert"
                element={
                  <Pcntracker
                    addTicket={addTicket}
                    searchInput={searchInput}
                    setSearchInput={setSearchInput}
                  />
                }
              ></Route>
              <Route
                path="/project"
                element={
                  <Projectdisplay
                    addTicket={addTicket}
                    searchInput={searchInput}
                    setSearchInput={setSearchInput}
                  />
                }
              ></Route>
              <Route exact path="/login" element={<Login />}></Route>
            </Routes>
          </Router>
        )}
      </>
    );
  }
};

export default App;
