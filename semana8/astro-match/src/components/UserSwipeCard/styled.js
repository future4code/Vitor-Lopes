import styled, { keyframes } from 'styled-components'

// CSS Animations for the SwipeCard
export const swipeRight = keyframes`
  from {
    opacity: 1;
	  transform: translate(0) rotate(0);
  }

  to {
    opacity: 0;
	  transform: translate(-200px) rotate(-20deg);
  }
`;
export const swipeLeft = keyframes`
  from {
    opacity: 1;
	  transform: translate(0) rotate(0);
  }

  to {
    opacity: 0;
	  transform: translate(200px) rotate(20deg);
  }
`;

export const UserCardWrapper = styled.div`
	box-shadow: 0 2px 10px 0 rgba(117,117,117,0.77);
	position: relative;
	border-radius: 5px;
	overflow: hidden;
	transition: 0.5s;
	height: 430px;
	animation: ${props => props.animation} 0.5s forwards;
	display: flex;
	align-items: center;
`

export const BlurredBackground = styled.div`
	${({photo}) => {
		if(photo)
		return `
					background-image: url(${photo});
					filter: blur(30px);
					height: 100%;
					width: 100%;
					position: absolute;
				`
	}}
`

export const ProfilePicture = styled.img`
  width: 100%;
  display: block;
  z-index: 1;
`

export const InfoWrapper = styled.div`
	height: 30%;
	position: absolute;
  bottom: 0;
	width: 100%;
	background-image: linear-gradient(to top, rgba(0,0,0,0.5), transparent);
	color: white;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	padding: 15px;
	z-index: 2;
`

export const TitleWrapper = styled.div`
  display: flex;
  align-items: baseline;
`

export const UserName = styled.div`
	font-weight: bold;
	font-size: 24px;
`

export const UserAge = styled.div`
  margin-left: 10px;
	font-size: 20px;
`
