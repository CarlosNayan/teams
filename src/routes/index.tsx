import { NavigationContainer } from "@react-navigation/native";

import { AppRoutes } from "./app.routes";
import { useTheme } from "styled-components";
import { View } from "react-native";

export function Routes() {
  const { colors } = useTheme();
  return (
    <View style={{ flex: 1, backgroundColor: colors.gray_600 }}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </View>
  );
}
