import styled from 'styled-components'
import Icon from '@mdi/react'

export const OptionButton = styled.button`
   border-radius: 50%;
   width: 80px;
   height: 80px;
   border: 1px solid ${(props) => props.option === 'like' ? 'green' : 'red'};
   color: ${(props) => props.option === 'like' ? 'green' : 'red'};
   font-size: 50px;
   transform: scale(0.7);
   transition: 0.2s;
   position: relative;
   box-shadow: 0 0 15px 0 rgba(205, 205, 205, 0.73);
   overflow: hidden;
   
   :focus {
   		outline: none;
   }
   
   :hover {
    background-color: ${props => props.option === 'like' ? 'green' : 'red'};
    color: white;
    transform: scale(0.8)
   }
   
   :active {
			:before {
				height: 100%;
				width: 100%;
				top: 0;
    		left: 0;
    		position: absolute;
    		background-color: rgba(0, 0, 0, 0.5);
    		content: "";
			}
   }
`

export const ContentWrapper = styled.div`
	padding: 20px;
	padding-bottom: 0;
	display: flex;
	flex-direction: column;
	flex: 1;
	justify-content: flex-end;
`

export const SwipeScreenWrapper = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
`


export const MatchIcon = styled(Icon)`
	display: block;
	fill: #753192;
`

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px 0;
`
