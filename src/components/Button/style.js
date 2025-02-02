import styled from 'styled-components'
import { colors } from '../../assets/styles/colors'

export const Button = styled.button`
  display: block;
  cursor: pointer;
  height: 60px;
  width: 100%;
  border-radius: 3px;
  background-color: ${colors.button.main};
  box-shadow: inset 0 -3px 0 0 ${colors.button.hover}, 0 2px 4px 0 rgba(0, 0, 0, 0.25);
  color: ${colors.button.text};
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 0.5px;
  line-height: 24px;
  text-align: center;
  text-transform: uppercase;
  padding: 18px 0.94px;
  pointer-events: auto;

  &:hover {
    background-color: ${colors.button.hover};
  }

  &:disabled {
    background-color: ${colors.button.disabled};
    box-shadow: inset 0 -3px 0 0 ${colors.button.shadow}, 0 2px 6px 0 rgba(0, 0, 0, 0.35);
    pointer-events: none;
  }
`
