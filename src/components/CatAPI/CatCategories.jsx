import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./CatApiStyle.css";
import { Category } from "@mui/icons-material";

export function CatCategories() {
  const [category, setCategory] = useState([
    {
      id: "random",
      name: "random",
    },
  ]);
  const [page, setPage] = useState(1);
  const [isRandom, setIsRandom] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const totalPages = 5;
  const limit = 5;

  useEffect(() => {
    const fetchCatCategory = async () => {
      setIsLoading(true);
      try {
        let url= "https://api.thecatapi.com/v1/categories"
        // if (isRandom) {
        //   url = `https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=ASC&page=${page}&limit=${limit}`;
        // } else {
        //   // url = "";
        //   url = `https://api.thecatapi.com/v1/images/search?limit=5&order=ASC&page=1&category_ids=${id}`;
        // }

        const response = await fetch(url, {
          headers: {
            "x-api-key":
              "live_lwVCzgY3P4RRqe2JJnETvuJrSorLIyg6wrhpMfi4mQk81mm80mobsGXItWBDwwCg",
          },
        });
        const data = await response.json();
        console.log(data);
        setCategory([...data, ...category]);
      } catch (error) {
        console.log("Error", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCatCategory();
  }, [isRandom, page]);

  return (
    <div>
      {isLoading && <div style={{ fontSize: "50px" }}>Loading...</div>}

      {category.map((elem) => (
        <div key={elem.id}>
          <NavLink
            to={`${elem.id}`}
            className={({ isActive }) =>
              `nav-link ${isActive ? "active-link" : "default-link"}`
            }
            onClick={() => setIsRandom(false)}
          >
            {elem.name}
          </NavLink>
        </div>
      ))}

      {/* <NavLink
        to="/random"
        className={({ isActive }) =>
          `nav-link ${isActive ? "active-link" : "default-link"}`
        }
        onClick={() => {
          setIsRandom(true);
          setPage(1);
        }}
      >
        random
      </NavLink> */}

      {!isLoading && isRandom && (
        <div>
          {category.map((cat, index) => (
            <img
              key={index}
              src={cat.url}
              alt="cat"
              style={{ width: "150px" }}
            />
          ))}

          <div>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
              <button
                key={num}
                onClick={() => setPage(num)}
                style={{
                  backgroundColor: page === num ? "#333" : "#eee",
                  color: page === num ? "#fff" : "#000",
                  padding: "5px 10px",
                  border: "none",
                  cursor: "pointer",
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
