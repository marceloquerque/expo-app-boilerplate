import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { calculateDuration, formatDuration, getFastingPeriodType } from '../../utils/dateUtils';

interface FastingBubbleProps {
    previousMealTime: Date;
    currentMealTime: Date;
}

/**
 * FastingBubble component displays the fasting duration between meals
 */
export const FastingBubble: React.FC<FastingBubbleProps> = ({
    previousMealTime,
    currentMealTime,
}) => {
    // Calculate fasting duration
    const durationInMinutes = calculateDuration(previousMealTime, currentMealTime);
    const formattedDuration = formatDuration(durationInMinutes);
    const periodType = getFastingPeriodType(durationInMinutes);

    // Debug log for development
    console.log(`Fasting period: ${formattedDuration} (${periodType})`);

    return (
        <View style={styles.container}>
            <View style={styles.bubble}>
                <Text style={styles.durationText}>{formattedDuration}</Text>
                <Text style={styles.labelText}>jejum</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingVertical: 8,
    },
    bubble: {
        backgroundColor: '#F3F4F6',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 16,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,

        // Add subtle shadow
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    durationText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#374151',
    },
    labelText: {
        fontSize: 14,
        color: '#6B7280',
    },
}); 