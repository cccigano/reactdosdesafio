import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  return (
    <div className="ml-auto"> 
      <NavLink to="/" activeClassName="active" isActive={() => location.pathname === "/"}>
        Home
      </NavLink>
      {" - "}
      <NavLink to="/pokemones" activeClassName="active" isActive={() => location.pathname.startsWith("/pokemones")}>
        Pokemones
      </NavLink>
    </div>
  );
};

export default Navigation;