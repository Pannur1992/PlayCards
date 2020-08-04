import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid, InputLabel, Select, MenuItem, FormControl } from "@material-ui/core";
import PlayerLists from './PlayerLists';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
            classes: makeStyles((theme) => ({
                      formControl: {
                        margin: theme.spacing(1),
                        minWidth: 120,
                      }
                    })),
                    totalPlayers: '',
                    error: '',
                    showPlayer: false,
              };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      totalPlayers: event.target.value,
      error: '',
      showPlayer: false,
    })
    this.setState({value: event.target.value});
  }
  
  handleSubmit(event) {
    event.preventDefault();
    this.setState({showPlayer: true});
  }
  
  render() {
    const {classes, totalPlayers, showPlayer} = this.state;
    let playerLists = '';
    if(showPlayer) {
      playerLists = <PlayerLists totalPlayers={this.state.totalPlayers} />;
    }
    return (
      <div>
              <Grid container justify={"center"} alignItems={"center"} spacing={1}>
                  <Grid item xs={12}>
                    <h3 align='center' class="card-title" >Lets Go...</h3>
                  </Grid>
                   <form onSubmit={this.handleSubmit}>
                      <Grid item>   
                      <InputLabel id="total-players-label">Choose Players</InputLabel>           
                        <FormControl className={classes.formControl}>
                          
                          <Select
                            labelId="total-players-label"
                            id="total-players-select"
                            value={totalPlayers}
                            onChange={this.handleChange}
                          >
                            
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                          </Select>

                          
                        </FormControl>
          
                      </Grid>
          
                      <Grid item>
                        <Button variant="contained" color="primary" type="submit" id="goButton">
                          Go 
                        </Button>
                      </Grid> 
                      <div class="player-lists">
                        {playerLists}
                      </div>
                  </form>
              </Grid>
          </div>
    );
  }
  
}

export default Card;
