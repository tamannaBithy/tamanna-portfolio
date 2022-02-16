import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Badge, Container, Link, List, ListItem } from "@chakra-ui/react";
import Layout from "../../components/layouts/article";
import { Meta, Title, WorkImage } from "../../components/work";
import P from '../../components/paragraph'


const Work = () => {
    return (
        <Layout title="Health-care">
            <Container>
                <Title>
                    Health-care <Badge>oct, 2021 </Badge>
                </Title>
                <P>
                    a single-page application authenticated with firebase where a user not only can log in with google or GitHub but also can register a new account & reset a password.
                </P>
                <List ml={4} my={4}>

                    <ListItem>
                        <Meta>Github</Meta>
                        <Link href="https://github.com/Tamanna14-cpu/healthcare-app" target="_blank">
                            https://github.com/Tamanna14-cpu/healthcare-app <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>

                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://healthcare-website-f0a03.web.app/" target="_blank">
                            https://healthcare-website-f0a03.web.app/ <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>

                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>firebase, react, react-router, react-bootstrap</span>
                    </ListItem>
                </List>

                {/* <WorkImage src="/images/works/inkdrop_01.png" alt="candleShop" />
            <WorkImage src="/images/works/inkdrop_02.png" alt="candleShop" /> */}
            </Container>
        </Layout>
    )
};

export default Work;