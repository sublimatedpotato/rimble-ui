import React from 'react';
import styled from 'styled-components';
import { themeGet } from 'styled-system';

import defaultTheme from '../theme';

const sliderTrackStyles = props => `
  box-sizing: border-box;
  appearance: none;
  border: none;
  border-radius: 4px;
  background: ${props.primarycolor};
  height: 4px;
  display: flex;
  align-items: center;`;

const sliderThumbStyles = props => `
  box-sizing: border-box;
  appearance: none;
  border: 1px solid #ccc;
  background: white;
  height: 1.5rem;
  width: 1.5rem;
  border-radius: 100%;
  cursor: grab;

  &:hover {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  }
  &:active {
    cursor: grabbing;
    border-color: ${props.primarycolor};
  }`;

const Slider = styled.input.attrs(props => ({
  type: 'range',
  primarycolor: themeGet('colors.primary', '#000')(props),
}))`
  & {
    appearance: none;
    height: 2rem;
    min-width: 200px;
  }
  &::-webkit-slider-runnable-track {
    ${props => sliderTrackStyles(props)}
  }
  &::-moz-range-track {
    ${props => sliderTrackStyles(props)}
  }
  &::-ms-track {
    ${props => sliderTrackStyles(props)}
  }
  &::-webkit-slider-thumb {
    ${props => sliderThumbStyles(props)}
  }
  &::-moz-range-thumb {
    ${props => sliderThumbStyles(props)}
  }
  &::-ms-thumb {
    ${props => sliderThumbStyles(props)}
  }
`;

Slider.defaultProps = {
  theme: defaultTheme,
  m: 0,
  p: 0,
};

Slider.displayName = 'Slider';

export default Slider;
