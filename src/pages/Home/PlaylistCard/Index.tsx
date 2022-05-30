import { Card } from "../../../components/UI/Card";
import { Container, InfoDiv } from "./styles";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Button } from "../../../components/UI/Button";
import { PlaylistCardProps } from "../../../interfaces";

export function PlaylistCard(props: PlaylistCardProps) {
  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
      hide: true,
    },
    {
      field: "artist",
      headerName: "Artista",
      width: 100,
    },
    {
      field: "title",
      headerName: "Título",
      width: 380,
    },
  ];

  const customMessage =
    props.cityTemperature > 30
      ? `Devido ao calorão que está fazendo em ${props.cityName} recomendamos uma playlist com o tema festa pra curtir e tomar aquela gelada`
      : props.cityTemperature < 30 && props.cityTemperature >= 15
      ? `Em ${props.cityName} o clima está ideal para uma playlist com o tema pop pra relaxar e relembrar a vida`
      : props.cityTemperature < 15 && props.cityTemperature >= 10
      ? `Com esse climinha ameno que está fazendo em ${props.cityName} recomendamos uma playlist com com muito rock pra dar aquela esquentada`
      : props.cityTemperature < 10
      ? `Eita! Parece que o sol esquecel a cidade de ${props.cityName}, hein? Recomendamos uma playlist de músicas clássicas pra relaxar e descansar tomando um bom vinho`
      : "Não desenvolvemos uma playlist para essa temperatura, mas você pode tentar outra cidade";
  return (
    <Card className="homeCard">
      <div style={{ padding: 15 }}>
        <span>{customMessage}</span>
      </div>
      <InfoDiv style={{ height: 450, width: "100%", maxWidth: 600 }}>
        <DataGrid
          rows={props.playlist}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
        />
      </InfoDiv>
      <Container>
        <div>
          <Button onClick={props.onCreatePlaylist} width="200px">
            Criar nova playlist
          </Button>
        </div>
      </Container>
    </Card>
  );
}
