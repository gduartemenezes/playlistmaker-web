import React, { SyntheticEvent } from "react";
import { useState } from "react";

import { Card } from "../../../components/UI/Card";
import { Button } from "../../../components/UI/Button";
import { InfoDiv, Container } from "./styles";
import { FormControlLabel, RadioGroup, Radio, TextField } from "@mui/material";

export function HomeCard(props: any) {
  const [searchType, setSearchType] = useState("cidade");
  const [searchCidade, setSearchCidade] = useState("");
  const [searchLongitude, setSearchLongitude] = useState("");
  const [searchLatitude, setSearchLatitude] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  function changeSearchHandler(event: SyntheticEvent, newValue: string) {
    console.log(newValue);
    setSearchType(newValue);
  }
  const formFields =
    searchType === "cidade" ? (
      <div>
        <TextField
          placeholder="Digite o nome da cidade"
          label="Cidade"
          defaultValue=""
          variant="filled"
          value={searchCidade}
          onChange={(e) => {
            setSearchCidade(e.target.value);
          }}
          disabled={isLoading}
        />
      </div>
    ) : (
      <div>
        <TextField
          placeholder="Digite a latitude"
          label="Latitude"
          defaultValue=""
          variant="filled"
          value={searchLatitude}
          onChange={(e) => {
            setSearchLatitude(e.target.value);
          }}
          disabled={isLoading}
        />
        <TextField
          placeholder="Digite a longitude"
          label="Longitude"
          defaultValue=""
          variant="filled"
          value={searchLongitude}
          onChange={(e) => {
            setSearchLongitude(e.target.value);
          }}
          disabled={isLoading}
        />
      </div>
    );
  function submitHandler() {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
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
        {formFields}
        <div>
          <Button
            onClick={submitHandler}
            className="btn btn-primary"
            disabled={isLoading}
          >
            {isLoading ? "Aguarde ..." : "Criar playlist"}{" "}
          </Button>
        </div>
      </Container>
    </Card>
  );
}
