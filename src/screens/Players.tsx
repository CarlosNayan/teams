import theme from "@assets/theme";
import { ButtonIcon } from "@components/ButtonIcon";
import { Filter } from "@components/Filter";
import { Header } from "@components/Header";
import { HighLight } from "@components/HighLight";
import { Input } from "@components/Input";
import styled from "styled-components/native";

export function Players() {
  return (
    <Container>
      <Header showBackButton />
      <HighLight
        title="Nome da turma"
        subTitle="Adicione a galera e separe os times"
      />
      <Form>
        <Input placeholder="Nome da pessoa" autoCorrect={false} />
        <ButtonIcon icon="add" />
      </Form>
      <Filter title="Time A" isActive />
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
`;
