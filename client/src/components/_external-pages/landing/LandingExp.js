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

export default function LandingExp() {
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
                      THE GEMAXIS EXPLANATION
                    </Typography>
                  </motion.div>
                  <motion.div variants={varFadeInLeft}>
                    <Typography sx={{ color: '#1A3E6E', fontSize: '20px', fontWeight: '400' }}>
                      We know this might be a lot to take in especially for someone new to the industry, whether you are making a decision for your company or for your own personal self we have created a simple video to break it down for anyone to understand.
                    </Typography>
                  </motion.div>
                </Stack>
              </Grid>
              <Grid item md={6} xs={12}>
                <motion.div variants={varFadeInRight}>
                  <iframe className="elementor-video-iframe" style={{ width: "100%", height: "400px" }} allowFullScreen="" title="youtube Video Player" src="https://web.archive.org/web/20200708132632if_/https://www.youtube.com/embed/8DIa3qq8eW8?feature=oembed&amp;start&amp;end&amp;wmode=opaque&amp;loop=0&amp;controls=1&amp;mute=0&amp;rel=0&amp;modestbranding=0"></iframe>
                </motion.div>
              </Grid>
            </Grid>
          </ContentStyle>
        </Container>
      </RootStyle>
    </>
  );
}
