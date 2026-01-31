import { StyleSheet } from 'react-native';
import { colors, spacing, typography } from './colors';

export const searchBarStyles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.cardBackground,
        borderRadius: 5,
        paddingHorizontal: spacing.md,
        paddingVertical: spacing.sm,
        marginBottom: spacing.md,
    },

    input: {
        flex: 1,
        fontSize: typography.body.fontSize,
        color: colors.text,
    },
    button: {
        marginLeft: spacing.sm,
        paddingVertical: spacing.xs,
        paddingHorizontal: spacing.md,
        backgroundColor: colors.primary,
        borderRadius: 5,        
    },

})