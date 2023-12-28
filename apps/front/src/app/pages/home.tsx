/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useRef, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Pressable,
  Linking,
} from 'react-native';
import Svg, { Path } from 'react-native-svg';

export const Home = ( { navigation, token }: { navigation: any, token:string }) => {
  const [, setWhatsNextYCoord] = useState<number>(0);
  const scrollViewRef = useRef<null | ScrollView>(null);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          ref={(ref) => {
            scrollViewRef.current = ref;
          }}
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}
        >
          <View style={styles.section}>
            <Text style={styles.textLg}>Hello there,</Text>
            <Text style={[styles.textXL, styles.appTitleText]} testID="heading">
              Welcome Front 👋
            </Text>
          </View>
          <View style={styles.section}>
            <View style={[styles.shadowBox]}>
              <Text style={[styles.marginBottomMd, styles.textLg]}>Menu</Text>
              <Pressable
                style={[styles.listItem, styles.learning]}
                // ao clicar no botão, vai para a página de pesquisa
                onPress={() =>
                  navigation.navigate('Search', {name: 'Search', token: token})
                }
              >
                <Svg
                  width={24}
                  height={24}
                  stroke="#000000"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <Path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m21 21l-6-6m2-5a7 7 0 1 1-14 0a7 7 0 0 1 14 0Z"
                  />
                </Svg>
                <View style={styles.listItemTextContainer}>
                  <Text style={[styles.textMd]}>
                    Pesquisar preços de produtos
                  </Text>
                  <Text style={[styles.text2XS, styles.textSubtle]}>
                    Preços e margens estão aqui
                  </Text>
                </View>
                <Svg
                  width={18}
                  height={18}
                  stroke="#000000"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <Path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </Svg>
              </Pressable>
              <Pressable
                style={[styles.listItem, styles.learning]}
                onPress={() =>
                  navigation.navigate('Prices', { name: 'Prices', token: token })
                }
              >
                <Svg
                  width={24}
                  height={24}
                  stroke="#000000"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <Path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2s3 .895 3 2s-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0Z"
                  />
                </Svg>
                <View style={styles.listItemTextContainer}>
                  <Text style={[styles.textMd]}>Cadastrar preço</Text>
                  <Text style={[styles.text2XS, styles.textSubtle]}>
                    Cadastre os preços que você deseja
                  </Text>
                </View>
                <Svg
                  width={18}
                  height={18}
                  stroke="#000000"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <Path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </Svg>
              </Pressable>
              <Pressable
                style={[styles.listItem, styles.learning]}
                onPress={() =>
                  navigation.navigate('Products', { name: 'Products', token: token })
                }
              >
                <Svg width={24} height={24} fill="#000000" viewBox="0 0 24 24">
                  <Path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 11V7a4 4 0 0 0-8 0v4M5 9h14l1 12H4L5 9Z"
                  />
                </Svg>
                <View style={styles.listItemTextContainer}>
                  <Text style={[styles.textMd]}>Cadastrar produto</Text>
                  <Text style={[styles.text2XS, styles.textSubtle]}>
                    Cadastrar os produtos que você deseja
                  </Text>
                </View>
                <Svg
                  width={18}
                  height={18}
                  stroke="#000000"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <Path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </Svg>
              </Pressable>
              <Pressable
                style={[styles.listItem, styles.learning]}
                onPress={() =>
                  navigation.navigate('Markets', { name: 'Markets', token: token})
                }
              >
                <Svg width={24} height={24} fill="#000000" viewBox="0 0 24 24">
                  <Path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 1 0 0 4a2 2 0 0 0 0-4Zm-8 2a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z"
                  />
                </Svg>
                <View style={styles.listItemTextContainer}>
                  <Text style={[styles.textMd]}>Cadastrar mercado</Text>
                  <Text style={[styles.text2XS, styles.textSubtle]}>
                    Cadastre os mercados que você deseja
                  </Text>
                </View>
                <Svg
                  width={18}
                  height={18}
                  stroke="#000000"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <Path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </Svg>
              </Pressable>
            </View>
          </View>

          <View style={styles.section}>
            <Pressable
              onPress={() => Linking.openURL('https://github.com/WDelesposti')}
            >
              <View style={[styles.listItem, styles.shadowBox]}>
                <Svg width={48} height={48} fill="#000000" viewBox="0 0 24 24">
                  <Path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </Svg>
                <View style={styles.listItemTextContainer}>
                  <Text
                    style={[
                      styles.textMd,
                      styles.textBold,
                      styles.marginBottomSm,
                    ]}
                  >
                    Created by WDelesposti
                  </Text>
                  <Text style={[styles.textXS, styles.textLight]}>
                    Love this app? Give us a star!
                  </Text>
                </View>
              </View>
            </Pressable>
          </View>

          <View
            style={styles.section}
            onLayout={(event) => {
              const layout = event.nativeEvent.layout;
              setWhatsNextYCoord(layout.y);
            }}
          ></View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#ffffff',
  },
  codeBlock: {
    backgroundColor: 'rgba(55, 65, 81, 1)',
    marginVertical: 12,
    padding: 12,
    borderRadius: 4,
  },
  monospace: {
    color: '#ffffff',
    fontFamily: 'Courier New',
    marginVertical: 4,
  },
  comment: {
    color: '#cccccc',
  },
  marginBottomSm: {
    marginBottom: 6,
  },
  marginBottomMd: {
    marginBottom: 18,
  },
  marginBottomLg: {
    marginBottom: 24,
  },
  textLight: {
    fontWeight: '300',
  },
  textBold: {
    fontWeight: '500',
  },
  textCenter: {
    textAlign: 'center',
  },
  text2XS: {
    fontSize: 12,
  },
  textXS: {
    fontSize: 14,
  },
  textSm: {
    fontSize: 16,
  },
  textMd: {
    fontSize: 18,
  },
  textLg: {
    fontSize: 24,
  },
  textXL: {
    fontSize: 48,
  },
  textContainer: {
    marginVertical: 12,
  },
  textSubtle: {
    color: '#6b7280',
  },
  section: {
    marginVertical: 24,
    marginHorizontal: 12,
  },
  shadowBox: {
    backgroundColor: 'white',
    borderRadius: 24,
    shadowColor: 'black',
    shadowOpacity: 0.15,
    shadowOffset: {
      width: 1,
      height: 4,
    },
    shadowRadius: 12,
    padding: 24,
    marginBottom: 24,
  },
  listItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  listItemTextContainer: {
    marginLeft: 12,
    flex: 1,
  },
  appTitleText: {
    paddingTop: 12,
    fontWeight: '500',
  },
  hero: {
    borderRadius: 12,
    backgroundColor: '#143055',
    padding: 36,
    marginBottom: 24,
  },
  heroTitle: {
    flex: 1,
    flexDirection: 'row',
  },
  heroTitleText: {
    color: '#ffffff',
    marginLeft: 12,
  },
  heroText: {
    color: '#ffffff',
    marginVertical: 12,
  },
  whatsNextButton: {
    backgroundColor: '#ffffff',
    paddingVertical: 16,
    borderRadius: 8,
    width: '50%',
    marginTop: 24,
  },
  learning: {
    marginVertical: 12,
  },
  love: {
    marginTop: 12,
    justifyContent: 'center',
  },
});

export default Home;
