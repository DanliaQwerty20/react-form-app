import React from "react";
import "../../styles/ApplicationSidebar.css";
const SidebarHeader = ({ title, isEditing, onEdit, onSave, onApprove, onDownload, status }) => {
  return (
    <div className="sidebar-header">
      <h2 className="sidebar-title">{title}</h2>
      {isEditing ? (
        <button className="edit-button" onClick={onSave}>
          Сохранить
        </button>
      ) : (
        <div className="sidebar-buttons">
          {status !== "Утверждено" && (
            <button className="edit-button" onClick={onEdit}>
              Редактировать
            </button>
          )}
          {status !== "Утверждено" && (
            <button className="approve-button" onClick={onApprove}>
              Утвердить
            </button>
          )}
          {status === "Утверждено" && (
            <button className="download-button" onClick={onDownload}>
              Скачать файл
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default SidebarHeader;