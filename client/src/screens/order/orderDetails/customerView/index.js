import { Text, View } from "react-native";
import Loader from "./loader";
import { useValues } from "@utils/context";
import { windowHeight } from "@theme/appConstant";
import { useTheme } from "@react-navigation/native";
import styles from "./styles";

export default CustomerView = ({ details, showLoader }) => {
  const { viewRTLStyle } = useValues();
  const { colors } = useTheme();

  const addComman = (data) => {
    return data ? ", " + data : "";
  };

  return (
    <View style={styles.container}>
      {showLoader ? (
        <Loader viewAlign={viewRTLStyle} />
      ) : (
        <View>
          <Text style={styles.customerDetail}>Customer Details</Text>
          <View>
            <Text style={styles.cusDetail}>Billing Address</Text>
            <Text style={styles.cusDetail}>
              C-53, Ground floor, Stacia Corp, Industrial Estate, Guindy, Tamil
              Nadu-600032
            </Text>
          </View>
          <View style={[styles.border, { borderBottomColor: colors.border }]} />
          <View>
            <Text style={styles.cusDetail}>Shipping Address</Text>
            <Text style={styles.cusDetail}>
              C-53, Ground floor, Stacia Corp, Industrial Estate, Guindy, Tamil
              Nadu-600032
            </Text>
          </View>
          {/* <View
            style={[
              styles.detailContainer,
              {
                flexDirection: viewRTLStyle,
                borderBottomColor: colors.border,
                marginTop: windowHeight(6),
              },
            ]}
          >
            <Text style={styles.value}>Billing Address:</Text>
            <Text style={styles.detail}>
              {details?.billing_address?.street || ""}
              {addComman(details?.billing_address?.city)}
              {addComman(details?.billing_address?.state?.name)}
              {addComman(details?.billing_address?.country?.name)}
            </Text>
          </View>
          <View
            style={[
              styles.detailContainer,
              { flexDirection: viewRTLStyle, borderBottomColor: colors.border },
            ]}
          >
            <Text style={styles.value}>Shipping Address:</Text>

            <Text style={styles.detail}>
              {details?.shipping_address?.street || ''}
              {addComman(details?.shipping_address?.city)}
              {addComman(details?.shipping_address?.state?.name)}
              {addComman(details?.shipping_address?.country?.name)}
            </Text>
          </View> */}
          {/* <View
            style={[
              styles.detailContainer,
              {flexDirection: viewRTLStyle, borderBottomColor: colors.border},
            ]}>
            <Text style={styles.value}>Delivery Slot</Text>
            <Text style={styles.detail}>{details?.delivery_description}</Text>
          </View>
          <View
            style={[
              styles.detailContainer,
              {flexDirection: viewRTLStyle, borderBottomColor: colors.border},
            ]}>
            <Text style={styles.value}>Payment Method</Text>
            <Text style={styles.detail}>
              {details?.payment_method?.toUpperCase()}
            </Text>
          </View>
          <View
            style={[
              styles.detailContainer,
              {
                flexDirection: viewRTLStyle,
                borderBottomColor: colors.border,
                borderBottomWidth: 0,
              },
            ]}>
            <Text style={styles.value}>Payment Status</Text>
            <Text style={styles.detail}>{details?.payment_status}</Text>
          </View> */}
        </View>
      )}
    </View>
  );
};
