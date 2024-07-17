import theme from "@assets/theme";
import { Button } from "@components/Button";
import { GroupCards } from "@components/GroupCards";
import { Header } from "@components/Header";
import { HighLight } from "@components/HighLight";
import { ListEmpty } from "@components/ListEmpty";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { groupListAll } from "@storage/group/groupListAll";
import { useCallback, useEffect, useState } from "react";
import { FlatList } from "react-native";
import styled from "styled-components/native";

export function Groups() {
  const [groups, setGourps] = useState<string[] | []>([]);

  useFocusEffect(
    useCallback(() => {
      fetchGroups();
    }, [])
  );

  const navigation = useNavigation();

  async function fetchGroups() {
    try {
      const data = await groupListAll();
      setGourps(data);
    } catch (error) {
      console.error("[Groups.tsx > fetchGroups]", error);
      throw error;
    }
  }

  function handleOpenGroup(group: string) {
    navigation.navigate("players", { group });
  }

  function handleNewGroup() {
    navigation.navigate("new");
  }

  return (
    <Container>
      <Header />
      <HighLight title="Turmas" subTitle="Jogue com a sua turma" />
      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <GroupCards title={item} onPress={() => handleOpenGroup(item)} />
        )}
        contentContainerStyle={{
          paddingBottom: 68,
          flex: groups.length === 0 ? 1 : 0,
        }}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal cadastrar a primeira turma?" />
        )}
      />
      <Button title="Criar nova turma" onPress={handleNewGroup} />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.gray_600};
  padding: 24px;
`;
