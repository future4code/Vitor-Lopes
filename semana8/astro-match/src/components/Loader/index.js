import React from 'react'
import styled, { keyframes } from 'styled-components'

const beatingAnimation = keyframes`
  0% {
    transform: scale(0.95);
  }
  5% {
    transform: scale(1.1);
  }
  39% {
    transform: scale(0.85);
  }
  45% {
    transform: scale(1);
  }
  60% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(0.9);
  }
`

const LoaderWrapper = styled.div`
  display: inline-block;
  position: absolute;
  bottom: 60%;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  width: 64px;
  height: 64px;
  transform: rotate(45deg);
  z-index: 1;
`

const LoaderContent = styled.div`
  top: 23px;
  left: 19px;
  position: absolute;
  width: 26px;
  height: 26px;
  background: #4AA397;
  animation: ${beatingAnimation} 1.2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
  
  ::before {
    left: -17px;
    border-radius: 50% 0 0 50%;
  }
  
  ::after {
    top: -17px;
    border-radius: 50% 50% 0 0;
  }
  
  :after, :before {
    content: " ";
    position: absolute;
    display: block;
    width: 26px;
    height: 26px;
    background: #753192;
  }
`

export const Loader = () => (
  <LoaderWrapper>
    <LoaderContent/>
  </LoaderWrapper>
)

