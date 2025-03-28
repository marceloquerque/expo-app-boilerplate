# FotoFood - Journal Screen Implementation Plan (MVP First)

## Phase 1: Minimal Setup (1-2 hours)
- [ ] Basic project structure
  ```
  foto-food/
  ├── components/
  ├── screens/
  └── navigation/
  ```
- [ ] Essential dependencies
  ```bash
  npm install @react-navigation/native @react-navigation/bottom-tabs
  npm install react-native-screens react-native-safe-area-context
  ```

## Phase 2: Basic UI Components (2-3 hours)
- [ ] Create simple MealCard component
  ```typescript
  type MealCardProps = {
    imageUrl: string;
    timestamp: Date;
  }
  ```
  - Basic card with image and time
  - Simple styling (no complex timeline yet)

- [ ] Create basic bottom tab navigation
  - Journal tab (main screen)
  - Add button (center)
  - Dashboard tab (empty for now)

## Phase 3: Working List View (2-3 hours)
- [ ] Create basic JournalScreen
  - Simple FlatList of MealCards
  - Basic mock data (3-4 entries)
  - Minimal styling

## Next Iterations (After MVP is working):

### Iteration 1: Timeline Visual (2-3 hours)
- [ ] Add vertical timeline line
- [ ] Add time markers
- [ ] Connect cards to timeline

### Iteration 2: Enhanced UI (2-3 hours)
- [ ] Improve card design
- [ ] Add duration indicators
- [ ] Add status indicators (fasting/regular)

### Iteration 3: Polish (2-3 hours)
- [ ] Add loading states
- [ ] Add pull-to-refresh
- [ ] Improve performance

### Future Enhancements
- Theme system
- TypeScript strict mode
- Error handling
- Unit tests
- Documentation

## Development Approach
1. Start with minimal, working features
2. Get user feedback early
3. Iterate based on feedback
4. Add polish incrementally

## Notes
- Focus on functionality first, polish later
- Commit after each working feature
- Test on device frequently
- Keep code simple and readable 