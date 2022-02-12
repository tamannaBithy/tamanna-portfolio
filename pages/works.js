import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import { WorkGridItem } from '../components/gridItem';
import Layout from '../components/layouts/article';
import Section from '../components/section';


import candleShop from '../public/images/works/candle.png'
import tripAdvisor from '../public/images/works/trip.png'


const Works = () => {
    return (
        <Layout>
            <Container>
                <Heading as="h3" fontSize={20} mb={4}> Works </Heading>


                <SimpleGrid columns={[1, 1, 2]} gap={6}>

                    <Section>
                        <WorkGridItem id="candleShop" title="candleShop" thumbnail={candleShop}>
                            A Markdown note-taking app with 100+ plugins, cross-platform and
                            encrypted data sync support
                        </WorkGridItem>
                    </Section>


                    <Section>
                        <WorkGridItem
                            id="tripAdvisor"
                            title="tripAdvisor"
                            thumbnail={tripAdvisor}
                        >
                            Music recommendation app for iOS
                        </WorkGridItem>
                    </Section>

                </SimpleGrid>
            </Container>
        </Layout>

    )
};

export default Works;