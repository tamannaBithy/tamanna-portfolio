import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Badge, Container, Link, List, ListItem } from "@chakra-ui/react";
import Layout from "../../components/layouts/article";
import { Meta, Title } from "../../components/work";
import P from "../../components/paragraph";

const Work = () => {
  return (
    <Layout title="Weather">
      <Container>
        <Title>
          Temperature-hot <Badge>Oct, 2021 </Badge>
        </Title>
        <P>
          you can have a weather update on any city. just search by the city
          name. the weather icon will change following the result of
          temperature.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Github</Meta>
            <Link
              href="https://github.com/tamannaBithy/temperature-hot"
              target="_blank"
            >
              https://github.com/tamannaBithy/temperature-hot{" "}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>

          <ListItem>
            <Meta>Website</Meta>
            <Link
              href="https://tamanna14-cpu.github.io/temperature-hot/"
              target="_blank"
            >
              https://tamanna14-cpu.github.io/temperature-hot/{" "}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>

          <ListItem>
            <Meta>Stack</Meta>
            <span>javascript, html5, bootstrap5</span>
          </ListItem>
        </List>
      </Container>
    </Layout>
  );
};

export default Work;
