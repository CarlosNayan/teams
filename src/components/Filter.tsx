import theme from "@assets/theme";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import styled from "styled-components/native";

interface Props extends TouchableOpacityProps {
  title: string;
  isActive?: boolean;
}

export function Filter({ title, isActive = false, ...rest }: Props) {
  return (
    <Container isActive={isActive} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}

const Container = styled(TouchableOpacity)`
  min-height: 38px;
  max-height: 38px;
  justify-content: center;
  align-items: center;
  border: ${({ isActive }: Props) =>
    isActive ? `1px solid ${theme.colors.green_700}` : `none`};
  border-radius: 4px;
  margin-right: 12px;
  margin-top: 8px;
  width: 70px;
`;

const Title = styled.Text`
  font-family: ${theme.font_family.bold};
  font-size: ${theme.font_size.sm};
  color: ${theme.colors.gray_200};
  text-transform: uppercase;
`;
