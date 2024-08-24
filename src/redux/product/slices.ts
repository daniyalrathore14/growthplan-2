import { createSlice } from "@reduxjs/toolkit";
import { Category, Product, ProductCategory } from "../../types";


const initialState = {
    productList: <Product | []>[],
    categoryList: <Category | []>[],
    productCategoryList: <ProductCategory | []>[]
}
const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addProduct: (state: any, action: { payload: Product }) => {
            state.productList.unshift(action.payload)
        },
        addCateogry: (state: any, action: { payload: Category }) => {
            state.categoryList.push(action.payload)
        },
        addProductCateogry: (state: any, action: { payload: ProductCategory }) => {
            state.productCategoryList.push(action.payload)
        },
        deleteProduct: (state: any, action: { payload: { index: number } }) => {
            let temp = [...state.productList]
            temp.splice(action.payload.index, 1)
            state.productList = temp
        },
        updateProduct: (state: any, action: { payload: { index: number, item: Product } }) => {
            let temp = [...state.productList]
            temp[action.payload.index] = action.payload.item
            state.productList = temp
        },
        deleteCategory: (state: any, action: { payload: { index: number } }) => {
            let temp = [...state.categoryList]
            temp.splice(action.payload.index, 1)
            state.categoryList = temp
        },
        updateCategory: (state: any, action: { payload: { index: number, item: Category } }) => {
            let temp = [...state.categoryList]
            temp[action.payload.index] = action.payload.item
            state.categoryList = temp
        },
    }
})

export default productSlice