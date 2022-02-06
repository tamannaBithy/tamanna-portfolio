import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layouts/main'
import theme from '../library/theme'


function MyApp({ Component, pageProps, router }) {
    return (
        <ChakraProvider theme={theme}>
            <Layout router={router}>
                <Component {...pageProps} key={router.route} />
            </Layout>

        </ChakraProvider>
    )
}
export default MyApp