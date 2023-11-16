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
import { Meta } from "../components/work";

export default function Home() {
  return (
    <>
      <Layout>
        <Container>
          <Box
            borderRadius="lg"
            // bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
            bg={useColorModeValue("gray.50", "whiteAlpha.200")}
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
              <p>Full-Stack Developer</p>
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
                style={{ width: "110px", height: "110px", borderRadius: "50%" }}
                src="/images/tamanna-akter.jpg"
                alt="Profile image"
              ></Image>
            </Box>
          </Box>

          <Section delay={0.5}>
            <Heading as="h3" variant="section-title">
              About
            </Heading>

            <Paragraph>
              {/* Tamanna is a full-stack developer focused on crafting clean &
              user‑friendly experiences. She is passionate about building
              excellent application that improves the lives around us.
              She&apos;ve completed 10+ projects based on React.js & Node.js.
              Versatile and enthusiastic individual in search of an entry level
              position as a full-stack developer in a company that encourages
              growth and flexibility. */}
              With 1+ years of industry experience, I&aposve worked with NEXT
              JS, REACT, NODE JS, and MongoDB for database management. I&aposm
              proficient with various JavaScript frameworks, and my main
              interests lie in full-stack web development.
              <br /> <br /> As a Frontend Developer at Lets Dunch , I developed
              and maintained UI components using React.js and Tailwind CSS. I
              collaborated with cross-functional teams to integrate APIs,
              implemented features like meeting booking and expert profile
              updates, and consistently delivered bug fixes and enhancements.
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
              Experience
            </Heading>

            <BioSection mb={4}>
              <BioYear>Jan, 2022 - Nov,2022</BioYear>
              Frontend Developer at{" "}
              <Link
                href="https://www.linkedin.com/company/letsdunch"
                passhref
                target="_blank"
              >
                Lets Dunch
              </Link>{" "}
            </BioSection>

            <Paragraph>
              <li>
                {" "}
                Developed front-end code using React.js with Tailwind CSS,
                ensuring a responsive and user-friendly website interface.
              </li>
              <li>
                {" "}
                Implement core features, including meeting booking, dashboard
                redesign, meeting rescheduling, expert profile updates, and
                landing page redesign, leading to enhanced user engagement and
                satisfaction.
              </li>
              <li>
                {" "}
                Improved website performance by 30% through Redux
                implementation, enhancing user interactions and reducing loading
                times.
              </li>
            </Paragraph>

            <List my={4}>
              <ListItem>
                <Meta>Skills</Meta>
                <span>
                  React.js, Front-end Development, Redux, Tailwind CSS, Figma
                </span>
              </ListItem>
            </List>
          </Section>

          {/* <Section delay={0.5}>
            <Heading as="h3" variant="section-title">
              I ♥
            </Heading>

            <Paragraph>
              Art, Music, Illustration, Travelling & Coding.{" "}
            </Paragraph>
          </Section> */}

          <Section delay={0.3}>
            <Heading as="h3" variant="section-title">
              {/* On the web */}
              Contacts
            </Heading>
            <List>
              <ListItem>
                <Link href="https://github.com/tamannaBithy" target="_blank">
                  <Button
                    variant="ghost"
                    colorScheme="teal"
                    leftIcon={<Icon as={IoLogoGithub} fontSize={20} />}
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
                    leftIcon={<Icon as={IoLogoLinkedin} fontSize={20} />}
                  >
                    @tamanna-akter
                  </Button>
                </Link>
              </ListItem>

              <ListItem>
                <Link
                  href="https://www.facebook.com/tamannaBithy14/"
                  target="_blank"
                >
                  <Button
                    variant="ghost"
                    colorScheme="teal"
                    leftIcon={<Icon as={IoLogoFacebook} fontSize={20} />}
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
                    leftIcon={<Icon as={IoMail} fontSize={20} />}
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
