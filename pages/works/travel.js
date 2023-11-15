import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Badge, Container, Link, List, ListItem, Text } from "@chakra-ui/react";
import Layout from "../../components/layouts/article";
import { Meta, Title } from "../../components/work";
import P from "../../components/paragraph";

const Work = () => {
  return (
    <Layout title="CHT-Travel">
      <Container>
        <Title>
          CHT-Travel <Badge>Jan, 2023 </Badge>
        </Title>
        <P>
          <Text as="b" fontSize="md">
            1.{" "}
          </Text>
          This site is designed for booking hotels in an area of Bangladesh
          where users can view the hotel list & other upcoming services.
        </P>
        <P>
          {" "}
          <Text as="b" fontSize="md" mr={2}>
            2.
          </Text>
          SSL Commerz(a Bangladeshi payment system) payment method has been
          integrated.
        </P>
        <P>
          {" "}
          <Text as="b" fontSize="md" mr={2}>
            3.
          </Text>
          A dashboard for maintaining website content.
        </P>
        <P>
          {" "}
          <Text as="b" fontSize="md" mr={2}>
            4.
          </Text>
          Users can search by hotel name & can filter by rating.
        </P>
        <P>
          {" "}
          <Text as="b" fontSize="md" mr={2}>
            5.
          </Text>
          Admin can add new hotel, can update hotel info, can delete a hotel
          also can add a new admin.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://cht.hilltractstech.com" target="_blank">
              https://cht.hilltractstech.com <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>

          <ListItem>
            <Meta>Stack</Meta>
            <span>
              React, RTK-query, Firebase, express.js, MongoDB, Tailwind,
              SSLCommerz
            </span>
          </ListItem>
        </List>
      </Container>
    </Layout>
  );
};

export default Work;
