import theme from "@assets/theme";
import { Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { ButtonIcon } from "./ButtonIcon";
import { MaterialIcons } from "@expo/vector-icons";

interface Props {
  name: string;
  onRemove: () => void;
}

export function PlayersCards({ name, onRemove }: Props) {
  return (
    <Container>
      <PlayerIcon />
      <Name>{name}</Name>
      <ButtonIcon icon="close" type="SECONDARY" onPress={onRemove} />
    </Container>
  );
}

const Container = styled.View`
  width: 100%;
  height: 56px;
  background-color: ${theme.colors.gray_500};
  border-radius: 6px;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  margin-bottom: 16px;
`;

const Name = styled.Text`
  flex: 1;
  color: ${theme.colors.gray_200};
  font-family: ${theme.font_family.regular};
  font-size: ${theme.font_size.md};
`;

const PlayerIcon = styled(MaterialIcons).attrs(() => ({
  size: 24,
  color: theme.colors.gray_200,
  name: "person",
}))`
  margin-right: 4px;
`;
