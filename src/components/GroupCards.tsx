import theme from "@assets/theme";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import styled, { DefaultTheme } from "styled-components/native";
import { UsersThree } from "phosphor-react-native";

interface Props extends TouchableOpacityProps {
  title: string;
}

export function GroupCards({ title, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Icon />
      <Title>{title}</Title>
    </Container>
  );
}

const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 90px;
  background-color: ${theme.colors.gray_500};
  border-radius: 6px;
  flex-direction: row;
  align-items: center;
  padding: 24px;
  margin-bottom: 12px;
`;

const Title = styled.Text`
  color: ${theme.colors.gray_200};
  font-family: ${theme.font_family.regular};
  font-size: ${theme.font_size.md}px;
`;

const Icon = styled(UsersThree).attrs(() => ({
  size: 32,
  color: theme.colors.green_700,
  weight: "fill",
}))`
  margin-right: 20px;
`;
