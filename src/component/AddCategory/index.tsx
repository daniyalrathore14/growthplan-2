import React, { useState } from 'react';
import { Alert, FlatList, ToastAndroid, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addCateogry, deleteCategory, updateCategory } from '../../redux/product';
import { Category } from '../../types';
import { CommonStyles } from '../../utils';
import Button from '../button';
import TextFInput from '../input';
import { SmallText } from '../text';
import styles from './styles';
import { AppDispatch } from '../../store';


interface selectedCategoryProps {
    item: Category,
    index: number
}
const AddCategoryComponent: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<selectedCategoryProps|null>(null)
    const categoryList = useSelector((state: any) => state.product?.categoryList)
    const dispatch = useDispatch<AppDispatch>()
    const [name, setName] = useState<string>('')
    const saveMethod = () => {
        if (name?.trim() === '') ToastAndroid.show('Category Name Rrequired', ToastAndroid.SHORT)
        else {
            let body = {
                id: new Date().valueOf().toString(),
                name: name
            }
            if (selectedCategory) {
                body['id'] = selectedCategory?.item?.id
                dispatch(updateCategory({ index: selectedCategory?.index, item: body }))
                //@ts-ignore
                alert('Category Updated')
                setSelectedCategory(null)
            }
            else {

                dispatch(addCateogry(body))
                //@ts-ignore
                alert('Category Added')
            }
            setName('')

        }
    }
    const deleteConfirmation = (index: number) => {
        Alert.alert('', 'Are you sure you wanna delete this category', [
            {
                text: 'Yest',
                onPress: () => dispatch(deleteCategory({ index })),
            },
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
        ]);
    }
    return (
        <View style={styles.container}>
            <SmallText>Add Category</SmallText>
            <TextFInput
                label='Name'
                onChange={setName}
                value={name}
            />
            <Button onPress={saveMethod}>{selectedCategory ? 'Update Category' : 'Add Category'}</Button>

            <FlatList
                data={categoryList}
                renderItem={({ item, index }: { item: Category, index: number }) => {
                    return (
                        <TouchableOpacity style={styles.btn}>
                            <SmallText>{item?.name}</SmallText>
                            <Button onPress={() => deleteConfirmation(index)} containerStyle={CommonStyles.marginTop_1}>Delete Category</Button>
                            <Button onPress={() => {
                                setSelectedCategory({ item, index })
                                setName(item?.name)
                            }} containerStyle={CommonStyles.marginTop_1}>Edit Category</Button>

                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    );
};

export default AddCategoryComponent;
