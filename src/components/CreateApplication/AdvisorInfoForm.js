import React from "react";

const AdvisorInfoForm = ({ form, handleChange, advisors, handleAdvisorChange }) => {
  return (
    <div className="form-section">
      <h3>Научный руководитель</h3>
      <div className="form-group">
        <label htmlFor="researchAdvisor.id">Научный руководитель</label>
        <select
          name="researchAdvisor.id"
          id="researchAdvisor.id"
          className="form-input advisor-select"
          value={form.researchAdvisorId}
          onChange={handleAdvisorChange}
          required
        >
          <option value="">Выберите научного руководителя</option>
          {advisors.map(advisor => (
            <option key={advisor.id} value={advisor.id}>
              {`${advisor.firstName} ${advisor.lastName}`}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="researchAdvisor.firstName">Имя руководителя</label>
        <input
          type="text"
          name="researchAdvisor.firstName"
          id="researchAdvisor.firstName"
          className="form-input"
          value={form.firstName}
          onChange={handleChange}
          required
          readOnly
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
          required
          readOnly
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
          required
          readOnly
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
          required
          readOnly
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
          required
          readOnly
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
          required
          readOnly
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
          required
          readOnly
        />
      </div>
    </div>
  );
};

export default AdvisorInfoForm;
