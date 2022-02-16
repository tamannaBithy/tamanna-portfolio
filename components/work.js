import { ChevronRightIcon } from '@chakra-ui/icons';
import { Heading, Box, Image, Link, Badge } from '@chakra-ui/react'
import NextLink from 'next/link'

export const Title = ({ children }) => {
    return (
        <Box>
            <NextLink href="/works">
                <Link>Works</Link>
            </NextLink>

            <span>
                {' '}
                <ChevronRightIcon />{' '}
            </span>

            <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
                {children}
            </Heading>
        </Box>
    )
};

export const WorkImage = ({ src, alt }) => {
    <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
}


export const Meta = ({ children }) => {
    return (
        <Badge colorScheme="green" mr="2">
            {children}
        </Badge>
    )
}