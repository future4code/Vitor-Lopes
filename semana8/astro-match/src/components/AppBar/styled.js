import styled from 'styled-components'

export const AppBarWrapper = styled.div`
	height: 50px;
	border-bottom: 1px solid lightgray;
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
	padding: 0 10px;
	flex-shrink: 0;
`
export const Logo = styled.img`
	height: 100%;
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
`
export const ActionWrapper = styled.div`
  cursor: pointer;
  transition: 0.2s;
  
  :hover {
    transform: scale(0.9);
  }
`
