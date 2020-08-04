import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid, InputLabel, Select, MenuItem, FormControl } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
                      formControl: {
                        margin: theme.spacing(1),
                        minWidth: 120,
                      },
                      selectEmpty: {
                        marginTop: theme.spacing(2),
                      },
                    }));

function Card() {

  const classes = useStyles();
  const [totalPlayers, setTotalPlayers] = React.useState('');

  const handleChange = (event) => {
    setTotalPlayers(event.target.value);
  };

  return (
    <div className="Card">
        <Grid container justify={"center"} alignItems={"center"} spacing={1}>
            <Grid item xs={12}>
              <h1 align='center' >Card Allocate!</h1>
            </Grid>

            <Grid item>
              
              <FormControl className={classes.formControl}>
                <InputLabel id="total-players-label">Players</InputLabel>
                <Select
                  labelId="total-players-label"
                  id="total-players-select"
                  value={totalPlayers}
                  onChange={handleChange}
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                </Select>
              </FormControl>

            </Grid>

            <Grid item>
              <Button variant="contained" color="primary">
                 Go   
              </Button>
          </Grid>
        </Grid>
    </div>
  );
}

export default Card;
