import React from 'react'
import { motion } from 'framer-motion';
// material
import { styled } from '@material-ui/core/styles';
import { Button, Box, Link, Container, Typography, Stack, Select, MenuItem, TextField, Grid, Divider } from '@material-ui/core';
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
  position: 'relative',
  justifyContent: 'center',
  paddingTop: theme.spacing(20),
  paddingBottom: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    margin: 'unset',
  }
}));

// ----------------------------------------------------------------------

export default function ContactUs() {
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
              <Typography variant='h3' sx={{ color: '#54595F', textAlign: 'center' }}>
                Contact us
              </Typography>
            </motion.div>

            <motion.div variants={varFadeInUp}>
              <Stack spacing={2}>
                <Typography sx={{ color: '#7A7A7A' }}>
                  Phone 0000 000 000
                </Typography>
                <Divider />

                <Typography sx={{ color: '#7A7A7A' }}>
                  Email info@gemaxis.com
                </Typography>
                <Divider />

                <Typography sx={{ color: '#7A7A7A' }}>
                  xxxxx, xxxxx, xxx
                </Typography>
                <Divider />
              </Stack>
            </motion.div>

            <motion.div variants={varFadeInUp}>
              <Typography variant='h2' sx={{ color: '#54595F', textAlign: 'center' }}>
                Contact From
              </Typography>
            </motion.div>

            <Grid container spacing={1}>
              <Grid item md={6} xs={12}>
                <motion.div variants={varFadeInLeft}>
                  <TextField
                    label="Name"
                    fullWidth
                  />
                </motion.div>
              </Grid>
              <Grid item md={6} xs={12}>
                <motion.div variants={varFadeInRight}>
                  <TextField
                    select
                    label="Reason for contact"
                    value={reason}
                    onChange={handleChange}
                    fullWidth
                  >
                    <MenuItem value="none">
                      Select reason
                    </MenuItem>
                    <MenuItem value="query">
                      Reason1
                    </MenuItem>
                    <MenuItem value="package">
                      Reason2
                    </MenuItem>
                    <MenuItem value="missed">
                      Reason3
                    </MenuItem>
                    <MenuItem value="other">
                      Other
                    </MenuItem>
                  </TextField>
                </motion.div>
              </Grid>
            </Grid>

            <Grid container spacing={1}>
              <Grid item md={6} xs={12}>
                <motion.div variants={varFadeInLeft}>
                  <TextField
                    label="Telephone"
                    fullWidth
                  />
                </motion.div>
              </Grid>
              <Grid item md={6} xs={12}>
                <motion.div variants={varFadeInRight}>
                  <TextField
                    label="Email"
                    fullWidth
                  />
                </motion.div>
              </Grid>
            </Grid>

            <motion.div variants={varFadeInUp}>
              <TextField
                label="Message"
                fullWidth
                multiline
                rows={4}
              />
            </motion.div>

            <motion.div variants={varFadeInUp}>
              <Button variant='contained' sx={{ bgcolor: '#FDB900', width: '80px', marginLeft: '50% !important' }}>
                Submit
              </Button>
            </motion.div>
          </ContentStyle>
        </Container>
      </RootStyle>
    </>
  );
}
