import { motion } from 'framer-motion';
// material
import { styled } from '@material-ui/core/styles';
import { Container, Typography, Stack, Grid, Button } from '@material-ui/core';
//
import { varWrapEnter, varFadeInRight, varFadeInLeft } from '../../animate';
import RegisterButton from '../../../layouts/main/RegisterButton'
import PrintIcon from '@material-ui/icons/Print';
import VisibilityIcon from '@material-ui/icons/Visibility';
import TaskIcon from '@material-ui/icons/Task';
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

export default function LandingCommunity() {
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
                      JOIN THE
                      <br />
                      UPCOMING
                      <br />
                      <span style={{ color: '#1A3E6E' }}>
                        community
                      </span>
                    </Typography>

                    <Typography sx={{ color: '#1A3E6E', fontSize: '20px', fontWeight: '400' }}>
                      The curious and enthusiastic gather here. <b>GEMAXIS</b> is driven by a knowledge-sharing community that is open to newcomers and experts alike.
                    </Typography>
                  </motion.div>
                </Stack>
              </Grid>
              <Grid item md={6} xs={12}>
                <motion.div variants={varFadeInLeft}>
                  <Stack spacing={5}>
                    <Stack spacing={3} direction="row" alignItems="center">
                      <PrintIcon sx={{ width: '60px', height: '60px', color: '#09d960' }} />
                      <Typography variant='h4' sx={{ color: '#1A3E6E' }}>
                        TRAFFIC IS ENCRYPTED
                      </Typography>
                    </Stack>
                    <Stack spacing={3} direction="row" alignItems="center">
                      <VisibilityIcon sx={{ width: '60px', height: '60px', color: '#09d960' }} />
                      <Typography variant='h4' sx={{ color: '#1A3E6E' }}>
                        TRANSACTIONS ARE MONITORED
                      </Typography>
                    </Stack>
                    <Stack spacing={3} direction="row" alignItems="center">
                      <TaskIcon sx={{ width: '60px', height: '60px', color: '#09d960' }} />
                      <Typography variant='h4' sx={{ color: '#1A3E6E' }}>
                        TESTED BY SECURITY EXPERTS
                      </Typography>
                    </Stack>
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
