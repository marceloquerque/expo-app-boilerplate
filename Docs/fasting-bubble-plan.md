# FotoFood - Fasting Period Bubble Implementation Plan

## Phase 1: Basic Bubble Component (1-2 hours)
- [ ] Create `FastingBubble` component in `components/journal/FastingBubble.tsx`
  ```typescript
  type FastingBubbleProps = {
    startTime: Date;
    endTime: Date;
  }
  ```
  - Basic bubble with time difference
  - Simple styling (pill shape)
  - Calculate and format duration

### Steps for Basic Bubble Component

1. **Create Component File**
   - What: Create `FastingBubble.tsx` in components/journal
   - Why: Establish a new reusable component for displaying fasting periods
   - Files: `components/journal/FastingBubble.tsx`
   - Risks: None

2. **Create Date Utils**
   - What: Create utility functions for time calculations and formatting
   - Why: Centralize date handling logic for reusability
   - Files: 
     - `utils/dateUtils.ts` (new file)
     - Support Brazilian time format
   - Risks: 
     - Timezone handling might affect calculations
     - Date change edge cases

3. **Create Basic UI Structure**
   - What: Implement the pill-shaped bubble with time display
   - Why: Match the design from first-screen-ui.html mockup
   - Files: `components/journal/FastingBubble.tsx`
   - Risks:
     - Layout might break on different screen sizes
     - Text overflow for long durations

4. **Add Duration Formatting**
   - What: Format duration into readable "Xh Ym" format with Brazilian locale
   - Why: Present time differences in a user-friendly way
   - Files: 
     - `components/journal/FastingBubble.tsx`
     - `utils/dateUtils.ts`
   - Risks:
     - Brazilian time format edge cases
     - Different time formats needed for longer periods

5. **Style Integration**
   - What: Match styling with existing MealCard timeline
   - Why: Maintain visual consistency
   - Files: `components/journal/FastingBubble.tsx`
   - Risks:
     - Need to align perfectly with timeline
     - Shadow/elevation might look different on iOS/Android

## Phase 2: Layout Integration (1-2 hours)
- [ ] Position bubble between MealCards
  - Add spacing calculation
  - Align with timeline
  - Handle edge cases (first/last meal)
- [ ] Update MealCard component to work with bubble spacing
  - Adjust margins/padding
  - Ensure timeline continuity

## Phase 3: Enhanced Functionality (2-3 hours)
- [ ] Add fasting period classification
  ```typescript
  type FastingPeriod = {
    duration: number; // in minutes
    type: 'short' | 'medium' | 'long' | 'extended';
    color: string;
  }
  ```
  - Calculate fasting period type
  - Apply appropriate styling
  - Add visual indicators

## Phase 4: Polish & Interaction (2-3 hours)
- [ ] Add animations
  - Smooth appearance
  - Press state feedback
- [ ] Implement press handling
  - Show detailed stats
  - Basic haptic feedback
- [ ] Add accessibility support
  - Screen reader labels
  - Touch target size

## Development Steps:

1. Start with static bubble
2. Add time calculation
3. Position correctly
4. Add styling
5. Implement interactions
6. Polish animations

## Notes
- Keep performance in mind (minimize re-renders)
- Use memoization where appropriate
- Test with different time ranges
- Consider timezone handling

## TODOs
- Handle edge cases (missing timestamps)
- Consider adding fasting goals/targets
- Plan for future stats integration
- Consider adding progress indicators
- Handle multi-day fasting periods
- Track fasting streaks for analytics
- Add support for different time zones
- Implement data collection for fasting analytics 