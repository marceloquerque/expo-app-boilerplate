**Goal:** Create the main Journal screen that displays a vertical list of logged meals using mock data. Include basic navigation elements.

**Plan for `JournalScreen` Implementation:**

1.  **Setup Basic Navigation:**
    *   **Purpose:** To have the screen integrated into the app's flow and include the bottom tab bar.
    *   **Tool:** Use `react-navigation/bottom-tabs`.
    *   **Steps:**
        *   Install necessary libraries: `@react-navigation/native`, `react-native-screens`, `react-native-safe-area-context`, `@react-navigation/bottom-tabs`.
        *   Install icon library: `@expo/vector-icons`.
        *   In your main `App.js` (or equivalent entry point), set up a `NavigationContainer` containing a `Tab.Navigator`.
        *   Define three tabs:
            *   **"Journal":** This tab will render our `JournalScreen` component. Use an appropriate icon (e.g., book, list).
            *   **"Add":** This tab will eventually trigger the meal logging flow. For now, it can render `null` or a placeholder component. Style its button to be the large, central "+" using `tabBarButton` prop in `Tab.Screen options`. Use a "+" icon.
            *   **"Dashboard":** This tab will render a placeholder `DashboardScreen` for now. Use an appropriate icon (e.g., chart, grid).
        *   Configure the header for the `JournalScreen` within the `Tab.Screen options`: set the `title` to "Journal". Add placeholder icons for Notifications (Bell) and Settings (Gear) using `headerRight`. For now, these icons won't do anything.

2.  **Create the `JournalScreen` Component:**
    *   **Purpose:** This is the main container for the timeline view.
    *   **Location:** Create a file like `screens/JournalScreen.js`.
    *   **Content:**
        *   Import necessary React Native components: `View`, `FlatList`, `StyleSheet`, `Text`, `SafeAreaView`.
        *   Define mock data: Create an array of JavaScript objects directly within the file (or import from a separate `mockData.js`). Each object should represent a meal and have at least:
            *   `id` (String or Number, unique)
            *   `imageUri` (String: use a placeholder image URL for now, e.g., from `picsum.photos` or a local asset)
            *   `logTimestamp` (Number: use milliseconds since epoch, e.g., `new Date().getTime()`, vary them)
            *   `mealName` (String, optional)
        *   Use `useState` to hold this mock data array.
        *   Use `useEffect` hook (with an empty dependency array `[]`) to set the mock data into the state when the component mounts (simulating a data fetch).
        *   Render a `SafeAreaView` for proper screen positioning.
        *   Inside the `SafeAreaView`, render a `FlatList` component.
            *   `data`: Pass the mock data array from the state.
            *   `renderItem`: This prop takes a function that tells the `FlatList` how to render each item. This function will receive `{ item }` (where `item` is one meal object) and should return our `MealTimelineCard` component (see step 3), passing the `item` data as props.
            *   `keyExtractor`: A function that returns a unique key for each item, e.g., `(item) => item.id.toString()`.
            *   Add some basic styling using `StyleSheet`.

3.  **Create the `MealTimelineCard` Component:**
    *   **Purpose:** To display a single meal entry in the list. This is the core reusable UI element for the timeline.
    *   **Location:** Create a file like `components/MealTimelineCard.js`.
    *   **Content:**
        *   Import necessary React Native components: `View`, `Text`, `Image`, `StyleSheet`, `TouchableOpacity`.
        *   Define the component to accept a `meal` object as a prop.
        *   Destructure the needed properties from the `meal` prop: `imageUri`, `logTimestamp`, `mealName`.
        *   Render the card structure using `View`s:
            *   A main container `View` styled with some padding, margin, background color (e.g., white), and rounded corners.
            *   An `Image` component displaying the `meal.imageUri`. Style it to have a fixed height and width, perhaps with rounded corners too.
            *   A `View` to hold the text information.
            *   A `Text` component to display the `meal.logTimestamp`. You'll need a simple function (or library like `date-fns`) to format the timestamp into a readable time (e.g., "07:15 AM").
            *   A `Text` component to display the `meal.mealName` (only if it exists).
        *   Wrap the main container in a `TouchableOpacity` so it can be pressed later (e.g., to navigate to details). Add a placeholder `onPress` handler for now (`() => console.log('Card pressed:', meal.id)`).
        *   Add styling using `StyleSheet` to arrange the image and text within the card (e.g., image on top or side, text aligned).

**Implementation Steps Summary:**

1.  **Setup Project:** Ensure you have a basic React Native Expo project created (`npx create-expo-app FotoFood`).
2.  **Install Dependencies:** Install `react-navigation` and related packages.
3.  **Setup Navigation:** Implement the bottom tab navigator in `App.js`. Configure the Journal screen header.
4.  **Create `MealTimelineCard.js`:** Build the visual component for a single meal entry. Use placeholder image URLs.
5.  **Create `JournalScreen.js`:**
    *   Define mock meal data.
    *   Use `useState` and `useEffect` for data.
    *   Implement the `FlatList`.
    *   Use `MealTimelineCard` in the `renderItem` function.
6.  **Connect:** Ensure `JournalScreen` is rendered by the "Journal" tab in your navigator.
7.  **Run & Test:** Run the app on an iOS simulator/device (`npx expo start`) and verify that the Journal screen appears with the list of mock meal cards and the basic navigation elements are present.

**Key Focus for Simplicity:**

*   **Mock Data:** Don't worry about the database yet. Static data is fine.
*   **Standard List:** Use `FlatList`. Don't implement the complex vertical timeline graphic initially. Just show the cards one after another.
*   **Core Components:** Focus on `JournalScreen` and `MealTimelineCard`.
*   **Basic Navigation:** Get the tabs and header showing, even if buttons don't navigate anywhere complex yet.

This approach breaks it down into testable pieces and focuses on getting visible results quickly, which is motivating. Once this basic structure is working, you can iterate to add more features like real data, navigation actions, and the more detailed timeline visuals.