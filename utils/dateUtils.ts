/**
 * Utility functions for date and time calculations
 */

/**
 * Calculate the duration between two dates in minutes
 */
export function calculateDuration(startTime: Date, endTime: Date): number {
    return Math.floor((endTime.getTime() - startTime.getTime()) / (1000 * 60));
}

/**
 * Format duration in minutes to readable format (e.g., "14h 45m")
 * @param minutes - Duration in minutes
 * @param locale - Locale for formatting (default: 'pt-BR')
 */
export function formatDuration(minutes: number, locale: string = 'pt-BR'): string {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    // Brazilian format
    if (locale === 'pt-BR') {
        if (hours === 0) {
            return `${remainingMinutes}min`;
        }
        if (remainingMinutes === 0) {
            return `${hours}h`;
        }
        return `${hours}h ${remainingMinutes}min`;
    }

    // Default format (English)
    if (hours === 0) {
        return `${remainingMinutes}m`;
    }
    if (remainingMinutes === 0) {
        return `${hours}h`;
    }
    return `${hours}h ${remainingMinutes}m`;
}

/**
 * Format time to HH:mm format
 * @param date - Date to format
 * @param locale - Locale for formatting (default: 'pt-BR')
 */
export function formatTime(date: Date, locale: string = 'pt-BR'): string {
    return date.toLocaleTimeString(locale, {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
    });
}

// Constants for fasting period classifications
export const FASTING_PERIODS = {
    SHORT: { min: 0, max: 8 * 60, type: 'short' as const },     // 0-8 hours
    MEDIUM: { min: 8 * 60, max: 12 * 60, type: 'medium' as const },   // 8-12 hours
    LONG: { min: 12 * 60, max: 16 * 60, type: 'long' as const },     // 12-16 hours
    EXTENDED: { min: 16 * 60, max: Infinity, type: 'extended' as const }, // 16+ hours
};

/**
 * Get fasting period type based on duration
 * @param minutes - Duration in minutes
 */
export function getFastingPeriodType(minutes: number): keyof typeof FASTING_PERIODS {
    if (minutes >= FASTING_PERIODS.EXTENDED.min) return 'EXTENDED';
    if (minutes >= FASTING_PERIODS.LONG.min) return 'LONG';
    if (minutes >= FASTING_PERIODS.MEDIUM.min) return 'MEDIUM';
    return 'SHORT';
}

// Debug helper
export function debugLogDuration(startTime: Date, endTime: Date): void {
    const duration = calculateDuration(startTime, endTime);
    const formattedDuration = formatDuration(duration);
    console.log(`Duration between ${formatTime(startTime)} and ${formatTime(endTime)}: ${formattedDuration}`);
} 