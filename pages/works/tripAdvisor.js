import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Badge, Container, Link, List, ListItem } from "@chakra-ui/react";
import Layout from "../../components/layouts/article";
import { Meta, Title, WorkImage } from "../../components/work";
import P from '../../components/paragraph'


const Work = () => {
    return (
        <Layout title="tripAdvisor">
            <Container>
                <Title>
                    tripAdvisor  <Badge>Nov, 2021 </Badge>
                </Title>
                <P>
                    this site is designed with react.js & mongodb data base has been used as along. firebase authentication system added for authentication.
                </P>
                <List ml={4} my={4}>

                    <ListItem>
                        <Meta>Frontend</Meta>
                        <Link href="https://github.com/Tamanna14-cpu/trip-advisor" target="_blank">
                            https://github.com/Tamanna14-cpu/trip-advisor <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>

                    <ListItem>
                        <Meta>Backend</Meta>
                        <Link href="https://github.com/Tamanna14-cpu/trip-advisor-server" target="_blank">
                            https://github.com/Tamanna14-cpu/trip-advisor-server <ExternalLinkIcon />
                        </Link>
                    </ListItem>

                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://my-app-bcb15.web.app/" target="_blank">
                            https://my-app-bcb15.web.app/ <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>

                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>firebase, mongoDB, axios, react, expressJS, heroku</span>
                    </ListItem>
                </List>

                {/* <WorkImage src="/images/works/inkdrop_01.png" alt="candleShop" />
            <WorkImage src="/images/works/inkdrop_02.png" alt="candleShop" /> */}
            </Container>
        </Layout>
    )
};

export default Work;