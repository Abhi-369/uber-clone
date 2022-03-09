import React, { useEffect } from 'react'
import { useRouter } from 'next/router';
import { signInWithPopup, onAuthStateChanged } from 'firebase/auth';
import { auth, provider } from '../firebase'
import tw from "tailwind-styled-components"

const Login = () => {
    const router = useRouter()

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                router.push('/')
            }
        })
    }, [])
    
    return (
        <Wrapper>
            <UberLogo src="https://pngimg.com/uploads/uber/uber_PNG30.png" />
            <Title>Log in to access your account</Title>
            <HeadImage src="https://blogapi.uber.com/wp-content/uploads/2020/06/uber-shield-blog_white.png" />
            <SignInButton onClick={() => signInWithPopup(auth, provider)}>
                Sign in with Google
            </SignInButton>
        </Wrapper>
    )
}

export default Login

const Wrapper = tw.div`
flex flex-col bg-gray-200 h-screen w-screen p-4
`
const SignInButton = tw.button`
bg-black text-white text-center py-4 mt-8 w-full
`
const UberLogo = tw.img`
h-20 w-20 p-2
`
const Title = tw.div`
text-5xl py-4 px-1 text-gray-500
`
const HeadImage = tw.img`

`