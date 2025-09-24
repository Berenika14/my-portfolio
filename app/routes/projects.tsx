import coder from "~/assets/CoderHeroes2.png";
import { join } from "../style";
import { useEffect, useState } from "react";
import screen1 from "~/assets/screen1.png";
import screen2 from "~/assets/screen2.png";
import screen3 from "~/assets/screen3.png";
import screen4 from "~/assets/screen4.png";
import screen5 from "~/assets/screen5.png";
import screen6 from "~/assets/screen6.png";
import {
  ReactJs,
  Nodedotjs,
  Heroku,
  Sqlite,
  Vercel,
  Netlify,
  Redux,
  Postgresql,
  Tailwindcss,
  Postman,
  Bootstrap,
  Javascript,
  Express,
  Typescript,
  Graphql,
  Reactos,
  Prisma,
  Html5,
  CssThree,
} from "@icons-pack/react-simple-icons";

const BADGES = [
  {
    Icon: ReactJs,
    text: "React",
  },

  {
    Icon: Nodedotjs,
    text: "Node.JS",
  },
  { Icon: Javascript, text: "Javascript" },
  {
    Icon: Typescript,
    text: "Typescript",
  },
  { Icon: Tailwindcss, text: "Tailwind.css" },
  {
    Icon: Html5,
    text: "HTML",
  },
  {
    Icon: CssThree,
    text: "CSS",
  },
  {
    Icon: Graphql,
    text: "Graphql",
  },
  {
    Icon: Prisma,
    text: "Prisma",
  },
  {
    Icon: Heroku,
    text: "Heroku",
  },
  {
    Icon: Sqlite,
    text: "Sqlite",
  },
  { Icon: Vercel, text: "Vercel" },
  { Icon: Redux, text: "Redux" },
  // { Icon: Styledcomponents, text: "Styled components" },
  { Icon: Postgresql, text: "Postgresql" },
  { Icon: Netlify, text: "Netlify" },

  { Icon: Postman, text: "Postman" },
  { Icon: Bootstrap, text: "Bootstrap" },
  // { Icon: Materialdesign, text: "material design" },

  { Icon: Express, text: "Express" },
  {
    Icon: Reactos,
    text: "React Native",
  },
];

type BadgeProps =
  | { src: string; alt: string; Icon?: undefined; text?: undefined }
  | {
      src?: undefined;
      alt?: undefined;
      Icon: React.ComponentType<any>;
      text: string;
    };

function Badge({ src, alt, Icon, text }: BadgeProps) {
  return (
    <div className="mb:span-cols-1 mb:h-[60px] text-clip">
      {Icon && text ? (
        <div
          className={join(
            "bg-orange-400 text-black py-2 px-7 mb:px-2",
            "flex flex-row font-sans uppercase font-black"
          )}
        >
          <Icon className="mr-[3px]" color={"black"} />
          <div className="flex-1 text-center inline-block text-clip">
            {text}
          </div>
        </div>
      ) : (
        <img
          src={src + "&logoColor=white"}
          alt={alt}
          className={`object-fit w-full h-full sm:w-[150px] `}
        />
      )}
    </div>
  );
}

function BadgeRow({
  className,
  children,
  style,
}: {
  className?: undefined | string;
  children: any;
  style?: any;
}) {
  return (
    <div
      style={style}
      className={
        (className || "") +
        "grid grid-rows-auto mb:grid-cols-2 sm:grid-cols-6 w-screen sm:px-10 px-10 gap-x-5 gap-y-5"
      }
    >
      {children}
    </div>
  );
}

function BadgeContainer({ children }) {
  return (
    <div className="sm:flex sm:flex-row sm:flex-wrap mb:w-1/2 justify-evenly">
      {children}
    </div>
  );
}

