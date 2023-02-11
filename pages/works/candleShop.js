import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Badge, Container, Link, List, ListItem } from "@chakra-ui/react";
import Layout from "../../components/layouts/article";
import { Meta, Title } from "../../components/work";
import P from "../../components/paragraph";

const Work = () => {
  return (
    <Layout title="candleShop">
      <Container>
        <Title>
          CandleShop <Badge>Nov, 2021 </Badge>
        </Title>
        <P>
          a mern stack project where Google firebase authentication system has
          used, MongoDB database have used for database & express.js is used for
          backend.
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
