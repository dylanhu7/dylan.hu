import Image, { StaticImageData } from "next/future/image";
import Link from "next/link";

type ProjectCardProps = {
  title: string;
  description: string;
  image: StaticImageData;
  link?: string;
};

const LinkWrapper = ({
  children,
  href,
  className,
}: {
  children: any;
  href?: string;
  className?: string;
}) => {
  if (href) {
    return (
      <Link href={href} passHref>
        <a className={className} target="_blank">
          {children}
        </a>
      </Link>
    );
  } else {
    return <div className={className}>{children}</div>;
  }
};

export default function ProjectCard(props: ProjectCardProps) {
  return (
    <LinkWrapper
      href={props.link}
      className="sm:w-[calc(50%_-_0.5rem)] shadow-xl rounded-md"
    >
      <div className="aspect-video overflow-hidden rounded-t-md">
        <Image
          src={props.image}
          alt={props.title}
          style={{ maxWidth: "100%", height: "auto", objectFit: "contain" }}
          placeholder="blur"
          width={1024}
          height={1024}
          priority
        ></Image>
      </div>
      <div className="p-4">
        <h2 className="font-semibold">{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </LinkWrapper>
  );
}
