import { motion } from 'framer-motion';
// material
import { styled } from '@material-ui/core/styles';
import { Container, Typography, Stack, Grid, Button, Card, CardContent, Divider } from '@material-ui/core';
//
import { varWrapEnter, varFadeInRight, varFadeInLeft, varFadeInUp } from '../../animate';
import RegisterButton from '../../../layouts/main/RegisterButton'
import SpeedIcon from '@material-ui/icons/Speed';
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
  alignItems: 'center',
  position: 'relative',
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    margin: 'unset',
  }
}));

// ----------------------------------------------------------------------

export default function LandingIssues() {
  return (
    <>
      <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
        <Container maxWidth="lg">
          <ContentStyle>
            <motion.div variants={varFadeInUp}>
              <Typography variant='h3' sx={{ color: '#1A3E6E' }}>
                CRYPTOSHARK has resolved most of the major issues faced by the Financial industry today
              </Typography>
            </motion.div>
            <Grid container spacing={5} alignItems="center">
              <Grid item md={4} xs={12}>
                <motion.div variants={varFadeInLeft}>
                  <Card sx={{
                    width: '100%',
                    height: '500px'
                  }}>
                    <CardContent>
                      <Stack spacing={3} alignItems="center">
                        <Typography variant='h5' sx={{ color: '#1A3E6E' }}>
                          Traditional Banking/Investing is complicated
                        </Typography>
                        <Divider variant='large' sx={{ width: '70px', color: '#1A3E6E' }} />
                        <Typography sx={{ color: '#1A3E6E', fontSize: '20px', fontWeight: '400', textAlign: 'center' }}>
                          Whether you are well versed with computers or not so much you will be able to create your CRYPTOSHARK account in under 10 minutes (and potentially get it funded). We have made a few simple steps for you to begin and if you require anymore assistance from a real person just click the chat button and have a live person help you get your way and explain anything else if necessary.
                        </Typography>
                      </Stack>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
              <Grid item md={4} xs={12}>
                <motion.div variants={varFadeInUp}>
                  <Card sx={{
                    width: '100%',
                    height: '500px'
                  }}>
                    <CardContent>
                      <Stack spacing={3} alignItems="center">
                        <Typography variant='h5' sx={{ color: '#1A3E6E' }}>
                          High losses for self cryptocurrency trading
                        </Typography>
                        <Divider variant='large' sx={{ width: '70px', color: '#1A3E6E' }} />
                        <Typography sx={{ color: '#1A3E6E', fontSize: '20px', fontWeight: '400', textAlign: 'center' }}>
                          By being established since 2017 we have had quite a long experience with the young but still volatile crypto markets making quite some historical highs and several lows. We make sure your personal or company investment is making progress on the longer outlook. Making your job simple and easy.
                        </Typography>
                      </Stack>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
              <Grid item md={4} xs={12}>
                <motion.div variants={varFadeInRight}>
                  <Card sx={{
                    width: '100%',
                    height: '500px'
                  }}>
                    <CardContent>
                      <Stack spacing={3} alignItems="center">
                        <Typography variant='h5' sx={{ color: '#1A3E6E' }}>
                          Lack of coverage
                        </Typography>
                        <Divider variant='large' sx={{ width: '70px', color: '#1A3E6E' }} />
                        <Typography sx={{ color: '#1A3E6E', fontSize: '20px', fontWeight: '400', textAlign: 'center' }}>
                          CRYPTOSHARK will soon offer a wide network of branches, however if you are not near a branch because of your location everything necessary can be done online from our website removing unnecessary need to travel, book appointments and wait in lines which additionally also helps the planet.
                        </Typography>
                      </Stack>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            </Grid>
            <Button variant='contained'>Learn More</Button>
          </ContentStyle>
        </Container>
      </RootStyle>
    </>
  );
}
