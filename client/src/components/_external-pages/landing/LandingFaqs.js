import React from 'react'
import { motion } from 'framer-motion';
// material
import { styled } from '@material-ui/core/styles';
import { Container, Typography, Stack, Grid, Button } from '@material-ui/core';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
//
import { varWrapEnter, varFadeInRight, varFadeInLeft, varFadeInUp } from '../../animate';
import ArrowForwardIosSharpIcon from '@material-ui/icons/ArrowForwardIosSharp';
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

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

// ----------------------------------------------------------------------

export default function LandingFaqs() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
      <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
        <Container maxWidth="lg">
          <ContentStyle>
            <motion.div variants={varFadeInUp}>
              <Typography variant='h3' sx={{ color: '#1A3E6E', textAlign: 'center' }}>
                FAQs
              </Typography>
            </motion.div>
            
            <Grid container spacing={3} alignItems="center">
              <Grid item md={6} xs={12}>
                <Stack spacing={3}>
                  <motion.div variants={varFadeInLeft}>
                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                      <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                        <Typography>Does the fund charge any fees?</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          The fund charges a 20% profit fee, the only way we can make money is if you profit from your investment.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                      <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                        <Typography>What is the withdrawal process time?</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          After you have submitted a withdrawal, it will take 24 hours for the fund to liquidate your positions and send you your BTC.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                      <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                        <Typography>What are your average returns?</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          We give no guarantees as with investing you may make a profit or a loss. With our past returns (which aren’t guarantees) we have been averaging around a little over 4% a month per your investment asset BTC (bitcoin). You may also check the Fiat returns on our monthly reports on the Investor Relations page.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </motion.div>
                </Stack>
              </Grid>
              <Grid item md={6} xs={12}>
                <motion.div variants={varFadeInRight}>
                  <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                    <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                      <Typography>How is performance distributed for me?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        So to simply put it, all profit gets split into the ratio 2:8 or if you prefer percentages it would mean 20% and 80%. The (2), (20%) is for AMFEIX Bank, we take it as profit. The (8), (80%) of profit which is the larger portion is yours.

                        If your account was created from a referral link AMFEIX shares 10% of your profit to the person who you got the link from. This does not mean we deduct it from your balance rather it is paid by us. On the other hand losses are bared on the clients account. Please note all accounts are updated every 24 hours.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                    <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
                      <Typography>What is the minimum investment amount?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Minimum investment on the website is 0.1 BTC, however if you are visiting an AMFEIX Brokers office the minimum investment amount will be far higher. Note it is not necessary to visit us if you are investing or have invested. Due to the increased demand of appointments, only larger clients are handled.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                    <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
                      <Typography>What is the minimum investment period?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        In AMFEIX we believe in freedom of will and thus we have set no minimum investment period, which means you can exit the fund at any given time.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </motion.div>
              </Grid>
            </Grid>
          </ContentStyle>
        </Container>
      </RootStyle>
    </>
  );
}
