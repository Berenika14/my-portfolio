var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react"), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 12,
      columnNumber: 5
    }, this)
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_useWindowScroll = __toESM(require("react-use/lib/useWindowScroll")), import_react2 = require("@remix-run/react");

// app/assets/NikaLookingBackwards.jpeg
var NikaLookingBackwards_default = "/build/_assets/NikaLookingBackwards-V5XUBO3X.jpeg";

// app/styles/app.css
var app_default = "/build/_assets/app-AEDF5ILN.css";

// app/root.tsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), meta = () => ({
  charset: "utf-8",
  title: "verynika.com - Berenika Ahmetaj",
  viewport: "width=device-width, user-scalable=no, target-densitydpi=device-dpi",
  "og:image": NikaLookingBackwards_default,
  "og:title": "verynika.com - Berenika Ahmetaj",
  "apple-mobile-web-app-capable": "yes",
  "apple-mobile-web-app-status-bar-style": "black-transparent",
  "apple-mobile-web-app-title": "VERY NIKA",
  "apple-mobile-web-app-orientations": "portrait"
}), links = () => [
  { rel: "stylesheet", href: app_default },
  {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/favicon-60x60@3x.png"
  },
  {
    rel: "apple-touch-icon",
    sizes: "120x120",
    href: "/favicon-60x60@2x.png"
  },
  {
    rel: "apple-touch-icon",
    sizes: "60x60",
    href: "/favicon-60x60.png"
  }
];
function HeaderLink({ to, children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
    import_react2.NavLink,
    {
      className: ({ isActive }) => (isActive ? "text-orange-400 border-b-2 border-b-orange-400" : "text-white hover:text-orange-400") + " px-4 py-4 inline-block text-lg font-medium mb:text-sm ",
      to,
      children
    },
    void 0,
    !1,
    {
      fileName: "app/root.tsx",
      lineNumber: 55,
      columnNumber: 5
    },
    this
  );
}
function App() {
  let { y } = (0, import_useWindowScroll.default)(), { pathname } = (0, import_react2.useLocation)(), shadowStartPosition = pathname === "/" ? 50 : pathname === "/projects" ? 100 : 1e3;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", className: "dark", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 77,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 78,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 76,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { className: "bg-[#000] relative pb-24", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        "header",
        {
          className: `transform transition-all duration-500 ${global.document && y > shadowStartPosition ? "shadow-lg shadow-gray-800" : ""} top-0 z-50 sm:sticky sticky bg-[#000]`,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-row", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex-1", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(HeaderLink, { to: "/", children: "Home" }, void 0, !1, {
                fileName: "app/root.tsx",
                lineNumber: 90,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(HeaderLink, { to: "/projects", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "sm:hidden", children: "My Work" }, void 0, !1, {
                  fileName: "app/root.tsx",
                  lineNumber: 93,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "hidden sm:inline", children: "My work" }, void 0, !1, {
                  fileName: "app/root.tsx",
                  lineNumber: 94,
                  columnNumber: 19
                }, this)
              ] }, void 0, !0, {
                fileName: "app/root.tsx",
                lineNumber: 92,
                columnNumber: 17
              }, this) }, void 0, !1, {
                fileName: "app/root.tsx",
                lineNumber: 91,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(HeaderLink, { to: "/contacts", children: "Contact" }, void 0, !1, {
                fileName: "app/root.tsx",
                lineNumber: 97,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(HeaderLink, { to: "https://docs.google.com/document/d/16uN7Gk0Jp7Qeo4H0BKuTZlc5h943OS6b1nC6HK5Vz08/edit?usp=sharing", children: "Resume" }, void 0, !1, {
                fileName: "app/root.tsx",
                lineNumber: 98,
                columnNumber: 15
              }, this)
            ] }, void 0, !0, {
              fileName: "app/root.tsx",
              lineNumber: 89,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: " text-white mb:text-sm py-4 px-4 opacity-25", children: "Berenika Ahmetaj" }, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 102,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/root.tsx",
            lineNumber: 88,
            columnNumber: 11
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/root.tsx",
          lineNumber: 81,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 108,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 109,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 110,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 111,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 80,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 75,
    columnNumber: 5
  }, this);
}

