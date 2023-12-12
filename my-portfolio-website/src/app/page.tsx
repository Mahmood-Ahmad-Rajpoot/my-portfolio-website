import Image from 'next/image'
import NavBar from '../Components/navbar/NavBar'
import Introduction from '@/Components/introduction/Introduction'
import Head from 'next/head'
import Skills from '@/Components/skills/Skills'
import Experience from '@/Components/experience/Experience'
  export default function Home() {
   return (
     <>
       
     <NavBar/>
     <Introduction/>
     <Skills/>
     <Experience/>
     
     </>
  )
}
