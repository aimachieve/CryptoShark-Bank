import { motion } from 'framer-motion';
// material
import { styled } from '@material-ui/core/styles';
import { Container, Typography, Stack, Grid, Button } from '@material-ui/core';
//
import { varWrapEnter, varFadeInRight, varFadeInLeft } from '../../animate';
import RegisterButton from '../../../layouts/main/RegisterButton'
// ----------------------------------------------------------------------

const RootStyle = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  [theme.breakpoints.up('md')]: {
    top: 0,
    left: 0,
    width: '100%',
    // height: '100vh',
    display: 'flex',
    // position: 'fixed',
    alignItems: 'center'
  }
}));

const ContentStyle = styled((props) => <Stack spacing={5} {...props} />)(({ theme }) => ({
  zIndex: 10,
  margin: 'auto',
  textAlign: 'center',
  position: 'relative',
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    margin: 'unset',
    textAlign: 'left'
  }
}));

// ----------------------------------------------------------------------

export default function LandingExchanges() {
  return (
    <>
      <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
        <Container maxWidth="lg">
          <ContentStyle>
            <Stack spacing={3}>
              <motion.div variants={varFadeInLeft}>
                <Typography variant='h3' sx={{ color: '#1A3E6E', textAlign: 'center' }}>
                  Choose the best among more than 25 leading exchanges
                </Typography>
              </motion.div>
              <motion.div variants={varFadeInLeft}>
                <Typography sx={{ color: '#1A3E6E', fontSize: '20px', fontWeight: '400' }}>
                  GEMAXIS provides a wide range of exchanges at the most competitive currency rates. Check out our partner trading platforms listed below. We regularly update the list of exchanges and add new, more beneficial options.
                </Typography>
              </motion.div>
            </Stack>

            <Grid container spacing={3} alignItems="center">
              <Grid item md={2} xs={6}>
                <Button variant="outlined" sx={{ width: '100%', height: '70px' }}>
                  <img src="/images/binance.webp" alt="binance" />
                </Button>
              </Grid>
              <Grid item md={2} xs={6}>
                <Button variant="outlined" sx={{ width: '100%', height: '70px' }}>
                  <img src="/images/uniswap.png" alt="uniswap" />
                </Button>
              </Grid>
              <Grid item md={2} xs={6}>
                <Button variant="outlined" sx={{ width: '100%', height: '70px' }}>
                  <img src="/images/bybit.svg" alt="bybit" />
                </Button>
              </Grid>
              <Grid item md={2} xs={6}>
                <Button variant="outlined" sx={{ width: '100%', height: '70px' }}>
                  <img src="/images/gemini.svg" alt="gemini" />
                </Button>
              </Grid>
              <Grid item md={2} xs={6}>
                <Button variant="outlined" sx={{ width: '100%', height: '70px' }}>
                  <img src="/images/pancakeswap.jfif" alt="binance" />
                </Button>
              </Grid>
              <Grid item md={2} xs={6}>
                <Button variant="outlined" sx={{ width: '100%', height: '70px' }}>
                  <img src="/images/okx.png" alt="binance" />
                </Button>
              </Grid>
            </Grid>
          </ContentStyle>
        </Container>
      </RootStyle>
    </>
  );
}
