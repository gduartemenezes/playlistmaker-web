import { Container, Content, WelcomeSection } from "./styles";
import { HomeCard } from "./HomeCard";
import TextField from "@mui/material/TextField";
import { useState } from "react";
export function Home() {
  const [myValue, setMyValue] = useState("");
  return (
    <Container>
      <Content>
        <WelcomeSection>
          <h1>Waves</h1>
          <h5>A música certa para o seu momento</h5>
        </WelcomeSection>
        <HomeCard></HomeCard>
      </Content>
    </Container>
  );
}
