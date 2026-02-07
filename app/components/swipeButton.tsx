import React, { useRef, useState } from 'react';
import { View, Text, Animated, PanResponder, Dimensions } from 'react-native';
import { ChevronsRight } from 'lucide-react-native';

const BUTTON_WIDTH = 300; // Adjust based on your modal width
const THUMB_SIZE = 50;

export const SwipeButton = ({ onSwipeComplete }: { onSwipeComplete: () => void }) => {
  const pan = useRef(new Animated.ValueXY()).current;
  const [isComplete, setIsComplete] = useState(false);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (e, gestureState) => {
        // Only allow movement to the right and within the track
        if (gestureState.dx >= 0 && gestureState.dx <= BUTTON_WIDTH - THUMB_SIZE) {
          pan.x.setValue(gestureState.dx);
        }
      },
      onPanResponderRelease: (e, gestureState) => {
        if (gestureState.dx > BUTTON_WIDTH * 0.7) {
          // Snap to end and trigger action
          Animated.spring(pan.x, {
            toValue: BUTTON_WIDTH - THUMB_SIZE - 8, // padding adjustment
            useNativeDriver: false,
          }).start(() => {
            setIsComplete(true);
            onSwipeComplete();
          });
        } else {
          // Snap back to start
          Animated.spring(pan.x, {
            toValue: 0,
            useNativeDriver: false,
          }).start();
        }
      },
    })
  ).current;

  return (
    <View 
      style={{ width: '100%', height: 56 }} 
      className="bg-[#d7e4ff] rounded-full justify-center p-1"
    >
      <Text className="absolute w-full text-center font-dmsans6 text-[#004efe]">
        Swipe to transfer
      </Text>
      
      <Animated.View
        {...panResponder.panHandlers}
        style={[
          { transform: [{ translateX: pan.x }] },
          { width: THUMB_SIZE, height: THUMB_SIZE }
        ]}
        className="bg-[#004efe] rounded-full items-center justify-center shadow-md"
      >
        <ChevronsRight color="white" size={24} />
      </Animated.View>
    </View>
  );
};