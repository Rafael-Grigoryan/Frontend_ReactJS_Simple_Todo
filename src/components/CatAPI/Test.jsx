import React, { useEffect, useState } from "react";

export function Test() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/categories")
      .then(res => res.json())
      .then(data => setCategories(data))
      .catch(err => console.error("Ошибка при загрузке категорий:", err));
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      setLoading(true);
      fetch(`https://api.thecatapi.com/v1/images/search?limit=9&category_ids=${selectedCategory}`, {
        headers: {
          "x-api-key": API_KEY
        }
      })
        .then(res => res.json())
        .then(data => {
          setImages(data);
          setLoading(false);
        })
        .catch(err => {
          console.error("Ошибка при загрузке картинок:", err);
          setLoading(false);
        });
    }
  }, [selectedCategory]);

  return (
    <div>
      <div>
        <label>Выберите категорию:</label>
        <select
          id="category"
          onChange={e => setSelectedCategory(e.target.value)}
          defaultValue=""
        >
          <option value="" disabled>-- Выбрать --</option>
          {categories.map(cat => (
            <option key={cat.id} value={cat.id}>{cat.name}</option>
          ))}
        </select>
      </div>

      {loading && <p>Загрузка изображений...</p>}

      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {images.map((img, i) => (
          <img
            key={i}
            src={img.url}
            alt="cat"
            style={{ width: "200px", height: "200px", objectFit: "cover", borderRadius: "10px" }}
          />
        ))}
      </div>
    </div>
  );
}
