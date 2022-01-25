import NextLink from "next/link";

export { Link };

function Link({ href, children, ...props }) {
  return (
    <p>
      <NextLink href={href}>
        <a {...props}>{children}</a>
      </NextLink>
    </p>
  );
}
