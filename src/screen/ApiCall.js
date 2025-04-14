import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import commonStyle from '../helper/constants/commonStyle';
import axios from 'axios';
import {hp, wp} from '../helper/globalFunc';
import HeaderComp from '../components/HeaderComp';
import icons from '../helper/constants/icons';
import colors from '../helper/constants/colors';
import {fonts} from '../helper/constants/fonts';
// import {getApiData} from '../../api/axios/axiosApis';
import {getProductsData} from '../../api/axios/actions';

const ApiCall = ({navigation}) => {
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isPaginationLoading, setIsPaginationLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    getProductListData();
  }, []);

  const nextPage = currentPage + 1;
  const getProductListData = async () => {
    // setIsPaginationLoading(true);
    try {
      const request = {
        data: {},
        onSuccess: async res => {
          // setIsPaginationLoading(false);
          setCurrentPage(nextPage);
          setData([...data, ...res?.products]);
          setData(res?.products);
          if (data.length) {
            setIsLoading(false);
            return true;
          } else {
            setIsLoading(false);
            return false;
          }
        },
        onFail: err => {
          console.log('err::', err);
          // setIsPaginationLoading(false);
        },
      };
      getProductsData({
        request: request,
        // params: `?per_page=10&page=${nextPage}`,
      })
        .then(res => {
          console.log('ressssss-=-=-==', res);
        })
        .catch(error => {
          console.log('errrrrrrrrr::', error);
        });
    } catch (error) {
      console.log('errorerror::', error);
    }
  };

  return (
    <View
      style={{
        ...commonStyle.flex1,
      }}>
      <HeaderComp
        text={'Products'}
        onPress1={() => navigation.goBack()}
        source1={icons.left}
      />
      <View style={{marginHorizontal: wp(16), flex: 1}}>
        <View style={styles.searchView}>
          <Image style={styles.icon} source={icons.search} />
          <TextInput
            style={{flex: 1}}
            placeholder="Search"
            clearButtonMode="always"
            value={searchInput}
            onChangeText={text => setSearchInput(text)}
          />
        </View>
        {isLoading ? (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <ActivityIndicator color={'blue'} size={'large'} />
          </View>
        ) : (
          <ScrollView scrollEnabled={true} showsVerticalScrollIndicator={false}>
            <FlatList
              scrollEnabled={false}
              data={data}
              renderItem={({item}) => {
                if (searchInput === '') {
                  return (
                    <TouchableOpacity
                      style={{
                        backgroundColor: colors.white,
                        marginVertical: hp(20),
                        padding: 10,
                        borderRadius: 15,
                      }}>
                      <View
                        style={{
                          flex: 1,
                          flexDirection: 'row',
                        }}>
                        <Image
                          resizeMode="contain"
                          style={{
                            height: hp(130),
                            width: hp(130),
                            borderWidth: 1,
                            borderColor: colors.lightGray,
                            borderRadius: 5,
                            marginRight: wp(20),
                            marginBottom: hp(20),
                          }}
                          source={{uri: item?.thumbnail}}
                        />
                        <View
                          style={{
                            flex: 1,
                            justifyContent: 'center',
                          }}>
                          <Text
                            style={{
                              fontSize: 20,
                              fontFamily: fonts.medium,
                              color: 'black',
                            }}>
                            {`# ${item?.id}`}
                          </Text>
                          <View
                            style={{
                              backgroundColor: colors.primary.backgroundColor,
                              borderRadius: 5,
                              padding: 10,
                              marginTop: 10,
                              marginBottom: 10,
                            }}>
                            <Text
                              style={{
                                fontSize: 15,
                                fontFamily: fonts.medium,
                                color: 'black',
                              }}>
                              {item?.title}
                            </Text>
                          </View>
                          <Text
                            style={{
                              fontSize: 20,
                              fontFamily: fonts.medium,
                              color: 'black',
                            }}>
                            {`Price: $ ${item?.price}`}
                          </Text>
                        </View>
                      </View>
                      <Text
                        style={{
                          fontSize: 20,
                          fontFamily: fonts.regular,
                          color: 'black',
                          marginBottom: 8,
                        }}>
                        {'Description :'}
                      </Text>
                      <Text
                        style={{
                          fontSize: 15,
                          fontFamily: fonts.extraLight,
                          color: 'black',
                        }}>
                        {item?.description}
                      </Text>
                    </TouchableOpacity>
                  );
                }

                if (
                  item?.title
                    ?.toLowerCase()
                    ?.includes(searchInput?.toLowerCase())
                ) {
                  return (
                    <View
                      style={{
                        backgroundColor: colors.white,
                        marginVertical: hp(20),
                        padding: 10,
                        borderRadius: 15,
                      }}>
                      <View
                        style={{
                          flex: 1,
                          flexDirection: 'row',
                        }}>
                        <Image
                          resizeMode="contain"
                          style={{
                            height: hp(130),
                            width: hp(130),
                            borderWidth: 1,
                            borderColor: colors.lightGray,
                            borderRadius: 5,
                            marginRight: wp(20),
                            marginBottom: hp(20),
                          }}
                          source={{uri: item?.thumbnail}}
                        />
                        <View
                          style={{
                            flex: 1,
                            justifyContent: 'center',
                          }}>
                          <Text
                            style={{
                              fontSize: 20,
                              fontFamily: fonts.medium,
                              color: 'black',
                            }}>
                            {`# ${item?.id}`}
                          </Text>
                          <View
                            style={{
                              backgroundColor: colors.primary.backgroundColor,
                              borderRadius: 5,
                              padding: 10,
                              marginTop: 10,
                              marginBottom: 10,
                            }}>
                            <Text
                              style={{
                                fontSize: 15,
                                fontFamily: fonts.medium,
                                color: 'black',
                              }}>
                              {item?.title}
                            </Text>
                          </View>
                          <Text
                            style={{
                              fontSize: 20,
                              fontFamily: fonts.medium,
                              color: 'black',
                            }}>
                            {`Price: $ ${item?.price}`}
                          </Text>
                        </View>
                      </View>
                      <Text
                        style={{
                          fontSize: 20,
                          fontFamily: fonts.regular,
                          color: 'black',
                          marginBottom: 8,
                        }}>
                        {'Description :'}
                      </Text>
                      <Text
                        style={{
                          fontSize: 15,
                          fontFamily: fonts.extraLight,
                          color: 'black',
                        }}>
                        {item?.description}
                      </Text>
                    </View>
                  );
                }

                if (item === null) {
                  return (
                    <View
                      style={{
                        backgroundColor: 'red',
                        height: hp(170),
                        width: wp(150),
                      }}>
                      <Text>{'data not found'}</Text>
                    </View>
                  );
                }
              }}
              onEndReached={getProductListData}
              onEndReachedThreshold={0.1}
              ListFooterComponent={() => {
                return (
                  <View
                    style={{
                      height: hp(100),
                      width: wp(60),
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    {isPaginationLoading && (
                      <ActivityIndicator size={'large'} color={'green'} />
                    )}
                  </View>
                );
              }}
            />
          </ScrollView>
        )}
      </View>
    </View>
  );
};

export default ApiCall;

const styles = StyleSheet.create({
  icon: {
    height: hp(25),
    width: hp(25),
    marginHorizontal: wp(15),
  },
  searchView: {
    height: hp(40),
    // width: wp(350),
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: hp(20),
  },
});

// const getApiData = async () => {
//   try {
//     const response = await axios('https://dummyjson.com/products');
//     console.log('response-=-=-=-', response.data.products);
//     setData(response?.data?.products);
//     if (data.length) {
//       setIsLoading(false);
//       return true;
//     } else {
//       setIsLoading(false);
//       return false;
//     }
//   } catch (error) {
//     console.error(error);
//   }
// };

// const getProductListData = async () => {
//   setIsPaginationLoading(true);
//   try {
//     const request = {
//       data: {},
//       onSuccess: async res => {
//         setIsPaginationLoading(false);
//         setCurrentPage(nextPage);
//         setData([...data, ...res?.products]);
//         if (data.length) {
//           setIsLoading(false);
//           return true;
//         } else {
//           setIsLoading(false);
//           return false;
//         }
//       },
//       onFail: err => {
//         console.log('err::', err);
//         setIsPaginationLoading(false);
//       },
//     };
//     getProductsData({
//       request: request,
//       params: `?per_page=10&page=${nextPage}`,
//     })
//       .then(res => {
//         console.log('ressssss-=-=-==', res);
//       })
//       .catch(error => {
//         console.log('errrrrrrrrr::', error);
//       });
//   } catch (error) {
//     console.log('errorerror::', error);
//   }
// };
