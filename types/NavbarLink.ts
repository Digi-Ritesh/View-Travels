type NavbarLink = {
  title: string;
  path: string;
};

type CustomNavLinkProps = {
  link: NavbarLink;
  index: number;
};

export type { NavbarLink, CustomNavLinkProps };