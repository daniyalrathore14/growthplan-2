import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import AddCategoryComponent from './src/component/AddCategory';
import ProductComponent from './src/component/AddProduct';
import Button from './src/component/button';
import ProductListing from './src/component/ProductListing';
import store from './src/store';
import { AppColors } from './src/utils';
import { width } from './src/utils/dimensions';



const ProductsInventory = () => {
  const [viewType, setViewType] = useState<number>(1)
  const bgColor = (value: boolean) => {
    return value ? AppColors.white : AppColors.primary
  }
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <View style={styles.tabBarView}>
          <Button buttonTextColor={bgColor(viewType == 1)} containerStyle={{ width: width(30), backgroundColor: bgColor(viewType !== 1) }} onPress={() => { setViewType(1) }}>Add Category</Button>
          <Button buttonTextColor={bgColor(viewType == 2)} containerStyle={{ width: width(30), backgroundColor: bgColor(viewType !== 2) }} onPress={() => { setViewType(2) }}>Add Product</Button>
          <Button buttonTextColor={bgColor(viewType == 3)} containerStyle={{ width: width(30), backgroundColor: bgColor(viewType !== 3) }} onPress={() => { setViewType(3) }}>View Product</Button>

        </View>
        {
          viewType == 1 ?
            <AddCategoryComponent />

            : viewType === 2 ? 
            <ProductComponent /> :
              <ProductListing />

        }

      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  tabBarView: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  container: {
    flex: 1,
    backgroundColor: AppColors.white,
  },
  item: {
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    color: '#333',
  },
});

export default ProductsInventory;
