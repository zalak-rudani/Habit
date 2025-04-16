import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {makeApiCall} from '../../api/axios/apiService';

import HeaderComp from '../components/HeaderComp';
import commonStyle from '../helper/constants/commonStyle';
import TextComp from '../components/TextComp';
import {fonts} from '../helper/constants/fonts';
import icons from '../helper/constants/icons';
import {hp} from '../helper/globalFunc';
import colors from '../helper/constants/colors';
import {getSingleDataAction} from '../../api/axios/getSingleDataAction';

const ProductsDetailsFromApiCall = ({navigation, route}) => {
  const productId = route?.params?.id;
  console.log('productId-=-=-', productId);

  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProductListData();
  }, []);

  const getProductListData = async () => {
    try {
      const request = {
        data: {
          id: productId,
        },
        onSuccess: async res => {
          setIsLoading(false);
          console.log('res:::::::', res);
          setProduct(res);
        },
        onFail: err => {
          setIsLoading(false);

          console.log('err::', err);
        },
      };
      await getSingleDataAction(request);
    } catch (error) {
      console.log('errorerror::', error);
    }
  };

  // const getProductData = async () => {
  //   try {
  //     const response = await makeApiCall({
  //       method: 'GET',
  //       url: `products/${productId}`,
  //       params: {

  //       },
  //     });
  //     console.log('response:::::::::::::::::::', response);
  //     setProduct(response);
  //   } catch (error) {
  //     console.log('error:::::::::::::::', error);
  //   }
  // };
  // console.log('product-=-=-', product?.title);
  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator color={'blue'} size={'large'} />
      </View>
    );
  }
  return (
    <View style={commonStyle.flex1}>
      <HeaderComp
        source1={icons.left}
        onPress1={() => navigation.goBack()}
        text={'Product Details'}
      />

      <Text style={styles.headName}>{'Product Details'}</Text>

      <TextComp
        head1={'ID'}
        val1={product?.id}
        head2={'Title'}
        val2={product?.title}
      />
      <TextComp
        head1={'Category'}
        val1={product?.category}
        head2={'Brand'}
        val2={product?.brand}
      />
      <TextComp
        head1={'Warranty Information'}
        val1={product?.warrantyInformation}
        head2={'Availability Status'}
        val2={product?.availabilityStatus}
      />
      <TextComp
        head1={'Rating'}
        val1={product?.rating}
        head2={'Stock'}
        val2={product?.stock}
      />
      <TextComp
        head1={'Price'}
        val1={`$ ${product?.price}`}
        head2={'Discount Percentage'}
        val2={`${product?.discountPercentage} %`}
      />
      {/* <TextComp head1={'Description'} val1={product?.description} /> */}
      <View style={{flex: 1}}>
        <Text style={styles.head}>{'Description'}</Text>
        <Text style={commonStyle.text}>{product?.description}</Text>
      </View>
    </View>
  );
};

export default ProductsDetailsFromApiCall;

const styles = StyleSheet.create({
  headName: {
    textAlign: 'center',
    padding: 30,
    fontFamily: fonts.medium,
    fontSize: 30,
  },
  head: {
    ...commonStyle.text,
    paddingBottom: hp(10),
    color: colors.lightGray,
  },
});

// const getProductListData = async () => {
//   try {
//     const request = {
//       data: {},
//       onSuccess: async res => {
//         console.log('res-=-=-=-=-=-=-=-', res);
//         setProduct(res?.products?.at(productId - 1));
//       },
//       onFail: err => {
//         console.log('err::', err);
//       },
//     };
//     getProductsData({
//       request: request,
//     });
//   } catch (error) {
//     console.log('errorerror::', error);
//   }
// };
// console.log('product-=-=-', product);
