import { styled } from '../../styles/stitches.config';

import { Button, Tabs } from "pooldata-components";

const App = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
});

const Field = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$space$2',
  marginTop: '$space$4',

  '&:first-child': {
    marginTop: 0
  }
});

const TabContent = styled(Tabs.Content, {
  paddingTop: '$space$4',
});

const TabButton = styled(Button, {
  display: 'flex',
  width: '100%',
  marginTop: '$space$5',
  boxSizing: 'border-box'
});



export { App, Field, TabContent, TabButton };