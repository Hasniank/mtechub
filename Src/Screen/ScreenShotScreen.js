import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useRef, useState} from 'react';
import ViewShot from 'react-native-view-shot';

const ScreenShotScreen = () => {
  const [imageUri, setImageUri] = useState('');
  console.log(imageUri, '..');
  const ref = useRef(null);
  console.log(ref, 'ScreenShot Taken');
  const imagePath = imageUri;

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ViewShot
        ref={ref}
        style={{
          width: '80%',
          height: '50%',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
        }}>
        <View
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'green',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
          }}>
          <Text style={{color: '#fff', fontSize: 30}}>ScreenShot</Text>
        </View>
      </ViewShot>
      <View style={{marginTop: 20, width: '60%'}}>
        <TouchableOpacity
          style={{
            width: '100%',
            backgroundColor: 'red',
            height: '30%',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 20,
          }}
          onPress={() => {
            console.log('SCREENSHOT');
            ref.current.capture().then(uri => {
              console.log('do something with ', uri);
              setImageUri(uri);
            });
          }}>
          <Text style={{color: '#fff', fontSize: 30}}>ScreenShot</Text>
        </TouchableOpacity>
      </View>
      <View style={{width: '90%', height: '10%', borderWidth: 1}}>
        <Image source={{uri: imagePath}} style={{width: 350, height: 80}} />
      </View>
    </View>
  );
};

export default ScreenShotScreen;
