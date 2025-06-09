import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchProducts,
  addProduct,
  updateProduct,
  deleteProduct
} from './productSlice';
import ProductForm from '../../pages/ProductForm';

const ProductPage = () => {
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state) => state.products);
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAddOrUpdate = (product) => {
    if (product.id) {
      dispatch(updateProduct(product));
    } else {
      dispatch(addProduct(product));
    }
    setEditingProduct(null);
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
  };

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">📦 Product Management</h2>
      <ProductForm onSubmit={handleAddOrUpdate} editingProduct={editingProduct} />

      {loading ? (
        <p>Loading products...</p>
      ) : (
        <ul className="mt-6 space-y-2">
          {items.map((product) => (
            <li key={product.id} className="border p-3 rounded shadow flex justify-between items-center">
              <div>
                <strong>{product.title}</strong> - ${product.price}
              </div>
              <div className="space-x-2">
                <button onClick={() => handleEdit(product)} className="text-blue-600">Edit</button>
                <button onClick={() => handleDelete(product.id)} className="text-red-600">Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductPage;
