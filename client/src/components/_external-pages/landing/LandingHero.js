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
  paddingTop: theme.spacing(25),
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    margin: 'unset',
    textAlign: 'left'
  }
}));

// ----------------------------------------------------------------------

export default function LandingHero() {
  return (
    <>
      <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
        <Container maxWidth="lg">
          <ContentStyle>
            <Grid container spacing={3} alignItems="center">
              <Grid item md={4} xs={12}>
                <Stack spacing={3}>
                  <motion.div variants={varFadeInLeft}>
                    <Typography variant='h2' sx={{ color: '#1A3E6E' }}>
                      GEMAXIS Bank the future
                    </Typography>
                  </motion.div>
                  <motion.div variants={varFadeInLeft}>
                    <Typography sx={{ color: '#1A3E6E', fontSize: '20px', fontWeight: '400' }}>
                      A full-service, secure investment bank based on decentralized encrypted ledgers.
                      From Fiat to Bitcoin to GEMAXIS.
                    </Typography>
                  </motion.div>

                  <motion.div variants={varFadeInLeft}>
                    <Stack direction="row" alignItems="center" spacing={2}>
                      <RegisterButton />
                      {/* <Button variant="outlined"> Read Whitepaper </Button> */}
                    </Stack>
                  </motion.div>
                </Stack>
              </Grid>
              <Grid item md={8} xs={12}>
                <motion.div variants={varFadeInRight}>
                  <img src='/images/world-map.svg' alt='world-map' style={{ width: '100%' }} />
                </motion.div>
              </Grid>
            </Grid>
          </ContentStyle>
        </Container>
      </RootStyle>
    </>
  );
}
