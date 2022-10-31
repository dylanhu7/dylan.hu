import Image, { StaticImageData } from "next/image";
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
      <Link href={href} className={className} target="_blank">
          {children}
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
      className="sm:w-[calc(50%_-_0.5rem)] shadow-xl rounded-md dark:bg-gray-800"
    >
      <div className="aspect-video overflow-hidden rounded-t-md">
        <Image
          src={props.image}
          alt={props.title}
          placeholder="blur"
          priority
        ></Image>
      </div>
      <div className="flex flex-col p-4 gap-1">
        <h2 className="font-semibold text-gray-700 dark:text-gray-50">{props.title}</h2>
        <p className="text-gray-700 dark:text-gray-50">{props.description}</p>
      </div>
    </LinkWrapper>
  );
}
