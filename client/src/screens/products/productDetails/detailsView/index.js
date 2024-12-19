import React, {useState} from 'react';
import {Text, View, useWindowDimensions} from 'react-native';
import {useValues} from '@utils/context';
import {useTheme} from '@react-navigation/native';
import RenderHtml from 'react-native-render-html';
import appColors from '@theme/appColors';
import {fontSizes, windowWidth} from '@theme/appConstant';
import styles from './styles';

export default detailsView = props => {
  const {textRTLStyle, viewRTLStyle, viewSelfRTLStyle} = useValues();
  const [showDesc, setShowDesc] = useState(false);
  const {colors} = useTheme();
  const {width} = useWindowDimensions();
  const source = {
    html: props.desc,
  };

  const showDescription = () => {
    setShowDesc(!showDesc);
  };

  return (
    <View style={styles.container}>
      <Text
        style={[styles.detail, {color: colors.text, textAlign: textRTLStyle}]}>
        Product Details
      </Text>
      <Text style={styles.shortDesc}>{props.shortDesc}</Text>
      {showDesc && (
        <RenderHtml
          contentWidth={width}
          source={source}
          tagsStyles={{
            p: {color: appColors.content, fontFamily: 'Mulish-Bold'},
            h6: {color: appColors.content, fontSize: fontSizes.FONT18},
            img: {width: windowWidth(430)},
          }}
        />
      )}
      <Text style={styles.option} onPress={showDescription}>
        {showDesc ? 'See less' : 'See more'}
      </Text>
    </View>
  );
};
