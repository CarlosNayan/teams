import theme from "@assets/theme";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

interface Props extends TouchableOpacityProps {
  icon: React.ComponentProps<typeof MaterialIcons>["name"];
  type?: "PRIMARY" | "SECONDARY";
}

export function ButtonIcon({ icon, type = "PRIMARY", ...rest }: Props) {
  return (
    <Container {...rest}>
      <Icon name={icon} type={type} />
    </Container>
  );
}

const Container = styled(TouchableOpacity)`
  min-height: 56px;
  max-height: 56px;
  justify-content: center;
  align-items: center;
  margin-right: 12px;
`;

const Icon = styled(MaterialIcons).attrs(({ type }: Props) => ({
  size: 24,
  color: type === "PRIMARY" ? theme.colors.green_700 : theme.colors.red_dark,
}))``;
