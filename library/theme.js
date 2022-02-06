import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'



const styles = {
    global: (props) => ({
        body: {
            bg: mode('#f0e7db', '#202023')(props),
        },
    })
}


const components = {}


