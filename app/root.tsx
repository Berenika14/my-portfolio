import "./app.css";

import useWindowScroll from "react-use/lib/useWindowScroll";

import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "@remix-run/react";

import nika from "./assets/NikaLookingBackwards.jpeg";
import styles from "./styles/app.css";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "verynika.com - Berenika Ahmetaj",
  viewport:
    "width=device-width, user-scalable=no, target-densitydpi=device-dpi",
  "og:image": nika,
  "og:title": "verynika.com - Berenika Ahmetaj",
  "apple-mobile-web-app-capable": "yes",
  "apple-mobile-web-app-status-bar-style": "black-transparent",
  "apple-mobile-web-app-title": "VERY NIKA",
  "apple-mobile-web-app-orientations": "portrait",
});

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: styles },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/favicon-60x60@3x.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "120x120",
      href: "/favicon-60x60@2x.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "60x60",
      href: "/favicon-60x60.png",
    },
  ];
};
function HeaderLink({ to, children }: { to: string; children: any }) {
  return (
    <NavLink
      className={({ isActive }) =>
        (isActive
          ? "text-orange-400 border-b-2 border-b-orange-400"
          : "text-white hover:text-orange-400") +
        " px-4 py-4 inline-block text-lg font-medium mb:text-sm "
      }
      to={to}
    >
      {children}
    </NavLink>
  );
}
export default function App() {
  const { y } = useWindowScroll();
  const { pathname } = useLocation();
  const shadowStartPosition =
    pathname === "/" ? 50 : pathname === "/projects" ? 100 : 1000;

  return (
    <html lang="en" className="dark">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="bg-[#000] relative pb-24">
        <header
          className={`transform transition-all duration-500 ${
            global.document && y > shadowStartPosition
              ? "shadow-lg shadow-gray-800"
              : ""
          } top-0 z-50 sm:sticky sticky bg-[#000]`}
        >
          <div className="flex flex-row">
            <div className="flex-1">
              <HeaderLink to="/">Home</HeaderLink>
              <HeaderLink to="/projects">
                <>
                  <span className="sm:hidden">My Work</span>
                  <span className="hidden sm:inline">My work</span>
                </>
              </HeaderLink>
              <HeaderLink to="/contacts">Contact</HeaderLink>
              <HeaderLink to="https://docs.google.com/document/d/16uN7Gk0Jp7Qeo4H0BKuTZlc5h943OS6b1nC6HK5Vz08/edit?usp=sharing">
                Resume
              </HeaderLink>
            </div>
            <div className=" text-white mb:text-sm py-4 px-4 opacity-25">
              Berenika Ahmetaj
            </div>
          </div>
        </header>

        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
