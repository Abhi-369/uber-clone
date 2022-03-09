import React, { useEffect, useState } from 'react';
import tw from "tailwind-styled-components"
import Map from './components/Map'
import Link from 'next/link';
import { useRouter } from 'next/router'
import RideSelector from './components/RideSelector'

const Confirm = () => {

    const router = useRouter()
    const { pickup, dropoff } = router.query

    const [pickupCoordinates, setPickupCoordinates] = useState([0, 0])
    const [dropoffCoordinates, setDropoffCoordinates] = useState([0, 0])

    const getPickupCoordinates = (pickup) => {
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` + new URLSearchParams({ access_token: "pk.eyJ1IjoiYWJoaS0wODciLCJhIjoiY2t2MzhjYXdtMGMzbTJybHU5cXlvMjRuNSJ9.aBOHiLR-C3u9gavWM4g0EQ", limit: 1 }))
            .then(response => response.json())
            .then(data => { setPickupCoordinates(data.features[0].center) })
    }

    const getDropoffCordinates = (dropoff) => {
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` + new URLSearchParams({ access_token: "pk.eyJ1IjoiYWJoaS0wODciLCJhIjoiY2t2MzhjYXdtMGMzbTJybHU5cXlvMjRuNSJ9.aBOHiLR-C3u9gavWM4g0EQ", limit: 1 }))
            .then(response => response.json())
            .then(data => { setDropoffCoordinates(data.features[0].center) })
    }

    useEffect(() => {
        getPickupCoordinates(pickup);
        getDropoffCordinates(dropoff);
    }, [pickup, dropoff])

    return (
        <Wrapper>
            <ButtonContainer>
                <Link href="/search">
                    <BackButton src="https://png.pngitem.com/pimgs/s/78-780766_previous-button-clipart-arrow-back-arrow-png-transparent.png" />
                </Link>
            </ButtonContainer>
            <Map pickupCoordinates={pickupCoordinates} dropoffCoordinates={dropoffCoordinates} />
            <RideContainer>

                <RideSelector pickupCoordinates={pickupCoordinates} dropoffCoordinates={dropoffCoordinates} />


                <ConfirmButtonContainer>
                    <ConfirmButton>
                        Confirm Uberx
                    </ConfirmButton>
                </ConfirmButtonContainer>

            </RideContainer>
        </Wrapper>

    )
}

export default Confirm

const Wrapper = tw.div`
h-screen flex flex-col
`
const RideContainer = tw.div`
flex flex-1 flex-col h-1/2
`

const ConfirmButtonContainer = tw.div`
border-t
 `

const ConfirmButton = tw.div`
bg-black text-white text-center p-2 m-2 text-xl
`
const ButtonContainer = tw.div`
absolute z-10 bg-white rounded-full m-2 cursor-pointer
`
const BackButton = tw.img`
h-12 p-2
`