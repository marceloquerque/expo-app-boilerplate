import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { MealCard } from '../../components/journal/MealCard';

// Mock data for testing
const MOCK_MEALS = [
  {
    id: '1',
    imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c',
    timestamp: new Date('2024-03-28T07:15:00'),
  },
  {
    id: '2',
    imageUrl: 'https://images.unsplash.com/photo-1600891964092-4316c288032e',
    timestamp: new Date('2024-03-28T12:25:00'),
  },
  {
    id: '3',
    imageUrl: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929',
    timestamp: new Date('2024-03-28T15:27:00'),
  },
];

export default function JournalScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={MOCK_MEALS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MealCard
            imageUrl={item.imageUrl}
            timestamp={item.timestamp}
          />
        )}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  listContent: {
    paddingVertical: 16,
  },
});
