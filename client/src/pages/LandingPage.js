// material
import { styled } from '@material-ui/core/styles';
// components
import Page from '../components/Page';
import {
  LandingHero,
  LandingAsset,
  LandingIntro,
  LandingExp,
  LandingLagest,
  LandingIssues,
  LandingFaqs
} from '../components/_external-pages/landing';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)({
  height: '100%'
});

const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.default
}));

// ----------------------------------------------------------------------

export default function LandingPage() {
  return (
    <RootStyle title="Cryptoshark - Bank" id="move_top">
      <LandingHero />
      <LandingAsset />
      <LandingIntro />
      <LandingExp />
      <LandingLagest />
      <LandingIssues />
      <LandingFaqs />
    </RootStyle>
  );
}
