import { StyleSheet } from 'react-native';
import { height, width } from '../../utils/dimensions';
import { AppColors } from '../../utils';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5', 
        alignItems:"center"
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
        width:width(90)
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

export default styles;