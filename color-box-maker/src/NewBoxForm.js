import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function NewBoxForm({ addBox }) {
  const [formData, setFormData] = useState({ width: "", height: "", color: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(fData => ({ ...fData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBox({ ...formData, id: uuid() });
    setFormData({ width: "", height: "", color: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="width">Width: </label>
      <input id="width" name="width" value={formData.width} onChange={handleChange} />
      
      <label htmlFor="height">Height: </label>
      <input id="height" name="height" value={formData.height} onChange={handleChange} />
      
      <label htmlFor="color">Color: </label>
      <input id="color" name="color" value={formData.color} onChange={handleChange} />
      
      <button>Add Box</button>
    </form>
  );
}

export default NewBoxForm;
