import React from "react";
import "../../styles/ApplicationSidebar.css";
const StudentForm = ({ form, handleChange, isEditing, status }) => {
  return (
    <div className="form-section">
      <h3>Студент</h3>
      <div className="form-group">
        <label htmlFor="student.firstName">Имя студента</label>
        <input
          type="text"
          name="student.firstName"
          id="student.firstName"
          className="form-input"
          value={form.firstName}
          onChange={handleChange}
          readOnly={!isEditing || status === "Утверждено"}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="student.lastName">Фамилия студента</label>
        <input
          type="text"
          name="student.lastName"
          id="student.lastName"
          className="form-input"
          value={form.lastName}
          onChange={handleChange}
          readOnly={!isEditing || status === "Утверждено"}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="student.email">Email студента</label>
        <input
          type="email"
          name="student.email"
          id="student.email"
          className="form-input"
          value={form.email}
          onChange={handleChange}
          readOnly={!isEditing || status === "Утверждено"}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="student.phoneNumber">Телефон студента</label>
        <input
          type="text"
          name="student.phoneNumber"
          id="student.phoneNumber"
          className="form-input"
          value={form.phoneNumber}
          onChange={handleChange}
          readOnly={!isEditing || status === "Утверждено"}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="student.faculty">Факультет</label>
        <input
          type="text"
          name="student.faculty"
          id="student.faculty"
          className="form-input"
          value={form.faculty}
          onChange={handleChange}
          readOnly={!isEditing || status === "Утверждено"}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="student.course">Курс</label>
        <input
          type="number"
          name="student.course"
          id="student.course"
          className="form-input"
          value={form.course}
          onChange={handleChange}
          readOnly={!isEditing || status === "Утверждено"}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="student.educationLevel">Уровень образования</label>
        <input
          type="text"
          name="student.educationLevel"
          id="student.educationLevel"
          className="form-input"
          value={form.educationLevel}
          onChange={handleChange}
          readOnly={!isEditing || status === "Утверждено"}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="student.educationForm">Форма обучения</label>
        <input
          type="text"
          name="student.educationForm"
          id="student.educationForm"
          className="form-input"
          value={form.educationForm}
          onChange={handleChange}
          readOnly={!isEditing || status === "Утверждено"}
          required
        />
      </div>
    </div>
  );
};

export default StudentForm;