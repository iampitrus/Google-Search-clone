import { NavLink } from "react-router-dom";

const links = [
  { url: "/search", text: "All" },
  { url: "/news", text: "News" },
  { url: "/image", text: "Images" },
  { url: "/videos", text: "Videos" },
];

function Links() {
  let activeClassName =
    "mx-2 text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2";
  return (
    <div className="flex sm:justify-around justify-between items-center mt-4">
      {links.map(({ url, text }, index) => (
        <NavLink
          key={index}
          to={url}
          className={({ isActive }) => (isActive ? activeClassName : "mx-2")}
        >
          {text}
        </NavLink>
      ))}
    </div>
  );
}

export default Links;
