import React from "react";

const StudentInfoForm = ({ form, handleChange }) => {
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
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="student.yearStudy">Год обучения</label>
        <input
          type="number"
          name="student.yearStudy"
          id="student.yearStudy"
          className="form-input"
          value={form.yearStudy}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="student.groupStudent">Группа</label>
        <input
          type="text"
          name="student.group"
          id="student.group"
          className="form-input"
          value={form.group}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="student.faculty">Институт</label>
        <input
          type="text"
          name="student.faculty"
          id="student.faculty"
          className="form-input"
          value={form.faculty}
          onChange={handleChange}
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
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="student.base">Основа</label>
        <input
          type="text"
          name="student.base"
          id="student.base"
          className="form-input"
          value={form.base}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="student.educationLevel">Уровень образования</label>
        <select
          name="student.educationLevel"
          id="student.educationLevel"
          className="form-input"
          value={form.educationLevel}
          onChange={handleChange}
          required
        >
          <option value="">Выберите уровень образования</option>
          <option value="Бакалавриат">Бакалавриат</option>
          <option value="Магистратура">Магистратура</option>
          <option value="Аспирантура">Аспирантура</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="student.educationForm">Форма обучения</label>
        <select
          name="student.educationForm"
          id="student.educationForm"
          className="form-input"
          value={form.educationForm}
          onChange={handleChange}
          required
        >
          <option value="">Выберите форму обучения</option>
          <option value="Очная">Очная</option>
          <option value="Заочная">Заочная</option>
          <option value="Очно-заочная">Очно-заочная</option>
        </select>
      </div>
    </div>
  );
};

export default StudentInfoForm;
