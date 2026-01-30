import {StyleSheet} from 'react-native';
import { colors, spacing, typography} from './colors';

export const homeStyles = StyleSheet.create({

    safeArea: {
        flex: 1,
        backgroundColor: colors.background,
        paddingHorizontal: spacing.md,
        justifyContent: 'center',
        alignItems: 'center',
    },

    container : {
        flex: 1,

    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingTop: spacing.md,
        paddingBottom: spacing.lg,  
        paddingHorizontal: spacing.md,

    },

    title: {
        fontSize: typography.lg,
        fontWeight: 'bold',
        color: colors.textPrimary,
        marginBottom: spacing.md,
    },


});


