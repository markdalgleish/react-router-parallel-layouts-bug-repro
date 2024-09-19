import {
  Links,
  Meta,
  Scripts,
  ScrollRestoration,
  Outlet,
  Link,
} from "react-router";

import "./tailwind.css";

const urls = [
  { path: "/", label: "Home" },
  { path: "/hello", label: "Hello" },
  { path: "/world", label: "World" },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="flex gap-8">
        <div className="w-64 h-full min-h-screen p-5 text-white bg-gray-800">
          <h4 className="mb-4 text-lg font-bold">Navigation</h4>
          <ul className="space-y-2">
            {urls.map((link) => (
              <li key={link.path} className="rounded-md hover:bg-gray-700">
                <Link to={link.path} className="block p-2">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-4 space-y-4">
          <Outlet />
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
