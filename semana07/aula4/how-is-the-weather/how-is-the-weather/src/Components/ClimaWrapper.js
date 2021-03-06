import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const ComponentWrapper = styled.div`
  border: 2px solid grey;
  border-radius: 10px;
  height: 250px;
  width: 800px;
  display: grid;
  grid-template-rows: repeat(2, 80%,20% ); 
  font-size: 15px;
  background-color: #fcfcfb;
`

const SuperiorWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr );
`
const InferiorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  grid-template-columns: repeat(5, 1fr );
  justify-content: center;
  align-items: center;
`
const DivCidade = styled.div`
  font-size: 20px;
  font-weight: bold;
`

const CardDayWeather = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  align-content: center;
  justify-content: flex-end;
`

const WeatherIcon = styled.img`
  max-width: 40%;
  align-self: center;
  justify-self: flex-start;
  padding: 20px 0;
`
const Day = styled.h3`
  align-self: center;
  padding: 0;
  margin: 0;
  position: relative;
  top: -10px;
`

const baseURL = "https://www.metaweather.com/api/location/455827/"
const imageBaseURL = 'https://www.metaweather.com/static/img/weather/'


export default class ClimaWrapper extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: undefined,
      errorMessage: undefined,
      localWeather: undefined,
    }
  }
  componentDidMount() {
    this.showLocalWeather()
  }

  showLocalWeather = () => {
    const localWeather = axios.get(`${baseURL}`)

    localWeather.then((response) => {
      console.log(response.data)
      this.setState({ localWeather: response.data })
    }).catch((error) => {
      console.log(error)
    })
  }

  render() {

    if (this.state.localWeather === undefined) {
      return (<h1>Carregando...</h1>)
    }

    return (
      <ComponentWrapper>
        <SuperiorWrapper>
          <CardDayWeather>
            <Day>{`${this.state.localWeather.consolidated_weather[0].applicable_date}`}</Day>
            <WeatherIcon src={`${imageBaseURL}${this.state.localWeather.consolidated_weather[0].weather_state_abbr}.svg`} />
            <span>{`Max: ${parseInt(this.state.localWeather.consolidated_weather[0].max_temp)}ºC`}</span>
            <span>{`Min: ${parseInt(this.state.localWeather.consolidated_weather[0].min_temp)}ºC`}</span>
            <span>{`${this.state.localWeather.consolidated_weather[0].weather_state_name}`}</span>

          </CardDayWeather>
          <CardDayWeather>
            <Day>{`${this.state.localWeather.consolidated_weather[1].applicable_date}`}</Day>
            <WeatherIcon src={`${imageBaseURL}${this.state.localWeather.consolidated_weather[1].weather_state_abbr}.svg`} />
            <span>{`Max: ${parseInt(this.state.localWeather.consolidated_weather[1].max_temp)}ºC`}</span>
            <span>{`Min: ${parseInt(this.state.localWeather.consolidated_weather[1].min_temp)}ºC`}</span>
            <span>{`${this.state.localWeather.consolidated_weather[1].weather_state_name}`}</span>

          </CardDayWeather>
          <CardDayWeather>
            <Day>{`${this.state.localWeather.consolidated_weather[2].applicable_date}`}</Day>
            <WeatherIcon src={`${imageBaseURL}${this.state.localWeather.consolidated_weather[2].weather_state_abbr}.svg`} />
            <span>{`Max: ${parseInt(this.state.localWeather.consolidated_weather[2].max_temp)}ºC`}</span>
            <span>{`Min: ${parseInt(this.state.localWeather.consolidated_weather[2].min_temp)}ºC`}</span>
            <span>{`${this.state.localWeather.consolidated_weather[2].weather_state_name}`}</span>

          </CardDayWeather>
          <CardDayWeather>
            <Day>{`${this.state.localWeather.consolidated_weather[3].applicable_date}`}</Day>
            <WeatherIcon src={`${imageBaseURL}${this.state.localWeather.consolidated_weather[3].weather_state_abbr}.svg`} />
            <span>{`Max :${parseInt(this.state.localWeather.consolidated_weather[3].max_temp)}ºC`}</span>
            <span>{`Min: ${parseInt(this.state.localWeather.consolidated_weather[3].min_temp)}ºC`}</span>
            <span>{`${this.state.localWeather.consolidated_weather[3].weather_state_name}`}</span>

          </CardDayWeather>
          <CardDayWeather>
            <Day>{`${this.state.localWeather.consolidated_weather[4].applicable_date}`}</Day>
            <WeatherIcon src={`${imageBaseURL}${this.state.localWeather.consolidated_weather[4].weather_state_abbr}.svg`} />
            <span>{`Max: ${parseInt(this.state.localWeather.consolidated_weather[4].max_temp)}ºC`}</span>
            <span>{`Min: ${parseInt(this.state.localWeather.consolidated_weather[4].min_temp)}ºC`}</span>
            <span>{`${this.state.localWeather.consolidated_weather[4].weather_state_name}`}</span>

          </CardDayWeather>
        </SuperiorWrapper>
        {/* <div><hr></hr></div> */}
        <InferiorWrapper>
          <DivCidade>{`${this.state.localWeather.title}`}</DivCidade>
        </InferiorWrapper>

      </ComponentWrapper>
    )
  }
}
