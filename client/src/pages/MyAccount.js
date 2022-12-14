import React from 'react'
import { motion } from 'framer-motion';
// material
import { styled, useTheme } from '@material-ui/core/styles';
import { Button, Box, Link, Container, Typography, Stack, Select, MenuItem, TextField, Grid, Divider } from '@material-ui/core';
import { varFadeIn, varFadeInUp, varWrapEnter, varFadeInRight, varFadeInLeft } from '../components/animate';

import AppCurrentVisits from './Chart'
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
  position: 'relative',
  justifyContent: 'center',
  paddingTop: theme.spacing(20),
  paddingBottom: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    margin: 'unset',
  }
}));

// ----------------------------------------------------------------------

export default function MyAccount() {
  const theme = useTheme();
  const [reason, setReason] = React.useState('none');

  const handleChange = (event) => {
    setReason(event.target.value);
  };

  return (
    <>
      <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
        <Container maxWidth="lg">
          <ContentStyle>
            <motion.div variants={varFadeInUp}>
              <Typography variant='h2' sx={{ color: '#54595F', textAlign: 'center' }}>
                My Account
              </Typography>
            </motion.div>

            <motion.div variants={varFadeInUp}>
              <AppCurrentVisits
                title="Current Status"
                chartData={[
                  { label: 'Invested', value: 4344 },
                  { label: 'Current owned', value: 5435 },
                ]}
                chartColors={[
                  theme.palette.primary.main,
                  theme.palette.chart.yellow[0],
                  theme.palette.chart.blue[0],
                  theme.palette.chart.violet[0],
                ]}
              />
            </motion.div>
          </ContentStyle>
        </Container>
      </RootStyle>
    </>
  );
}
