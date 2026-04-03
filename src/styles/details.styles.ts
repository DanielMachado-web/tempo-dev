import { Button, StyleSheet } from 'react-native';
import { colors, spacing, typography } from './colors';

export const detailsStyles = StyleSheet.create({

    safeArea: {
        flex: 1,
        backgroundColor: colors.background,
    },

    container: {

        flex: 1

    },

    backButton: {

        padding: spacing.md,
        marginTop: spacing.md,

    },

    backButtonText: {

        ...typography.body,
        color: colors.primary,
    },


})






