import React, { PureComponent } from 'react'
import TextField  from '@material-ui/core/TextField';
import  Button  from '@material-ui/core/Button';
import withStyles  from '@material-ui/core/styles/withStyles';
import  Paper  from '@material-ui/core/Paper';
import Grid  from '@material-ui/core/Grid';
import AddLocationIcon from '@material-ui/icons/AddLocation'
import EnhancedTable from './EnhancedTable';
const styles = theme =>({
    button: {
        margin: theme.spacing.unit,
      },
      input: {
        display: 'none',
      },
    paper:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'baseline',
        margin: theme.spacing.unit,
        padding: theme.spacing.unit * 2,
    }
});

let counter = 0;
function createData(place, connections) {
  counter += 1;
  return { id: counter, place, connections};
}
class Place extends PureComponent {

    state = {
        place: '',
        
      };
    data  ={
        order: 'asc',
        orderBy: 'place',
        selected: [],
        data: [
          createData('Rome', [{place:'Paris'},{place:'London'}]),
          createData('Paris', [{place:'Berlin'},{place:'Linz'}]),
          createData('Rome', [{place:'Paris'},{place:'London'}]),
          createData('Rome', [{place:'Paris'},{place:'London'}]),
        ],
        page: 0,
        rowsPerPage: 5,
    }

    handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        });
    };
    handleClick = () => {
        if(!this.state.place===''){

        }
    }
    
    render() {
        return (
            <>
                <Paper className={this.props.classes.paper}>
                    <Grid item xs={4}>
                        <TextField
                            id="standard-name"
                            label="Place"
                            value={this.state.place}
                            onChange={this.handleChange('place')}
                            margin="normal"
                        />
                        <Button variant="outlined" color="primary" onClick={this.handleClick} ><AddLocationIcon/> Add Place</Button>
                    </Grid>
                </Paper>
                <EnhancedTable data={this.data}/>
            
            </>
        )
    }
}

export default withStyles(styles)(Place);