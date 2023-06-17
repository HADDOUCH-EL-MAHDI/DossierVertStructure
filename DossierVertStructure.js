import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import {
  FormGroup,
  InputLabel,
  FormControl,
  Input,
  TextField,
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useState } from "react";
import { FormLabel } from "@mui/material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { blue, orange, purple, red } from "@mui/material/colors";
import axios from "axios";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function DossierVertStructure() {
  return (
    <Box sx={{ flexGrow: 1, mt: 2 }}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={11}>
          <Item>
            <Box
              sx={{
                display: "flex",
                bgcolor: "primary.main",
                color: "primary.contrastText",
                m: -1,
              }}
            >
              <Grid
                item
                xs={8}
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "start",
                }}
              >
                <h3>
                  Dossier d'exploitation du retard de croissance
                  staturo-pondéral
                </h3>
              </Grid>
              <Grid
                item
                xs={4}
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  alignItems: "end",
                }}
              >
                <h4>Patient X</h4>
              </Grid>
            </Box>

            <br></br>
            <br></br>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid
                  item
                  xs={12}
                  md={6}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Card sx={{ maxWidth: 345 }}>
                    <h1>IDENTITE</h1>
                    <br></br>
                    <CardActions sx={{ backgroundColor: "blue" }}>
                      <div>
                        <div>
                          <Stack spacing={22} direction="row">
                            <Button size="small" variant="contained">
                              Modifier
                            </Button>
                            <Button size="small" variant="contained">
                              Voir
                            </Button>
                          </Stack>
                        </div>
                      </div>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={6}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Card sx={{ maxWidth: 345 }}>
                    <h1>PARACLINIQUE</h1> <br></br>
                    <CardActions sx={{ backgroundColor: "blue" }}>
                      <div>
                        <div className="d-flex justify-content-center">
                          <Stack spacing={22} direction="row">
                            <Button size="small" variant="contained">
                              Modifier
                            </Button>
                            <Button size="small" variant="contained">
                              Voir
                            </Button>
                          </Stack>
                        </div>
                      </div>
                    </CardActions>
                  </Card>
                </Grid>
              </Grid>
            </Box>
            <br></br>

            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid
                  item
                  xs={12}
                  md={6}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Card sx={{ maxWidth: 345 }}>
                    <h1>ANTECEDENTS</h1>
                    <h2> 1- Personnels</h2>
                    <br></br>

                    <CardActions sx={{ backgroundColor: "blue" }}>
                      <div>
                        <div>
                          <Stack spacing={22} direction="row">
                            <Button size="small" variant="contained">
                              Modifier
                            </Button>
                            <Button size="small" variant="contained">
                              Voir
                            </Button>
                          </Stack>
                        </div>
                      </div>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={6}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Card sx={{ maxWidth: 345, justifyContent: "end" }}>
                    <h1>ANTECEDENTS</h1>
                    <h2> 2- Familiaux</h2>
                    <br></br>
                    <CardActions sx={{ backgroundColor: "blue" }}>
                      <div>
                        <div className="d-flex justify-content-end">
                          <Stack spacing={22} direction="row">
                            <Button size="small" variant="contained">
                              Modifier
                            </Button>
                            <Button size="small" variant="contained">
                              Voir
                            </Button>
                          </Stack>
                        </div>
                      </div>
                    </CardActions>
                  </Card>
                </Grid>
              </Grid>
            </Box>
            <br></br>

            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid
                  item
                  xs={12}
                  md={6}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Card sx={{ maxWidth: 345 }}>
                    <h2>COURBE DE CROISSANCE</h2>
                    <br></br>

                    <CardActions sx={{ backgroundColor: "blue" }}>
                      <div>
                        <div>
                          <Stack spacing={22} direction="row">
                            <Button size="small" variant="contained">
                              Modifier
                            </Button>
                            <Button size="small" variant="contained">
                              Voir
                            </Button>
                          </Stack>
                        </div>
                      </div>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={6}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Card sx={{ maxWidth: 345, justifyContent: "end" }}>
                    <h4>DIAGNOSTIC RETENU ET PEC THERAPEUTIQUE</h4> <br></br>
                    <CardActions sx={{ backgroundColor: "blue" }}>
                      <div>
                        <div className="d-flex justify-content-end">
                          <Stack spacing={22} direction="row">
                            <Button size="small" variant="contained">
                              Modifier
                            </Button>
                            <Button size="small" variant="contained">
                              Voir
                            </Button>
                          </Stack>
                        </div>
                      </div>
                    </CardActions>
                  </Card>
                </Grid>
              </Grid>
            </Box>
            <br></br>

            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid
                  item
                  xs={12}
                  md={6}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Card sx={{ maxWidth: 345 }}>
                    <h1>EXAMEN PHYSIQUE</h1>
                    <br></br>

                    <CardActions sx={{ backgroundColor: "blue" }}>
                      <div>
                        <div>
                          <Stack spacing={22} direction="row">
                            <Button size="small" variant="contained">
                              Modifier
                            </Button>
                            <Button size="small" variant="contained">
                              Voir
                            </Button>
                          </Stack>
                        </div>
                      </div>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={6}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Card sx={{ maxWidth: 345, justifyContent: "end" }}>
                    <h1>SUIVI ...</h1>
                    <br></br>
                    <CardActions sx={{ backgroundColor: "blue" }}>
                      <div>
                        <div className="d-flex justify-content-end">
                          <Stack spacing={22} direction="row">
                            <Button size="small" variant="contained">
                              Modifier
                            </Button>
                            <Button size="small" variant="contained">
                              Voir
                            </Button>
                          </Stack>
                        </div>
                      </div>
                    </CardActions>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
export default DossierVertStructure;
