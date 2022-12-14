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

export default function LandingLagest() {
  return (
    <>
      <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
        <Container maxWidth="lg">
          <ContentStyle>
            <Grid container spacing={3} alignItems="center">
              <Grid item md={6} xs={12}>
                <Stack spacing={3}>
                  <motion.div variants={varFadeInLeft}>
                    <Typography variant='h3' sx={{ color: '#1A3E6E' }}>
                      The world’s largest and most trusted Bitcoin Bank

                    </Typography>
                  </motion.div>
                  <motion.div variants={varFadeInLeft}>
                    <Typography sx={{ color: '#1A3E6E', fontSize: '20px', fontWeight: '400' }}>
                      In order to give you the best experience possible in one location, we strive to have the most effective and efficient bank. You and your finances will be ahead of the competition in the financial sector and subsequently the rest of the world thanks to our network and experience.
                      <br />
                      <br />
                      Your investment experience alone will help you realize within your first few months how we don't function like the rest of the banking and investing industry.
                    </Typography>
                  </motion.div>
                </Stack>
              </Grid>
              <Grid item md={6} xs={12}>
                <motion.div variants={varFadeInRight}>
                  <img src='/images/hero.png' alt='hero' style={{ width: '100%' }} />
                </motion.div>
              </Grid>
            </Grid>
          </ContentStyle>
        </Container>
      </RootStyle>
    </>
  );
}
