"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavigationLink = ({ title, icon, link, children = [] }) => {
  const pathname = usePathname();

  const hasChildren = children.length > 0;

  const isChildActive = children.some(
    (child) => pathname === child.link
  );

  const isActive = pathname === link || isChildActive;

  const [open, setOpen] = useState(isChildActive);

  useEffect(() => {
    if (isChildActive) {
      setOpen(true);
    }
  }, [isChildActive]);

  return (
    <li>
      <div
        onClick={() => hasChildren && setOpen(!open)}
        className={`
          flex items-center justify-between
          px-4 py-2 rounded-xl cursor-pointer
          transition-all duration-300 group relative overflow-hidden
          ${
            isActive
              ? "bg-[#7152F30D] text-primary"
              : "text-gray-700 hover:bg-gray-100"
          }
        `}
      >
        {isActive && (
          <div className="absolute left-0 top-0 h-full w-0.5 rounded-l-xl bg-primary" />
        )}

        <div className="flex items-center gap-3 relative z-10">
          <i className={`${icon} text-lg`}></i>

          {hasChildren ? (
            <span className="text-sm font-medium font-lexend">
              {title}
            </span>
          ) : (
            <Link
              href={link}
              className="text-sm font-medium font-lexend"
            >
              {title}
            </Link>
          )}
        </div>

        {hasChildren && (
          <i
            className={`ri-arrow-right-s-line text-lg transition-all duration-300 relative z-10 ${
              open ? "rotate-90" : ""
            }`}
          ></i>
        )}
      </div>
      {hasChildren && (
        <div
          className={`overflow-hidden transition-all duration-300 ${
            open ? "max-h-96 mt-2" : "max-h-0"
          }`}
        >
          <ul className="ml-6 space-y-2">
            {children.map((child, index) => (
              <li key={index}>
                <Link
                  href={child.link}
                  className={`
                    block px-4 py-2 rounded-xl text-sm font-lexend transition-all duration-300 relative overflow-hidden
                    ${
                      pathname === child.link
                        ? "bg-gray-100 text-primary font-semibold"
                        : "text-gray-500 hover:bg-gray-100 hover:text-primary"
                    }
                  `}
                >
                  {pathname === child.link && (
                    <div className="absolute left-0 top-0 h-full w-1 rounded-l-xl bg-primary" />
                  )}

                  <span className="relative z-10">
                    {child.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};

export default NavigationLink;