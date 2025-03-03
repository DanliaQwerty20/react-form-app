import React, { useState, useEffect } from "react";
import { createSurvey, getResearchAdvisors, generateDoc } from "../../services/api";
import { useNavigate } from "react-router-dom";
import axios from 'axios'; // Добавлен импорт axios
import "../../styles/CreateApplication.css";
import StudentInfoForm from "./StudentInfoForm";
import AdvisorInfoForm from "./AdvisorInfoForm";
import SurveyInfoForm from "./SurveyInfoForm";
import UploadFilesForm from "./UploadFilesForm";

const CreateApplication = () => {
  const [form, setForm] = useState({
    student: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      faculty: "",
      course: "",
      researchAdvisorId: "",
      educationLevel: "",
      educationForm: "",
      yearStudy: "",
      groupStudent: ""
    },
    researchAdvisor: {
      firstName: "",
      lastName: "",
      academicTitle: "",
      department: "",
      university: "",
      email: "",
      phoneNumber: ""
    },
    survey: {
      topicTitle: "",
      topicDescription: "",
      status: "черновик",
      section: ""
    }
  });

  const [advisors, setAdvisors] = useState([]);
  const [showUploadForm, setShowUploadForm] = useState(false);
  const [applicationId, setApplicationId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAdvisors = async () => {
      const advisors = await getResearchAdvisors();
      setAdvisors(advisors);
    };
    fetchAdvisors();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name.split(".")[0]]: {
        ...form[name.split(".")[0]],
        [name.split(".")[1]]: value
      }
    });
  };

  const handleAdvisorChange = (e) => {
    const selectedAdvisor = advisors.find(advisor => advisor.id === e.target.value);
    setForm({
      ...form,
      student: {
        ...form.student,
        researchAdvisorId: selectedAdvisor.id
      },
      researchAdvisor: {
        firstName: selectedAdvisor.firstName,
        lastName: selectedAdvisor.lastName,
        academicTitle: selectedAdvisor.academicTitle,
        department: selectedAdvisor.department,
        university: selectedAdvisor.university,
        email: selectedAdvisor.email,
        phoneNumber: selectedAdvisor.phoneNumber
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await createSurvey(form);
    const newApplicationId = response.data;
    setApplicationId(newApplicationId);

    await generateDoc({
      universityName: form.researchAdvisor.university,
      studentName: `${form.student.firstName} ${form.student.lastName}`,
      topicReportDescription: form.survey.topicDescription,
      topicReport: form.survey.topicTitle,
      advisorName: `${form.researchAdvisor.firstName} ${form.researchAdvisor.lastName}`,
      educationLevel: form.student.educationLevel,
      educationDirection: form.student.faculty,
      formEducation: form.student.educationForm,
      numberPhone: form.student.phoneNumber,
      email: form.student.email,
      section: form.survey.section,
      academicTitle: form.researchAdvisor.academicTitle,
      faculty: form.student.faculty,
      yearStudy: form.student.yearStudy,
      group: form.student.groupStudent,
      base: form.student.base,
    });

    setShowUploadForm(true);
  };

  const handleFilesUpload = async (formData) => {
    try {
        await axios.post("http://localhost:8002/api/files/upload", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        alert("Файлы успешно загружены!");
        navigate("/");
    } catch (error) {
        console.error("Ошибка при загрузке файлов:", error);
        alert("Ошибка при загрузке файлов. Пожалуйста, попробуйте снова.");
    }
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Создание заявки</h1>
      {!showUploadForm ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <StudentInfoForm form={form.student} handleChange={handleChange} />
          <AdvisorInfoForm
            form={form.researchAdvisor}
            handleChange={handleChange}
            advisors={advisors}
            handleAdvisorChange={handleAdvisorChange}
          />
          <SurveyInfoForm form={form.survey} handleChange={handleChange} />
          <button type="submit" className="form-button">
            Создать
          </button>
        </form>
      ) : (
        <UploadFilesForm onUpload={handleFilesUpload} applicationId={applicationId} />
      )}
    </div>
  );
};

export default CreateApplication;
