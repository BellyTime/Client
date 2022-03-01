import NextLink from "next/link";

export { Link };

function Link({ href, children, ...props }) {
  return (
    <NextLink href={href}>
      <p>
        <a {...props}>{children}</a>
      </p>
    </NextLink>
  );
}
