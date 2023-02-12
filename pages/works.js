import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import { WorkGridItem } from "../components/gridItem";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import candleShop from "../public/images/works/candle.png";
import todoList from "../public/images/works/todo.png";
import weather from "../public/images/works/weather.png";
import travel from "../public/images/works/travel.png";
import quiz from "../public/images/works/quiz.png";
import jobBox from "../public/images/works/jobbox.png";

const Works = () => {
  return (
    <Layout title="Works">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          {" "}
          Works{" "}
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem id="travel" title="CHT-Travel" thumbnail={travel}>
              a hotel booking site along with dashboard
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem id="jobBox" title="Job Box" thumbnail={jobBox}>
              a project with RTK query
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem id="quiz" title="Quiz-app" thumbnail={quiz}>
              javascript quiz application
            </WorkGridItem>
          </Section>
        </SimpleGrid>

        <Section delay={0.4}>
          <Divider my={6} />

          <Heading as="h3" fontSize={20} mb={4}>
            Old works
          </Heading>
        </Section>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="candleShop"
              title="Candle Shop"
              thumbnail={candleShop}
            >
              A website with crud operation
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem id="todoList" title="Todo-App" thumbnail={todoList}>
              a todoList app
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Works;
