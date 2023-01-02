import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  title: string;
  description: string;
  media: StaticImageData | string;
  mediaType: string;
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

const isImage = (
  media: StaticImageData | string,
  mediaType: string
): media is StaticImageData => {
  return mediaType === "image";
};

export default function ProjectCard(props: ProjectCardProps) {
  !isImage(props.media, props.mediaType) &&
    console.log(props.media.replace(".mp4", ".webp"));
  return (
    <LinkWrapper
      href={props.link}
      className="sm:w-[calc(50%_-_0.5rem)] shadow-xl rounded-md dark:bg-gray-800"
    >
      <div className="aspect-video overflow-hidden rounded-t-md">
        {isImage(props.media, props.mediaType) && (
          <Image
            src={props.media}
            alt={props.title}
            placeholder="blur"
            sizes="(max-width: 640px) 100vw, 600px"
            priority
          ></Image>
        )}
        {!isImage(props.media, props.mediaType) && (
          <video
            src={props.media}
            autoPlay
            loop
            muted
            playsInline
            className="rounded-t-md"
            poster={props.media.replace(".mp4", ".webp")}
          />
        )}
      </div>
      <div className="flex flex-col p-4 gap-1">
        <h2 className="font-semibold text-gray-700 dark:text-gray-50">
          {props.title}
        </h2>
        <p className="text-gray-700 dark:text-gray-50">{props.description}</p>
      </div>
    </LinkWrapper>
  );
}
