import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';  
import { useHistory } from "react-router-dom"; 
import Toolbar from '@mui/material/Toolbar'; 
import AppBar from '@mui/material/AppBar';  
import backgroundImage from '../images/background3.jpg'
import logo from './logo.png';
import ContextContainer from '../functions/contextContainer';  
//@ts-ignore
import configureMinter from '../functions/configureMinter'

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme(); 
type props = {
  showSignUp: boolean;
  setShowSignUp(visible: boolean): void;
};

export default function SignIn() { 
  let history = useHistory()
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };  

  //context container error?
 // const { zilPay, contract } = ContextContainer.useContainer(); 
//  const createMinter = async () => {
 //   configureMinter(contract, zilPay);
//  };  

// pass in user's zilpay wallet as parameter to do checks on smart contract 
  const handleExistingUser = () => {  
    //check to see if employee has the nft in there zilpay through smart contract 
    //if not pass them trigger popup for registering
    //if so then pass them to the next screen
    
  }

  return (
    <ThemeProvider theme={theme}>  
    <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
         Welcome To NakamotoLabs
          </Typography>
        </Toolbar>
      </AppBar> 
      <Container component="main" maxWidth="xs"> 
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar src="./logo.png">
   
          </Avatar>
          {/* <Typography component="h1" variant="h5">
            Connect Zilpay Wallet
          </Typography>  */}
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }} 
              onClick = {() => {  
                //pass in zilpay address here
                history.push('/dashboard')
                
              }}
            >
              Login
            </Button>
            <Grid container>
            
            
            </Grid>
          </Box>
        </Box>
      </Container> 

    </ThemeProvider>
  );
}