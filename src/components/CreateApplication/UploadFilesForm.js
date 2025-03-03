import React, { useState } from "react";

const UploadFilesForm = ({ onUpload, applicationId }) => {
  const [signedFile, setSignedFile] = useState(null);
  const [additionalFile, setAdditionalFile] = useState(null);

  const handleSignedFileChange = (e) => {
    setSignedFile(e.target.files[0]);
  };

  const handleAdditionalFileChange = (e) => {
    setAdditionalFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (signedFile && additionalFile) {
      const formData = new FormData();
      formData.append("applicationId", applicationId);
      formData.append("signedFile", signedFile);
      formData.append("additionalFile", additionalFile);
      onUpload(formData);
    } else {
      alert("Пожалуйста, загрузите оба файла.");
    }
  };

  return (
    <div className="upload-container">
      <h2>Загрузите файлы</h2>
      <div className="form-group">
        <label htmlFor="signedFile">Подписанный документ (WORD)</label>
        <input type="file" id="signedFile" accept=".docx" onChange={handleSignedFileChange} />
      </div>
      <div className="form-group">
        <label htmlFor="additionalFile">Дополнительный документ (WORD)</label>
        <input type="file" id="additionalFile" accept=".docx" onChange={handleAdditionalFileChange} />
      </div>
      <button onClick={handleUpload} className="form-button">
        Загрузить
      </button>
    </div>
  );
};

export default UploadFilesForm;
