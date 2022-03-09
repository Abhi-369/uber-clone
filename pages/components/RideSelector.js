import React, { useState, useEffect } from 'react'
import { carList } from '../data/carList'
import tw from "tailwind-styled-components"

const RideSelector = ({ dropoffCoordinates, pickupCoordinates }) => {

    const [rideDuration, setRideDuration] = useState(0)

    useEffect(() => {
        rideDuration = fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]}, ${pickupCoordinates[1]}; ${dropoffCoordinates[0]}, ${dropoffCoordinates[1]}?access_token=pk.eyJ1IjoiYWJoaS0wODciLCJhIjoiY2t2MzhjYXdtMGMzbTJybHU5cXlvMjRuNSJ9.aBOHiLR-C3u9gavWM4g0EQ`)
            .then(res => res.json())
            .then(data => {
                setRideDuration(data.routes[0].duration / 100)
            })

    }, [pickupCoordinates, dropoffCoordinates])

    return (
        <Wrapper>
            <Title>Choose a ride, or swipe up for more</Title>

            <CarList>
                {carList.map((car, index) => (
                    <Car key={index}>
                        <CarImage src={car.imgUrl} />
                        <CarDetails>
                            <Service>{car.service}</Service>
                            <Time>5 min away</Time>
                        </CarDetails>
                        <Price>{'$' + (rideDuration * car.multiplier).toFixed(2)}</Price>
                    </Car>
                ))}
            </CarList>
        </Wrapper>
    )
}

export default RideSelector

const CarImage = tw.img`
h-24 mr-4
`
const Car = tw.div`
flex items-center p-4
`
const CarDetails = tw.div`
flex-1
`
const Service = tw.div`
font-medium
`
const Time = tw.div`
text-xs text-blue-500 
`
const Price = tw.div`
text-sm
`
const Wrapper = tw.div`
flex-1 bg-yellow-100 overflow-y-auto flex flex-col
`
const Title = tw.div`
text-gray-500 text-center text-xs py-2 border-b
`
const CarList = tw.div`
overflow-y-auto
`