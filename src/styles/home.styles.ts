import {StyleSheet} from 'react-native';
import { colors, spacing, typography} from './colors';
import { matchForEmptyPath } from 'expo-router/build/fork/getStateFromPath-forks';

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
       ...typography.title,
       color: colors.text,
       textAlign: 'center',       

    },


    subtitle: {
        ...typography.subtitle,
        color: colors.textSecondary,
        textAlign: 'center',
        marginTop: spacing.xs,
    },

    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: spacing.xl
    },

    emptyText: {
        ...typography.body,
        color: colors.textLight,
        textAlign: 'center',
       
    },




});


