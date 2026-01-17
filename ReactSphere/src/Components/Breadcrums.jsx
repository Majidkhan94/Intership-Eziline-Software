import { useLocation, NavLink } from "react-router";
import bgHeader from "../../public/bgHeader.jpg";

export let Breadcrums = () => {
  let location = useLocation();
  let path = location.pathname.split("/").filter(Boolean);
  if (path.length === 0) return null;

  return (
    <div className="relative w-full h-25 pt-50 md:h-70 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgHeader})` }}>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-white">
        <div className="text-xs md:text-sm text-(--MAIN)">
          <NavLink to="/">Home</NavLink>

          {path.map((item, idx) => {
            let route = "/" + path.slice(0, idx + 1);
            let lastItem = idx === path.length - 1;
            let text = item.charAt(0).toUpperCase() + item.slice(1);

            return (
              <span key={idx}>
                <span className="mx-1">/</span>
                {lastItem ? (<span className="font-bold">{text}</span>) : (<NavLink to={route}>{text}</NavLink>)}
              </span>
            );
          })}
        </div>

        {/* Page Title */}
        <h2 className="text-4xl md:text-6xl font-light text-center">
          {path[path.length - 1].charAt(0).toUpperCase() +
            path[path.length - 1].slice(1)}
        </h2>
      </div>
    </div>
  );
};
