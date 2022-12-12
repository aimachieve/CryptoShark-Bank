import { motion } from 'framer-motion';
// material
import { styled } from '@material-ui/core/styles';
import { Button, Box, Link, Container, Typography, Stack, Select, MenuItem, TextField, Grid } from '@material-ui/core';
import { varFadeIn, varFadeInUp, varWrapEnter, varFadeInRight, varFadeInLeft } from '../components/animate';
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
  paddingBottom: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    margin: 'unset',
    textAlign: 'left'
  }
}));

// ----------------------------------------------------------------------

export default function AboutUs() {
  return (
    <>
      <RootStyle title="About Us" initial="initial" animate="animate" variants={varWrapEnter}>
        <Container maxWidth="lg">
          <ContentStyle>
            <Grid container spacing={3} alignItems="center">
              <Grid item md={6} xs={12}>
                <motion.div variants={varFadeInRight}>
                  <img src='/images/logo.png' alt='logo' style={{ height: '100%' }} />
                </motion.div>
              </Grid>
              <Grid item md={6} xs={12}>
                <Stack spacing={3}>
                  <motion.div variants={varFadeInLeft}>
                    <Typography variant='h2' sx={{ color: '#6EC1E4', textDecoration: 'true' }}>
                      About Us
                    </Typography>
                  </motion.div>
                  <motion.div variants={varFadeInLeft}>
                    <Stack direction="row" alignItems="center" spacing={2}>
                      <Typography sx={{ color: '#7A7A7A' }}>
                      CryptoShark bank the future.
                      </Typography>
                    </Stack>
                  </motion.div>
                </Stack>
              </Grid>
            </Grid>
          </ContentStyle>
        </Container>
      </RootStyle>
    </>
  );
}
