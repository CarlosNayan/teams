import theme from "@assets/theme";
import styled from "styled-components/native";
import logoImg from "@assets/Logo/logo.png";
import { CaretLeft } from "phosphor-react-native";

interface Props {
  showBackButton?: boolean;
}

export function Header({ showBackButton = false }: Props) {
  return (
    <Container>
      {showBackButton && (
        <BackButton>
          <BackIcon />
        </BackButton>
      )}
      <Logo source={logoImg} />
    </Container>
  );
}

const Container = styled.SafeAreaView`
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color: ${theme.colors.gray_600};
`;

const Logo = styled.Image`
  width: 46px;
  height: 55px;
`;

const BackButton = styled.TouchableOpacity`
  flex: 1;
`;

const BackIcon = styled(CaretLeft)`
  color: ${theme.colors.white};
  font-size: 32px;
`;
