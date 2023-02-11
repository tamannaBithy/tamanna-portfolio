import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Badge, Container, Link, List, ListItem } from "@chakra-ui/react";
import Layout from "../../components/layouts/article";
import { Meta, Title } from "../../components/work";
import P from "../../components/paragraph";

const Work = () => {
  return (
    <Layout title="travel">
      <Container>
        <Title>
          CandleShop <Badge>Nov, 2021 </Badge>
        </Title>
        <P>
          this site is designed with react.js & mongodb data base has been used
          as along. firebase authentication system added for authentication.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Frontend</Meta>
            <Link
              href="https://github.com/Tamanna14-cpu/candle-shop"
              target="_blank"
            >
              https://github.com/Tamanna14-cpu/candle-shop{" "}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>

          <ListItem>
            <Meta>Backend</Meta>
            <Link
              href="https://github.com/Tamanna14-cpu/candle-shop-server"
              target="_blank"
            >
              https://github.com/Tamanna14-cpu/candle-shop-server{" "}
              <ExternalLinkIcon />
            </Link>
          </ListItem>

          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://react-candle-shop.web.app/" target="_blank">
              https://react-candle-shop.web.app/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>

          <ListItem>
            <Meta>Stack</Meta>
            <span>
              firebase, mongoDB, react, react-hook-form, expressJS, heroku
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
