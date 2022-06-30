import { createStitches } from '@stitches/react';

const stitches = createStitches({
  theme: {
    space: {
      1: '5px',
      2: '10px',
      3: '15px',
      4: '20px',
      5: '25px',
    },
  },
});

const globalStyles = stitches.globalCss({
  body: {
    margin: 0
  },
})

globalStyles();


export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = stitches;