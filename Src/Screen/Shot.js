// import React, { useRef, useState } from 'react';
// import { Animated, View, StyleSheet, PanResponder, Text } from 'react-native';

// const Shot = () => {
//  const pan = useRef(new Animated.ValueXY()).current;
//  const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 });

//  const panResponder = useRef(
//     PanResponder.create({
//       onMoveShouldSetPanResponder: () => true,
//       onPanResponderMove: (event, gesture) => {
//         Animated.event([null, { dx: pan.x, dy: pan.y }])(event, gesture);
//         setCirclePosition({ x: gesture.moveX, y: gesture.moveY });
//       },
//       onPanResponderRelease: () => {
//         pan.extractOffset();
//       },
//     }),
//  ).current;

//  return (
//     <View style={styles.container}>
//       <Text style={styles.titleText}>Drag this box!</Text>
//       <View style={[styles.circle, { left: circlePosition.x, top: circlePosition.y }]} />
//       <Animated.View
//         style={{
//           transform: [{ translateX: pan.x }, { translateY: pan.y }],
//         }}
//         {...panResponder.panHandlers}
//       >
//         <View style={styles.box} />
//       </Animated.View>
//     </View>
//  );
// };

// const styles = StyleSheet.create({
//  container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//  },
//  titleText: {
//     fontSize: 14,
//     lineHeight: 24,
//     fontWeight: 'bold',
//  },
//  box: {
//     height: 150,
//     width: 150,
//     backgroundColor: 'blue',
//     borderRadius: 5,
//  },
//  circle: {
//     position: 'absolute',
//     width: 200,
//     height: 200,
//     borderRadius: 100,
//     backgroundColor: 'red',
//  },
// });

// export default Shot;

// import React, { useRef, useState } from 'react';
// import { Animated, View, StyleSheet, PanResponder, Text } from 'react-native';
// import ViewShot from 'react-native-view-shot'; // Import the ViewShot library

// const Shot = () => {
//   const pan = useRef(new Animated.ValueXY()).current;
//   const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 });
//   const viewShotRef = useRef(null); // Reference for ViewShot

//   const panResponder = useRef(
//     PanResponder.create({
//       onMoveShouldSetPanResponder: () => true,
//       onPanResponderMove: (event, gesture) => {
//         Animated.event([null, { dx: pan.x, dy: pan.y }])(event, gesture);
//         setCirclePosition({ x: gesture.moveX, y: gesture.moveY });
//       },
//       onPanResponderRelease: () => {
//         pan.extractOffset();
//       },
//     }),
//   ).current;

//   const captureScreen = async () => {
//     try {
//       const uri = await viewShotRef.current.capture(); // Capture the screenshot
//       console.log('Screenshot captured:', uri);
//       // Here you can do something with the captured screenshot URI
//     } catch (error) {
//       console.error('Failed to capture screenshot:', error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.titleText}>Drag this box!</Text>
//       <View style={[styles.circle, { left: circlePosition.x, top: circlePosition.y }]} />
//       <ViewShot ref={viewShotRef} options={{ format: 'jpg', quality: 0.9 }}> {/* ViewShot component */}
//         <Animated.View
//           style={{
//             transform: [{ translateX: pan.x }, { translateY: pan.y }],
//           }}
//           {...panResponder.panHandlers}
//         >
//           <View style={styles.box} />
//         </Animated.View>
//       </ViewShot>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   titleText: {
//     fontSize: 14,
//     lineHeight: 24,
//     fontWeight: 'bold',
//   },
//   box: {
//     height: 150,
//     width: 150,
//     backgroundColor: 'blue',
//     borderRadius: 5,
//   },
//   circle: {
//     position: 'absolute',
//     width: 200,
//     height: 200,
//     borderRadius: 100,
//     backgroundColor: 'red',
//   },
// });

// export default Shot;

import React, { useRef, useState } from 'react';
import { Animated, View, StyleSheet, PanResponder, Text } from 'react-native';
import ViewShot from 'react-native-view-shot'; // Import the ViewShot library

const Shot = () => {
  const pan = useRef(new Animated.ValueXY()).current;
  const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 });
  const viewShotRef = useRef(null); // Reference for ViewShot

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        Animated.event([null, { dx: pan.x, dy: pan.y }])(event, gesture);
        setCirclePosition({ x: gesture.moveX, y: gesture.moveY });
      },
      onPanResponderRelease: () => {
        pan.extractOffset();
        captureScreen(); // Call the function to capture the screenshot
      },
    }),
  ).current;

  const captureScreen = async () => {
    try {
      const uri = await viewShotRef.current.capture(); // Capture the screenshot
      console.log('Screenshot captured:', uri);
      // Here you can do something with the captured screenshot URI
    } catch (error) {
      console.error('Failed to capture screenshot:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Drag this box!</Text>
      <View style={[styles.circle, { left: circlePosition.x, top: circlePosition.y }]} />
      <ViewShot ref={viewShotRef} options={{ format: 'jpg', quality: 0.9 }}> 
        <Animated.View
          style={{
            transform: [{ translateX: pan.x }, { translateY: pan.y }],
          }}
          {...panResponder.panHandlers}
        >
          <View style={styles.box} />
        </Animated.View>
      </ViewShot>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: 'bold',
  },
  box: {
    height: 150,
    width: 150,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  circle: {
    position: 'absolute',
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'red',
  },
});

export default Shot;
