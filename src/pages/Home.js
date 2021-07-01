import React from "react";
import Header from "../components/Header";
import "../styles/Home.css";
import BodyCard from "./BodyCard";

const Home = () => {
    return(
        <div className="home">
            <Header/>
            <BodyCard/>
        </div>
    )
}

export default Home;