import NextLink from "next/link";

export { Icon };

function Icon({ href, iconImg, ...props }) {
  return (
    <p>
      <NextLink href={href}>
        <a {...props}>
          <img src={iconImg} className="w-10 h-10" />
        </a>
      </NextLink>
    </p>
  );
}
