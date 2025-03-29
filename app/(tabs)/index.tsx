import React from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';
import { MealCard } from '../../components/journal/MealCard';

// Mock data for testing different fasting periods
const MOCK_MEALS = [
  {
    id: '1',
    imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c',
    timestamp: new Date('2024-03-28T07:15:00'), // Breakfast
  },
  {
    id: '2',
    imageUrl: 'https://images.unsplash.com/photo-1600891964092-4316c288032e',
    timestamp: new Date('2024-03-28T12:25:00'), // Lunch (5h 10m fast)
  },
  {
    id: '3',
    imageUrl: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929',
    timestamp: new Date('2024-03-28T19:30:00'), // Dinner (7h 5m fast)
  },
  {
    id: '4',
    imageUrl: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601',
    timestamp: new Date('2024-03-29T08:45:00'), // Next day breakfast (13h 15m fast)
  },
];

export default function JournalScreen() {
  return (
    <View style={styles.container}>
      {/* Timeline header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Timeline</Text>
      </View>

      {/* Timeline content */}
      <View style={styles.timelineContainer}>
        {/* Vertical line */}
        <View style={styles.verticalLine} />

        {/* List of meals */}
        <FlatList
          data={MOCK_MEALS}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <MealCard
              imageUrl={item.imageUrl}
              timestamp={item.timestamp}
              previousMealTime={index > 0 ? MOCK_MEALS[index - 1].timestamp : undefined}
            />
          )}
          contentContainerStyle={styles.listContent}
        />
      </View>
    </View>
  );
}

const TIMELINE_WIDTH = 80; // Match with MealCard component

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    backgroundColor: 'white',
  },
  headerText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  timelineContainer: {
    flex: 1,
    position: 'relative',
  },
  verticalLine: {
    position: 'absolute',
    left: TIMELINE_WIDTH / 2,
    top: 0,
    bottom: 0,
    width: 2,
    backgroundColor: '#E5E5E5',
  },
  listContent: {
    paddingVertical: 16,
  },
});
