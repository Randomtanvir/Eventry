import React from "react";
import Search from "./Search";

const Header = () => {
  return (
    <header className="flex justify-between">
      <h1 className="font-bold text-3xl">Discover Events</h1>

      {/* <!-- Searchbar --> */}
      <Search />
    </header>
  );
};

export default Header;
