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
              <Typography variant='h3' sx={{ color: '#09d960' }}>
                GEMAXIS has resolved most of the major issues faced by the Financial industry today
              </Typography>
            </motion.div>
            <motion.div variants={varFadeInUp}>
              <Typography sx={{ color: '#1A3E6E', fontSize: '20px', fontWeight: '400', textAlign: 'left' }}>
                GEMAXIS provides a wide range of exchanges at the most competitive currency rates. Check out our partner trading platforms listed below. We regularly update the list of exchanges and add new, more beneficial options.
                <br />
                <br />
                under this we least the logos(like on swapnex) of :
                Binance
                Okx
                Bybit
                Uniswap
                Gemini
                Pancakeswap
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
                        <Typography variant='h5' sx={{ color: '#09d960' }}>
                          Traditional Banking/Investing is complicated
                        </Typography>
                        <Divider variant='large' sx={{ width: '70px', color: '#1A3E6E' }} />
                        <Typography sx={{ color: '#1A3E6E', fontSize: '20px', fontWeight: '400', textAlign: 'center' }}>
                          No matter how familiar you are with computers, it won't take you more than ten minutes to set up a GEMAXIS account (and potentially get it funded). We've provided a few easy steps for you to follow, but if you need more help from a live person, just click the chat button. A live person will then help you get where you're going and, if necessary, explain anything else.
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
                        <Typography variant='h5' sx={{ color: '#09d960' }}>
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
                        <Typography variant='h5' sx={{ color: '#09d960' }}>
                          Lack of coverage
                        </Typography>
                        <Divider variant='large' sx={{ width: '70px', color: '#1A3E6E' }} />
                        <Typography sx={{ color: '#1A3E6E', fontSize: '20px', fontWeight: '400', textAlign: 'center' }}>
                          Although GEMAXIS will soon have a large network of locations, if you are unable to visit one because of your location, you can complete all of the necessary tasks online from our website, saving you time and money while also reducing your impact on the environment.
                        </Typography>
                      </Stack>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            </Grid>
            {/* <Button variant='contained'>Learn More</Button> */}
          </ContentStyle>
        </Container>
      </RootStyle>
    </>
  );
}
