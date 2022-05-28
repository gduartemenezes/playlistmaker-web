import React, { SyntheticEvent } from "react";
import { useState } from "react";

import { Card } from "../../../components/UI/Card";
import { Button } from "../../../components/UI/Button";
import { InfoDiv, Container } from "./styles";
import { FormControlLabel, RadioGroup, Radio, TextField } from "@mui/material";
import { PlaylistCard } from "../PlaylistCard/Index";

export function HomeCard(props: any) {
  const [searchType, setSearchType] = useState("cidade");
  const [searchCidade, setSearchCidade] = useState("");
  const [searchLongitude, setSearchLongitude] = useState("");
  const [searchLatitude, setSearchLatitude] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPlaylist, setShowPlaylist] = useState(false);
  function changeSearchHandler(event: SyntheticEvent, newValue: string) {
    console.log(newValue);
    setSearchType(newValue);
  }
  function createNewPlaylistHandler() {
    setSearchCidade("");
    setSearchLatitude("");
    setSearchLongitude("");
    setShowPlaylist(false);
  }

  const playlist = [
    { id: 0, artist: "Drake", title: "Hotline Bling" },
    { id: 1, artist: "Drake", title: "Hotline Bling" },
    { id: 2, artist: "Drake", title: "Hotline Bling" },
  ];
  const formFields =
    searchType === "cidade" ? (
      <div>
        <TextField
          placeholder="Digite o nome da cidade"
          label="Cidade"
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
      setShowPlaylist(true);
    }, 3000);
  }
  return !showPlaylist ? (
    <Card className="homeCard">
      <InfoDiv>
        <h3>Vamos começar!</h3>

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
        <div>
          <strong>
            {searchType === "cidade"
              ? "Insira a cidade em que está e descubra uma playlist"
              : "Insira as coordernadas e descubra uma playlist"}
          </strong>
        </div>
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
  ) : (
    <PlaylistCard
      cityName="Goiania"
      cityTemperature={35}
      countryName="Brasil"
      playlist={playlist}
      onCreatePlaylist={createNewPlaylistHandler}
    />
  );
}
