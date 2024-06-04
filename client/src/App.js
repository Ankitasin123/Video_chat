import React from 'react';
import { Typography,AppBar } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";


import VideoPlayer from "./component/VideoPlayer";
import Notification from "./component/Notification";
import Option from "./component/Option";

const useStyles = makeStyles((theme) => ({
    appBar: {
      borderRadius: 15,
      margin: '30px 100px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: '600px',
      border: '2px solid black',
  
      [theme.breakpoints.down('xs')]: {
        width: '90%',
      },
    },
    image: {
      marginLeft: '15px',
    },
    wrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
    },
  }));

const App = () => {
  const classes = useStyles();
    return(
      <div className={classes.wrapper}>
            <AppBar position="static" color="inherit">
                <Typography variant="h2" align="center">video chitchat</Typography>
            </AppBar>
            <VideoPlayer/>
            <Option>
                <Notification/>
            </Option>
        </div>
    );
};

export default App;
