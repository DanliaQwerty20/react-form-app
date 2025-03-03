import React from "react";

const SurveyInfoForm = ({ form, handleChange }) => {
  return (
    <div className="form-section">
      <h3>Опрос</h3>
      <div className="form-group">
        <label htmlFor="survey.topicTitle">Тема</label>
        <input
          type="text"
          name="survey.topicTitle"
          id="survey.topicTitle"
          className="form-input"
          value={form.topicTitle}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="survey.topicDescription">Описание</label>
        <textarea
          name="survey.topicDescription"
          id="survey.topicDescription"
          className="form-input"
          value={form.topicDescription}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="survey.section">Секция</label>
        <input
          type="text"
          name="survey.section"
          id="survey.section"
          className="form-input"
          value={form.section}
          onChange={handleChange}
          required
        />
      </div>
    </div>
  );
};

export default SurveyInfoForm;
