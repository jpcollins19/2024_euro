import Last_Updated from "./Last_Updated";
import Email_Updates from "./Email_Updates";

const Non_Admin_Cont = ({ isMobile }) => {
  return (
    <div className="mhd-non-admin">
      <Last_Updated />
      <Email_Updates isMobile={isMobile} />
    </div>
  );
};

export default Non_Admin_Cont;
