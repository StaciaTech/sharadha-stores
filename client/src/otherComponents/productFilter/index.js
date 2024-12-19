import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import Data from '@utils/json';
import {useTheme} from '@react-navigation/native';
import {OptionButton} from '@commonComponents';
import {GlobalStyle} from '@style';
import {useValues} from '@utils/context';
import {fontSizes} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import appColors from '@theme/appColors';
import {Check, HeaderArrow, Rating} from '@utils/icons';
import styles from './styles';

export function ProductFilter(props) {
  const [selected, setSelected] = useState(0);
  const [filterArr, setFilterArr] = useState([]);
  const [selectedType, setSelectedType] = useState();
  const [select, setSelect] = useState([]);
  const [slugs, setSlugs] = useState([]);
  const {viewRTLStyle} = useValues();
  const {colors} = useTheme();

  const changeSelected = (attribute, key, style) => {
    setSelect(attribute);
    setSelected(key);
    setSelectedType(style);
  };

  useEffect(() => {
    checkValue();
  }, []);

  const checkValue = () => {
    if (props.filterParams) {
      setFilterArr(props.filters);
      changeSelected(props.filters[0].attribute_values, 0, 'brands');
    } else {
      changeArr();
    }
  };

  const changeArr = () => {
    const found = props.filters.some(item => item.slug === 'brand');
    const brands = {
      name: 'Brands',
      style: 'brands',
      slug: 'brand',
      attribute_values: props.brands,
    };
    var updatedData = [];
    props.filters.map(
      item => item.attribute_values.length > 0 && updatedData.push(item),
    );
    if (!found) {
      updatedData.unshift(brands);
    }
    updatedData = updatedData.map(item => {
      const updatedNestedData = item?.attribute_values?.map(nestedItem => {
        const data = {...nestedItem, selected: false};
        return data;
      });
      return {...item, attribute_values: updatedNestedData};
    });
    if (!found) {
      updatedData.push(Data.price, Data.rating);
    }
    setSelectedType(updatedData[0].style);
    setSelect(updatedData[0].attribute_values);
    setFilterArr(updatedData);
  };

  const changeVal = (slug, attributeId) => {
    var slugs = [];
    const arr = filterArr.map(item => {
      item.attribute_values.forEach(val => {
        if (val.slug == slug) val.selected = !val.selected;
      });
      return item;
    });
    const selectedArr = arr.filter(item => item.id == attributeId);
    arr.forEach(item => {
      item.attribute_values.forEach(val => {
        if (val.selected) {
          slugs.push({slug: item.slug, val: val.slug});
        }
      });
    });
    setSlugs(slugs);
    setFilterArr(arr);
    setSelect(selectedArr[0].attribute_values);
  };

  const filterProducts = () => {
    var brands = [];
    var rating = [];
    var price = [];
    var attribute = [];
    slugs.map(item => {
      if (item.slug == 'brand') {
        brands.push(item.val);
      } else if (item.slug == 'rating') {
        rating.push(item.val);
      } else if (item.slug == 'price') {
        price.push(item.val);
      } else {
        attribute.push(item.val);
      }
    });
    const brandString = `brand=${brands.join(',')}`;
    const ratingString = `rating=${rating.join(',')}`;
    const priceString = `price=${price.join(',')}`;
    const attributeString = `attribute=${attribute.join(',')}`;

    const queryString = `${attributeString}&${brandString}&${ratingString}&${priceString}`;
    const val = getTotalSelected(filterArr);
    props.onPress2(queryString, filterArr, val);
  };

  const getSelected = data => {
    const val = data?.filter(item => item.selected == true).length;
    return val > 0 && val;
  };

  const getTotalSelected = dataArray => {
    return dataArray.reduce(
      (total, item) => total + getSelected(item.attribute_values),
      0,
    );
  };

  const clearValues = () => {
    changeArr();
    props.onPress2('', filterArr, 0);
  };

  return (
    <View
      style={[
        GlobalStyle.modal,
        {backgroundColor: colors.background, height: '100%', padding: 0},
      ]}>
      <View>
        <View
          style={[
            styles.headerContainer,
            {
              flexDirection: viewRTLStyle,
              borderBottomColor: colors.border,
            },
          ]}>
          <TouchableOpacity
            onPress={props.onPress1}
            style={[styles.filterAlign, {flexDirection: viewRTLStyle}]}
            activeOpacity={1}>
            <HeaderArrow />
            <Text
              style={[
                styles.filter,
                {
                  color: colors.text,
                },
              ]}>
              Filters
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={clearValues}>
            <Text
              style={[
                styles.clearAll,
                {
                  color: colors.text,
                },
              ]}>
              Clear All
            </Text>
          </TouchableOpacity>
        </View>
        <View style={[GlobalStyle.size, {flexDirection: viewRTLStyle}]}>
          <ScrollView
            contentContainerStyle={styles.container}
            style={{
              backgroundColor: colors.primary,
            }}>
            {filterArr.map((item, key) => (
              <TouchableOpacity
                key={key}
                onPress={() =>
                  changeSelected(item.attribute_values, key, item.style)
                }
                style={[
                  styles.itemContainer,
                  {
                    backgroundColor:
                      selected === key ? colors.background : colors.primary,
                    borderColor: colors.border,
                  },
                ]}>
                <View style={styles.nameContainer}>
                  <Text
                    style={{
                      color: colors.text,
                      fontFamily:
                        selected === key
                          ? appFonts.mulishExtraBold
                          : appFonts.mulish,
                      fontSize: fontSizes.FONT18,
                    }}>
                    {item.name}
                  </Text>
                  <Text
                    style={{
                      color: colors.text,
                      fontFamily:
                        selected === key
                          ? appFonts.mulishExtraBold
                          : appFonts.mulish,
                      fontSize: fontSizes.FONT18,
                    }}>
                    {getSelected(item.attribute_values)}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
          <ScrollView
            style={styles.subCategory}
            contentContainerStyle={{paddingBottom: 145}}>
            {select.map((item, key) => (
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => changeVal(item.slug, item.attribute_id)}
                key={key}
                style={[
                  styles.detailContainer,
                  {
                    flexDirection: viewRTLStyle,
                    borderColor: colors.border,
                  },
                ]}>
                <Check
                  color={item.selected ? appColors.primary : appColors.content}
                />
                {selectedType === 'color' && (
                  <View
                    style={[
                      styles.colorContainer,
                      {
                        backgroundColor: item.hex_color,
                      },
                    ]}
                  />
                )}
                <View style={styles.ratingContainer}>
                  {selectedType === 'rating' && <Rating />}
                </View>
                <Text
                  style={[
                    styles.value,
                    {
                      color: item.selected ? colors.text : appColors.content,
                      fontFamily: item.selected
                        ? appFonts.mulishExtraBold
                        : appFonts.mulish,
                    },
                  ]}>
                  {item.value || item.name}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
      <View
        style={[
          styles.buttonContainer,
          {
            backgroundColor: colors.background,
          },
        ]}>
        <OptionButton
          style={styles.btn}
          txt1={'Close'}
          txt2={'Apply'}
          onPress1={props.onPress1}
          onPress2={filterProducts}
        />
      </View>
    </View>
  );
}
