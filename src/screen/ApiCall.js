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
  const [filteredData, setFilteredData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isPaginationLoading, setIsPaginationLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchCurrentPage, setSearchCurrentPage] = useState(0);

  console.log('data-=-=-=', data);
  console.log('isLoadingisLoading-=-=-=', isLoading);

  useEffect(() => {
    getProductListData();
  }, [searchInput]);

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

  const isEmpty = !data && !filteredData;
  console.log('isEmpty-=-=-=', isEmpty);
  let contentStyle = {};

  if (searchInput === '') {
    contentStyle = {};
  } else if (item?.title?.toLowerCase()?.includes(searchInput?.toLowerCase())) {
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
      <View style={{marginHorizontal: wp(16), flex: 1}}>
        <View style={styles.searchView}>
          <Image style={styles.icon} source={icons.search} />
          <TextInput
            style={{flex: 1}}
            placeholder="Search"
            clearButtonMode="always"
            value={searchInput}
            onChangeText={text => {
              setSearchInput(text);
            }}
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
          // <ScrollView scrollEnabled={true} showsVerticalScrollIndicator={false}>
          <>
            <FlatList
              // contentContainerStyle={
              //   searchInput === ''
              //     ? {}
              //     : item?.title?.toLowerCase()?.includes(searchInput?.toLowerCase())
              //     ? {}
              //     : {
              //         flex: 1,
              //         justifyContent: 'center',
              //         backgroundColor: 'red',
              //       }
              // }
              indicatorStyle="black"
              contentContainerStyle={contentStyle}
              scrollEnabled={true}
              data={searchInput === '' ? data : filteredData}
              renderItem={({item}) => {
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
                      </View>
                    </View>
                    <Text style={styles.productsDescriptionHead}>
                      {'Description :'}
                    </Text>
                    <Text style={styles.productsDescription}>
                      {item?.description}
                    </Text>
                  </TouchableOpacity>
                );
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
              onEndReached={getProductListData}
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
    backgroundColor: colors.white,
    marginVertical: hp(20),
    padding: 10,
    borderRadius: 15,
  },
  directionRow: {
    flex: 1,
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
