import { Button, Container, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';
import * as React from 'react';
import avatar from "@/images/avatar.png";

export function HeroSection () {
  return (
    <Box component='section' pt={{xs:4, md: 18}} pb={{xs: 7, md: 9}}>
        <Container>
            <Stack 
                spacing={8} 
                direction={{ xs:'column-reverse', md: 'row'}} 
                alignItems={{xs:'center', md:'flex-start'}}
                textAlign={{ xs: 'center', md:'left'}}
            >
                <Box>
                    <Typography 
                        component='h1' variant='h3' fontWeight='bold' 
                        mb={{ xs: 3.5, md: 5}}
                    >
                    Hello <br/>  Welcome to my World
                    </Typography>

                    <Typography 
                        mb={{ xs: 3.5, md: 5}}
                    >
                       

                    🌻live for the present🌼
                    <br/>
                    Living in the present means shedding the burdens of the past and the anxieties of the future, focusing instead on the magic of the current moment. It encourages us to create memories, share laughter, and embrace spontaneity. It’s a mindset that infuses life with richness, depth, and unbridled joy, reminding us that the present is where true living happens.
                    </Typography>

                    <Button variant='contained' size='large'>Do not touch me !</Button>
                </Box>
                
                <Box sx={{minWidth:'240px', boxShadow: '-5px 13px',
                            color: 'secondary.light',
                            borderRadius: '50%'
                        }} >
                    <Image src={avatar} layout='responsive' alt='avatar'></Image>
                </Box>
            </Stack>
        </Container>
    </Box>
  );
}
