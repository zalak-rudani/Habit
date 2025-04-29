import {
  ActivityIndicator,
  Button,
  FlatList,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import commonStyle from '../helper/constants/commonStyle';
import axios from 'axios';
import {hp, wp} from '../helper/globalFunc';
import HeaderComp from '../components/HeaderComp';
import icons from '../helper/constants/icons';
import colors from '../helper/constants/colors';
import {fonts} from '../helper/constants/fonts';
// import {getApiData} from '../../api/axios/axiosApis';
import {
  deleteProductsData,
  getProductsData,
  patchProductsData,
  postProductsData,
  putProductsData,
} from '../../api/axios/actions';
import {debounce} from 'lodash';

const ApiCall = ({navigation}) => {
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [dSearchInput, setDsearchInput] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isPaginationLoading, setIsPaginationLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [patchPress, setPatchPress] = useState(false);
  const [putPress, setPutPress] = useState(false);
  const [deletePress, setDeletePress] = useState(false);

  console.log('filteredData-=-=-=', filteredData);
  console.log('data-=-=-=', data);
  console.log('isLoadingisLoading-=-=-=', isLoading);

  useEffect(() => {
    getProductListData();
  }, [dSearchInput]);

  const postProductListData = async () => {
    const request = {
      data: {
        id: Date.now(),
        title: 'post a new product',
        description: 'description of new product',
        price: 100,
      },
      params: {},
      onSuccess: res => {
        console.log('post success:', res);
        setData(prev => [res, ...prev]);
      },
      onFail: err => console.log('post error', err),
    };
    await postProductsData(request);
  };

  //PUT sends the entire updated resource in the request body
  const putProductListData = useCallback(
    async id => {
      const updatedData = {
        title: 'Updated Product',
      };
      const request = {
        data: updatedData,
        params: {id},
        onSuccess: res => {
          console.log('putsucces=-=-=-', res);
          setData(prev =>
            prev.map(item => (item.id === id ? {...item, ...res} : item)),
          );
        },
        onFail: err => console.log('put error-=-=-=-', err),
      };
      await putProductsData(request);
    },
    [putPress],
  );

  // PATCH only sends the changes to be made
  const patchProductListData = useCallback(
    async id => {
      const updatedData = {
        // title: 'Updated Product',
        description: 'Updated using patch',
        // price: 145,
      };
      const request = {
        data: updatedData,
        params: {id},
        onSuccess: res => {
          console.log('patchsucces=-=-=-', res);
          setData(prev =>
            prev.map(item => (item.id === id ? {...item, ...res} : item)),
          );
        },
        onFail: err => console.log('patch error-=-=-=-', err),
      };
      await patchProductsData(request);
    },
    [patchPress],
  );

  const deleteProductListData = useCallback(
    async id => {
      const request = {
        params: {},
        onSuccess: res => {
          console.log('delete success:', res);
          setData(prev => prev.filter(product => product.id !== id));
        },
        onFail: err => console.log('delete error:', err),
      };
      await deleteProductsData(request);
    },
    [deletePress],
  );

  const getProductListData = async () => {
    if (!searchInput) {
      setIsPaginationLoading(true);
    }
    let paramsObj = searchInput
      ? {
          q: searchInput,
        }
      : {
          limit: 10,
          skip: currentPage * 10,
        };
    try {
      const request = {
        data: {},
        params: paramsObj,
        onSuccess: async res => {
          console.log('res:::::::::::::::::', res);
          setIsLoading(false);
          {
            searchInput === ''
              ? setData([...data, ...res?.products])
              : setFilteredData(res?.products);
          }
          if (!searchInput) {
            setIsPaginationLoading(false);
            setCurrentPage(currentPage + 1);
          }
        },
        onFail: err => {
          console.log('err::', err);
          setIsLoading(false);
          setIsPaginationLoading(false);
        },
      };
      await getProductsData(request);
    } catch (error) {
      console.log('errorerror::', error);
    }
  };

  // const debouncedGetProductListData = useMemo(
  //   () => debounce(getProductListData, 1000),
  //   [],
  // );

  // const debouncedGetProductListData = useCallback(text =>
  //   debounce(setDsearchInput(text), 2000),[]);

  const debounceHandler = useCallback(
    debounce(text => {
      {
        console.log('debounce-=-=-=-=');
      }
      setDsearchInput(text);
    }, 5000),
    [],
  );

  const handleSearch = text => {
    setSearchInput(text);
    debounceHandler(text);
    // debounce(text => {
    //   setDsearchInput(text);
    // }, 5000);
  };

  const HighlightedText = (text, highlight) => {
    if (!highlight) return <Text style={styles.productsTitle}>{text}</Text>;

    const regex = new RegExp(`(${highlight})`, 'i');
    const parts = text.split(regex);
    // console.log('parts-=-=-=', parts);

    return (
      <Text style={styles.productsTitle}>
        {parts.map((item, index) => (
          <Text
            key={index}
            style={
              item.toLowerCase() === highlight.toLowerCase()
                ? styles.highlightedText
                : {}
            }>
            {item}
          </Text>
        ))}
      </Text>
    );
  };

  let contentStyle = {};

  if (searchInput === '') {
    contentStyle = {};
  } else if (
    selectedItem?.toLowerCase()?.includes(searchInput?.toLowerCase())
  ) {
    contentStyle = {};
  } else {
    contentStyle = {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'red',
    };
  }
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
      <View style={{flex: 1}}>
        <View style={styles.searchView}>
          <Image style={styles.icon} source={icons.search} />
          <TextInput
            style={{flex: 1}}
            placeholder="Search"
            clearButtonMode="always"
            value={searchInput}
            onChangeText={text => handleSearch(text)}
            // onChangeText={text => setSearchInput(text)}
          />
        </View>
        {/* <Button title="button" onPress={filter} /> */}

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
          // <ScrollView scrollEnabled={true} showsVerticalScrollIndicator={false}>
          <>
            <FlatList
              style={{paddingHorizontal: wp(16)}}
              indicatorStyle="black"
              // contentContainerStyle={contentStyle}
              scrollEnabled={true}
              data={searchInput === '' ? data : filteredData}
              renderItem={({item}) => {
                // if (searchInput === '') {
                return (
                  <TouchableOpacity
                    style={styles.productsCard}
                    onPress={() =>
                      navigation.navigate('ProductsDetailsFromApiCall', {
                        id: item?.id,
                      })
                    }>
                    <View style={styles.directionRow}>
                      <Image
                        resizeMode="contain"
                        style={styles.image}
                        source={{uri: item?.thumbnail}}
                      />

                      <View style={styles.contentCenter}>
                        <Text style={styles.productsId}>{`# ${item?.id}`}</Text>
                        <View style={styles.titleView}>
                          {/* <Text style={styles.productsTitle}>
                          {item?.title}
                          </Text> */}
                          {HighlightedText(item?.title, searchInput)}
                        </View>

                        <Text style={styles.productsId}>
                          {`Price: $ ${item?.price}`}
                        </Text>
                        <TouchableOpacity
                          onPress={() => {
                            deleteProductListData(item?.id);
                            setDeletePress(true);
                          }}>
                          <Image
                            resizeMode="contain"
                            style={commonStyle.icon}
                            source={icons.delete}
                          />
                        </TouchableOpacity>
                        <TouchableOpacity
                          onPress={() => {
                            putProductListData(item?.id), setPutPress(true);
                          }}>
                          <Text>{'PUT'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          onPress={() => {
                            patchProductListData(item?.id), setPatchPress(true);
                          }}>
                          <Text>{'PATCH'}</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                    <Text style={styles.productsDescriptionHead}>
                      {'Description :'}
                    </Text>

                    <Text style={styles.productsDescription}>
                      {HighlightedText(item?.description, searchInput)}
                      {/* {item?.description} */}
                    </Text>
                  </TouchableOpacity>
                );
                // } else {
                //   return (
                //     <TouchableOpacity
                //       style={styles.productsCard}
                //       onPress={() =>
                //         navigation.navigate('ProductsDetailsFromApiCall', {
                //           id: item?.id,
                //         })
                //       }>
                //       {/* <View style={styles.directionRow}> */}
                //       {/* <Image
                //           resizeMode="contain"
                //           style={styles.image}
                //           source={{uri: item?.thumbnail}}
                //         /> */}
                //       <View style={styles.titleView}>
                //         <Text style={styles.productsTitle}>{item?.id}</Text>
                //         {HighlightedText(item?.title, searchInput)}
                //       </View>
                //       {/* </View> */}
                //     </TouchableOpacity>
                //   );
                // }
              }}
              ListEmptyComponent={
                <View
                  style={{
                    backgroundColor: colors.white,
                    height: hp(100),
                    marginHorizontal: wp(50),
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={commonStyle.mediumText}>{'no data found'}</Text>
                </View>
              }
              onEndReached={() => getProductListData()}
              onEndReachedThreshold={0.1}
              ListFooterComponent={() => {
                return (
                  <View
                    style={{
                      // height: hp(100),
                      // width: wp(60),
                      flex: 1,
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
            <TouchableOpacity onPress={postProductListData}>
              <Text>{'+ Add Product (POST)'}</Text>
            </TouchableOpacity>
          </>

          // </ScrollView>
        )}
      </View>
    </View>
  );
};

export default ApiCall;

const styles = StyleSheet.create({
  icon: {
    height: 25,
    width: 25,
    marginHorizontal: wp(15),
  },
  searchView: {
    height: hp(40),
    // width: wp(350),
    marginHorizontal: wp(16),
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: hp(20),
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productsCard: {
    // flex: 1,
    backgroundColor: colors.white,
    marginVertical: hp(20),
    padding: 10,
    borderRadius: 15,
  },
  directionRow: {
    // flex: 1,
    flexDirection: 'row',
  },
  image: {
    height: hp(130),
    width: hp(130),
    borderWidth: 1,
    borderColor: colors.lightGray,
    borderRadius: 5,
    marginRight: wp(20),
    marginBottom: hp(20),
    // justifyContent: 'space-between',
  },
  contentCenter: {
    flex: 1,
    justifyContent: 'center',
  },
  productsId: {
    fontSize: 20,
    fontFamily: fonts.medium,
    color: 'black',
  },
  titleView: {
    backgroundColor: colors.primary.backgroundColor,
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  productsTitle: {
    fontSize: 15,
    fontFamily: fonts.medium,
    color: 'black',
  },
  productsDescriptionHead: {
    fontSize: 20,
    fontFamily: fonts.regular,
    color: 'black',
    marginBottom: 8,
  },
  productsDescription: {
    fontSize: 15,
    fontFamily: fonts.extraLight,
    color: 'black',
  },
  highlightedText: {
    fontSize: 15,
    fontFamily: fonts.medium,
    color: 'green',
  },
});

// const getSearchData = async () => {
//   // const searchNextPage = searchCurrentPage + 1;
//   // setIsPaginationLoading(true);
//   try {
//     const request = {
//       data: {},
//       onSuccess: async res => {
//         console.log('searchhhhhhhhh****************', res);

//         setSearchData([...searchData, ...res?.products]);
//         setIsPaginationLoading(false);
//         setSearchCurrentPage(searchNextPage);
//       },
//       onFail: err => {
//         console.log('err::', err);
//         // setIsPaginationLoading(false);
//       },
//     };
//     getProductsData({
//       request: request,
//       params: {
//         limit: 10,
//         skip: searchCurrentPage * 10,
//         search: searchInput,
//       },
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

// const filteredData = data?.filter(item => {
//   return item?.title?.toLowerCase()?.includes(searchInput?.toLowerCase());
// });

// console.log('filterdata-=-=-=', filteredData);

// const debouncedGetProductListData = useMemo(
//   () => debounce(getProductListData, 500),
//   [],
// );

// const debouncedGetProductListData = () => debounce(getProductListData, 2000);

// const handleSearch = useCallback(
//   async text => {
//     setSearchInput(text);
//     debouncedGetProductListData(text);
//   },
//   [debouncedGetProductListData],
// );

/*.
.
.
.
.
.*/
