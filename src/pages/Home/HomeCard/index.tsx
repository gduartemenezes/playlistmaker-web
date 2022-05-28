import React, { SyntheticEvent } from "react";
import { Card } from "../../../components/UI/Card";
import { InfoDiv, Container } from "./styles";
import {
  Box,
  FormControl,
  FormControlLabel,
  Input,
  RadioGroup,
  Radio,
  TextField,
} from "@mui/material";
import { useState } from "react";

export function HomeCard(props: any) {
  const [searchType, setSearchType] = useState("cidade");
  const [searchCidade, setSearchCidade] = useState("");
  function changeSearchHandler(event: SyntheticEvent, newValue: string) {
    console.log(newValue);
    setSearchType(newValue);
  }
  function changeSearchCidadeHandler(
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) {
    setSearchCidade(event.target.value.toString());
  }
  return (
    <Card className="homeCard">
      <InfoDiv>
        <h3>Vamos começar!</h3>
        <span>Insira a cidade em que está e descubra uma playlist</span>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="cidade"
          name="radio-buttons-group"
          value={searchType}
          onChange={changeSearchHandler}
          // variant="filled"
        >
          <FormControlLabel
            value="cidade"
            control={<Radio />}
            label="Usar nome da cidade"
          />
          <FormControlLabel
            value="coordenadas"
            control={<Radio />}
            label="Usar coordenadas"
          />
        </RadioGroup>
      </InfoDiv>
      <Container>
        <TextField
          className="rene"
          placeholder="Digite o nome da cidade"
          label="Cidade"
          defaultValue=""
          variant="filled"
          value={searchCidade}
          onChange={changeSearchCidadeHandler}
          style={{ color: "blue" }}
        />
      </Container>
    </Card>
  );
}
