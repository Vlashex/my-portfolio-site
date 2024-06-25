"use client"
import { Box, Card, Container, Link, Stack, Typography } from "@mui/material";
import NextLink from 'next/link'
import img1 from '@/public/discount-shop.jpg'
import img2 from '@/public/next-sneakers.png'
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";

interface projectsData {
  name:string
  img:StaticImageData
  title:string
  link1:string 
  link2:string
}


function ProjectCard({name, img, title, link1, link2}: projectsData) {

  const [isShown, setShow] = useState(false)

  function toggleShown() {
    setShow(!isShown)
  }

  return (
    <Card 
    onClick={toggleShown}
    sx={{
      position: 'relative',
      width: '344px',
      height: '500px',
      background: '#e4e4e4',
    }}>
      <Image 
      width={400} 
      alt="name" 
      src={img} 
      style={{
        width: '100%',
        height: 'auto'
        }}
      />
      <Box
      sx={{
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        bgcolor: 'rgba(33, 33, 33, .9)',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '20px',
        textAlign: 'center',
        opacity: isShown? '1' : '0',
        transition: '1s ease',
      }}>
        <Typography variant="h2">{name}</Typography>
        <Typography variant="h3">{title}</Typography>
        <Link component={NextLink} href={link1} color={'white'}>Deploy on Vercel</Link>
        <Link component={NextLink} href={link2} color={'white'}>GitHub repos</Link>
      </Box>
    </Card>
  )
}

export default function Home() {

  const projectsData= [
    {
      name: 'discount-shop',
      img: img1,
      title: 'Simple website on Next.js + Material Ui',
      link1: 'https://discount-shop.vercel.app/',
      link2: 'https://github.com/Vlashex/discount-shop/tree/master'
    },
    {
      name: 'next-sneakers',
      img: img2,
      title: 'Test site for studying SSR, SSG and infinite scroll',
      link1: 'https://next-sneakers-ten.vercel.app/',
      link2: 'https://github.com/Vlashex/next-sneakers/tree/master'
    }
  ]

  return (
    <Container maxWidth='md'>
      
      <Container maxWidth='sm' sx={{m: '120px auto'}}>
        <Typography variant="h1" textAlign={'center'}>
          Showcase my talents
        </Typography>
        <Typography textAlign={'center'}>
          All my projects
        </Typography>
      </Container>

      <Stack direction={'row'} flexWrap={'wrap'} justifyContent={'space-around'} sx={{gap: '30px'}}>
        {
          projectsData.map(({name, img, title, link1, link2}, index)=>
            <ProjectCard
              name={name}
              img={img}
              title={title}
              link1={link1}
              link2={link2}
              key={index}
            />
          )
        }
      </Stack>
    </Container>
  );
}
