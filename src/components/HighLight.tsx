import theme from "@assets/theme";
import styled from "styled-components/native";

interface Props {
  title: string;
  subTitle: string;
}

export function HighLight({ title, subTitle }: Props) {
  return (
    <Container>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
    </Container>
  );
}

const Container = styled.SafeAreaView`
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 32px 0;
  background-color: ${theme.colors.gray_600};
`;

const Title = styled.Text`
  color: ${theme.colors.white};
  text-align: center;
  font-family: ${theme.font_family.bold};
  font-size: ${theme.font_size.xl};
`;

const SubTitle = styled.Text`
  color: ${theme.colors.gray_300};
  text-align: center;
  font-family: ${theme.font_family.regular};
  font-size: ${theme.font_size.md};
`;
