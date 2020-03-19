import PropTypes from 'prop-types'
import React, {Component} from 'react'
import UserSwipeCard from '../../components/UserSwipeCard'
import {AppBar} from '../../components/AppBar'
import {ButtonsWrapper, ContentWrapper, SwipeScreenWrapper, MatchIcon, OptionButton} from './styled'
import {connect} from 'react-redux'
import {mdiAccountMultipleCheck} from '@mdi/js'
import {swipeLeft, swipeRight} from '../../components/UserSwipeCard/styled'
import {updateCurrentPage} from '../../actions/route'
import {Loader} from '../../components/Loader'

export class SwipeScreen extends Component {
	constructor(props) {
		super(props)
		this.state = {
			currentAnimation: null,
		}
	}

	componentDidMount() {
		if (!this.props.profileToSwipe && this.props.getProfileToSwipe) {
			this.props.getProfileToSwipe()
		}
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (prevProps.profileToSwipe !== this.props.profileToSwipe) {
			this.setState({currentAnimation: null})
		}
	}

	onChooseOption = (option) => () => {
		let currentAnimation = option === 'dislike' ? swipeRight : swipeLeft

		if (this.state.currentAnimation === null) {
			this.setState({currentAnimation: currentAnimation})
		}

		if (this.props.profileToSwipe) {
			this.props.chooseProfile(this.props.profileToSwipe.id, option === 'like')
		}
	}

	render() {
		const {profileToSwipe, goToMatchScreen} = this.props
		const {currentAnimation} = this.state

		return (
			<SwipeScreenWrapper>
				<AppBar
					rightAction={<MatchIcon
						size={1.5}
						path={mdiAccountMultipleCheck}
						onClick={goToMatchScreen}
					/>}
				/>
				<ContentWrapper>
					{currentAnimation !== null && (<Loader/>)}
					{profileToSwipe ? <UserSwipeCard
						userToSwipe={profileToSwipe}
						animationDirection={currentAnimation}
					/> : (<Loader/>)}
					<ButtonsWrapper>
						<OptionButton onClick={this.onChooseOption('dislike')} option="dislike">X</OptionButton>
						<OptionButton onClick={this.onChooseOption('like')} option="like">♥️</OptionButton>
					</ButtonsWrapper>
				</ContentWrapper>
			</SwipeScreenWrapper>
		)
	}
}

SwipeScreen.propTypes = {
	goToMatchScreen: PropTypes.func.isRequired,
	chooseProfile: PropTypes.func.isRequired,
	getProfileToSwipe: PropTypes.func.isRequired,
	profileToSwipe: PropTypes.object,
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => {
	return {
		goToMatchScreen: () => dispatch(updateCurrentPage('MatchScreen')),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SwipeScreen)
