import PropTypes from 'prop-types'
import React from 'react'
import {connect} from 'react-redux'
import {clearSwipes} from '../../actions/profiles'
import styled from 'styled-components'

const ClearButton = styled.button`
	position: fixed;
	bottom: 5px;
	right: 5px;
`

function ClearButtonWrapper(props) {
	return <ClearButton onClick={props.clearSwipes}>Limpar swipes e matches</ClearButton>
}

ClearButtonWrapper.propTypes = {
	clearSwipes: PropTypes.func.isRequired
}

function mapDispatchToProps(dispatch) {
	return {
		clearSwipes: () => dispatch(clearSwipes()),
	}
}

export default connect(
	null,
	mapDispatchToProps
)(ClearButtonWrapper)
