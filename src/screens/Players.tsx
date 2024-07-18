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
import { playerAddByGroup } from "@storage/player/playersAddByGroup";
import { CustomError } from "@utils/CustomError";
import { useState } from "react";
import { Alert, FlatList } from "react-native";
import styled from "styled-components/native";

type props = {
  group: string;
};

export function Players() {
  const { group } = useRoute().params as props;

  const navigate = useNavigation();

  const [selectedTeam, setSelectedTeam] = useState<string>("Time A");
  const [players, setPlayers] = useState<string[]>([]);
  const [newPlayerName, setNewPlayerName] = useState("");

  async function handleAddPlayer() {
    if (newPlayerName.trim().length === 0)
      Alert.alert("Novo Jogador", "Por favor, informe o nome do jogador");
    const newPlayer = {
      id: new Date().getTime().toString(),
      name: newPlayerName.trim(),
      team: selectedTeam,
    };

    try {
      await playerAddByGroup(newPlayer, group);
      setNewPlayerName("");
      // fetchPlayersByTeam();
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
      await groupDelete(group);
      navigate.navigate("groups");
    } catch (error) {
      console.error("[Players.tsx > handleDeleteGroup]", error);
      throw error;
    }
  }

  return (
    <Container>
      <Header showBackButton />
      <HighLight title={group} subTitle="Adicione a galera e separe os times" />
      <Form>
        <Input
          placeholder="Nome da pessoa"
          autoCorrect={false}
          onChangeText={setNewPlayerName}
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
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <PlayersCards name={item} onRemove={() => {}} />
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
