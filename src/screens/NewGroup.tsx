import theme from "@assets/theme";
import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { HighLight } from "@components/HighLight";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { UsersThree } from "phosphor-react-native";
import { useState } from "react";
import { Alert } from "react-native";
import styled from "styled-components/native";

export function NewGroup() {
  const [group, setGroup] = useState("");

  const navigate = useNavigation();

  function handleNewGroup() {
    if (group.length === 0)
      return Alert.alert("Novo Grupo", "Por favor, informe o nome da turma");
    
    navigate.navigate("players", { group });
  }

  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />
        <HighLight
          title="Nova turma"
          subTitle="crie uma turma para adicionar as pessoas"
        />
        <Input placeholder="Nome da turma" onChangeText={setGroup} />
        <Button
          title="Criar"
          style={{ marginTop: 10 }}
          onPress={handleNewGroup}
        />
      </Content>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.gray_600};
  padding: 24px;
`;

const Content = styled.View`
  flex: 1;
  justify-content: center;
`;

const Icon = styled(UsersThree).attrs(() => ({
  size: 56,
  color: theme.colors.green_700,
}))`
  align-self: center;
`;
