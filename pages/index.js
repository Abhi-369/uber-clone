import Head from 'next/head'
import { useEffect, useState } from 'react';
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import tw from "tailwind-styled-components"
import Map from './components/Map'
import Link from 'next/link';
import { auth } from '../firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useRouter } from 'next/router';
// import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js'

export default function Home() {

  const [user, setUser] = useState(null)
  const router = useRouter()

  useEffect(() => {
    return onAuthStateChanged(auth, user => {
      if (user) {
        setUser({
          name: user.displayName,
          photoUrl: user.photoURL,
        })
      } else {
        setUser(null)
        router.push('/login');
      }
    })
  }, [])

  return (
    <Wrapper>

      <Map />
      <ActionItems>

        <Header>
          <UberLogo src="https://pngimg.com/uploads/uber/uber_PNG30.png" />

          <Profile>
            <Name>{user && user.name}</Name>
            <UserImage src={user && user.photoUrl} onClick={() => signOut(auth)} />
          </Profile>

        </Header>
        <ActionButtons>
          <Link href="/search">
            <ActionButton>
              <ActionButtonImg src="https://freepngimg.com/thumb/car/12-2-car-png-image.png" />
              Ride
            </ActionButton>
          </Link>
          <ActionButton>
            <ActionButtonImg src="https://png.pngitem.com/pimgs/s/3-39276_12-classic-no-pedal-balance-bike-clipart-1024x683.png" />
            Wheels
          </ActionButton>
          <ActionButton>
            <ActionButtonImg src="https://png.pngitem.com/pimgs/s/86-863871_transparent-schedule-clipart-schedule-icon-flat-png-png.png" />
            Reserve
          </ActionButton>

        </ActionButtons>
        <InputButton>Where to?
        </InputButton>

      </ActionItems>

    </Wrapper >
  )
}

const Wrapper = tw.div`
flex flex-col h-screen

`
const ActionItems = tw.div`
bg-yellow-100 flex-1 p-5
`

const Header = tw.div`
flex justify-between items-center
`

const UberLogo = tw.img`
h-16 
`

const Profile = tw.div`
flex items-center
`

const Name = tw.div`
mr-4 w-12 text-xs
`
const UserImage = tw.img`
rounded-full h-14 cursor-pointer
`

const ActionButtons = tw.div`
flex
`
const ActionButton = tw.div`
bg-gray-500 flex-1 m-1 h-32 items-center flex flex-col justify-center rounded-lg transform hover:scale-105 transition text-xl

`

const ActionButtonImg = tw.img`
h-20
`

const InputButton = tw.div`
h-20 bg-gray-200 text-2xl p-4 flex items-center mt-8
`