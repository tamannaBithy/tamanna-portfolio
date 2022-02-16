import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Badge, Container, Link, List, ListItem } from "@chakra-ui/react";
import Layout from "../../components/layouts/article";
import { Meta, Title, WorkImage } from "../../components/work";
import P from '../../components/paragraph'


const Work = () => {
    return (
        <Layout title="todoList">
            <Container>
                <Title>
                    Todo List  <Badge>Dec, 2021 </Badge>
                </Title>
                <P>
                    here you can add a todo, can edit it, delete it & mark it as done.
                </P>
                <List ml={4} my={4}>

                    <ListItem>
                        <Meta>Github</Meta>
                        <Link href="https://github.com/Tamanna14-cpu/todo-list" target="_blank">
                            https://github.com/Tamanna14-cpu/todo-list <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>


                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://todo-list-14.netlify.app/" target="_blank">
                            https://todo-list-14.netlify.app/ <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>

                    <ListItem>
                        <Meta>Stack</Meta>
                        <span> React, Redux, uuid </span>
                    </ListItem>
                </List>

                {/* <WorkImage src="/images/works/inkdrop_01.png" alt="candleShop" />
            <WorkImage src="/images/works/inkdrop_02.png" alt="candleShop" /> */}
            </Container>
        </Layout>
    )
};

export default Work;