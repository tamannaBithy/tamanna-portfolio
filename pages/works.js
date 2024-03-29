import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import { WorkGridItem } from "../components/gridItem";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import travel from "../public/images/works/travel.png";
import jobBox from "../public/images/works/jobbox.png";

const Works = () => {
  return (
    <Layout title="Projects">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          {" "}
          Projects{" "}
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem id="travel" title="CHT-Travel" thumbnail={travel}>
              A hotel booking site along with dashboard
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem id="jobBox" title="Job Box" thumbnail={jobBox}>
              A project using RTK query
            </WorkGridItem>
          </Section>
        </SimpleGrid>

        {/* <Section delay={0.4}>
          <Divider my={6} />

          <Heading as="h3" fontSize={20} mb={4}>
            Old works
          </Heading>
        </Section> */}

        {/* <SimpleGrid columns={[1, 1, 2]} gap={6}>
          

         
        </SimpleGrid> */}
      </Container>
    </Layout>
  );
};

export default Works;
