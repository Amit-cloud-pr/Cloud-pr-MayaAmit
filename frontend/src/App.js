import React, { useEffect, useState } from "react";

function App() {
  const [names, setNames] = useState([]);
  const [form, setForm] = useState({
    id: null,
    name: "",
    gender: "",
    language: ""
  });

  useEffect(() => {
    loadNames();
  }, []);

  const loadNames = async () => {
    const res = await fetch("http://localhost:5000/api/name");
    const data = await res.json();
    setNames(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.id) {
      // עריכה → PUT
      await fetch("http://localhost:5000/api/name", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
    } else {
      // הוספה → POST
      await fetch("http://localhost:5000/api/name", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
    }

    setForm({ id: null, name: "", gender: "", language: "" });
    loadNames();
  };

  const handleDelete = async (id) => {
    await fetch("http://localhost:5000/api/name", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id })
    });

    loadNames();
  };

  const handleEdit = (record) => {
    setForm(record);
  };

  return (
    <div style={{ margin: 20 }}>
      <h1>Baby Names</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          placeholder="Gender"
          value={form.gender}
          onChange={(e) => setForm({ ...form, gender: e.target.value })}
        />
        <input
          placeholder="Language"
          value={form.language}
          onChange={(e) => setForm({ ...form, language: e.target.value })}
        />
        <button type="submit">{form.id ? "Update" : "Add"}</button>
      </form>

      <ul>
        {names.map((n) => (
          <li key={n.id}>
            {n.name} - {n.gender} - {n.language}
            <button onClick={() => handleEdit(n)}>Edit</button>
            <button onClick={() => handleDelete(n.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
