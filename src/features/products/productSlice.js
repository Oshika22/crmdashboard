import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://dummyjson.com/products';

// GET all products
export const fetchProducts = createAsyncThunk('products/fetch', async () => {
  const res = await axios.get(`${BASE_URL}`);
  return res.data.products;
});

// ADD new product
export const addProduct = createAsyncThunk('products/add', async (newProduct) => {
  const res = await axios.post(`${BASE_URL}/add`, newProduct);
  return res.data;
});

// UPDATE product
export const updateProduct = createAsyncThunk('products/update', async (updatedProduct) => {
  console.log('Updating product:', updatedProduct);
  
  return updatedProduct;
});

// DELETE product
export const deleteProduct = createAsyncThunk('products/delete', async (id) => {
//   await axios.delete(`${BASE_URL}/${id}`);
  return id;
});

const productSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.loading = false; // ✅ Add this
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        const updated = action.meta.arg; // use what you sent
        const index = state.items.findIndex(p => p.id === updated.id);
        if (index !== -1) {
          state.items[index] = { ...state.items[index], ...updated };
        }
        state.loading = false;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.items = state.items.filter(p => p.id !== action.payload);
        state.loading = false; // ✅ Add this
      })
      .addMatcher((action) => action.type.endsWith('/pending'), (state) => {
        state.loading = true;
      })
      .addMatcher((action) => action.type.endsWith('/rejected'), (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
