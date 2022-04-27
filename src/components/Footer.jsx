import React from "react";

function Footer() {
  const current_year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ Abdelrahman H.{current_year}</p>
    </footer>
  );
}

export default Footer;
