import {View, Text, Dimensions} from 'react-native';
import React, {useEffect, useRef} from 'react';
import Canvas from 'react-native-canvas';

const DrawCircleScreen = () => {
  const canvasRef = useRef(null);
  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      canvas.width = Dimensions.get('window').width; // Set canvas width
      canvas.height = Dimensions.get('window').height; // Set canvas height
      const ctx = canvas.getContext('2d');
      // Set circle properties
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = 50;
      const color = '#FF0000'; // Red color
      // Draw a circle
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
      ctx.fillStyle = color;
      ctx.fill();
    }
  }, []);
  return (
    <View style={{flex: 1}}>
      <Canvas ref={canvasRef} />
    </View>
  );
};

export default DrawCircleScreen;
