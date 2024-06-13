import { Groups } from "@screens/Groups";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Groups />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
