import React, { SyntheticEvent } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { api } from "../../../services/api";
import { Card } from "../../../components/UI/Card";
import { Button } from "../../../components/UI/Button";
import { InfoDiv, Container } from "./styles";
import { FormControlLabel, RadioGroup, Radio, TextField } from "@mui/material";
import { PlaylistCard } from "../PlaylistCard/Index";
import { PlaylistCardProps } from "../../../interfaces";

export function HomeCard(props: any) {
  const [searchType, setSearchType] = useState("cidade");
  const [searchCidade, setSearchCidade] = useState("");
  const [searchLongitude, setSearchLongitude] = useState("");
  const [searchLatitude, setSearchLatitude] = useState("");
  const [playlistCardState, setPlaylistCardState] = useState<PlaylistCardProps>(
    {
      cityName: "",
      cityTemperature: 0,
      playlist: [],
      onCreatePlaylist: () => {},
    }
  );
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
  async function submitHandler() {
    setIsLoading(true);
    const createdPlaylist = {} as PlaylistCardProps;
    try {
      let wheatherRequestString =
        searchType === "cidade"
          ? `/weather/?city=${searchCidade
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")}`
          : `/weather/?lat=${searchLatitude}&lon=${searchLongitude}`;
      let currentWeather = await api.get(wheatherRequestString);
      console.log(currentWeather);
      createdPlaylist.cityName = currentWeather.data.name;
      createdPlaylist.cityTemperature = currentWeather.data.main.temp - 273.15;
      let spotifyResponse = await api.get(
        `/playlist/?temperature=${currentWeather.data.main.temp}`
      );
      console.log(spotifyResponse);
      createdPlaylist.playlist = spotifyResponse.data.tracks;
      createdPlaylist.onCreatePlaylist = createNewPlaylistHandler;
      setPlaylistCardState(createdPlaylist);
      setIsLoading(false);
      setShowPlaylist(true);
    } catch (error: any) {
      toast.error(error.message);
      setIsLoading(false);
    }
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
      cityName={playlistCardState.cityName}
      cityTemperature={playlistCardState.cityTemperature}
      playlist={playlistCardState.playlist}
      onCreatePlaylist={playlistCardState.onCreatePlaylist}
    />
  );
}
