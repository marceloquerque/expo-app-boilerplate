import React from 'react';
import { View, Image, Text, StyleSheet, Dimensions, Platform } from 'react-native';

// Define props interface as specified in the plan
export interface MealCardProps {
    imageUrl: string;
    timestamp: Date;
}

const { width } = Dimensions.get('window');
const TIMELINE_WIDTH = 80;
const TIMELINE_DOT_SIZE = 10; // Adjusted to match mockup
const TIMELINE_LINE_WIDTH = 2;
const ACCENT_COLOR = '#FF6B6B';
const CARD_WIDTH = width - TIMELINE_WIDTH - 32;
const CARD_HEIGHT = (CARD_WIDTH * 2) / 3; // Exact 3:2 aspect ratio from mockup

const COLORS = {
    accent: '#FF6B6B',
    timeline: '#E5E5E5',
    timeText: '#666666',
    cardBackground: '#FFFFFF',
    shadow: '#000000',
};

export const MealCard: React.FC<MealCardProps> = ({ imageUrl, timestamp }) => {
    // Format time to display as HH:mm
    const formatTime = (date: Date) => {
        return date.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
        }).replace(/:/g, ':'); // Ensure consistent colon style
    };

    return (
        <View style={styles.container}>
            <View style={styles.timelineContainer}>
                <View style={styles.timelineLineTop} />
                <View style={styles.dotContainer}>
                    <View style={styles.dot} />
                </View>
                <View style={styles.timelineLineBottom} />
                <Text style={styles.time}>{formatTime(timestamp)}</Text>
            </View>

            {/* Card */}
            <View style={styles.cardContainer}>
                <View style={styles.card}>
                    <Image
                        source={{ uri: imageUrl }}
                        style={styles.image}
                        resizeMode="cover"
                    // TODO: Add loading state handling
                    // TODO: Add error handling for failed loads
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginVertical: 16, // Increased for better spacing
    },
    timelineContainer: {
        width: TIMELINE_WIDTH,
        alignItems: 'center',
        position: 'relative',
    },
    timelineLineTop: {
        position: 'absolute',
        top: 0,
        width: 2,
        height: '50%',
        backgroundColor: COLORS.timeline,
    },
    timelineLineBottom: {
        position: 'absolute',
        bottom: 0,
        width: 2,
        height: '50%',
        backgroundColor: COLORS.timeline,
    },
    dotContainer: {
        width: 18,
        height: 18,
        borderRadius: 9,
        backgroundColor: COLORS.cardBackground,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 8,
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: COLORS.accent,
    },
    time: {
        fontSize: 14,
        fontWeight: '500',
        color: COLORS.timeText,
        marginTop: 4,
        fontFamily: Platform.select({
            ios: 'System',
            android: 'sans-serif-medium',
        }),
    },
    cardContainer: {
        flex: 1,
        paddingRight: 16,
    },
    card: {
        backgroundColor: COLORS.cardBackground,
        borderRadius: 12,
        overflow: 'hidden', // Ensures image respects border radius
        shadowColor: COLORS.shadow,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.08,
        shadowRadius: 8,
        elevation: 3,
    },
    image: {
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        borderRadius: 12,
    },
}); 