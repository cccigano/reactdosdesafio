import React from "react";

const Home = () => {
  return (
    <section className="home d-flex flex-column justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <h1 className="mb-3">Bienvenido Maestro Pokemon</h1>
      <img
        className="pokemonImg"
        src="https://cdn.pixabay.com/photo/2018/04/13/16/13/pixel-3316924_1280.png"
        alt="imagen poke"
        style={{ width: "650px", height: "auto" }} 
      />
    </section>
  );
};

export default Home;