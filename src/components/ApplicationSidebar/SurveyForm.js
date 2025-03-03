import React from "react";
import "../../styles/ApplicationSidebar.css";
const SurveyForm = ({ form, handleChange, isEditing, status }) => {
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
          readOnly={!isEditing || status === "Утверждено"}
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
          readOnly={!isEditing || status === "Утверждено"}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="survey.status">Статус</label>
        <input
          type="text"
          name="survey.status"
          id="survey.status"
          className="form-input"
          value={form.status}
          onChange={handleChange}
          readOnly={!isEditing || status === "Утверждено"}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="survey.conferenceDate">Дата конференции</label>
        <input
          type="date"
          name="survey.conferenceDate"
          id="survey.conferenceDate"
          className="form-input"
          value={form.conferenceDate}
          onChange={handleChange}
          readOnly={!isEditing || status === "Утверждено"}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="survey.conferenceRoom">Кабинет</label>
        <input
          type="text"
          name="survey.conferenceRoom"
          id="survey.conferenceRoom"
          className="form-input"
          value={form.conferenceRoom}
          onChange={handleChange}
          readOnly={!isEditing || status === "Утверждено"}
          required
        />
      </div>
    </div>
  );
};

export default SurveyForm;