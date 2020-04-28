import styled from "styled-components";

const Title = styled.h1`
  color: blue;
`;

export default function Home() {
  return (
    <div className="container">
      <Title>hello world</Title>
    </div>
  );
}
