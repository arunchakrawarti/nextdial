"use client";
import clsx from "clsx";

const Input = ({
  label,
  className = "",
  iconClass,
  iconEye,
  error,
  options = [],
  valueKey,
  labelKey,
  labelRender,
  icon = "",
  ...rest
}) => {
  return (
    <div className="flex w-full flex-col gap-1">
      {label && (
        <label className="font-inter font-semibold mb-1 text-[12px] text-gray-600 uppercase tracking-wider font-lexend">
          {label}
        </label>
      )}

      {/* TEXTAREA */}
      {rest?.type === "textarea" ? (
        <div
          className={clsx(
            "flex w-full gap-3 rounded md:rounded-lg px-3 py-2 border border-gray-300 font-lexend bg-white min-h-36 max-h-56",
            error && "border-red-400 ring-2 ring-red-300",
            className
          )}
        >
          {icon && <i className={`${icon} ri-lg text-gray-400`} />}
          <textarea
            className="w-full outline-none text-sm bg-transparent font-lexend"
            {...rest}
          />
        </div>
      ) : rest?.type === "select" ? (
        /* SELECT */
        <div
          className={clsx(
            "flex w-full items-center gap-3 rounded md:rounded-lg px-3 py-1 border border-gray-300 bg-white font-lexend",
            error && "border-red-400 ring-2 ring-red-300",
            className
          )}
        >
          {icon && <i className={`${icon} ri-lg text-gray-400`} />}

          <select
            defaultValue=""
            {...rest}
            className="py-3 md:py-2.5 w-full text-sm outline-none bg-white text-gray-700"
          >
            {rest?.placeholder && (
              <option value="" disabled className="text-gray-400">
                {rest.placeholder}
              </option>
            )}

            {options.map((opt, idx) => (
              <option
                key={idx}
                value={opt[valueKey] || opt.value || opt}
                className="text-gray-800"
              >
                {labelRender
                  ? labelRender(opt)
                  : opt[labelKey] || opt.label || opt}
              </option>
            ))}
          </select>
        </div>
      ) : (
        /* INPUT */
        <div
          className={clsx(
            "flex w-full items-center gap-3 rounded md:rounded-lg px-3 py-1 border border-gray-300 bg-white font-lexend",
            error && "border-red-400 ring-2 ring-red-300",
            className
          )}
        >
          {icon && <i className={`${icon} ri-lg text-gray-400`} />}

          <input
            {...rest}
            className="py-3 md:py-2.5 w-full text-sm outline-none bg-transparent font-lexend text-gray-700"
          />
        </div>
      )}

      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
};

export default Input;