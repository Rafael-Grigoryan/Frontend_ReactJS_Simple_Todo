import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export function CatCategories() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const fetchCatCategory = async () => {
      try {
        const response = await fetch("https://api.thecatapi.com/v1/categories");
        const data = await response.json();
        console.log(data);
        setCategory(data);
      } catch (error) {
        console.log("Error", error);
      }
    };
    fetchCatCategory();
  }, []);

  return (
    <div>
      {category.map((elem) => {
        return (
          <div key={elem.id}>
            <NavLink to={`${elem.id}`}>{elem.name}</NavLink>
          </div>
        );
      })}
    </div>
  );
}
