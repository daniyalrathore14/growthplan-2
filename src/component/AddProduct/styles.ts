import { StyleSheet } from 'react-native';
import { AppColors } from '../../utils';
import { height, width } from '../../utils/dimensions';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        paddingTop: height(5),
    },
    category: {
        flexDirection: "row",
        flexWrap: 'wrap',
        width: width(90),
        marginVertical:height(1)
    },
    categoryBtn: {
        backgroundColor: AppColors.primary,
        marginHorizontal: width(2),
        paddingVertical: height(1), paddingHorizontal: width(4),
        borderRadius: width(10),
        borderWidth: width(0.4),
        borderColor:AppColors.primary
    }
});

export default styles;