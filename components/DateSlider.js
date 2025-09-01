import React, { useState, useRef } from "react";
import { View, Text, FlatList, Pressable, StyleSheet, Dimensions } from "react-native";
import { format, addDays, startOfWeek } from "date-fns";
import Animated, { useSharedValue, withTiming } from "react-native-reanimated";

const { width } = Dimensions.get("window");
const ITEM_WIDTH = 70; 

const DateSlider = () => {
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState(today);
  const flatListRef = useRef(null);
  const translateX = useSharedValue(0);

  // Generate 4 weeks of dates (28 days)
  const dates = Array.from({ length: 28 }, (_, i) => addDays(startOfWeek(today), i));

  const handleSelectDate = (date, index) => {
    setSelectedDate(date);
    flatListRef.current?.scrollToIndex({ index, animated: true });
    translateX.value = withTiming(index * ITEM_WIDTH, { duration: 300 });
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={dates}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => {
          const isSelected = format(item, "yyyy-MM-dd") === format(selectedDate, "yyyy-MM-dd");

          return (
            <Pressable
              onPress={() => handleSelectDate(item, index)}
              style={[
                styles.dateContainer,
                isSelected ? styles.selectedDate : styles.unselectedDate,
              ]}
            >
              <Text style={[styles.text, isSelected && styles.selectedText]}>
                {format(item, "EEE")}
              </Text>
              <Text style={[styles.dayText, isSelected && styles.selectedText]}>
                {format(item, "d")}
              </Text>
            </Pressable>
          );
        }}
        keyExtractor={(item) => format(item, "yyyy-MM-dd")}
        initialScrollIndex={dates.findIndex((d) => format(d, "yyyy-MM-dd") === format(today, "yyyy-MM-dd"))}
        getItemLayout={(data, index) => ({
          length: ITEM_WIDTH,
          offset: ITEM_WIDTH * index,
          index,
        })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  dateContainer: {
    width: ITEM_WIDTH,
    height: 80,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 5,
  },
  selectedDate: {
    backgroundColor: "#eeeeee",
  },
  unselectedDate: {
    backgroundColor: "transparent",
  },
  text: {
    fontSize: 18,
    color: "#000",
    fontWeight: "medium",
  },
  dayText: {
    fontSize: 16,
    fontWeight: "medium",
  },
  selectedText: {
    color: "#2563eb",
    fontWeight: "bold",
  },
});

export default DateSlider;
