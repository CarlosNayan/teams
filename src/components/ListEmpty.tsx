import theme from "@assets/theme";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

interface Props {
  message: string;
}

export function ListEmpty({ message }: Props) {
  return (
    <Container>
      <Title>{message}</Title>
    </Container>
  );
}

const Container = styled(SafeAreaView)`
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color: ${theme.colors.gray_600};
  margin: 32px 0;
`;

const Title = styled.Text`
  color: ${theme.colors.gray_300};
  text-align: center;
  font-family: ${theme.font_family.regular};
  font-size: ${theme.font_size.sm};
`;
