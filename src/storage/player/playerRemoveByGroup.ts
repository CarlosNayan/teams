import AsyncStorage from "@react-native-async-storage/async-storage";

import { PLAYER_COLECTION } from "@storage/storage.config";
import { playersGetByGroup } from "./playersGetByGroup";

export async function playerRemoveByGroup(playerId: string, group: string) {
  const players = await playersGetByGroup(group);
  const filteredPlayers = players.filter((player) => player.id !== playerId);
  await AsyncStorage.setItem(
    `${PLAYER_COLECTION}-${group}`,
    JSON.stringify(filteredPlayers)
  );
}
