import React, { useState, useEffect } from 'react';

const ProductForm = ({ onSubmit, editingProduct }) => {
  const [form, setForm] = useState({ title: '', price: '' });

  useEffect(() => {
    if (editingProduct) {
      setForm(editingProduct);
    } else {
      setForm({ title: '', price: '' });
    }
  }, [editingProduct]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 space-y-2">
      <input
        name="title"
        placeholder="Product Name"
        value={form.title}
        onChange={handleChange}
        className="border p-2 w-full"
        required
      />
      <input
        name="price"
        placeholder="Price"
        value={form.price}
        onChange={handleChange}
        className="border p-2 w-full"
        type="number"
        required
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        {form.id ? 'Update' : 'Add'} Product
      </button>
    </form>
  );
};

export default ProductForm;
