import React from "react";
import "../../styles/ApplicationSidebar.css";
const StankinLogo = () => {
  return (
    <div className="stankin-logo">
      <a href="https://stankin.ru" target="_blank" rel="noopener noreferrer">
        <img
          src="https://stankin.ru/upload/medialibrary/701/70181551180c409205f951335868546f.jpg"
          alt="Логотип Станкина"
        />
      </a>
      <p>&copy; {new Date().getFullYear()} Станкин. Все права защищены.</p>
    </div>
  );
};

export default StankinLogo;