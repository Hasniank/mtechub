// // import { StyleSheet, Text, View } from 'react-native'
// // import React from 'react'

// // const ScreenShotScreen = () => {
// //   return (
// //     <View>
// //       <Text>ScreenShotScreen</Text>
// //     </View>
// //   )
// // }

// // export default ScreenShotScreen

// // const styles = StyleSheet.create({})

// // import React, { useRef, useState } from 'react';
// // import { View, PanResponder, StyleSheet, TouchableOpacity, Text } from 'react-native';
// // import ViewShot from 'react-native-view-shot';

// // const ScreenShotScreen = () => {
// //   const viewShotRef = useRef();
// //   const [circleCoordinates, setCircleCoordinates] = useState({ x: 0, y: 0 });
// //   const [capturedImage, setCapturedImage] = useState(null);

// //   const panResponder = PanResponder.create({
// //     onStartShouldSetPanResponder: () => true,
// //     onPanResponderGrant: (event, gestureState) => {
// //       const { locationX, locationY } = event.nativeEvent;
// //       setCircleCoordinates({ x: locationX, y: locationY });
// //     },
// //   });

// //   const takeScreenshot = async () => {
// //     try {
// //       const uri = await viewShotRef.current.capture();
// //       setCapturedImage(uri);
// //     } catch (error) {
// //       console.error('Error capturing screenshot: ', error);
// //     }
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <ViewShot ref={viewShotRef} style={styles.container}>
// //         <View {...panResponder.panHandlers} style={[styles.circle, { left: circleCoordinates.x, top: circleCoordinates.y }]} />
// //       </ViewShot>

// //       <TouchableOpacity style={styles.button} onPress={takeScreenshot}>
// //         <Text style={styles.buttonText}>Take Screenshot</Text>
// //       </TouchableOpacity>

// //       {capturedImage && (
// //         <View style={styles.capturedImageContainer}>
// //           <Text style={styles.capturedText}>Captured Image:</Text>
// //           <Image source={{ uri: capturedImage }} style={styles.capturedImage} />
// //         </View>
// //       )}
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// //   circle: {
// //     width: 100,
// //     height: 100,
// //     borderRadius: 50,
// //     backgroundColor: 'red',
// //     position: 'absolute',
// //   },
// //   button: {
// //     backgroundColor: 'blue',
// //     padding: 10,
// //     borderRadius: 5,
// //     marginTop: 20,
// //   },
// //   buttonText: {
// //     color: 'white',
// //     textAlign: 'center',
// //   },
// //   capturedImageContainer: {
// //     alignItems: 'center',
// //     marginTop: 20,
// //   },
// //   capturedText: {
// //     fontSize: 18,
// //     marginBottom: 10,
// //   },
// //   capturedImage: {
// //     width: 200,
// //     height: 200,
// //   },
// // });

// // export default ScreenShotScreen;

// import React from 'react';
// import { View, PanResponder } from 'react-native';
// import ViewShot from 'react-native-view-shot';

// const TouchableScreenshotCapture = () => {
//   const viewShotRef = React.useRef(null);
//   const panResponder = React.useRef(
//     PanResponder.create({
//       onStartShouldSetPanResponder: () => true,
//       onPanResponderGrant: () => {
//         // Gesture started, take a screenshot
//         captureScreenshot();
//       },
//     })
//   ).current;

//   const captureScreenshot = async () => {
//     try {
//       if (viewShotRef.current) {
//         const result = await viewShotRef.current.capture();
//         // result is the captured image in base64 format
//         console.log('Screenshot captured:', result);
//       }
//     } catch (error) {
//       console.error('Failed to capture screenshot:', error);
//     }
//   };

//   return (
//     <ViewShot ref={viewShotRef} options={{ format: 'jpg', quality: 0.9 }}>
//       <View style={{ flex: 1 }} {...panResponder.panHandlers}>
//         {/* Your content goes here */}
//       </View>
//     </ViewShot>
//   );
// };

// export default TouchableScreenshotCapture;

// import React, {useRef} from 'react';
// import {View, Button, Alert, PermissionsAndroid} from 'react-native';
// import ViewShot from 'react-native-view-shot';

// const ScreenShotScreen = () => {
//   const viewShotRef = useRef();

//   const requestStoragePermission = async () => {
//     try {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
//       );
//       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//         captureAndSave();
//       } else {
//         Alert.alert(
//           'Permission Denied',
//           'Cannot save screenshot without storage permission.',
//         );
//       }
//     } catch (err) {
//       console.warn(err);
//     }
//   };

//   const captureAndSave = async () => {
//     try {
//       setTimeout(async () => {
//         const captureURI = await viewShotRef.current.capture();
//         // Rest of the saving process
//         // ...
//         Alert.alert('Success', 'Screenshot saved to the gallery!');
//       }, 1000); // Delay for 1 second before capturing
//     } catch (error) {
//       Alert.alert('Error', 'Failed to save the screenshot');
//       console.error(error);
//     }
//   };

//   return (
//     <View style={{flex: 1}}>
//       <ViewShot ref={viewShotRef} options={{format: 'png', quality: 1}}>
//         {/* Your components and content here */}
//         {/* This is the content you want to capture */}
//       </ViewShot>
//       <Button title="Capture and Save" onPress={requestStoragePermission} />
//     </View>
//   );
// };

// export default ScreenShotScreen;