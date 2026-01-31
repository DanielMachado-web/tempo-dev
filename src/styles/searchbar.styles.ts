import { StyleSheet } from 'react-native';
import { colors, spacing, typography } from './colors';

export const searchBarStyles = StyleSheet.create({

    container: {
        padding: spacing.md
    },

    inputContainer: {
        flexDirection: 'row',
        gap: spacing.md

    },

    input: {
        flex: 1,
        backgroundColor: colors.cardBackground,
        borderRadius: 10,        
        borderWidth: 1,
        borderColor: colors.border,
        paddingHorizontal: spacing.md,
        paddingVertical: spacing.xs,
        color: colors.text,
        fontSize: 16,
       
    },  

    button: {
        marginLeft: spacing.sm,
        paddingVertical: spacing.xs,
        paddingHorizontal: spacing.md,
        backgroundColor: colors.primary,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },

})