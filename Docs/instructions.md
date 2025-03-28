# **FotoFood - Project Overview & Initial Setup Guide**

## **1. Overview**

*   **Problem this app solves:**
    *   People often eat without paying attention to *why* they are eating or *how* the food makes them feel afterward (mindless eating).
    *   Tracking this connection manually can be inconsistent and cumbersome.
*   **How it solves it:**
    *   By making **photo-taking** the first step, lowering the barrier to logging a meal.
    *   By providing **structured prompts** for initial logging (hunger level, reason for eating) and later reflection (physical/emotional feelings).
    *   By presenting this information in an easy-to-review **visual timeline (Journal)**.

## **2. Core Feature (Minimum Viable Product - MVP)**

The primary goal is to implement the **Photo-Based Meal Logging & Reflection Loop**:

1.  **Capture/Select:** User takes or selects a photo of their meal.
2.  **Initial Log:** User quickly logs *when* they ate, their *hunger level* before eating, and the primary *reason* for eating.
3.  **Reflection Prompt:** User receives a notification after a set time (e.g., 2 hours).
4.  **Reflect:** User logs how the meal made them *feel physically* and *emotionally*.
5.  **Review:** User can view their logged meals and reflections in a chronological timeline.

## **3. Basic App Flow (MVP Focus)**

1.  **Open App:** User sees the `JournalScreen` (main timeline view).
2.  **Tap '+' Button:** Initiates meal logging -> Opens Camera (`expo-camera`) or Image Library (`expo-image-picker`).
3.  **Image Acquired:** Navigate to `LogMealScreen` with the selected image displayed.
4.  **Fill Initial Log:** User inputs Time, Hunger Level, Reason for Eating -> Taps "Save".
5.  **Save & Return:** Data saved to local DB (`expo-sqlite`) -> Navigate back to `JournalScreen`, showing the new entry. A notification is scheduled (`expo-notifications`).
6.  **Notification Received:** User taps the notification later.
7.  **Navigate to Reflection:** App opens and navigates to the `MealDetailScreen` for the relevant meal, showing the "Post-Meal Reflection" section.
8.  **Fill Reflection:** User inputs Physical Feelings, Emotional State -> Taps "Save Reflection".
9.  **Save & View:** Reflection data saved to DB -> User sees the updated `MealDetailScreen`.
10. **Manual Review:** From `JournalScreen`, user can tap any entry -> Navigate to `MealDetailScreen` to view all details.

## **4. Technology Stack**

*   **Framework:** React Native with Expo (Managed Workflow) - *Simplifies build processes and provides useful APIs.*
*   **Language:** TypeScript - *For type safety and better code maintainability.*
*   **Navigation:** React Navigation (`@react-navigation/native`, `@react-navigation/bottom-tabs`) - *Standard for navigating between screens.*
*   **Database:** Expo SQLite (`expo-sqlite`) with Drizzle ORM (`drizzle-orm`, `drizzle-kit`) - *Local, offline database with type-safe queries.*
*   **State Management:** Start with React Context API and `useState`/`useReducer`. If complexity increases significantly, consider Zustand. - *Keep it simple initially.*
*   **UI Components:** Core React Native components (`View`, `Text`, `Image`, `TouchableOpacity`, `FlatList`, etc.), Expo Vector Icons (`@expo/vector-icons`).
*   **Device APIs (via Expo Modules):**
    *   `expo-camera`
    *   `expo-image-picker`
    *   `expo-notifications`
    *   `expo-sqlite`
    *   `expo-file-system`, `expo-sharing`, `expo-document-picker` (for Export/Import later)
*   **Monetization:** Superwall SDK (`@superwall/react-native-expo`) - *To be integrated later for premium features.*

## **5. Proposed Folder/File Structure**

Organize your code for clarity and scalability:

