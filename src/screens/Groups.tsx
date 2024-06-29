import theme from "src/theme";
import { GroupCards } from "@components/GroupCards";
import { Header } from "@components/Header";
import { HighLight } from "@components/HighLight";
import styled from "styled-components/native";

export function Groups() {
  return (
    <Container>
      <Header />
      <HighLight title="Turmas" subTitle="Jogue com a sua turma" />
      <GroupCards title="Turma 1" />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.gray_600};
  padding: 24px;
`;
