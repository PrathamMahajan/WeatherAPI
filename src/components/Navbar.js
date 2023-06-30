import React from "react";
import { useState } from "react";

function Navbar() {
  const [search, setSearch] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <>
      <nav class="navbar bg-primary">
        <div class="container-fluid">
          <a class="navbar-brand text-bg-primary">Weather</a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
