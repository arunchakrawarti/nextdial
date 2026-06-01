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
  placeholder,
  type = "text",
  defaultValue,
  disabled,
  ...rest 
}) => {
  return (
    <div className="flex w-full flex-col gap-1">
      {label && type !== "checkbox" && (
        <label className="font-semibold mb-1 text-[12px] text-gray-600 uppercase tracking-wider font-lexend">
          {label}
        </label>
      )}

      {/* CHECKBOX */}
      {type === "checkbox" ? (
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            disabled={disabled}
            defaultValue={defaultValue}
            {...rest}
            className={clsx(
              "h-4 w-4 rounded border-gray-300 accent-primary",
              error && "border-red-400",
            )}
          />
          <span className="text-sm text-gray-700 font-lexend">
            {rest.checkboxLabel || label}
          </span>
        </label>
      ) : type === "textarea" ? (
        <div
          className={clsx(
            "flex w-full gap-3 rounded md:rounded-lg px-3 py-2 border border-gray-300 font-lexend bg-white min-h-36 max-h-56",
            error && "border-red-400 ring-2 ring-red-300",
            className,
          )}
        >
          {icon && <i className={`${icon} ri-lg text-gray-400`} />}
          <textarea
            disabled={disabled}
            defaultValue={defaultValue}
            placeholder={placeholder}
            className="w-full outline-none text-gray-700 text-sm bg-transparent font-lexend"
            {...rest}
          />
        </div>
      ) : type === "select" ? (
        
        <div
          className={clsx(
            "flex w-full items-center gap-3 rounded md:rounded-lg px-3 py-1 border border-gray-300 bg-white font-lexend",
            error && "border-red-400 ring-2 ring-red-300",
            className,
          )}
        >
          {icon && <i className={`${icon} ri-lg text-gray-400`} />}

          <select
            defaultValue={defaultValue || ""}
            disabled={disabled}
            {...rest}
            className="py-3 md:py-2.5 w-full text-sm outline-none bg-white text-gray-700 cursor-pointer"
          >
            {placeholder && (
              <option value="" disabled className="text-gray-400">
                {placeholder}
              </option>
            )}

            {options && options.map((opt, idx) => {
              const val = opt && typeof opt === 'object' ? (opt[valueKey] || opt.value) : opt;
              const displayLabel = opt && typeof opt === 'object' 
                ? (labelRender ? labelRender(opt) : (opt[labelKey] || opt.label)) 
                : opt;

              return (
                <option
                  key={idx}
                  value={val}
                  className="text-gray-800"
                >
                  {displayLabel}
                </option>
              );
            })}
          </select>
        </div>
      ) : (
        <div
          className={clsx(
            "flex w-full items-center gap-3 rounded md:rounded-lg px-3 py-1 border border-gray-300 bg-white font-lexend",
            error && "border-red-400 ring-2 ring-red-300",
            className,
          )}
        >
          {icon && <i className={`${icon} ri-lg text-gray-400`} />}

          <input
            type={type}
            disabled={disabled}
            defaultValue={defaultValue}
            placeholder={placeholder}
            {...rest}
            className={clsx(
              "w-full text-sm outline-none bg-transparent font-lexend text-gray-700",
              "py-3 md:py-2.5",
              type === "otp" && "text-center",
            )}
          />
        </div>
      )}

      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
};

export default Input;