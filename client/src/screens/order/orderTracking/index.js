import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {Header} from '@commonComponents';
import appColors from '@theme/appColors';
import {useTheme} from '@react-navigation/native';
import Images from '@utils/images';
import {GlobalStyle} from '@style';
import {windowHeight} from '@theme/appConstant';
import {useSelector} from 'react-redux';
import {OrderDetailsView} from '@otherComponents';
import StepIndicator from 'react-native-step-indicator';
import {
  Pending,
  Processing,
  Shipped,
  OutForDelivery,
  Delivered,
} from '@utils/icons';
import {formatDate, formatTime} from '@utils/helper';
import styles from './styles';
import {useValues} from '@utils/context';

export function OrderTracking({}) {
  const {colors} = useTheme();
  const {orderDetail} = useSelector(state => state.order);
  const [currentPosition, setCurrentPosition] = useState(2);
  const [currentStatus, setCurrentStatus] = useState('');
  const [labels, setLabels] = useState([]);
  const [position, setPositions] = useState(0);
  const [progress, setProgress] = useState(0);
  const {isDark} = useValues();

  useEffect(() => {
    checkPosition();
  }, []);

  const tracking = [
    {id: 1, status: 'pending'},
    {id: 2, status: 'processing'},
    {id: 3, status: 'shipped'},
    {id: 4, status: 'Out_For_Delivery'},
    {id: 5, status: 'delivered'},
  ];

  const checkPosition = () => {
    const activities = orderDetail?.order_status_activities;
    var label = [];
    orderDetail;

    tracking?.map(item => {
      const status =
        item.status.charAt(0).toUpperCase() +
        item.status.slice(1).split('_').join(' ');
      label.push(status);
    });
    setLabels(label);
    const pos = tracking?.length - 1;
    const val = label.filter((item, key) => {
      if (key == pos) {
        return item;
      }
    });
    setCurrentStatus(val[0]);
    setCurrentPosition(pos);
  };

  const icons = [
    <Pending />,
    <Processing />,
    <Shipped />,
    <OutForDelivery />,
    <Delivered />,
  ];

  const checkLen = position => {
    return orderDetail?.order_status_activities?.length <= position;
  };

  const setPosition = pos => {
    let falseCount = 0;
    for (let i = 0; i <= pos; i++) {
      if (!checkLen(i)) {
        falseCount++;
      }
    }
    const adjustedCount = falseCount - 1;
    setProgress(falseCount);

    setPositions(adjustedCount);
  };

  return (
    <SafeAreaView
      style={[GlobalStyle.mainView, {backgroundColor: colors.background}]}>
      <Header
        isText={false}
        showImage={false}
        lightImage={Images.fastkart}
        lightStyle={styles.img}
        darkImage={Images.fastKartDark}
      />
      <OrderDetailsView
        orderNumber={orderDetail?.order_number}
        orderDetail
        status={currentStatus}
      />
      <View
        style={[
          styles.conatiner,
          {
            height: labels.length == 3 ? windowHeight(250) : windowHeight(380),
            backgroundColor: colors.background,
          },
        ]}>
        <StepIndicator
          direction="vertical"
          customStyles={{
            stepIndicatorSize: 30,
            currentStepIndicatorSize: 34,
            separatorStrokeWidth: 1.5,
            currentStepStrokeWidth: 7,
            stepStrokeCurrentColor: '#E7F7F5',
            stepStrokeWidth: 7,
            stepStrokeFinishedColor: '#E7F7F5',
            stepStrokeUnFinishedColor: isDark
              ? appColors.white
              : appColors.blog,
            separatorFinishedColor: appColors.primary,
            separatorUnFinishedColor: '#aaaaaa',
            stepIndicatorFinishedColor: appColors.primary,
            stepIndicatorUnFinishedColor: isDark
              ? appColors.darkDrawer
              : appColors.category,
            stepIndicatorCurrentColor: appColors.primary,
            stepIndicatorLabelFontSize: 13,
            currentStepIndicatorLabelFontSize: 13,
            stepIndicatorLabelCurrentColor: appColors.primary,
            currentStepLabelColor: appColors.primary,
          }}
          currentPosition={position}
          labels={labels}
          stepCount={labels.length}
          renderStepIndicator={() => <Text />}
          renderLabel={({position, label}) => {
            return (
              setPosition(position),
              (
                <View
                  style={[
                    styles.lableContainer,
                    {
                      backgroundColor: checkLen(position)
                        ? isDark
                          ? appColors.darkDrawer
                          : appColors.line
                        : '#D6F1EF',
                    },
                  ]}>
                  <View style={[styles.details, {flexDirection: 'row'}]}>
                    <View style={styles.itemcontainer}>
                      {icons.map((item, key) =>
                        key == position ? (
                          <View
                            key={key}
                            style={[
                              styles.items,
                              {
                                backgroundColor: checkLen(position)
                                  ? '#fff'
                                  : '#fff',
                                height: 35,
                                width: 35,
                                borderRadius: 25,
                              },
                            ]}>
                            {item}
                          </View>
                        ) : null,
                      )}
                      <Text
                        style={[
                          styles.label,
                          {
                            color: checkLen(position)
                              ? appColors.category
                              : appColors.primary,
                          },
                        ]}>
                        {label}
                      </Text>
                    </View>
                    <View>
                      {orderDetail.order_status_activities.map(
                        (item, key) =>
                          key == position && (
                            <View style={styles.dateContainer} key={key}>
                              <Text style={[styles.date, {marginVertical: 2}]}>
                                {formatDate(item.changed_at, 'short')}
                              </Text>
                            </View>
                          ),
                      )}
                      {orderDetail.order_status_activities.map(
                        (item, key) =>
                          key == position && (
                            <Text style={[styles.date, {marginVertical: 2}]}>
                              {formatTime(item.changed_at)}
                            </Text>
                          ),
                      )}
                    </View>
                  </View>
                </View>
              )
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
}
