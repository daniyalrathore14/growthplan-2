import React, { useEffect, useState } from 'react';
import { Alert, FlatList, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct } from '../../redux/product';
import { Category, Product } from '../../types';
import { CommonStyles } from '../../utils';
import ProductComponent from '../AddProduct';
import Button from '../button';
import TextFInput from '../input';
import { MediumText } from '../text';
import styles from './styles';
import { AppDispatch } from '../../store';

interface selectedProductProps {
    item: Product,
    index: number
}

const ProductListing: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>()
    const productList = useSelector((state: any) => state.product?.productList)
    const productCategoryList = useSelector((state: any) => state.product?.productCategoryList)
    const categoryList = useSelector((state: any) => state.product?.categoryList)
    const [search, setSearch] = useState('')
    const [filteredDataSource, setFilteredDataSource] = useState<[]>(productList)
    const [selectedProductForEdit, setSelectProductForEdit] = useState<selectedProductProps|null>()

    useEffect(() => { setFilteredDataSource(productList) }, [productList])
    const searchFilterFunction = (text: string) => {
        if (text) {
            const newData = productList.filter(
                function (item: Product) {
                    const itemData = item.name
                        ? item.name.toUpperCase()
                        : ''.toUpperCase();
                    const textData = text.toUpperCase();
                    return itemData.indexOf(textData) > -1;
                }
            );
            setFilteredDataSource(newData);
            setSearch(text);
        } else {
            setFilteredDataSource(productList);
            setSearch(text);
        }
    };
    const deleteConfirmation = ( index: number) => {
        Alert.alert('', 'Are you sure you wanna delete this product', [
            {
                text: 'Yest',
                onPress: () => dispatch(deleteProduct({ index })),
            },
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
        ]);
    }
    const RenderProduct = ({ item, index }: { item: Product, index: number }) => {

        const getCategoryName = () => categoryList?.filter((ite: Category) => ite?.id == item.category)

        return (
            <View style={styles.item}>
                <Text style={styles.title}>Name: {item.name}</Text>
                <Text style={styles.title}>Price: {item.price}</Text>
                <Text style={styles.title}>Description: {item.description}</Text>
                {(categoryList.length > 0) && <Text style={styles.title}>Category Name: {getCategoryName().length===0?'N/A':getCategoryName()[0].name}</Text>}
                <Button onPress={() => deleteConfirmation(index)} containerStyle={CommonStyles.marginTop_1}>Delete</Button>
                <Button onPress={() => { setSelectProductForEdit({ item, index }) }} containerStyle={CommonStyles.marginTop_1}>Edit</Button>
                {

                    selectedProductForEdit?.index === index &&
                    <ProductComponent
                        data={selectedProductForEdit}
                        callback={()=>setSelectProductForEdit(null)}
                    />
                }
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <MediumText textStyles={CommonStyles.marginTop_2}>Product List</MediumText>
            <TextFInput placeholder='Search by title ' value={search} onChange={searchFilterFunction} />
            <FlatList
                data={filteredDataSource}
                renderItem={RenderProduct}
            />
        </View>
    );
};

export default ProductListing;
