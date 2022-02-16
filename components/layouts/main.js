import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import Navbar from '../navbar';
import VoxelDog from '../voxelDog';
import Footer from '../footer';

const Main = ({ children, router }) => {
    return (

        <Box>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Tamanna Akter</title>
            </Head>


            <Navbar path={router.asPath} />

            <Container maxW='container.md' pt={14}>

                <VoxelDog />

                {children}

                <Footer />
            </Container>
        </Box>

    );
};

export default Main;