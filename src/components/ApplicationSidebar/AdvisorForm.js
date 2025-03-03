import React from "react";
import "../../styles/ApplicationSidebar.css";
const AdvisorForm = ({ form, handleChange, isEditing, status }) => {
  return (
    <div className="form-section">
      <h3>Научный руководитель</h3>
      <div className="form-group">
        <label htmlFor="researchAdvisor.firstName">Имя руководителя</label>
        <input
          type="text"
          name="researchAdvisor.firstName"
          id="researchAdvisor.firstName"
          className="form-input"
          value={form.firstName}
          onChange={handleChange}
          readOnly={!isEditing || status === "Утверждено"}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="researchAdvisor.lastName">Фамилия руководителя</label>
        <input
          type="text"
          name="researchAdvisor.lastName"
          id="researchAdvisor.lastName"
          className="form-input"
          value={form.lastName}
          onChange={handleChange}
          readOnly={!isEditing || status === "Утверждено"}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="researchAdvisor.academicTitle">Ученая степень</label>
        <input
          type="text"
          name="researchAdvisor.academicTitle"
          id="researchAdvisor.academicTitle"
          className="form-input"
          value={form.academicTitle}
          onChange={handleChange}
          readOnly={!isEditing || status === "Утверждено"}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="researchAdvisor.department">Кафедра</label>
        <input
          type="text"
          name="researchAdvisor.department"
          id="researchAdvisor.department"
          className="form-input"
          value={form.department}
          onChange={handleChange}
          readOnly={!isEditing || status === "Утверждено"}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="researchAdvisor.university">Университет</label>
        <input
          type="text"
          name="researchAdvisor.university"
          id="researchAdvisor.university"
          className="form-input"
          value={form.university}
          onChange={handleChange}
          readOnly={!isEditing || status === "Утверждено"}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="researchAdvisor.email">Email руководителя</label>
        <input
          type="email"
          name="researchAdvisor.email"
          id="researchAdvisor.email"
          className="form-input"
          value={form.email}
          onChange={handleChange}
          readOnly={!isEditing || status === "Утверждено"}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="researchAdvisor.phoneNumber">Телефон руководителя</label>
        <input
          type="text"
          name="researchAdvisor.phoneNumber"
          id="researchAdvisor.phoneNumber"
          className="form-input"
          value={form.phoneNumber}
          onChange={handleChange}
          readOnly={!isEditing || status === "Утверждено"}
          required
        />
      </div>
    </div>
  );
};

export default AdvisorForm;