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

export default function LandingAsset() {
  return (
    <>
      <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
        <Container maxWidth="lg">
          <ContentStyle>
            <Grid container spacing={3} alignItems="center">
              <Grid item md={6} xs={12}>
                <Stack spacing={3}>
                  <motion.div variants={varFadeInLeft}>
                    <Typography variant='h2' sx={{ color: '#09d960' }}>
                      You are the custodian of your asset
                    </Typography>
                  </motion.div>
                </Stack>
              </Grid>
              <Grid item md={6} xs={12}>
                <motion.div variants={varFadeInLeft}>
                  <Typography sx={{ color: '#1A3E6E', fontSize: '20px', fontWeight: '400' }}>
                    With GEMAXIS, you have complete control over your assets. Furthermore, with positive and negative market volatility, we provide a safe way to invest in the market, acting as a hedge against difficult market conditions to keep your assets safe.
                    <br />
                    <br />
                    In addition, we offer our services globally, efficiently, securely, and at a low cost to anyone with an internet connection. All you have to do is sign up and start investing. On the getting started page, you can learn more about how to create an account.
                  </Typography>
                </motion.div>
              </Grid>
            </Grid>
          </ContentStyle>
        </Container>
      </RootStyle>
    </>
  );
}
