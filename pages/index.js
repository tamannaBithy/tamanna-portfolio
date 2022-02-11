import { Box, Button, Container, Heading, Image, useColorModeValue } from '@chakra-ui/react'
import Paragraph from '../components/paragraph'
import Section from '../components/section'
import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'

export default function Home() {
  return (
    <Container>
      <Box borderRadius='lg' bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} mb={6} p={3} textAlign="center">
        Hello, I&apos;m a frontend developer based in Bangladesh!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box >
          <Heading as="h2" variant="page-title">
            Tamanna Akter
          </Heading>
          <p>Digital Craftsman ( Developer / Designer / Barista )</p>
        </Box>

        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >

          <Image

            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            display="inline-block"
            style={{ width: '94px', height: '100px', borderRadius: '50%' }}
            src="/images/profile.jpg"
            alt="Profile image"

          ></Image>
        </Box>
      </Box>


      <Section delay={0.5}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>

        <Paragraph>
          Tamanna is a front‑end developer focused on crafting clean & user‑friendly experiences. She is passionate about building excellent software that improves the lives of those around me. She&apos;ve completed 15+ projects based on react.js with a good UI sense. She thinks everyday life is like programming. If you love something you can beauty into it.
        </Paragraph>

        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My Portfolio
            </Button>
          </NextLink>
        </Box>

      </Section>


      <Section delay={0.5}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>

        <BioSection>
          <BioYear>1999</BioYear>
          Born in Cumilla, Bangladesh.
        </BioSection>

        <BioSection>
          <BioYear>2019 - Present</BioYear>
          Studying English Literature at National University, Bangladesh.
        </BioSection>

        <BioSection>
          <BioYear>2022 - Present</BioYear>
          Works as a Frontend Developer at Lets Dunch.
        </BioSection>

      </Section>

      <Section delay={0.5}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>

        <Paragraph>Art, Music, Illustration, Travelling & Coding. </Paragraph>

      </Section>

    </Container>
  )
}
