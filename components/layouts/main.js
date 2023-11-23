import Head from "next/head";
import { Box, Container } from "@chakra-ui/react";
import Navbar from "../navbar";
import VoxelDog from "../voxelDog";
import Footer from "../footer";

const Main = ({ children, router }) => {
  return (
    <Box>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="I Build custom Website Solutions That help Your Business Grow"
        />
        <meta name="author" content="Tamanna Akter" />
        <link rel="canonical" href="https://github.com/tamannaBithy" />
        <link
          rel="canonical"
          href="https://www.linkedin.com/in/tamanna-akter/"
        />
        <meta property="og:site_name" content="Tamanna Akter" />
        <meta name="og:title" content="Tamanna Akter" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://i.ibb.co/9Tdg32n/Tamanna-Akter.jpg"
        />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="150" />
        <title>Tamanna Akter | Full-Stack Developer</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="container.md" pt={8}>
        <VoxelDog />

        {children}

        <Footer />
      </Container>
    </Box>
  );
};

export default Main;
