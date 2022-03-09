import React, { useEffect } from 'react'
import tw from "tailwind-styled-components"
import mapboxgl from '!mapbox-gl';


mapboxgl.accessToken = 'pk.eyJ1IjoiYWJoaS0wODciLCJhIjoiY2t2MzhjYXdtMGMzbTJybHU5cXlvMjRuNSJ9.aBOHiLR-C3u9gavWM4g0EQ';

const Map = (props) => {

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: "map",
            style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
            center: [-99.29011, 39.39172],
            zoom: 3,
        });
        if (props.pickupCoordinates) {
            addToMap(map, props.pickupCoordinates)
        }
        if (props.dropoffCoordinates) {
            addToMap(map, props.dropoffCoordinates)
        }

        if (props.dropoffCoordinates && props.pickupCoordinates) {
            map.fitBounds([props.dropoffCoordinates, props.pickupCoordinates], {padding: 60})
        }

    }, [props.dropoffCoordinates, props.pickupCoordinates]);


    const addToMap = (map, coordinates) => {
        const marker1 = new mapboxgl.Marker()
            .setLngLat(coordinates)
            .addTo(map);
    }

    return (
        <Wrapper id='map'>

        </Wrapper>
    )
}

export default Map

const Wrapper = tw.div`
flex-1
`