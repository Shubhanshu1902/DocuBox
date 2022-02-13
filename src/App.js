// import Navbar from "./components/Navbar";
import React from "react";
import Frontpage from "./homepage/Frontpage";
import AddDocument from "./ipfs/AddDocument";
import Docspage from "./topnav/Docspage"

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";


function App() {
    return (
        <Router>
            <Routes path = '/'>
                <Route index element = {<Frontpage />} />
                <Route path="home" element = {<Docspage />} />
                <Route path="addDoc" element = {<AddDocument/>} />
            </Routes>
        </Router>
    );
}

export default App;