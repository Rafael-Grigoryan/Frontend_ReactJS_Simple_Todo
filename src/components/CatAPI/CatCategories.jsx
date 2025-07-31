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
            <NavLink>{elem.name}</NavLink>
          </div>
        );
      })}
    </div>
  );
}


// import React, { useEffect, useState } from "react";

// export default function App() {
//   const [categories, setCategories] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [images, setImages] = useState([]);
//   const [loading, setLoading] = useState(false);

//   // ❗️ Если у тебя есть ключ от thecatapi.com — вставь сюда
//   const API_KEY = ""; // можно оставить пустым, если не требует авторизации

//   // Получаем список категорий
//   useEffect(() => {
//     fetch("https://api.thecatapi.com/v1/categories", {
//       headers: {
//         "x-api-key": API_KEY,
//       },
//     })
//       .then((res) => res.json())
//       .then((data) => setCategories(data))
//       .catch((err) =>
//         console.error("Ошибка при загрузке категорий:", err)
//       );
//   }, []);

//   // Загружаем изображения котов по выбранной категории
//   useEffect(() => {
//     if (!selectedCategory) return;

//     setLoading(true);

//     fetch(
//       `https://api.thecatapi.com/v1/images/search?limit=9&category_ids=${selectedCategory}`,
//       {
//         headers: {
//           "x-api-key": API_KEY,
//         },
//       }
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         setImages(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Ошибка при загрузке изображений:", err);
//         setLoading(false);
//       });
//   }, [selectedCategory]);

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial" }}>
//       <h1>🐱 Категории котов</h1>

//       <div style={{ marginBottom: "20px" }}>
//         <label htmlFor="category">Выберите категорию:</label>
//         <select
//           id="category"
//           onChange={(e) => setSelectedCategory(e.target.value)}
//           defaultValue=""
//         >
//           <option value="" disabled>
//             -- Выбрать --
//           </option>
//           {categories.map((cat) => (
//             <option key={cat.id} value={cat.id}>
//               {cat.name}
//             </option>
//           ))}
//         </select>
//       </div>

//       {loading && <p>Загрузка изображений...</p>}

//       <div
//         style={{
//           display: "flex",
//           flexWrap: "wrap",
//           gap: "10px",
//         }}
//       >
//         {images.map((img, index) => (
//           <img
//             key={index}
//             src={img.url}
//             alt="cat"
//             style={{
//               width: "200px",
//               height: "200px",
//               objectFit: "cover",
//               borderRadius: "10px",
//               boxShadow: "0 0 5px rgba(0,0,0,0.2)",
//             }}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }




