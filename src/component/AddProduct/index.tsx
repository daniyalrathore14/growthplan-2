import React, { useState } from 'react';
import { ToastAndroid, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, addProductCateogry, updateProduct } from '../../redux/product';
import { Category, Product } from '../../types';
import { AppColors } from '../../utils';
import Button from '../button';
import TextFInput from '../input';
import { SmallText } from '../text';
import styles from './styles';
import { AppDispatch } from '../../store';
interface dataProps{
    item:Product,
    index:number
}
interface Props {
    data?: dataProps,
    callback?:()=>void
}

const ProductComponent = ({ data ,callback}: Props) => {
    const dispatch = useDispatch<AppDispatch>()
    const categoryList = useSelector((state: any) => state.product?.categoryList)
    const [name, setName] = useState<string>(data?.item?.name ?? '')
    const [price, setPrice] = useState<string>(data?.item?.price ? data?.item?.price?.toString() : '')
    const [description, setDescription] = useState<string>(data?.item?.description ?? '')
    const [selectedCategory, setSelectedCategory] = useState<null | string>(data?.item?.category ?? null)

    const saveMethod = () => {
        if (name?.trim() === '') ToastAndroid.show('Product Name Rrequired', ToastAndroid.SHORT)
        else if (description?.trim() === '') ToastAndroid.show('Product Description Rrequired', ToastAndroid.SHORT)
        else if (selectedCategory === null) ToastAndroid.show('Product Category Rrequired', ToastAndroid.SHORT)
        else {
            let productId = new Date().valueOf().toString()
            let productCategoryId = new Date().valueOf().toString() + 1
            let productCategoryBody = {
                id: productCategoryId,
                productId: productId,
                categoryId: selectedCategory
            }
            const body = {
                id: productId,
                name: name,
                description: description,
                price: Number(price),
                category: selectedCategory,
                productCategoryId: productCategoryId


            }
            if (data) {
                 productCategoryBody['id']=data?.item?.productCategoryId
                 dispatch(updateProduct({index:data?.index,item:body}))
                 callback&&  callback()
            }
            else {
                dispatch(addProductCateogry(productCategoryBody))
                dispatch(addProduct(body))
            }
            setName('')
            setPrice('')
            setDescription('')
            setSelectedCategory(null)
            //@ts-ignore
            alert(data?'Product Updated':'Product Added')
        }
    }

    return (
        <View style={styles.container}>
            <SmallText>Add Product</SmallText>
            <TextFInput
                label='Name'
                onChange={setName}
                value={name}
            />
            <TextFInput
                label='Price'
                onChange={setPrice}
                value={price}
            />
            <TextFInput
                label='Description'
                onChange={setDescription}
                value={description}
            />
            <SmallText>Select Category</SmallText>
            <View style={styles.category}>
                {
                    categoryList?.map((item: Category, index: string) => {
                        return (
                            <TouchableOpacity onPress={() => setSelectedCategory(item?.id)} style={[styles.categoryBtn, { backgroundColor: selectedCategory === item.id ? AppColors.primary : AppColors.white }]}>
                                <SmallText color={selectedCategory !== item.id ? AppColors.primary : AppColors.white}>{item.name}</SmallText>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
            <Button onPress={saveMethod}>{data?'Update Product':'Add Product'}</Button>
        </View>
    );
};

export default ProductComponent;
