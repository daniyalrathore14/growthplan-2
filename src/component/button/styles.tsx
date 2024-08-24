import {StyleSheet} from 'react-native';
import { height, width } from '../../utils/dimensions';
import { AppColors } from '../../utils';

const styles = StyleSheet.create({
  container: {
    borderRadius: width(2),
    paddingVertical: height(1.3),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width:'80%',
    borderColor:AppColors.primary,
    borderWidth:width(0.2),
  },
  primaryContainer: {
    backgroundColor: AppColors.primary,
  },
  secondaryContainer: {
    backgroundColor: AppColors.primary,
  },
  disableContainer: {
    backgroundColor: AppColors.wihte5,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

export default styles;