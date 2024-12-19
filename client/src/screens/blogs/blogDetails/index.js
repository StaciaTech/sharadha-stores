import React, {useEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  View,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import {Header} from '@commonComponents';
import {useTheme} from '@react-navigation/native';
import RenderHtml from 'react-native-render-html';
import {useValues} from '@utils/context';
import {useDispatch, useSelector} from 'react-redux';
import {blogDetails} from '@api/store/actions';
import Loader from './loader';
import styles from './styles';

export function BlogDetails({route}) {
  const {colors} = useTheme();
  const [content, setContent] = useState();
  const [title, setTitle] = useState('');
  const [image, setImage] = useState();
  const {width} = useWindowDimensions();
  const {isDark} = useValues();
  const dispatch = useDispatch();
  const {loading} = useSelector(state => state.blog);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const id = route.params.id;
    const res = await dispatch(blogDetails(id));
    if (res != 'Error') {
      modifyHtmlContent(res.payload.content);
      setImage(res.payload.blog_thumbnail.original_url);
      setTitle(res.payload.title);
    }
  };

  const source = {
    html: content,
  };

  const modifyHtmlContent = html => {
    const data = isDark
      ? html.replace(/<p>/g, '<p style="color: white;">')
      : html.replace(/<p>/g, '<p style="color: black;">');
    setContent(data);
  };

  return (
    <SafeAreaView>
      <Header isText titleText={'Blog'} />
      {loading ? (
        <Loader />
      ) : (
        <ScrollView>
          {image && (
            <View>
              <Image source={{uri: image}} style={styles.image} />
              <View style={styles.line} />
            </View>
          )}
          <View style={styles.details}>
            <Text
              style={[
                styles.title,
                {
                  color: colors.text,
                },
              ]}>
              {title}
            </Text>
            <RenderHtml
              contentWidth={width}
              source={source}
              systemFonts={['Arial']}
            />
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}