function Project({
  heading,
  subheading,
  paragraphs,
  img,
  className,
  paragraphClassName,
}: {
  heading: string;
  img: any;
  paragraphClassName?: string;
  subheading: string;
  paragraphs: string[];
  className?: null | undefined | boolean | string;
}) {
  return (
    <div className={join("mb:span-cols-1 mb:mt-10", className)}>
      <div className="flex flex-col">
        <h2 className="text-white opacity-70 font-bold text-3xl mb:text-xl mb-5 lg:mb-10 grid ">
          {heading}
        </h2>

        {img}
      </div>
      {/* <h3 className="font-bold opacity-80 text-2xl mt-10 mb-4 ml-4 mb:text-lg">
        {subheading}
      </h3> */}
      <ul
        className={join(
          "marker:text-orange-500 pr-10 mt-6 text-lg mb:text-lg",
          "mb: list-disc pl-5 space-y-3 text-orange-50 opacity-50",
          paragraphClassName
        )}
      >
        {paragraphs.map((p) => (
          <li key={p} className="pl-3">
            {p}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Projects({
  className,
  style,
}: {
  className?: string | undefined;
  style?: any;
}) {
  const imageUrls = [screen5, screen4, screen3, screen1, screen2, screen6];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNextClick();
    }, 2500);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <div className={className} style={style}>
      <div
        className={join(
          "text-justify",

          "sm:mt-24 text-white sm:gap-x-32",
          "grid grid-cols-1 mb:mx-4 sm:mx-14 mb:grid-cols-1 gap-20 "
        )}
      >
        <div className="flex justify-center  ">
          <Project
            heading={`Tung`}
            subheading={`Frontend Developer`}
            className={join(
              "md:flex-row md:flex",
              // "border-slate-600  lg:border",
              "!md:col-span-full max-w-[1000px]",
              "rounded-lg mb:p-6 lg:p-16"
            )}
            img={
              <img
                style={{ maxWidth: "400px" }}
                className={join(
                  "rounded-lg  mb:w-full mb:object-fit object-cover",
                  "sm:h-fit ease-in-out duration-200",
                  "mb:hover:scale-100 hover:scale-100  lg:hover:scale-105"
                )}
                src={imageUrls[currentImageIndex]}
                alt="tung"
              />
            }
            paragraphClassName="md:ml-16 md:self-center md:space-y-6"
            paragraphs={[
              "Designed and developed an Albanian Social Community application, enabling users to register, search for fellow users, engage in messaging, and become part of a vibrant online community",
              `Created designated components/screens using React Native, harnessed the power of React Relay for seamless data management and retrieval`,
              `Utilized Tailwind.css ensuring a visually pleasant and user-friendly interface`,
            ]}
          />
        </div>
        <div className="mb:flex md:justify-center flex flex-row">
          <Project
            className={join(
              "md:max-w-[1000px]",
              // 'lg:border border-slate-600',
              " mb:p-6 lg:p-16",
              "!md:col-span-full rounded-lg"
            )}
            heading={`Coder Heroes`}
            subheading={`Backend Developer`}
            img={
              <a href="https://www.coderheroes.com/">
                <img
                  // style={{ width: 400 }}
                  className={join(
                    "rounded-lg mb:object-fit object-cover",
                    "sm:h-fit ease-in-out duration-200 mb:hover:scale-100 hover:scale-[102%]"
                  )}
                  src={coder}
                  alt="coder"
                />
              </a>
            }
            paragraphs={[
              `Developed the registering endpoint using Okta identity cloud allowing users to post to the Okta Dashboard and Database.`,
              `Created a library directory and API token to authenticate the post request for the registering endpoint in Node`,
              `Fixed bugs in the existing codebase by using the debugger tool in the vs code and testing the endpoints on postman which results in better functionality of the application`,
            ]}
          />
        </div>
      </div>
      <h3 className="text-white opacity-80 text-xl mt-20 mb-8 px-10 text-center text-opacity-90 ">
        Tech Stack used to create above applications
      </h3>
      <BadgeContainer>
        <div
          style={style}
          className={join(
            className || "",
            "grid grid-rows-auto mb:grid-cols-2 sm:grid-cols-6",
            "w-screen sm:px-10 px-10 gap-x-5 gap-y-5"
          )}
        >
          {BADGES.map((badge) => (
            <Badge {...badge} key={badge.text} />
          ))}
        </div>
      </BadgeContainer>
    </div>
  );
}
