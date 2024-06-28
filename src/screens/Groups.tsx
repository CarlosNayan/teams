import theme from "@assets/theme";
import { Header } from "@components/Header";
import styled from "styled-components/native";

export function Groups() {
  return (
    <Container>
      <Header />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.gray_600};
  padding: 24px;
`;