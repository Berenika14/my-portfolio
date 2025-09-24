import { Link } from "@remix-run/react";
import nika from "~/assets/NikaLookingBackwards.jpeg";

import Projects from "./projects";

const IMG_SRC = nika;

const SHOW_PROJECTS = false;

function Nika({ size }: { size: "desktop" | "mobile" }) {
  const mobile = size === "mobile";

  if (!mobile) {
    return (
      <div className="mb:hidden sm:block sm:col-span-4">
        <img
          // style={{ width: aspectRatio * 500 }}
          className="rounded-lg object-contain mb:w-full"
          src={IMG_SRC}
          alt="nika"
        />
      </div>
    );
  }
  return (
    <div className={"col-span-1 sm:hidden mt-10"}>
      <img className={`object-cover mb:w-full`} src={IMG_SRC} alt="nika" />
    </div>
  );
}

export default function Homepage() {
  return (
    <>
      <div className="mb:mt-12 mt-16 text-white mb:gap-x-0 mb:px-10 sm:gap-x-32 text-justify relative grid grid-cols-10 mb:grid-cols-1 ">
        <div className="mb:col-span-1 col-span-4 sm:col-start-2">
          <h1 className="opacity-90 col-span-3 font-medium text-3xl mb:text-sm">
            <span className="mb:text-xl">Hi, I’m Berenika.</span>
            <span
              style={{ fontSize: "2.625rem" }}
              className="inline-block ml-12 animate-say-hi "
            >
              👋
            </span>
          </h1>
          <h2 className="text-lg mt-8 opacity-50">
            {" "}
            I am a Web Developer from New York 🇺🇸. I enjoy building everything
            from small business sites to rich interactive webs.
          </h2>

          <Nika size="mobile" />
          <div
            style={{ minHeight: 1 }}
            className="bg-white bg-opacity-20 my-16"
          />
          <div
            style={{ marginTop: -8 }}
            className="col-span-4 col-start-2 text-lg pb-8 mb:col-span-1 "
          >
            <h2 className="mt-0 mb-6 text-2xl text-white opacity-80 mb:text-xl">
              About Me
            </h2>
            {/* <p className="opacity-50 mb:text-lg">
              {" "}
              I am originally from Kosovo, immigrated to the United States at
              age 20 on my own. A transition that helped me gain a global
              mindset, developed my cultural awareness and engraved the
              adaptability skill in me.
            </p> */}

            <p className="mt-6 opacity-50 mb:text-lg">
              My passion for programming began in the summer of 2021. It was
              late July when it happened - the first time I witnessed an open
              code editor. Scrolling through src/messages/index.ts for what felt
              a few short seconds, I was interrupted by the computer’s owner:
              “I’ve been standing here watching you stare at that screen for at
              least 60 seconds and you didn’t even notice.”
              <br />
              This was the moment I caught the bug. In the coming months, I
              would withdrew from my college to take a risk on learning this
              craft that had transfixed me months earlier. I enrolled in an
              intensive 6-month training course to kickstart my career as a
              programmer.
            </p>

            <p className="mt-8 opacity-50 mb:text-lg ">
              My decision to pursue software development was born from a naive
              fascination of the craft. As a result, the “work” really feels
              more like play, and spending time on perfecting my skills and
              improving my code feels more like a privilege than a chore. I’m
              excited to leverage this passion to help companies build amazing
              products and to build friendships with like-minded passionate
              people
            </p>

            <Link
              className="mt-12 inline-block h-fit ease-in-out duration-150 bg-orange-400 hover:scale-105 p-3 px-6 text-lg font-medium rounded-sm"
              to={SHOW_PROJECTS ? "#contacts" : "/contacts"}
            >
              Reach out
            </Link>
          </div>
        </div>

        <div className="mb:col-span-1 mb:hidden sm:block sm:col-span-4 mb:px-[10%] relative">
          <Nika size="desktop" />
        </div>
      </div>

      {SHOW_PROJECTS && (
        <div id="projects">
          <Projects className="mt-4 pt-4" />
        </div>
      )}
    </>
  );
}
