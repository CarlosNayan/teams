import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLECTION } from "@storage/storage.config";

export async function groupListAll() {
  const storedGroups = await AsyncStorage.getItem(GROUP_COLECTION);
  return storedGroups ? JSON.parse(storedGroups) : [];
}
