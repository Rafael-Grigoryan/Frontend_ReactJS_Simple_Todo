import { useState, useEffect } from "react";

export function CatApi() {
  const [catsData, setCatsData] = useState([]);
  const [selectedCat, setSelectedCat] = useState(false);

  const fetchCatData = async () => {
    try {
      const response = await fetch(
        "https://api.thecatapi.com/v1/images/search?limit=5&has_breeds=1",
        {
          headers: {
            "x-api-key":
              "live_lwVCzgY3P4RRqe2JJnETvuJrSorLIyg6wrhpMfi4mQk81mm80mobsGXItWBDwwCg",
          },
        }
      );
      const data = await response.json();
      setCatsData(data);
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    fetchCatData();
  }, []);

  return (
    <div>
      {catsData.map((cat) => {
        return (
          <div key={cat.id}>
            <img
              src={cat.url}
              alt="cat"
              width="150px"
              height="150px"
              onClick={() => setSelectedCat(cat)}
              style={{ cursor: "pointer" }}
            />
          </div>
        );
      })}

      {selectedCat && (
        <div
          onClick={() => setSelectedCat(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={selectedCat.url}
            alt="foto cat"
            style={{ maxWidth: "90%", maxHeight: "90%" }}
          />
        </div>
      )}
    </div>
  );
}