```
foto-food/
├── assets/          # Static assets like images, fonts
├── components/      # Reusable UI components (stateless or minimal logic)
│   ├── common/      # Components used across multiple features (e.g., Button.tsx, TagSelector.tsx)
│   └── journal/     # Components specific to the Journal feature (e.g., MealTimelineCard.tsx)
├── constants/       # Constant values (e.g., colors.ts, apiUrls.ts, enums.ts)
│   ├── data/            # Data layer: types, models, database schema/migrations
│   ├── db/          # Drizzle schema, migration files, db connection setup
│   ├── models.ts    # TypeScript interfaces/types for data (e.g., Meal, Reflection)
│   └── mockData.ts  # Mock data for development/testing
├── hooks/           # Custom React Hooks (e.g., usePermissions.ts, useDatabase.ts)
├── navigation/      # React Navigation setup (navigators, stacks, tabs)
│   ├── AppNavigator.tsx
│   └── BottomTabNavigator.tsx
├── screens/         # Screen components (containers managing state & logic for a view)
│   ├── JournalScreen.tsx
│   ├── LogMealScreen.tsx
│   ├── MealDetailScreen.tsx
│   └── SettingsScreen.tsx
├── services/        # Business logic, external API interactions (if any), database service layer
│   ├── databaseService.ts # Functions to interact with SQLite via Drizzle (addMeal, getMeals etc)
│   └── notificationService.ts # Functions for scheduling/handling notifications
├── utils/           # Utility functions (e.g., date formatting, validation)
│   ├── dateUtils.ts
│   └── permissionsUtils.ts
├── .env                 # Environment variables (API keys - added to .gitignore)
├── .gitignore
├── app.json             # Expo configuration file
├── App.tsx              # Root component, sets up Navigation & Providers
├── babel.config.js
├── package.json
├── tsconfig.json        # TypeScript configuration
└── drizzle.config.ts    # Drizzle ORM configuration
```

**File Naming:** Use PascalCase for components (`MealTimelineCard.tsx`) and screens (`JournalScreen.tsx`). Use camelCase for services, hooks, utils (`databaseService.ts`, `usePermissions.ts`).

## **6. TypeScript Best Practices (for React Native)**

*   **Enable Strict Mode:** In `tsconfig.json`, set `"strict": true`. This catches many common errors.
*   **Type Everything (Almost):** Avoid using `any`. Define explicit types or interfaces for:
    *   Component props (`type Props = { title: string; onPress: () => void; };`)
    *   State variables (`useState<Meal[]>([]);`)
    *   Function parameters and return values.
    *   Data structures (database models, API responses). Define these in `data/models.ts`.
*   **Component Typing:** Use `React.FC<Props>` (Functional Component) or define props type directly:
    ```typescript
    type MyComponentProps = { name: string; age?: number };
    const MyComponent = ({ name, age }: MyComponentProps) => { /* ... */ };
    ```
*   **Use Utility Types:** Leverage built-in types like `Partial<T>`, `Required<T>`, `Readonly<T>`, etc.
*   **Prefer `type` or `interface`:** Use `interface` for defining object shapes (like props or data models) and `type` for unions, intersections, or primitives aliases. Consistency is key within the project.
*   **Use String Literal Unions over Enums (Often):** For simple fixed sets of strings (like tags or statuses), prefer string literal unions (`type Status = 'pending' | 'completed';`) as they are simpler JavaScript output than `enum`. Use `enum` if you need numeric values or reverse mapping.

## **7. React Native Best Practices**

*   **Component Structure:** Keep components small, reusable, and focused on a single responsibility.
*   **Styling:**
    *   Use `StyleSheet.create({...})` for defining styles. It optimizes styles and keeps them separate from render logic.
    *   Avoid inline styles (`style={{ margin: 10 }}`) for anything beyond trivial, dynamic adjustments. Define styles in the `StyleSheet` at the bottom of the file.
    *   Organize styles logically within the `StyleSheet` object.
*   **Performance:**
    *   Use `FlatList` for scrollable lists of data, not `ScrollView` + `.map()`. Provide a unique `keyExtractor`.
    *   Use `React.memo` for components that re-render unnecessarily with the same props (use profiling to verify).
    *   Optimize images: Use appropriate sizes, consider `expo-image` for better caching and placeholder support.
*   **State Management:** Lift state up only as needed. Use Context API for global state shared across many components, but be mindful of performance impacts (consider Zustand or Redux Toolkit if context updates cause widespread re-renders). Start simple.
*   **Platform Specifics:** Use `Platform.OS === 'ios'` or `Platform.select({...})` for small differences. Avoid if possible for easier maintenance.
*   **Use `SafeAreaView`:** Wrap screens in `SafeAreaView` from `react-native-safe-area-context` to avoid content overlapping notches or system elements.
*   **Error Handling:** Use `try...catch` with `async/await`. Consider adding Error Boundaries for better crash handling.
*   **Permissions:** Request permissions (camera, notifications, library) *just before* they are needed, not necessarily on app launch. Use Expo's permissions modules (`expo-camera.requestCameraPermissionsAsync()`, etc.). Clearly explain *why* the permission is needed.
*   **Dependencies:** Keep dependencies updated (`npx expo install --check` or `npx expo upgrade`).

---

This overview should give you a clear starting point. Focus on building the core feature loop first, following the proposed structure and best practices. Don't hesitate to ask questions as you encounter challenges! Good luck!