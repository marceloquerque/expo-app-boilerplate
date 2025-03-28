# FotoFood - Journal Screen Implementation Plan

## Phase 1: Project Setup and Dependencies
- [ ] Initialize TypeScript configuration
  - Create/update tsconfig.json with strict mode
  - Add necessary type definitions
- [ ] Install core dependencies
  ```bash
  npm install @react-navigation/native @react-navigation/bottom-tabs
  npm install react-native-screens react-native-safe-area-context
  npm install @expo/vector-icons date-fns
  ```
- [ ] Set up folder structure
  ```
  src/
    ├── components/
    │   ├── common/
    │   └── journal/
    ├── constants/
    │   ├── colors.ts
    │   └── theme.ts
    ├── navigation/
    ├── screens/
    └── types/
  ```

## Phase 2: Design System and Theme Setup
- [ ] Create color palette in `constants/colors.ts`
  - Define primary, secondary colors
  - Define text colors
  - Define background colors
  - Define status colors (success, error, etc.)
- [ ] Create theme configuration in `constants/theme.ts`
  - Define typography styles
  - Define spacing scale
  - Define border radiuses
  - Define shadow styles
- [ ] Create common components
  - [ ] CustomText component with typography styles
  - [ ] SafeAreaWrapper component
  - [ ] IconButton for header actions

## Phase 3: Navigation Setup
- [ ] Set up bottom tab navigator
  - Create basic navigator structure
  - Configure tab bar styling
  - Add placeholder screens
- [ ] Configure Journal screen header
  - Add notification bell icon
  - Add settings gear icon
- [ ] Style the central "+" button
  - Custom tab bar component
  - Floating action button styling

## Phase 4: Timeline Components
- [ ] Create TimelineCard component
  ```typescript
  type TimelineCardProps = {
    imageUrl: string;
    timestamp: Date;
    duration?: string;
    status?: 'fasting' | 'regular';
    onPress: () => void;
  }
  ```
- [ ] Create TimelineLine component
  - Vertical line with time markers
  - Time labels
  - Status indicators
- [ ] Create TimeMarker component
  - Circular marker
  - Time label
  - Connection to timeline line

## Phase 5: Journal Screen Implementation
- [ ] Create mock data structure
  ```typescript
  type MealEntry = {
    id: string;
    imageUrl: string;
    timestamp: Date;
    duration: string;
    status: 'fasting' | 'regular';
  }
  ```
- [ ] Implement JournalScreen component
  - Setup screen layout
  - Add SafeAreaWrapper
  - Implement FlatList with timeline items
- [ ] Add timeline visualization
  - Integrate TimelineLine component
  - Position TimelineCards correctly
  - Add proper spacing and alignment

## Phase 6: Polish and Optimization
- [ ] Add loading states
  - Skeleton loading for cards
  - Fade-in animation for images
- [ ] Implement proper error handling
  - Error boundaries
  - Fallback UI for failed image loads
- [ ] Add pull-to-refresh functionality
- [ ] Optimize FlatList performance
  - Implement proper windowing
  - Add memory optimization

## Phase 7: Testing and Documentation
- [ ] Add component documentation
  - Props documentation
  - Usage examples
- [ ] Add basic unit tests
  - Test timeline calculations
  - Test component rendering
- [ ] Manual testing checklist
  - [ ] Test on iOS simulator
  - [ ] Verify all animations are smooth
  - [ ] Check memory usage
  - [ ] Verify accessibility features

## Next Steps and Future Considerations
- Integration with camera/image picker
- Local storage implementation
- Notification system setup
- Settings screen implementation

## Notes
- Follow TypeScript best practices throughout implementation
- Maintain consistent styling using the theme system
- Keep accessibility in mind from the start
- Document all components and utilities
- Use Git commits with clear messages for each completed task

Remember to:
- Test frequently
- Commit often
- Keep the code clean and documented
- Follow the established naming conventions
- Consider edge cases in the UI 