import { Tabs } from 'expo-router';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#FF6B6B',
        tabBarStyle: {
          backgroundColor: 'white',
          borderTopWidth: 1,
          borderTopColor: '#E5E5E5',
        },
        headerStyle: {
          backgroundColor: 'white',
        },
        headerShadowVisible: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Journal',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="journal-outline" size={size} color={color} />
          ),
          headerRight: () => (
            <>
              <Ionicons
                name="notifications-outline"
                size={24}
                color="#333"
                style={{ marginRight: 16 }}
              />
              <Ionicons
                name="settings-outline"
                size={24}
                color="#333"
                style={{ marginRight: 16 }}
              />
            </>
          ),
        }}
      />
      <Tabs.Screen
        name="add"
        options={{
          title: '',
          tabBarIcon: ({ color }) => (
            <Ionicons
              name="add-circle"
              size={Platform.OS === 'ios' ? 50 : 40}
              color="#FF6B6B"
              style={{ marginTop: Platform.OS === 'ios' ? -10 : 0 }}
            />
          ),
        }}
        listeners={() => ({
          tabPress: (e) => {
            // Prevent default action
            e.preventDefault();
            // Add your camera/image picker logic here
            console.log('Add button pressed');
          },
        })}
      />
      <Tabs.Screen
        name="dashboard"
        options={{
          title: 'Dashboard',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="grid-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
