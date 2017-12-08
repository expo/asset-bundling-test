import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

const imageSets = [
  // `//*` --> enabled, `/*` --> disabled
  // So you can simply add or delete a `/` to toggle that block

  //*
  [require('./assets/1/1.jpg')],
  //*/

  /*
  [
    require('./assets/1/10.jpg'),
    require('./assets/1/11.jpg'),
    require('./assets/1/12.jpg'),
    require('./assets/1/13.jpg'),
    require('./assets/1/14.jpg'),
    require('./assets/1/15.jpg'),
    require('./assets/1/16.jpg'),
    require('./assets/1/17.jpg'),
    require('./assets/1/18.jpg'),
    require('./assets/1/19.jpg'),
    require('./assets/1/2.jpg'),
    require('./assets/1/20.jpg'),
    require('./assets/1/3.jpg'),
    require('./assets/1/4.jpg'),
    require('./assets/1/5.jpg'),
    require('./assets/1/6.jpg'),
    require('./assets/1/7.jpg'),
    require('./assets/1/8.jpg'),
    require('./assets/1/9.jpg'),
  ],
  //*/

  /*
  [
    require('./assets/2/1.jpg'),
    require('./assets/2/10.jpg'),
    require('./assets/2/11.jpg'),
    require('./assets/2/12.jpg'),
    require('./assets/2/13.jpg'),
    require('./assets/2/14.jpg'),
    require('./assets/2/15.jpg'),
    require('./assets/2/16.jpg'),
    require('./assets/2/17.jpg'),
    require('./assets/2/18.jpg'),
    require('./assets/2/19.jpg'),
    require('./assets/2/2.jpg'),
    require('./assets/2/20.jpg'),
    require('./assets/2/3.jpg'),
    require('./assets/2/4.jpg'),
    require('./assets/2/5.jpg'),
    require('./assets/2/6.jpg'),
    require('./assets/2/7.jpg'),
    require('./assets/2/8.jpg'),
    require('./assets/2/9.jpg'),
  ],
  //*/

  /*
  [
    require('./assets/3/1.jpg'),
    require('./assets/3/10.jpg'),
    require('./assets/3/11.jpg'),
    require('./assets/3/12.jpg'),
    require('./assets/3/13.jpg'),
    require('./assets/3/14.jpg'),
    require('./assets/3/15.jpg'),
    require('./assets/3/16.jpg'),
    require('./assets/3/17.jpg'),
    require('./assets/3/18.jpg'),
    require('./assets/3/19.jpg'),
    require('./assets/3/2.jpg'),
    require('./assets/3/20.jpg'),
    require('./assets/3/3.jpg'),
    require('./assets/3/4.jpg'),
    require('./assets/3/5.jpg'),
    require('./assets/3/6.jpg'),
    require('./assets/3/7.jpg'),
    require('./assets/3/8.jpg'),
    require('./assets/3/9.jpg'),
  ],
  //*/
];

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={{ flex: 1 }}>
          <View
            style={{
              justifyContent: 'center',
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}>
            {[].concat(...imageSets).map((m, i) => (
              <Image
                key={i}
                style={{
                  width: 100,
                  height: 100,
                  margin: 5,
                }}
                source={m}
              />
            ))}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Expo.Constants.statusBarHeight,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
