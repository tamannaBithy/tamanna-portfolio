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
            <WorkGridItem
              id="candleShop"
              title="candleShop"
              thumbnail={candleShop}
            >
              A website with crud operation
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem id="travel" title="travel" thumbnail={travel}>
              for booking a hotel
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id="quiz" title="quiz" thumbnail={quiz}>
              a quiz app
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id="jobBox" title="jobBox" thumbnail={jobBox}>
              a project with RTK query
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
            <WorkGridItem id="todoList" title="todoList" thumbnail={todoList}>
              a todoList app
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem id="weather" title="Weather" thumbnail={weather}>
              checking weather as your searched city
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Works;
