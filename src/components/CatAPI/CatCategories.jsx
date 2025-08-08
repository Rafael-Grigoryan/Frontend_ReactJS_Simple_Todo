import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./CatApiStyle.css";

export function CatCategories() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const fetchCatCategory = async () => {
      try {
        const url = "/random" ? `https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=ASC&page=1&limit=10`
          : "https://api.thecatapi.com/v1/categories";
        const response = await fetch(url);
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
            <NavLink
              to={`${elem.id}`}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              {elem.name}
            </NavLink>
          </div>
        );
      })}
      <NavLink to="/random">random</NavLink>
    </div>
  );
}
