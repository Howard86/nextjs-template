import { Link, LinkProps } from '@chakra-ui/react'
import NextLink from 'next/link'
import { forwardRef, ReactNode } from 'react'

interface RouteLinkProps extends LinkProps {
  href: string
  children: ReactNode
}

const RouteLink = forwardRef<HTMLAnchorElement, RouteLinkProps>(
  ({ href, children, ...props }, ref) => (
    <NextLink href={href} passHref legacyBehavior>
      <Link ref={ref} {...props}>
        {children}
      </Link>
    </NextLink>
  )
)

export default RouteLink
