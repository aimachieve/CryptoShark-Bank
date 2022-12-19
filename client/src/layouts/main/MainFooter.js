import { Icon } from '@iconify/react';
import googleFill from '@iconify/icons-eva/google-fill';
import twitterFill from '@iconify/icons-eva/twitter-fill';
import facebookFill from '@iconify/icons-eva/facebook-fill';
import linkedinFill from '@iconify/icons-eva/linkedin-fill';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@material-ui/core/styles';
import { Grid, Link, Divider, Container, Typography, Button, Stack } from '@material-ui/core';
//
import Logo from 'components/Logo'
// ----------------------------------------------------------------------

const SOCIALS = [
  { name: 'FaceBook', icon: facebookFill },
  { name: 'Google', icon: googleFill },
  { name: 'Linkedin', icon: linkedinFill },
  { name: 'Twitter', icon: twitterFill }
];

const LINKS = [
  {
    headline: 'CONTACT US',
    children: [
      { name: 'xxxx, xxxx, xx, xxxx', href: '#' },
      { name: 'Phone: 0000 000 000', href: 'tel:0000 000 000' },
      { name: 'Email: info@gemaxis.com', href: 'mailto:info@gemaxis.com' }
    ]
  },
  {
    headline: 'INFORMATION',
    children: [
      { name: 'About us', href: 'about-us' },
      { name: 'Contact us', href: 'contact-us' },
      { name: 'Terms & conditions', href: 'terms-conditions' }
    ]
  },
  {
    headline: 'LET US HELP YOU',
    children: [
      { name: 'Prohibited And Restricted', href: 'prohibited-restricted' },
      { name: 'Privacy Policy', href: 'privacy-policy' }
    ]
  }
];

const RootStyle = styled('div')(({ theme }) => ({
  position: 'relative',
  background: 'url(/images/footer-bg.png)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100% 100%'
}));

// ----------------------------------------------------------------------

export default function MainFooter() {
  return (
    <RootStyle>
      <Divider />
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Grid
          container
          justifyContent={{ xs: 'center', md: 'space-between' }}
          sx={{ textAlign: { xs: 'center', md: 'center' } }}
          spacing={5}
        >
          <Grid item xs={12} md={4.5} justifyContent="center" alignItems={'center'}>
            <Stack spacing={2}>
              <Logo sx={{ width: '130px', margin: 'auto' }} />
              <Typography
                variant="overline"
                color="white"
                sx={{
                  display: 'block',
                  fontWeight: 500,
                  fontSize: 16,
                  lineHeight: '24px',
                  fontFamily: 'Poppins',
                  textAlign: 'left'
                }}
              >
                We understand the importance of the security of clients' data and pay much attention to it. We regularly update the platform, as well as the protection measures for ensuring the security and safety of both user data and funds. By registering on this website, you become our client and, therefore, agree with our Terms and Conditions and Privacy Policy statements. Also, once you start using Gemaxis products and services, you confirm that you realize and agree with all the risks that cryptocurrency sphere involves.
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md={7.5}>
            <Grid container>
              {LINKS.map((list, index) => {
                const { headline, children } = list;
                return (
                  <Grid item xs={12} md={4} justifyContent="space-between" key={index}>
                    <Stack key={headline} spacing={2}>
                      <Typography
                        variant="overline"
                        color="white"
                        sx={{ fontFamily: 'Poppins', fontSize: 25, lineHeight: '30px', fontWeight: 600 }}
                      >
                        {headline}
                      </Typography>
                      {children.map((link) => (
                        <Link
                          to={link.href}
                          key={link.name}
                          color="white"
                          component={RouterLink}
                          sx={{
                            display: 'block',
                            fontWeight: 500,
                            fontSize: 16,
                            lineHeight: '24px',
                            fontFamily: 'Poppins'
                          }}
                        >
                          {link.name}
                        </Link>
                      ))}
                    </Stack>
                  </Grid>
                );
              })}
            </Grid>
            <Typography
              color="white"
              sx={{ fontFamily: 'Poppins', fontSize: 25, lineHeight: '30px', fontWeight: 600, marginTop: '30px', textAlign: 'center' }}
            >
              Payment Currency
            </Typography>
            <Stack direction="row" spacing={3} mt={3} alignItems="center">
              <img src="/images/btc.png" alt='btc' style={{
                width: '150px',
                height: '40px'
                // opacity: 0.5,
                // mixBlendMode: 'luminosity',
              }} />
              <img src="/images/eth.png" alt='eth' style={{
                width: '90px',
                height: '70px'
                // opacity: 0.5,
                // mixBlendMode: 'luminosity',
              }} />
              <img src="/images/ripple.png" alt='ethereum' style={{
                width: '150px',
                height: '40px'
                // opacity: 0.5,
                // mixBlendMode: 'luminosity',
              }} />
            </Stack>
          </Grid>
        </Grid>
      </Container>

      <Divider sx={{ border: '2px solid #ffffff' }} />

      <Grid container spacing={5} alignItems="center">
        <Grid item md={7} xs={12}>
          <Typography
            color="white"
            sx={{
              py: 4,
              fontSize: 16,
              fontWeight: 500,
              lineHeight: '24px',
              textAlign: 'right',
              fontFamily: 'Poppins'
            }}
          >
            Copyright @ 2022 GEMAXIS. All Right reserved
          </Typography>
        </Grid>

        <Grid item md={5} xs={12}>
          <Stack direction="row" spacing={2} alignItems="center" justifyContent="flex-start">
            {
              SOCIALS.map((social, index) => {
                return <Icon icon={social.icon} key={index} style={{ width: '30px', height: '30px', cursor: 'pointer' }} />
              })
            }
          </Stack>
        </Grid>
      </Grid>
    </RootStyle>
  );
}
