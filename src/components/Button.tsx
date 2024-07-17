import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import theme from "@assets/theme";
import styled from "styled-components/native";

interface Props extends TouchableOpacityProps {
  title: string;
  type?: "PRIMARY" | "SECONDARY";
}

export function Button({ title, type = "PRIMARY", ...rest }: Props) {
  return (
    <Container type={type} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}

const Container = styled(TouchableOpacity)`
  flex: 1;
  min-height: 56px;
  max-height: 56px;
  background-color: ${({ type }: Props) =>
    type === "PRIMARY" ? theme.colors.green_700 : theme.colors.red_dark};
  border-radius: 6px;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  color: ${theme.colors.white};
  font-family: ${theme.font_family.bold};
  font-size: ${theme.font_size.md};
`;
