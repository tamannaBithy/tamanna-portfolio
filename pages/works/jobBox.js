import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Badge, Container, Link, List, ListItem, Text } from "@chakra-ui/react";
import Layout from "../../components/layouts/article";
import { Meta, Title } from "../../components/work";
import P from "../../components/paragraph";

const Work = () => {
  return (
    <Layout title="Job-Box">
      <Container>
        <Title>
          Job Box <Badge>Jan, 2023 </Badge>
        </Title>

        <P>
          {" "}
          <Text as="b" fontSize="md" mr={2}>
            1.
          </Text>
          A job application where candidate can apply for jobs & employer can
          add jobs.
        </P>
        <P>
          {" "}
          <Text as="b" fontSize="md" mr={2}>
            2.
          </Text>
          Candidate can ask any question regarding the job & employer can reply
          on that specific job details page.
        </P>
        <P>
          {" "}
          <Text as="b" fontSize="md" mr={2}>
            3.
          </Text>
          Employer can see the application count for an open position.
        </P>
        <P>
          {" "}
          <Text as="b" fontSize="md" mr={2}>
            4.
          </Text>
          Employer can close any position at any time.
        </P>
        <P>
          {" "}
          <Text as="b" fontSize="md" mr={2}>
            5.
          </Text>
          Employer is able to see the candidate&apos;s detail information.
        </P>
        <P>
          {" "}
          <Text as="b" fontSize="md" mr={2}>
            6.
          </Text>
          Candidates can filter the &quot;applied job&quot; based on date and
          approval state.
        </P>
        <P>
          {" "}
          <Text as="b" fontSize="md" mr={2}>
            7.
          </Text>
          Employer & candidate can chat with each other.
        </P>
        <List my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://jobbx-starter.vercel.app/" target="_blank">
              https://jobbx-starter.vercel.app/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>

          <ListItem>
            <Meta>Stack</Meta>
            <span>
              React, RTK-query, Firebase, express.js, MongoDB, Tailwind
            </span>
          </ListItem>
        </List>
      </Container>
    </Layout>
  );
};

export default Work;
