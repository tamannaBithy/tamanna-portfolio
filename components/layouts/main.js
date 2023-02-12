import Head from "next/head";
import { Box, Container } from "@chakra-ui/react";
import Navbar from "../navbar";
import VoxelDog from "../voxelDog";
import Footer from "../footer";

const Main = ({ children, router }) => {
  return (
    <Box>
      <Head>
        <title>Tamanna Akter Bithy | Portfolio of a Full-stack dev</title>
        <meta
          name="description"
          content="Tamanna is a full-stack developer focused on crafting clean &
          user‑friendly experiences. She is passionate about building
          excellent application that improves the lives around us.
          She've completed 10+ projects based on React.js & Node.js."
        />
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
