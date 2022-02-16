import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import { WorkGridItem } from '../components/gridItem';
import Layout from '../components/layouts/article';
import Section from '../components/section';


import candleShop from '../public/images/works/candle.png'
import tripAdvisor from '../public/images/works/trip.png'
import todoList from '../public/images/works/todo.png'
import weather from '../public/images/works/weather.png'
import slider from '../public/images/works/slider.png'
import health from '../public/images/works/health.png'


const Works = () => {
    return (
        <Layout title="Works">
            <Container>
                <Heading as="h3" fontSize={20} mb={4}> Works </Heading>


                <SimpleGrid columns={[1, 1, 2]} gap={6}>

                    <Section>
                        <WorkGridItem id="candleShop" title="candleShop" thumbnail={candleShop}>
                            A website with crud operation
                        </WorkGridItem>
                    </Section>


                    <Section>
                        <WorkGridItem id="todoList" title="todoList" thumbnail={todoList}>
                            a todoList app
                        </WorkGridItem>
                    </Section>


                    <Section>
                        <WorkGridItem id="tripAdvisor" title="tripAdvisor" thumbnail={tripAdvisor}>
                            for booking a hotel
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
                        <WorkGridItem id="health" title="Health-care" thumbnail={health}>
                            a health-care app
                        </WorkGridItem>
                    </Section>

                    <Section>
                        <WorkGridItem id="weather" title="Weather" thumbnail={weather}>
                            checking weather as your searched city
                        </WorkGridItem>
                    </Section>

                    <Section>
                        <WorkGridItem id="slider" title="Slider" thumbnail={slider}>
                            can make a slider of picture
                        </WorkGridItem>
                    </Section>

                </SimpleGrid>


            </Container>
        </Layout>

    )
};

export default Works;