import AsyncStorage from "@react-native-async-storage/async-storage";
import { PlayerStorageDTO } from "./PlayersStorageDTO";
import { PLAYER_COLECTION } from "@storage/storage.config";

export async function playersGetByGroup(group: string) {
  const response = await AsyncStorage.getItem(`${PLAYER_COLECTION}-${group}`);
  const players: PlayerStorageDTO[] = response ? JSON.parse(response) : [];

  return players;
}
