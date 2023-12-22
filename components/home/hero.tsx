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
                    Hi I am Nghi, <br/> Creative Dev
                    </Typography>

                    <Typography 
                        mb={{ xs: 3.5, md: 5}}
                    >
                    A ACTIVITY / SPORT
                    I have a passion for running. Running is the simplest physical activity that we can do and it is also the least time-consuming sport for staying healthy.
                    Every 3 days at 10 pm, I usually run 3 rounds around the park. I run alone and while running I listen to music or audio motivation. Music is also great for relaxing.
                    </Typography>

                    <Button variant='contained' size='large'>Dowload resume</Button>
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
