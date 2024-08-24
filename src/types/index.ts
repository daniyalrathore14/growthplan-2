export interface Category {
    id: string,
    name: string
}
export interface Product {
    id: string,
    name: string,
    description: string,
    price: number,
    category: string,
    productCategoryId:string
}
export interface ProductCategory{
    id:string,
    productId:string,
    categoryId:string
}