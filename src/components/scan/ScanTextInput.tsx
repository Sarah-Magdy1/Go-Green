import { Colors, Fonts } from '@/constants/theme';
import { forwardRef } from 'react';
import {
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';

const BORDER_COLOR = Colors.textPrimary;

interface ScanTextInputProps extends TextInputProps {
  containerStyle?: ViewStyle;
  error?: boolean;
}

const ScanTextInput = forwardRef<TextInput, ScanTextInputProps>(
  (
    {
      containerStyle,
      error,
      placeholderTextColor = Colors.textSecondary,
      style,
      ...rest
    },
    ref
  ) => {
    return (
      <View
        style={[
          styles.container,
          error && styles.containerError,
          containerStyle,
        ]}
      >
        <TextInput
          ref={ref}
          style={[styles.input, style]}
          placeholderTextColor={placeholderTextColor}
          autoCapitalize="none"
          autoCorrect={false}
          {...rest}
        />
      </View>
    );
  }
);

ScanTextInput.displayName = 'ScanTextInput';

export default ScanTextInput;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderWidth: 1,
    borderColor: BORDER_COLOR,
    borderRadius: 28,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  containerError: {
    borderColor: Colors.error,
  },
  input: {
    height: 52,
    fontSize: 15,
    color: Colors.textPrimary,
    fontFamily: Fonts.body,
  },
});
