import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLECTION } from "@storage/storage.config";
import { groupListAll } from "./groupListAll";

export async function groupDelete(group: string) {
  const storedGroups = await groupListAll();

  await AsyncStorage.setItem(
    GROUP_COLECTION,
    JSON.stringify(
      storedGroups.filter((groupItem: string) => groupItem !== group)
    )
  );
}
