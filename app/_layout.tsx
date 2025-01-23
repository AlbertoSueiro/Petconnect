import { Slot, Stack } from "expo-router";
import { useFonts } from "expo-font";

export default function RootLayout() {

  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    MoreSugar: require('../assets/fonts/MoreSugar-Regular.ttf')
  });
  
  return (
    <Stack screenOptions={{ headerShown: false }}>
    </Stack>
  );
  
}
