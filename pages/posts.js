import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import { GridItem } from '../components/gridItem'
import Layout from '../components/layouts/article'
import Section from '../components/section'


import asyncJs from '../public/images/posts/asynchronous.jpg'
import crud from '../public/images/posts/crud.jpg'


const Posts = () => (
    <Layout title="Posts">
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Popular Posts
            </Heading>

            <Section delay={0.3}>
                <SimpleGrid columns={[1, 2, 2]} gap={6}>
                    <GridItem
                        title="Asynchronous Behaviour of javascript"
                        thumbnail={asyncJs}
                        href="https://medium.com/@bimurto.bithy14/asynchronous-behaviour-of-javascript-d9c751e6ef82"
                    />
                    <GridItem
                        title="CRUD Operation"
                        thumbnail={crud}
                        href="https://medium.com/@bimurto.bithy14/crud-operations-a1d6f599f170"
                    />
                </SimpleGrid>
            </Section>


        </Container>
    </Layout>
)

export default Posts