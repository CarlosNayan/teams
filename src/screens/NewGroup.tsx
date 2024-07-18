import theme from "@assets/theme";
import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { HighLight } from "@components/HighLight";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { groupCreate } from "@storage/group/groupCreate";
import { CustomError } from "@utils/CustomError";
import { UsersThree } from "phosphor-react-native";
import { useEffect, useState } from "react";
import { Alert, Keyboard, Platform } from "react-native";
import styled from "styled-components/native";

export function NewGroup() {
  const [group, setGroup] = useState("");
  const [keyboardIsVisible, setKeyboardIsVisible] = useState(false);

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardIsVisible(true);
    });

    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardIsVisible(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  const navigate = useNavigation();

  async function handleNewGroup() {
    try {
      if (group.trim().length === 0)
        return Alert.alert("Novo turma", "Por favor, informe o nome da turma");

      await groupCreate(group);

      navigate.navigate("players", { group });
    } catch (error) {
      console.error("[NewGroup.tsx > handleNewGroup]", error);
      if (error instanceof CustomError) {
        return Alert.alert("Novo turma", error.message);
      } else {
        return Alert.alert("Novo turma", "Não foi possível criar a turma");
      }
    }
  }

  return (
    <Container keyboardIsVisible={keyboardIsVisible} Platform={Platform.OS}>
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
  padding-bottom: ${({
    keyboardIsVisible,
    Platform,
  }: {
    keyboardIsVisible: boolean;
    Platform: string;
  }) => (keyboardIsVisible && Platform === "ios" ? 400 : 24)}px;
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