// app/routes/contacts.tsx
var contacts_exports = {};
__export(contacts_exports, {
  default: () => Contacts
});
var import_react_feather = require("react-feather"), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function IconCard({
  Icon,
  size = "50",
  url,
  label,
  value
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
    "a",
    {
      href: url,
      style: {
        color: "rgba(255, 255, 255, 0.75)"
      },
      className: `py-[25%] rounded-[8px] flex align-center sm:hover:scale-105 mb:hover-scale-105 justify-center border mb:col-span-1 ${url != null ? "cursor-pointer" : ""} border-slate-50 border-opacity-30 rounded-sm`,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Icon, { color: "rgba(255, 255, 255, 0.5)", size }, void 0, !1, {
        fileName: "app/routes/contacts.tsx",
        lineNumber: 26,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/routes/contacts.tsx",
      lineNumber: 17,
      columnNumber: 5
    },
    this
  );
}
function Contacts() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: " flex flex-col align-stretch w-screen h-screen justify-center ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
    "div",
    {
      className: " text-orange-400 w-full grid mb:grid-cols-2 sm:grid-cols-4 px-6 mb:gap-x-4 sm:gap-x-8 mb:gap-y-4",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          IconCard,
          {
            url: "mailto:nikaa@hey.com",
            Icon: import_react_feather.Mail,
            value: "nikaa@hey.com",
            label: "Email"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/contacts.tsx",
            lineNumber: 39,
            columnNumber: 9
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          IconCard,
          {
            value: "@Berenika ",
            label: "Linked In",
            Icon: import_react_feather.Linkedin,
            url: "https://www.linkedin.com/in/berenika-ahmetaj/"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/contacts.tsx",
            lineNumber: 45,
            columnNumber: 9
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          IconCard,
          {
            value: "@Berenika14",
            label: "Github",
            Icon: import_react_feather.GitHub,
            url: "https://github.com/Berenika14"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/contacts.tsx",
            lineNumber: 51,
            columnNumber: 9
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          IconCard,
          {
            value: "@berenika",
            label: "Twitter",
            Icon: import_react_feather.Twitter,
            url: "https://twitter.com/berenikaahmetaj"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/contacts.tsx",
            lineNumber: 58,
            columnNumber: 9
          },
          this
        )
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/contacts.tsx",
      lineNumber: 34,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/routes/contacts.tsx",
    lineNumber: 33,
    columnNumber: 5
  }, this);
}

// app/routes/projects.tsx
var projects_exports = {};
__export(projects_exports, {
  default: () => Projects
});

// app/assets/CoderHeroes2.png
var CoderHeroes2_default = "/build/_assets/CoderHeroes2-IS7SJETV.png";

// app/style.ts
function join(...values) {
  return values.filter((value) => typeof value == "string").map((value) => value.trim()).join(" ");
}

// app/routes/projects.tsx
var import_react3 = require("react");

// app/assets/screen1.png
var screen1_default = "/build/_assets/screen1-DFOYM666.png";

// app/assets/screen2.png
var screen2_default = "/build/_assets/screen2-AAC3CAJN.png";

// app/assets/screen3.png
var screen3_default = "/build/_assets/screen3-MEM4QEYK.png";

// app/assets/screen4.png
var screen4_default = "/build/_assets/screen4-QSRM6G5B.png";

// app/assets/screen5.png
var screen5_default = "/build/_assets/screen5-LNCZPOYC.png";

// app/assets/screen6.png
var screen6_default = "/build/_assets/screen6-CCPBHZT5.png";

// app/routes/projects.tsx
var import_react_simple_icons = require("@icons-pack/react-simple-icons"), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), import_react4 = require("react"), BADGES = [
  {
    Icon: import_react_simple_icons.ReactJs,
    text: "React"
  },
  {
    Icon: import_react_simple_icons.Nodedotjs,
    text: "Node.JS"
  },
  { Icon: import_react_simple_icons.Javascript, text: "Javascript" },
  {
    Icon: import_react_simple_icons.Typescript,
    text: "Typescript"
  },
  { Icon: import_react_simple_icons.Tailwindcss, text: "Tailwind.css" },
  {
    Icon: import_react_simple_icons.Html5,
    text: "HTML"
  },
  {
    Icon: import_react_simple_icons.CssThree,
    text: "CSS"
  },
  {
    Icon: import_react_simple_icons.Graphql,
    text: "Graphql"
  },
  {
    Icon: import_react_simple_icons.Prisma,
    text: "Prisma"
  },
  {
    Icon: import_react_simple_icons.Heroku,
    text: "Heroku"
  },
  {
    Icon: import_react_simple_icons.Sqlite,
    text: "Sqlite"
  },
  { Icon: import_react_simple_icons.Vercel, text: "Vercel" },
  { Icon: import_react_simple_icons.Redux, text: "Redux" },
  // { Icon: Styledcomponents, text: "Styled components" },
  { Icon: import_react_simple_icons.Postgresql, text: "Postgresql" },
  { Icon: import_react_simple_icons.Netlify, text: "Netlify" },
  { Icon: import_react_simple_icons.Postman, text: "Postman" },
  { Icon: import_react_simple_icons.Bootstrap, text: "Bootstrap" },
  // { Icon: Materialdesign, text: "material design" },
  { Icon: import_react_simple_icons.Express, text: "Express" },
  {
    Icon: import_react_simple_icons.Reactos,
    text: "React Native"
  }
];
function Badge({ src, alt, Icon, text }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mb:span-cols-1 mb:h-[60px] text-clip", children: Icon && text ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
    "div",
    {
      className: join(
        "bg-orange-400 text-black py-2 px-7 mb:px-2",
        "flex flex-row font-sans uppercase font-black"
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Icon, { className: "mr-[3px]", color: "black" }, void 0, !1, {
          fileName: "app/routes/projects.tsx",
          lineNumber: 108,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex-1 text-center inline-block text-clip", children: text }, void 0, !1, {
          fileName: "app/routes/projects.tsx",
          lineNumber: 109,
          columnNumber: 11
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/projects.tsx",
      lineNumber: 102,
      columnNumber: 7
    },
    this
  ) : /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
    "img",
    {
      src: src + "&logoColor=white",
      alt,
      className: "object-fit w-full h-full sm:w-[150px] "
    },
    void 0,
    !1,
    {
      fileName: "app/routes/projects.tsx",
      lineNumber: 114,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/routes/projects.tsx",
    lineNumber: 100,
    columnNumber: 5
  }, this);
}
function BadgeContainer({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "sm:flex sm:flex-row sm:flex-wrap mb:w-1/2 justify-evenly", children }, void 0, !1, {
    fileName: "app/routes/projects.tsx",
    lineNumber: 148,
    columnNumber: 5
  }, this);
}
function Project({
  heading,
  subheading,
  paragraphs,
  img,
  className,
  paragraphClassName
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: join("mb:span-cols-1 mb:mt-10", className), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex flex-col", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: "text-white opacity-70 font-bold text-3xl mb:text-xl mb-5 lg:mb-10 grid ", children: heading }, void 0, !1, {
        fileName: "app/routes/projects.tsx",
        lineNumber: 172,
        columnNumber: 9
      }, this),
      img
    ] }, void 0, !0, {
      fileName: "app/routes/projects.tsx",
      lineNumber: 171,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      "ul",
      {
        className: join(
          "marker:text-orange-500 pr-10 mt-6 text-lg mb:text-lg",
          "mb: list-disc pl-5 space-y-3 text-orange-50 opacity-50",
          paragraphClassName
        ),
        children: paragraphs.map(
          (p) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { className: "pl-3", children: p }, p, !1, {
            fileName: "app/routes/projects.tsx",
            lineNumber: 189,
            columnNumber: 9
          }, this)
        )
      },
      void 0,
      !1,
      {
        fileName: "app/routes/projects.tsx",
        lineNumber: 181,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/projects.tsx",
    lineNumber: 170,
    columnNumber: 5
  }, this);
}
function Projects({
  className,
  style
}) {
  let imageUrls = [screen5_default, screen4_default, screen3_default, screen1_default, screen2_default, screen6_default], [currentImageIndex, setCurrentImageIndex] = (0, import_react3.useState)(0), handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
  };
  return (0, import_react3.useEffect)(() => {
    let intervalId = setInterval(() => {
      handleNextClick();
    }, 2500);
    return () => {
      clearInterval(intervalId);
    };
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className, style, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      "div",
      {
        className: join(
          "text-justify",
          "sm:mt-24 text-white sm:gap-x-32",
          "grid grid-cols-1 mb:mx-4 sm:mx-14 mb:grid-cols-1 gap-20 "
        ),
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex justify-center  ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            Project,
            {
              heading: "Tung",
              subheading: "Frontend Developer",
              className: join(
                "md:flex-row md:flex",
                // "border-slate-600  lg:border",
                "!md:col-span-full max-w-[1000px]",
                "rounded-lg mb:p-6 lg:p-16"
              ),
              img: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                "img",
                {
                  style: { maxWidth: "400px" },
                  className: join(
                    "rounded-lg  mb:w-full mb:object-fit object-cover",
                    "sm:h-fit ease-in-out duration-200",
                    "mb:hover:scale-100 hover:scale-100  lg:hover:scale-105"
                  ),
                  src: imageUrls[currentImageIndex],
                  alt: "tung"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/projects.tsx",
                  lineNumber: 239,
                  columnNumber: 13
                },
                this
              ),
              paragraphClassName: "md:ml-16 md:self-center md:space-y-6",
              paragraphs: [
                "Designed and developed an Albanian Social Community application, enabling users to register, search for fellow users, engage in messaging, and become part of a vibrant online community",
                "Created designated components/screens using React Native, harnessed the power of React Relay for seamless data management and retrieval",
                "Utilized Tailwind.css ensuring a visually pleasant and user-friendly interface"
              ]
            },
            void 0,
            !1,
            {
              fileName: "app/routes/projects.tsx",
              lineNumber: 229,
              columnNumber: 11
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/projects.tsx",
            lineNumber: 228,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mb:flex md:justify-center flex flex-row", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            Project,
            {
              className: join(
                "md:max-w-[1000px]",
                // 'lg:border border-slate-600',
                " mb:p-6 lg:p-16",
                "!md:col-span-full rounded-lg"
              ),
              heading: "Coder Heroes",
              subheading: "Backend Developer",
              img: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { href: "https://www.coderheroes.com/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                "img",
                {
                  className: join(
                    "rounded-lg mb:object-fit object-cover",
                    "sm:h-fit ease-in-out duration-200 mb:hover:scale-100 hover:scale-[102%]"
                  ),
                  src: CoderHeroes2_default,
                  alt: "coder"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/projects.tsx",
                  lineNumber: 270,
                  columnNumber: 17
                },
                this
              ) }, void 0, !1, {
                fileName: "app/routes/projects.tsx",
                lineNumber: 269,
                columnNumber: 13
              }, this),
              paragraphs: [
                "Developed the registering endpoint using Okta identity cloud allowing users to post to the Okta Dashboard and Database.",
                "Created a library directory and API token to authenticate the post request for the registering endpoint in Node",
                "Fixed bugs in the existing codebase by using the debugger tool in the vs code and testing the endpoints on postman which results in better functionality of the application"
              ]
            },
            void 0,
            !1,
            {
              fileName: "app/routes/projects.tsx",
              lineNumber: 259,
              columnNumber: 11
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/projects.tsx",
            lineNumber: 258,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/projects.tsx",
        lineNumber: 220,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h3", { className: "text-white opacity-80 text-xl mt-20 mb-8 px-10 text-center text-opacity-90 ", children: "Tech Stack used to create above applications" }, void 0, !1, {
      fileName: "app/routes/projects.tsx",
      lineNumber: 289,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(BadgeContainer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      "div",
      {
        style,
        className: join(
          className || "",
          "grid grid-rows-auto mb:grid-cols-2 sm:grid-cols-6",
          "w-screen sm:px-10 px-10 gap-x-5 gap-y-5"
        ),
        children: BADGES.map(
          (badge) => /* @__PURE__ */ (0, import_react4.createElement)(Badge, { ...badge, key: badge.text })
        )
      },
      void 0,
      !1,
      {
        fileName: "app/routes/projects.tsx",
        lineNumber: 293,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/projects.tsx",
      lineNumber: 292,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/projects.tsx",
    lineNumber: 219,
    columnNumber: 5
  }, this);
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Homepage
});

