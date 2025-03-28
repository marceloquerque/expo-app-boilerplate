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
            <Text style={styles.time}>{formatTime(timestamp)}</Text>
            <View style={styles.card}>
                <Image
                    source={{ uri: imageUrl }}
                    style={styles.image}
                    resizeMode="cover"
                />
            </View>
        </View>
    );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        marginHorizontal: 16,
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
        width: width - 32, // Full width minus margins
        height: width * 0.6, // Aspect ratio 5:3
        borderRadius: 12,
    },
    time: {
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 8,
        color: '#333',
    },
}); 