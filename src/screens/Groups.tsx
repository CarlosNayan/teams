import styled from "styled-components/native";

export function Groups() {
  return (
    <Container>
      <Title>Groups</Title>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #000;
  align-items: center;
  justify-content: center;
`;

const Title = styled.Text`
  font-size: 32px;
  color: #fff;
`;
