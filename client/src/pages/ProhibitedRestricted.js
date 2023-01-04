import { motion } from 'framer-motion';
// material
import { styled } from '@material-ui/core/styles';
import { Button, Box, Link, Container, Typography, Stack, Select, MenuItem, TextField, Grid } from '@material-ui/core';
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
    textAlign: 'left'
  }
}));

// ----------------------------------------------------------------------

export default function ProhibitedRestricted() {
  return (
    <>
      <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
        <Container maxWidth="lg">
          <ContentStyle>
            <motion.div variants={varFadeInUp}>
              <Typography variant='h2' sx={{ color: '#09d960', textAlign: 'center' }}>
                Prohibited and Restricted
              </Typography>
            </motion.div>

            <motion.div variants={varFadeInUp}>
              <Typography sx={{ color: '#7A7A7A', textAlign: 'center' }}>
                xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
              </Typography>
            </motion.div>

            <motion.div variants={varFadeInUp}>
              <Typography sx={{ color: '#7A7A7A', textAlign: 'center' }}>
                xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                <br />
                <br />
                xxxxxxxxxxxxxxxxxxxxxxxx
              </Typography>
            </motion.div>

            <motion.div variants={varFadeInLeft}>
              <Stack spacing={2} direction="row" alignItems="center">
                <DoubleArrowIcon />
                <Typography sx={{ color: '#7A7A7A' }}>
                  xxxxxxxxxxxxxxx
                </Typography>
              </Stack>
            </motion.div>

            <motion.div variants={varFadeInLeft}>
              <Stack spacing={2} direction="row" alignItems="center">
                <DoubleArrowIcon />
                <Typography sx={{ color: '#7A7A7A' }}>
                  xxxxxxxxxxxxxxx
                </Typography>
              </Stack>
            </motion.div>

            <motion.div variants={varFadeInLeft}>
              <Stack spacing={2} direction="row" alignItems="center">
                <DoubleArrowIcon />
                <Typography sx={{ color: '#7A7A7A' }}>
                  xxxxxxxxxxxx
                </Typography>
              </Stack>
            </motion.div>

            <motion.div variants={varFadeInLeft}>
              <Typography sx={{ color: '#7A7A7A' }}>
                xxxxxxxxxxxxxxxxxxx
              </Typography>
            </motion.div>
          </ContentStyle>
        </Container>
      </RootStyle>
    </>
  );
}
