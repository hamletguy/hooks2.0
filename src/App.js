import React from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Filter from "./components/filter/filter";
import Addmovie from "./components/movies/Addmovie";
import List from "./components/list/List";
import { moviedata } from "./components/movies/moviesdata";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
function App() {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(1);
  const addMovie = (movie) => {
    moviedata.push(movie);
  };
  return (
    <div
      className="home"
      style={{ marginTop: "85px", backgroundColor: "rgba(0, 0, 0, 0.829)" }}
    >
      <Navbar />

      <Filter
        title={title}
        setTitle={setTitle}
        rating={rating}
        setRating={setRating}
      />
      <div
        style={{ display: "flex", justifyContent: "center", margin: "20px 0" }}
      >
        <Addmovie addMovie={addMovie} />
      </div>
      <List moviedata={moviedata} title={title} rating={rating} />
    </div>
  );
}

export default App;
