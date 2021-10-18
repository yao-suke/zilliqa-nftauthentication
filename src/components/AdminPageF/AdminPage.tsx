import React, { useEffect, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddressForm from './AddressForm';
import WalletForm from './WalletForm';
import Review from './Review'; 
import ContextContainer from "../../functions/contextContainer"; 

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
      NakomotoLabs
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const steps = ['Shipping address', 'Payment details', 'Review your order'];

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return <AddressForm />;
    default:
      throw new Error('Unknown step');
  }
}

const theme = createTheme();

export default function AdminPage() {
  const [activeStep, setActiveStep] = React.useState(0); 
  const [zilPayCheck, setZilPayCheck] = useState<number>(0);
    const {
        zilPay,
        setZilPay,
        error,
        setError,
        setContract,
        setContractState,
        setCurrentBlockNumber,
    } = ContextContainer.useContainer();

    const getContractState = async () => {
        const contract = await zilPay.contracts.at(
            process.env.REACT_APP_SMART_CONTRACT_ADDRESS
        );
        setContract(contract);
        const contractState = await contract.getState();
        setContractState(contractState);
    };

    useEffect(() => {
        if (error === false) return;
        // @ts-ignore
        const zilPay = window.zilPay;
        if (zilPay === undefined) {
            setError(true);
            return;
        }
        setZilPay(zilPay);
        setError(false);
    }, [error]);

    useEffect(() => {
        if (error && zilPayCheck < 100) {
            setZilPayCheck(zilPayCheck + 1);
            setError(undefined);
            return;
        }
        if (error !== false) return;

        let block: any = undefined;
        let account: any = undefined;

        if (!zilPay.wallet.isConnect) return;
        try {
            block = zilPay.wallet.observableBlock().subscribe((block: any) => {
                const blockNumber = parseInt(block.TxBlock.header.BlockNum);
                setCurrentBlockNumber(blockNumber);
                getContractState();
            });
            account = zilPay.wallet
                .observableAccount()
                .subscribe(() => getContractState());

            getContractState();
        } catch (e) {
            console.log(e);
        }
        return function cleanup() {
            block?.unsubscribe?.();
            account?.unsubscribe?.();
        };
    }, [error]);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  }; 

  const connectZilPay = async () => {
    await zilPay.wallet.connect();
    window.location.reload();
};

  return zilPay.wallet.isConnect ? (  
    
    <ThemeProvider theme={theme}> 
    {/* {!zilPay.wallet.isConnect && (
                    <>
                        <h4 className="text-xs font-semibold text-gray-500 tracking-wide uppercase py-4">
                            ZilPay
                        </h4>
                        <Button variant = "contained" onClick={connectZilPay}> 
                        Connect ZilPay
                        </Button>
                    </>
                )}  */}

      <CssBaseline />
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
            NakomotoLabs
          </Typography>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            New Employee Creation
          </Typography>
          {/* <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper> */} 
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #2001539. We have emailed your order
                  confirmation, and will send you an update when your order has
                  shipped.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    onClick={handleNext}
                  >
                    Mint NFT For Employee
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        <Copyright />
      </Container>
    </ThemeProvider>
  ) : ( 
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
        Lets Connect ZilPay! 
      </Typography>
    </Toolbar> 
    <Button variant="contained" onClick={connectZilPay}> ZilPay Connection </Button>
  </AppBar> 
  
    
);
}