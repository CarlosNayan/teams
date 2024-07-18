import theme from "@assets/theme";
import { Button } from "@components/Button";
import { ButtonIcon } from "@components/ButtonIcon";
import { Filter } from "@components/Filter";
import { Header } from "@components/Header";
import { HighLight } from "@components/HighLight";
import { Input } from "@components/Input";
import { ListEmpty } from "@components/ListEmpty";
import { PlayersCards } from "@components/PlayersCards";
import { useNavigation, useRoute } from "@react-navigation/native";
import { groupDelete } from "@storage/group/groupDelete";
import { playerRemoveByGroup } from "@storage/player/playerRemoveByGroup";
import { playerAddByGroup } from "@storage/player/playersAddByGroup";
import { playersGetByGroupAndTeam } from "@storage/player/playersGetByGroupAndTeam";
import { PlayerStorageDTO } from "@storage/player/PlayersStorageDTO";
import { CustomError } from "@utils/CustomError";
import React, { useEffect, useState } from "react";
import { Alert, FlatList, TextInput } from "react-native";
import styled from "styled-components/native";

type props = {
  group: string;
};

export function Players() {
  const { group } = useRoute().params as props;

  const navigate = useNavigation();

  const [selectedTeam, setSelectedTeam] = useState<string>("Time A");
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);
  const [newPlayerName, setNewPlayerName] = useState("");

  const newPlayerNameInputRef = React.useRef<TextInput>(null);

  async function fetchPlayersByTeam() {
    const playersByTeam = await playersGetByGroupAndTeam(group, selectedTeam);
    setPlayers(playersByTeam);
  }

  async function handleAddPlayer() {
    if (newPlayerName.trim().length === 0)
      return Alert.alert(
        "Novo Jogador",
        "Por favor, informe o nome do jogador"
      );

    const newPlayer = {
      id: new Date().getTime().toString(),
      name: newPlayerName.trim(),
      team: selectedTeam,
    };

    try {
      await playerAddByGroup(newPlayer, group);

      setNewPlayerName("");

      newPlayerNameInputRef.current?.blur();
      // Keyboard.dismiss();

      fetchPlayersByTeam();
    } catch (error) {
      console.error("[Players.tsx > handleAddPlayer]", error);

      if (error instanceof CustomError) {
        return Alert.alert("Novo Jogador", error.message);
      }

      return Alert.alert(
        "Novo Jogador",
        "Não foi possível adicionar o jogador"
      );
    }
  }

  async function handleDeleteGroup() {
    try {
      Alert.alert("Deletar Grupo", "Tem certeza que deseja excluir o grupo?", [
        {
          text: "Não",
          style: "cancel",
        },
        {
          text: "Sim",
          onPress: async () => {
            await groupDelete(group);
            navigate.navigate("groups");
          },
        },
      ]);
    } catch (error) {
      console.error("[Players.tsx > handleDeleteGroup]", error);

      Alert.alert("Deletar Grupo", "Não foi possível deletar o grupo");

      throw new CustomError("Não foi possível deletar o grupo");
    }
  }

  async function handleRemovePlayer(playerId: string) {
    try {
      await playerRemoveByGroup(playerId, group);

      fetchPlayersByTeam();
    } catch (error) {
      console.error("[Players.tsx > handleRemovePlayer]", error);

      Alert.alert("Remover Jogador", "Não foi possível remover o jogador");

      throw new CustomError("Não foi possível remover o jogador");
    }
  }

  useEffect(() => {
    fetchPlayersByTeam();
  }, [selectedTeam]);

  return (
    <Container>
      <Header showBackButton />
      <HighLight title={group} subTitle="Adicione a galera e separe os times" />
      <Form>
        <Input
          inputRef={newPlayerNameInputRef}
          value={newPlayerName}
          placeholder="Nome da pessoa"
          autoCorrect={false}
          onChangeText={setNewPlayerName}
          onSubmitEditing={handleAddPlayer}
          returnKeyType="done"
        />
        <ButtonIcon icon="add" onPress={handleAddPlayer} />
      </Form>
      <HeaderList>
        <FlatList
          data={["Time A", "Time B"]}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === selectedTeam}
              onPress={() => setSelectedTeam(item)}
            />
          )}
          horizontal
        />
        <NumbersOfPlayers>{players.length} pessoas</NumbersOfPlayers>
      </HeaderList>
      <FlatList
        data={players}
        keyExtractor={(item) => `${item.name}-${item.team}`}
        renderItem={({ item }) => (
          <PlayersCards
            name={item.name}
            onRemove={() => handleRemovePlayer(item.id)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <ListEmpty message="Não há pessoas nessa turma" />
        )}
        contentContainerStyle={{
          paddingBottom: 68,
          flex: players.length === 0 ? 1 : 0,
        }}
      />
      <Button
        type="SECONDARY"
        title="Remover turma"
        style={{ marginTop: 10 }}
        onPress={handleDeleteGroup}
      />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.gray_600};
  padding: 24px;
`;
const Form = styled.View`
  width: 100%;
  background-color: ${theme.colors.gray_700};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  padding-right: 16px;
`;

const HeaderList = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin: 32px 0 12px;
`;

const NumbersOfPlayers = styled.Text`
  color: ${theme.colors.gray_200};
  font-family: ${theme.font_family.bold};
  font-size: ${theme.font_size.sm};
`;
