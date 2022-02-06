import Image from 'next/image'
import { Box, Container, Heading } from '@chakra-ui/react'

export default function Home() {
  return (
    <Container>
      <Box borderRadius='lg' bg="red" mb={6} p={3} textAlign="center">
        Hello, I&apos;m a frontend developer based in Bangladesh!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box >
          <Heading as="h2" variant="page-title">
            Tamanna Akter
          </Heading>
          <p>Digital Craftsman ( Developer / Designer / Barista )</p>
        </Box>
      </Box>
    </Container>
  )
}
