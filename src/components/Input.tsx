import theme from "@assets/theme";
import { TextInput, TextInputProps } from "react-native";
import styled from "styled-components/native";

type Props = TextInputProps & {
  inputRef?: React.RefObject<TextInput>;
};

export function Input({ inputRef, ...rest }: Props) {
  return <Container ref={inputRef} {...rest} />;
}

const Container = styled(TextInput).attrs(() => ({
  placeholderTextColor: theme.colors.gray_300,
}))`
  flex: 1;
  min-height: 56px;
  max-height: 56px;
  background-color: ${theme.colors.gray_700};
  border-radius: 6px;
  padding: 16px;
  font-family: ${theme.font_family.regular};
  font-size: ${theme.font_size.md};
  color: ${theme.colors.gray_200};
`;