// app/routes/home.tsx
var home_exports = {};
__export(home_exports, {
  default: () => Homepage
});
var import_react5 = require("@remix-run/react");
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), IMG_SRC = NikaLookingBackwards_default, SHOW_PROJECTS = !1;
function Nika({ size }) {
  return size === "mobile" ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "col-span-1 sm:hidden mt-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("img", { className: "object-cover mb:w-full", src: IMG_SRC, alt: "nika" }, void 0, !1, {
    fileName: "app/routes/home.tsx",
    lineNumber: 27,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/home.tsx",
    lineNumber: 26,
    columnNumber: 5
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "mb:hidden sm:block sm:col-span-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
    "img",
    {
      className: "rounded-lg object-contain mb:w-full",
      src: IMG_SRC,
      alt: "nika"
    },
    void 0,
    !1,
    {
      fileName: "app/routes/home.tsx",
      lineNumber: 16,
      columnNumber: 9
    },
    this
  ) }, void 0, !1, {
    fileName: "app/routes/home.tsx",
    lineNumber: 15,
    columnNumber: 7
  }, this);
}
function Homepage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "mb:mt-12 mt-16 text-white mb:gap-x-0 mb:px-10 sm:gap-x-32 text-justify relative grid grid-cols-10 mb:grid-cols-1 ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "mb:col-span-1 col-span-4 sm:col-start-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h1", { className: "opacity-90 col-span-3 font-medium text-3xl mb:text-sm", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "mb:text-xl", children: "Hi, I\u2019m Berenika." }, void 0, !1, {
            fileName: "app/routes/home.tsx",
            lineNumber: 38,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
            "span",
            {
              style: { fontSize: "2.625rem" },
              className: "inline-block ml-12 animate-say-hi ",
              children: "\u{1F44B}"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/home.tsx",
              lineNumber: 39,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/home.tsx",
          lineNumber: 37,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { className: "text-lg mt-8 opacity-50", children: [
          " ",
          "I am a Web Developer from New York \u{1F1FA}\u{1F1F8}. I enjoy building everything from small business sites to rich interactive webs."
        ] }, void 0, !0, {
          fileName: "app/routes/home.tsx",
          lineNumber: 46,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Nika, { size: "mobile" }, void 0, !1, {
          fileName: "app/routes/home.tsx",
          lineNumber: 52,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          "div",
          {
            style: { minHeight: 1 },
            className: "bg-white bg-opacity-20 my-16"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/home.tsx",
            lineNumber: 53,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          "div",
          {
            style: { marginTop: -8 },
            className: "col-span-4 col-start-2 text-lg pb-8 mb:col-span-1 ",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { className: "mt-0 mb-6 text-2xl text-white opacity-80 mb:text-xl", children: "About Me" }, void 0, !1, {
                fileName: "app/routes/home.tsx",
                lineNumber: 61,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "mt-6 opacity-50 mb:text-lg", children: [
                "My passion for programming began in the summer of 2021. It was late July when it happened - the first time I witnessed an open code editor. Scrolling through src/messages/index.ts for what felt a few short seconds, I was interrupted by the computer\u2019s owner: \u201CI\u2019ve been standing here watching you stare at that screen for at least 60 seconds and you didn\u2019t even notice.\u201D",
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, !1, {
                  fileName: "app/routes/home.tsx",
                  lineNumber: 79,
                  columnNumber: 15
                }, this),
                "This was the moment I caught the bug. In the coming months, I would withdrew from my college to take a risk on learning this craft that had transfixed me months earlier. I enrolled in an intensive 6-month training course to kickstart my career as a programmer."
              ] }, void 0, !0, {
                fileName: "app/routes/home.tsx",
                lineNumber: 72,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "mt-8 opacity-50 mb:text-lg ", children: "My decision to pursue software development was born from a naive fascination of the craft. As a result, the \u201Cwork\u201D really feels more like play, and spending time on perfecting my skills and improving my code feels more like a privilege than a chore. I\u2019m excited to leverage this passion to help companies build amazing products and to build friendships with like-minded passionate people" }, void 0, !1, {
                fileName: "app/routes/home.tsx",
                lineNumber: 87,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                import_react5.Link,
                {
                  className: "mt-12 inline-block h-fit ease-in-out duration-150 bg-orange-400 hover:scale-105 p-3 px-6 text-lg font-medium rounded-sm",
                  to: SHOW_PROJECTS ? "#contacts" : "/contacts",
                  children: "Reach out"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/home.tsx",
                  lineNumber: 97,
                  columnNumber: 13
                },
                this
              )
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/home.tsx",
            lineNumber: 57,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/home.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "mb:col-span-1 mb:hidden sm:block sm:col-span-4 mb:px-[10%] relative", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Nika, { size: "desktop" }, void 0, !1, {
        fileName: "app/routes/home.tsx",
        lineNumber: 107,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/home.tsx",
        lineNumber: 106,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/home.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this),
    SHOW_PROJECTS && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { id: "projects", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Projects, { className: "mt-4 pt-4" }, void 0, !1, {
      fileName: "app/routes/home.tsx",
      lineNumber: 113,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/home.tsx",
      lineNumber: 112,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/home.tsx",
    lineNumber: 34,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-PCO3BZ5E.js", imports: ["/build/_shared/chunk-VIE64SFM.js", "/build/_shared/chunk-HOVHPSYD.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-LZYHV53E.js", imports: ["/build/_shared/chunk-6OBFV2S6.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/contacts": { id: "routes/contacts", parentId: "root", path: "contacts", index: void 0, caseSensitive: void 0, module: "/build/routes/contacts-77GEVHJH.js", imports: ["/build/_shared/chunk-EVLAPQXH.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/home": { id: "routes/home", parentId: "root", path: "home", index: void 0, caseSensitive: void 0, module: "/build/routes/home-53R5VYXU.js", imports: ["/build/_shared/chunk-4MDJCI67.js", "/build/_shared/chunk-DGHYOODZ.js", "/build/_shared/chunk-EVLAPQXH.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-QYUT3PDS.js", imports: ["/build/_shared/chunk-4MDJCI67.js", "/build/_shared/chunk-DGHYOODZ.js", "/build/_shared/chunk-EVLAPQXH.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/projects": { id: "routes/projects", parentId: "root", path: "projects", index: void 0, caseSensitive: void 0, module: "/build/routes/projects-2UFFJ7BK.js", imports: ["/build/_shared/chunk-DGHYOODZ.js", "/build/_shared/chunk-EVLAPQXH.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "e148940e", hmr: void 0, url: "/build/manifest-E148940E.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { v2_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !1, v2_headers: !1, v2_meta: !1, v2_normalizeFormMethod: !1, v2_routeConvention: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/contacts": {
    id: "routes/contacts",
    parentId: "root",
    path: "contacts",
    index: void 0,
    caseSensitive: void 0,
    module: contacts_exports
  },
  "routes/projects": {
    id: "routes/projects",
    parentId: "root",
    path: "projects",
    index: void 0,
    caseSensitive: void 0,
    module: projects_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: "home",
    index: void 0,
    caseSensitive: void 0,
    module: home_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
