import React from "react";
import PropTypes from "prop-types";

const variants = {
  primary: "bg-blue-500 text-white", // Add styles for the primary variant
};

const sizes = {
  xs: "h-[24px] w-[24px]",
};

const Radio = React.forwardRef(
  (
    {
      className = "",
      name = "",
      label = "",
      id = "radio_id",
      variant = "primary",
      size = "xs",
      ...restProps
    },
    ref
  ) => {
    return (
      <label
        className={`flex items-center gap-[5px] cursor-pointer ${className}`}
      >
        <input
          className={`${sizes[size]} ${variant && variants[variant]}`}
          ref={ref}
          type="radio"
          name={name}
          id={id}
          {...restProps}
        />
        <span>{label}</span>
      </label>
    );
  }
);

Radio.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string,
  size: PropTypes.oneOf(["xs"]),
  variant: PropTypes.oneOf(["primary"]),
};

export { Radio };
