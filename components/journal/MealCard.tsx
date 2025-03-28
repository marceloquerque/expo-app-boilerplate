import React from 'react';
import { View, Image, Text, StyleSheet, Dimensions } from 'react-native';

// Define props interface as specified in the plan
export interface MealCardProps {
    imageUrl: string;
    timestamp: Date;
}

export const MealCard: React.FC<MealCardProps> = ({ imageUrl, timestamp }) => {
    // Format time to display as HH:mm
    const formatTime = (date: Date) => {
        return date.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
        });
    };

    return (
        <View style={styles.container}>
            {/* Timeline dot */}
            <View style={styles.timelineContainer}>
                <View style={styles.dot} />
                <Text style={styles.time}>{formatTime(timestamp)}</Text>
            </View>

            {/* Card */}
            <View style={styles.cardContainer}>
                <View style={styles.card}>
                    <Image
                        source={{ uri: imageUrl }}
                        style={styles.image}
                        resizeMode="cover"
                    />
                </View>
            </View>
        </View>
    );
};

const { width } = Dimensions.get('window');
const TIMELINE_DOT_SIZE = 12;
const TIMELINE_WIDTH = 80; // Width reserved for timeline

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginVertical: 10,
    },
    timelineContainer: {
        width: TIMELINE_WIDTH,
        alignItems: 'center',
        paddingTop: 8,
    },
    dot: {
        width: TIMELINE_DOT_SIZE,
        height: TIMELINE_DOT_SIZE,
        borderRadius: TIMELINE_DOT_SIZE / 2,
        backgroundColor: '#FF6B6B',
        borderWidth: 2,
        borderColor: 'white',
        marginBottom: 4,
    },
    time: {
        fontSize: 14,
        fontWeight: '500',
        color: '#666',
    },
    cardContainer: {
        flex: 1,
        paddingRight: 16,
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    image: {
        width: '100%',
        height: width * 0.5, // Adjusted aspect ratio
        borderRadius: 12,
    },
}); 