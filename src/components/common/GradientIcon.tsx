import { Ionicons } from '@expo/vector-icons';
import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';
import { View } from 'react-native';
import { gradients } from '../../constants/theme';

interface GradientIconProps {
  name: keyof typeof Ionicons.glyphMap;
  size?: number;
}

export default function GradientIcon({ name, size = 18 }: GradientIconProps) {
  return (
    <MaskedView
      style={{ width: size, height: size }}
      maskElement={
        <View style={{ backgroundColor: 'transparent' }}>
          <Ionicons name={name} size={size} color="black" />
        </View>
      }
    >
      <LinearGradient
        colors={gradients.background}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{ width: size, height: size }}
      />
    </MaskedView>
  );
}