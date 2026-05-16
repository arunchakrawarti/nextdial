import Link from "next/link";
import { twMerge } from "tailwind-merge";

const variantClasses = {
  default: "bg-gray-100 text-gray-500",
  outline: "font-lexend text-[16px] text-primary hover:underline cursor-pointer",
  primary: "text-primary border border-primary",
  danger: "text-primary border border-primary border border-gray-300",
  success: "bg-white text-gray-600 border border-gray-300",
  secondary: "rounded-xl border border-gray-300 text-[#4F7CFF]",
  white: "bg-[#F8F8FC] text-primary",
  green: "border border-gray-300 bg-[#ECFDF3] text-[#16A34A]",
  gradient: "bg-primary",
};

function Button({
  children,
  variant = "default",
  bgColor,
  textColor,
  icon,
  iconPosition = "left",
  href,
  height = "h-11",
  width = "px-4",
  rounded = "rounded-[10px]",
  className,
  loading,
  ...props
}) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 font-lexend font-light text-[1rem] leading-[1.5rem] transition duration-200 focus:outline-none cursor-pointer disabled:cursor-not-allowed disabled:opacity-50";

  const variantClass =
    variantClasses[variant] || variantClasses.default;

  const classes = twMerge(
    baseClasses,
    variantClass,
    height,
    width,
    rounded,
    bgColor,
    textColor,
    className
  );

  const content = (
    <>
      {iconPosition === "left" && icon && (
        <i className={`ri-${icon} text-[1rem]`} />
      )}

      {children}

      {iconPosition === "right" && icon && (
        <i className={`ri-${icon} text-[1rem]`} />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
}

export default Button;