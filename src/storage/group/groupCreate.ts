import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLECTION } from "@storage/storage.config";
import { groupListAll } from "./groupListAll";
import { CustomError } from "@utils/CustomError";

export async function groupCreate(newGroup: string) {
  const storedGroups = await groupListAll();

  const groupAlreadyExists = storedGroups.includes(newGroup);

  if (groupAlreadyExists) {
    throw new CustomError("Já existe um grupo com esse nome");
  }

  await AsyncStorage.setItem(
    GROUP_COLECTION,
    JSON.stringify([...storedGroups, newGroup])
  );

  return;
}
