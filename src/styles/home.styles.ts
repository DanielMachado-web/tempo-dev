import {StyleSheet} from 'react-native';
import { colors, spacing, typography} from './colors';

export const homeStyles = StyleSheet.create({

    safeArea: {
        flex: 1,
        backgroundColor: colors.background,
        paddingHorizontal: spacing.md,
        justifyContent: 'center',
        alignItems: 'center',
    }

});


