import NextLink from 'next/link';
import { forwardRef } from 'react';

const LinkWrapper = forwardRef(function LinkWrapper(
  { href, as, passHref = true, children, ...props },
  ref
) {
  if (href) return (
    <NextLink
      href={href}
      as={as}
      passHref={passHref}
      ref={ref}
      {...props}
    >
      {children}
    </NextLink>
  );
});

export default LinkWrapper;