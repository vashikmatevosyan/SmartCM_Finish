import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const coef = windowWidth / 375 ;

const size = {}

for (let i = 0 ; i < 1000 ; i++ ){
    size['size' + i] = i * coef ;
}

size.size025 = 0.25 * coef;
size.size05 = 0.5 * coef;

export default size;

