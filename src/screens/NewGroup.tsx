import theme from "@assets/theme";
import { Header } from "@components/Header";
import styled from "styled-components/native";
import { UsersThree } from "phosphor-react-native";
import { HighLight } from "@components/HighLight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";

export function NewGroup() {
  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />
        <HighLight
          title="Nova turma"
          subTitle="crie uma turma para adicionar as pessoas"
        />
        <Input placeholder="Nome da turma" />
        <Button title="Criar" style={{ marginTop: 10 }} />
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
