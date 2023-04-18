import Logo from "../../assets/images/logo.png";
import "./index.css";
import { Grid, Typography } from "@mui/material";

const Home = () => {

  return (
    <Grid container id="home">
      <Grid item container className="box-home">
        <Grid container xs={12} sm={6} md={6} item className="box-text-home">
          <Typography color='white' variant="h3">MARKETING PESSOAL</Typography>
          <Typography color='white' variant="subtitle1">
            APRENDA A SE POSICIONAR NAS REDEðs SOCIAIS. PALESTRA COM O FAMOSO
            ROBERTO VILLAREAL. Rua do Porto, 82 - Porto Velho-RO 10/12/2020 20h
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <img src={Logo} className="logo" />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
