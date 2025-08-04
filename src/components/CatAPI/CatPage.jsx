import React, { useState } from "react";
import Header from "../Header/Header";
import { CatCategories } from "./CatCategories";

export default function CatPage() {
  const [showCategories, setShowCategories] = useState(true);

  const toggleCategories = () => {
    setShowCategories((prev) => !prev);
  };

  return (
    <div>
      <Header onMenuClick={toggleCategories} />
      {showCategories && <CatCategories />}
    </div>
  );
}
