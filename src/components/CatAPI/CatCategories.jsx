import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./CatApiStyle.css";

export function CatCategories() {
  const [category, setCategory] = useState([]);
  const [page, setPage] = useState(1);
  const [isRandom, setIsRandom] = useState(false);
  const totalPages = 5; // можно менять в зависимости от количества картинок

  useEffect(() => {
    const fetchCatCategory = async () => {
      try {
        let url;
        if (isRandom) {
          url = `https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=ASC&page=${page}&limit=5`;
        } else {
          url = "https://api.thecatapi.com/v1/categories";
        }

        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setCategory(data);
      } catch (error) {
        console.log("Error", error);
      }
    };
    fetchCatCategory();
  }, [isRandom, page]);

  return (
    <div>
      {!isRandom &&
        category.map((elem) => (
          <div key={elem.id}>
            <NavLink
              to={`${elem.id}`}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
              onClick={() => setIsRandom(false)}
            >
              {elem.name}
            </NavLink>
          </div>
        ))}

      <NavLink
        to="/random"
        onClick={() => {
          setIsRandom(true);
          setPage(1);
        }}
      >
        random
      </NavLink>

      {isRandom && (
        <div style={{ marginTop: "20px" }}>
          {category.map((cat, index) => (
            <img
              key={index}
              src={cat.url}
              alt="cat"
              style={{ width: "150px", margin: "5px" }}
            />
          ))}

          {/* Пагинация с цифрами */}
          <div style={{ marginTop: "10px" }}>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
              <button
                key={num}
                onClick={() => setPage(num)}
                style={{
                  margin: "0 5px",
                  backgroundColor: page === num ? "#333" : "#eee",
                  color: page === num ? "#fff" : "#000",
                  padding: "5px 10px",
                  borderRadius: "5px",
                  border: "none",
                  cursor: "pointer"
                }}
              >
                {num}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
