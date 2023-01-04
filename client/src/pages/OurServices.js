import { motion } from 'framer-motion';
// material
import { styled } from '@material-ui/core/styles';
import { Button, Box, Link, Container, Typography, Stack, Card, CardContent, Grid } from '@material-ui/core';
import { varFadeIn, varFadeInUp, varWrapEnter, varFadeInRight, varFadeInLeft } from '../components/animate';

import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
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
  paddingTop: theme.spacing(20),
  paddingBottom: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    margin: 'unset',
  }
}));

// ----------------------------------------------------------------------

export default function OurServices() {
  return (
    <>
      <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
        <Container maxWidth="lg">
          <ContentStyle>
            <motion.div variants={varFadeInUp}>
              <Stack spacing={3}>
                <Typography variant='h2' sx={{ color: '#54595F' }}>
                  Our Services
                </Typography>
                <Typography sx={{ color: '#7A7A7A' }}>
                  Crytoshark Bank the future
                </Typography>
              </Stack>
            </motion.div>

            <Grid container spacing={3} alignItems="center">
              <Grid item md={6} xs={12}>
                <motion.div variants={varFadeInLeft}>
                  <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                      <Stack spacing={3}>
                        <Typography variant='h3' sx={{ color: '#09d960' }}>
                          Service1
                        </Typography>
                        <Stack spacing={2} direction="row" alignItems="center">
                          <DoubleArrowIcon sx={{ color: "#09d960" }} />
                          <Typography sx={{ color: '#7A7A7A' }}>
                            Service1
                          </Typography>
                        </Stack>
                        <Stack spacing={2} direction="row" alignItems="center">
                          <DoubleArrowIcon sx={{ color: "#09d960" }} />
                          <Typography sx={{ color: '#7A7A7A' }}>
                            Service1
                          </Typography>
                        </Stack>
                        <Stack spacing={2} direction="row" alignItems="center">
                          <DoubleArrowIcon sx={{ color: "#09d960" }} />
                          <Typography sx={{ color: '#7A7A7A' }}>
                            Service1
                          </Typography>
                        </Stack>
                      </Stack>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>

              <Grid item md={6} xs={12}>
                <motion.div variants={varFadeInRight}>
                  <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                      <Stack spacing={3}>
                        <Typography variant='h3' sx={{ color: '#09d960' }}>
                          Service2
                        </Typography>
                        <Stack spacing={2} direction="row" alignItems="center">
                          <DoubleArrowIcon sx={{ color: "#09d960" }} />
                          <Typography sx={{ color: '#7A7A7A' }}>
                            Service2
                          </Typography>
                        </Stack>
                        <Stack spacing={2} direction="row" alignItems="center">
                          <DoubleArrowIcon sx={{ color: "#09d960" }} />
                          <Typography sx={{ color: '#7A7A7A' }}>
                            Service2
                          </Typography>
                        </Stack>
                        <Stack spacing={2} direction="row" alignItems="center">
                          <DoubleArrowIcon sx={{ color: "#09d960" }} />
                          <Typography sx={{ color: '#7A7A7A' }}>
                            Service2
                          </Typography>
                        </Stack>
                      </Stack>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>

              <Grid item md={6} xs={12}>
                <motion.div variants={varFadeInLeft}>
                  <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                      <Stack spacing={3}>
                        <Typography variant='h3' sx={{ color: '#09d960' }}>
                        Service3
                        </Typography>
                        <Stack spacing={2} direction="row" alignItems="center">
                          <DoubleArrowIcon sx={{ color: "#09d960" }} />
                          <Typography sx={{ color: '#7A7A7A' }}>
                            Service3
                          </Typography>
                        </Stack>
                        <Stack spacing={2} direction="row" alignItems="center">
                          <DoubleArrowIcon sx={{ color: "#09d960" }} />
                          <Typography sx={{ color: '#7A7A7A' }}>
                            Service3
                          </Typography>
                        </Stack>
                        <Stack spacing={2} direction="row" alignItems="center">
                          <DoubleArrowIcon sx={{ color: "#09d960" }} />
                          <Typography sx={{ color: '#7A7A7A' }}>
                            Service3
                          </Typography>
                        </Stack>
                      </Stack>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>

              <Grid item md={6} xs={12}>
                <motion.div variants={varFadeInRight}>
                  <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                      <Stack spacing={3}>
                        <Typography variant='h3' sx={{ color: '#09d960' }}>
                        Service4
                        </Typography>
                        <Stack spacing={2} direction="row" alignItems="center">
                          <DoubleArrowIcon sx={{ color: "#09d960" }} />
                          <Typography sx={{ color: '#7A7A7A' }}>
                            Service4
                          </Typography>
                        </Stack>
                        <Stack spacing={2} direction="row" alignItems="center">
                          <DoubleArrowIcon sx={{ color: "#09d960" }} />
                          <Typography sx={{ color: '#7A7A7A' }}>
                            Service4
                          </Typography>
                        </Stack>
                        <Stack spacing={2} direction="row" alignItems="center">
                          <DoubleArrowIcon sx={{ color: "#09d960" }} />
                          <Typography sx={{ color: '#7A7A7A' }}>
                            Service4
                          </Typography>
                        </Stack>
                      </Stack>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            </Grid>
          </ContentStyle>
        </Container>
      </RootStyle>
    </>
  );
}
