


import productSlice from './slices';
export const productSliceReducer = productSlice.reducer;
export const {addProduct,addCateogry,addProductCateogry,deleteProduct,updateCategory,updateProduct,deleteCategory} = productSlice.actions;

