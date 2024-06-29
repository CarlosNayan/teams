import theme from "@assets/theme";
import { GroupCards } from "@components/GroupCards";
import { Header } from "@components/Header";
import { HighLight } from "@components/HighLight";
import styled from "styled-components/native";
import { useState } from "react";
import { FlatList } from "react-native";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";

export function Groups() {
  const [groups, setGourps] = useState<string[] | []>([]);

  return (
    <Container>
      <Header />
      <HighLight title="Turmas" subTitle="Jogue com a sua turma" />
      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCards title={item} />}
        contentContainerStyle={{
          paddingBottom: 68,
          flex: groups.length === 0 ? 1 : 0,
        }}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal cadastrar a primeira turma?" />
        )}
      />
      <Button title="Criar nova turma"/>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.gray_600};
  padding: 24px;
`;
