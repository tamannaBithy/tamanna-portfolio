import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Badge, Container, Link, List, ListItem, Text } from "@chakra-ui/react";
import Layout from "../../components/layouts/article";
import { Meta, Title } from "../../components/work";
import P from "../../components/paragraph";

const Work = () => {
  return (
    <Layout title="quiz">
      <Container>
        <Title>
          Quiz App <Badge>Jun, 2022 </Badge>
        </Title>
        <P>
          {" "}
          <Text as="b" fontSize="md" mr={2}>
            1.
          </Text>
          a quiz app where user can give a quiz.
        </P>
        <P>
          {" "}
          <Text as="b" fontSize="md" mr={2}>
            2.
          </Text>
          can get a result with an analysis.
        </P>
        <P>
          {" "}
          <Text as="b" fontSize="md" mr={2}>
            3.
          </Text>
          also authentication system is added.
        </P>

        <List ml={4} my={4}>
          <ListItem>
            <Meta>Github</Meta>
            <Link
              href="https://github.com/tamannaBithy/quiz-app"
              target="_blank"
            >
              https://github.com/tamannaBithy/quiz-app{" "}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>

          <ListItem>
            <Meta>Website</Meta>
            <Link
              href="https://joyful-conkies-60a632.netlify.app/"
              target="_blank"
            >
              https://joyful-conkies-60a632.netlify.app/{" "}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>

          <ListItem>
            <Meta>Stack</Meta>

            <span>
              React, React-lazy-load, React-player, Firebase, Firebase-database
            </span>
          </ListItem>
        </List>

        {/* <WorkImage src="/images/works/inkdrop_01.png" alt="candleShop" />
            <WorkImage src="/images/works/inkdrop_02.png" alt="candleShop" /> */}
      </Container>
    </Layout>
  );
};

export default Work;
