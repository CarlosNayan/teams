import { Loading } from "@components/Loading";
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";
import { NewGroup } from "@screens/NewGroup";
import { StatusBar } from "expo-status-bar";
import theme from "@assets/theme";
import { ThemeProvider } from "styled-components";
import { Players } from "@screens/Players";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="light" translucent />
      {fontsLoaded ? <Players /> : <Loading />}
    </ThemeProvider>
  );
}
