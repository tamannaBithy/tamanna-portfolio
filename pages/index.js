import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Image,
  Link,
  List,
  ListItem,
  useColorModeValue,
} from "@chakra-ui/react";
import Paragraph from "../components/paragraph";
import Section from "../components/section";
import NextLink from "next/link";
import { ChevronRightIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import { BioSection, BioYear } from "../components/bio";
import Layout from "../components/layouts/article";
import {
  IoLogoFacebook,
  IoLogoLinkedin,
  IoLogoGithub,
  IoMail,
} from "react-icons/io5";
import Head from "next/head";

export default function Home() {
  return (
    <>
      {" "}
      <Head>
        <script type="application/ld+json">
          {`
          {
            "@context": "https://github.com/tamannaBithy",
            "@type": "Personal",
            "name": "Tamanna Akter Bithy | Portfolio of a Full-stack dev",
            "url": "tamanna-portfolio.vercel.app/",
            "sameAs": [
              "https://www.linkedin.com/in/tamanna-akter/",
              "https://github.com/tamannaBithy"
            ]
          }
        `}
        </script>
      </Head>
      <Layout>
        <Container>
          <Box
            borderRadius="lg"
            bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
            mb={6}
            p={3}
            textAlign="center"
          >
            Hello, I&apos;m a Full-Stack Developer based in Bangladesh!
          </Box>

          <Box display={{ md: "flex" }}>
            <Box>
              <Heading as="h2" variant="page-title">
                Tamanna Akter
              </Heading>
              <p>Digital Craftsman, give your thought a live view by coding.</p>
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
                style={{ width: "110px", height: "115px", borderRadius: "50%" }}
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
              Tamanna is a full-stack developer focused on crafting clean &
              user‑friendly experiences. She is passionate about building
              excellent application that improves the lives around us.
              She&apos;ve completed 10+ projects based on React.js & Node.js.
              Versatile and enthusiastic individual in search of an entry level
              position as a full-stack developer in a company that encourages
              growth and flexibility.
            </Paragraph>

            <Flex align="center" my={4} justify="space-evenly">
              <Link
                href="https://drive.google.com/file/d/1GUniI5rvLcs6g2Sbc-0Q9FjsIIP-aHIh/view?usp=share_link"
                target="_blank"
              >
                <Button rightIcon={<ExternalLinkIcon />} colorScheme="teal">
                  My Resume
                </Button>
              </Link>
              <NextLink href="/works">
                <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                  My Projects
                </Button>
              </NextLink>
            </Flex>
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

            {/* <BioSection>
            <BioYear>Jan, 2022 - Nov,2022</BioYear>
            Worked as a Frontend Developer at Lets Dunch.
          </BioSection> */}
          </Section>

          <Section delay={0.5}>
            <Heading as="h3" variant="section-title">
              I ♥
            </Heading>

            <Paragraph>
              Art, Music, Illustration, Travelling & Coding.{" "}
            </Paragraph>
          </Section>

          <Section delay={0.3}>
            <Heading as="h3" variant="section-title">
              On the web
            </Heading>
            <List>
              <ListItem>
                <Link href="https://github.com/tamannaBithy" target="_blank">
                  <Button
                    variant="ghost"
                    colorScheme="teal"
                    leftIcon={<Icon as={IoLogoGithub} />}
                  >
                    @tamannaBithy
                  </Button>
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="https://www.linkedin.com/in/tamanna-akter"
                  target="_blank"
                >
                  <Button
                    variant="ghost"
                    colorScheme="teal"
                    leftIcon={<Icon as={IoLogoLinkedin} />}
                  >
                    @tamanna-akter
                  </Button>
                </Link>
              </ListItem>

              <ListItem>
                <Link
                  href="https://web.facebook.com/chayabithy.kusum/"
                  target="_blank"
                >
                  <Button
                    variant="ghost"
                    colorScheme="teal"
                    leftIcon={<Icon as={IoLogoFacebook} />}
                  >
                    @tamanna-bithy
                  </Button>
                </Link>
              </ListItem>

              <ListItem>
                <Link href="mailto:tamannabithy14@gmail.com" target="_blank">
                  <Button
                    variant="ghost"
                    colorScheme="teal"
                    leftIcon={<Icon as={IoMail} />}
                  >
                    tamannabithy14@gmail.com
                  </Button>
                </Link>
              </ListItem>
            </List>
          </Section>
        </Container>
      </Layout>
    </>
  );
}
