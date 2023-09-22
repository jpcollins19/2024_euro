import { getScreenWidth } from "../../store";
import Select from "react-select";

const Dropdown = ({ placeholder, options, width, defaultValue, set }) => {
  const widthNum = Number(width.split("rem")[0]);

  const optionWidth = widthNum - 1.2;

  const zIndex = 10;

  const isMobileView = getScreenWidth("max", 65);

  const styles = {
    menuPortal: (styles) => {
      return {
        ...styles,
        zIndex,
      };
    },
    menu: (styles) => {
      return {
        ...styles,
        zIndex,
        background: "#485563",
      };
    },

    placeholder: (styles) => {
      return {
        ...styles,
        color: "white",
      };
    },
    dropdownIndicator: (styles) => {
      return {
        ...styles,
        color: "white",
        "&:hover": {
          color: "white",
        },
      };
    },
    indicatorSeparator: (styles) => {
      return {
        ...styles,
        background: "white",
      };
    },
    singleValue: (styles) => {
      return {
        ...styles,
        color: "white",
      };
    },
    control: (styles) => {
      return {
        ...styles,
        background: "none",
        color: "white",
        border: "solid white 2px",
        cursor: "pointer",
        width: isMobileView ? `${width * 1.35}rem` : `${width}rem`,
        height: isMobileView ? "64px" : "43px",
        borderRadius: "0.5rem",
        fontSize: isMobileView ? "2rem" : "1.2rem",
        textAlign: "center",
        "&:hover": {
          border: "solid white 2px",
        },
      };
    },
    option: (styles) => {
      return {
        ...styles,
        background: "#485563", //when dropdown options are not highlited
        color: "white",
        borderBottom: "solid lightGrey 2px",
        cursor: "pointer",
        width: isMobileView
          ? `${optionWidth * 1.45}rem`
          : `${optionWidth - 1}.01rem`,
        fontSize: isMobileView ? "1.7rem" : "1.2rem",
        textAlign: "center",
        "&:hover": {
          background: "#5a6d81", //when dropdown option is highlited
        },
      };
    },
  };

  return (
    <div className="dropdown-cont">
      <Select
        menuPortalTarget={document.body}
        menuPosition="fixed"
        options={options && options}
        placeholder={placeholder ? placeholder : ""}
        defaultValue={defaultValue ? defaultValue : ""}
        onChange={set && set}
        styles={styles}
        isSearchable={false}
        className="dropdown"
      />
    </div>
  );
};

export default Dropdown;
