import { motion } from 'framer-motion';
// material
import { styled } from '@material-ui/core/styles';
import { Container, Typography, Stack, Grid, Button } from '@material-ui/core';
//
import { varWrapEnter, varFadeInRight, varFadeInLeft, varFadeInUp } from '../../animate';
import RegisterButton from '../../../layouts/main/RegisterButton'
import SpeedIcon from '@material-ui/icons/Speed';
import SecurityIcon from '@material-ui/icons/Security';
import LinkIcon from '@material-ui/icons/Link';
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

export default function LandingIntro() {
  return (
    <>
      <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
        <Container maxWidth="lg">
          <ContentStyle>
            <Grid container spacing={3} alignItems="center">
              <Grid item md={4} xs={12}>
                <motion.div variants={varFadeInLeft}>
                  <Stack spacing={3} alignItems="center">
                    <SpeedIcon sx={{ width: '60px', height: '60px' }} />
                    <Typography variant='h4' sx={{ color: '#1A3E6E' }}>
                      Efficiency
                    </Typography>
                    <Typography sx={{ color: '#1A3E6E', fontSize: '20px', fontWeight: '400', textAlign: 'center' }}>
                      Fastest market response rate any bank can offer it’s almost instantaneous.
                    </Typography>
                  </Stack>
                </motion.div>
              </Grid>
              <Grid item md={4} xs={12}>
                <motion.div variants={varFadeInUp}>
                  <Stack spacing={3} alignItems="center">
                    <SecurityIcon sx={{ width: '60px', height: '60px' }} />
                    <Typography variant='h4' sx={{ color: '#1A3E6E' }}>
                      Security
                    </Typography>
                    <Typography sx={{ color: '#1A3E6E', fontSize: '20px', fontWeight: '400', textAlign: 'center' }}>
                      Your assets are secured cryptographically. With wallets only you can access.
                    </Typography>
                  </Stack>
                </motion.div>
              </Grid>
              <Grid item md={4} xs={12}>
                <motion.div variants={varFadeInRight}>
                  <Stack spacing={3} alignItems="center">
                    <LinkIcon sx={{ width: '60px', height: '60px' }} />
                    <Typography variant='h4' sx={{ color: '#1A3E6E' }}>
                      Encryption
                    </Typography>
                    <Typography sx={{ color: '#1A3E6E', fontSize: '20px', fontWeight: '400', textAlign: 'center' }}>
                      Our systems are scalable and can process any account size you require without transaction delays.
                    </Typography>
                  </Stack>
                </motion.div>
              </Grid>
            </Grid>
          </ContentStyle>
        </Container>
      </RootStyle>
    </>
  );
}
