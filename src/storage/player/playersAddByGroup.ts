import AsyncStorage from "@react-native-async-storage/async-storage";
import { PlayerStorageDTO } from "./PlayersStorageDTO";
import { PLAYER_COLECTION } from "@storage/storage.config";
import { playersGetByGroup } from "./playersGetByGroup";
import { CustomError } from "@utils/CustomError";

export async function playerAddByGroup(
  newPlayer: PlayerStorageDTO,
  group: string
) {
  const storedPlayers = await playersGetByGroup(group);
  const playerAlreadyExists = storedPlayers.some(
    (player) => player.name === newPlayer.name
  );

  if (playerAlreadyExists) {
    throw new CustomError("Já existe um jogador com esse nome");
  }

  await AsyncStorage.setItem(
    `${PLAYER_COLECTION}-${group}`,
    JSON.stringify([...storedPlayers, newPlayer])
  );
}
