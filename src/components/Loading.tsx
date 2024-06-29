import theme from "@assets/theme";
import { ActivityIndicator } from "react-native";
import styled from "styled-components/native";

export function Loading() {
  return (
    <Container>
      <ActivityIndicator color={theme.colors.green_700} />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.gray_600};
`;
