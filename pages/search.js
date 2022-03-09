import React, { useState } from 'react'
import tw from "tailwind-styled-components"
import Link from 'next/link';

const search = () => {

    const [pickup, setPickup] = useState("")
    const [dropoff, setDropoff] = useState("")

    return (
        <Wrapper>
            <ButtonContainer>
                <Link href="/">
                    <BackButton src="https://png.pngitem.com/pimgs/s/78-780766_previous-button-clipart-arrow-back-arrow-png-transparent.png" />
                </Link>
            </ButtonContainer>

            <InputContainer>
                <FromToIcons>
                    <Circle src="https://pngimg.com/uploads/circle/circle_PNG17.png" />
                    <Line src="https://e7.pngegg.com/pngimages/210/481/png-clipart-rectangle-line-vertical-line-angle-white-thumbnail.png" />
                    <Square src="https://pngimg.com/uploads/square/square_PNG97.png" />
                </FromToIcons>
                <InputBoxes>
                    <Input placeholder="Enter pickup location" onChange={(e) => setPickup(e.target.value)} value={pickup} />
                    <Input placeholder="Where to?" onChange={(e) => setDropoff(e.target.value)} value={dropoff} />
                </InputBoxes>
                <PlusIcon src="https://pngimg.com/uploads/plus/small/plus_PNG3.png" />
            </InputContainer>
            <SavedPlaces>
                <StarIcon src="https://pngimg.com/uploads/red_star/red_star_PNG39.png" />
                Saved Places
            </SavedPlaces>
            <Link href={{ pathname: "/confirm", query: { pickup, dropoff } }}>
                <ConfirmButtonContainer>
                    Confirm Locations
                </ConfirmButtonContainer>
            </Link>
        </Wrapper>
    )
}

export default search

const Wrapper = tw.div`
bg-gray-200 h-screen
`
const ButtonContainer = tw.div`
bg-white
`
const BackButton = tw.img`
h-12 p-2
`
const FromToIcons = tw.div`
w-10 flex flex-col mr-2 items-center
`
const InputContainer = tw.div`
bg-white flex items-center px-4 
`
const Circle = tw.img`
h-2.5
`
const Line = tw.img`
h-10
`
const Square = tw.img`
h-3
`
const InputBoxes = tw.div`
flex flex-col flex-1
`
const Input = tw.input`
h-10 bg-gray-100 my-2 rounded-2 p-2 outline-none border-none
`
const PlusIcon = tw.img`
w-10 h-10 bg-white rounded-full ml-3
`
const SavedPlaces = tw.div`
flex items-center bg-white px-4 py-2
`
const StarIcon = tw.img`
bg-gray-400 w-16 h-16 p-2 rounded-full mr-2
`
const ConfirmButtonContainer = tw.div`
 bg-black text-white text-center m-4 p-2 cursor-pointer 
`