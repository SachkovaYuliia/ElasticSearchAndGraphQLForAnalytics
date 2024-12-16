import React, { useState } from "react";

const DataUploadForm = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("data_file", file);

    try {
      const response = await fetch("http://127.0.0.1:8000/upload-csv/", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        alert("Файл успішно завантажено!");
      } else {
        alert("Помилка завантаження.");
      }
    } catch (error) {
      console.error("Помилка:", error);
      alert("Помилка завантаження.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileChange} />
      <button type="submit">Завантажити</button>
    </form>
  );
};

export default DataUploadForm;
