import React, { useState, useEffect } from "react";
import { getApplicationById, updateApplication, approveApplication, generateDoc } from "../../services/api";
import { motion } from "framer-motion";
import SidebarHeader from "./SidebarHeader";
import StudentForm from "./StudentForm";
import AdvisorForm from "./AdvisorForm";
import SurveyForm from "./SurveyForm";
import StankinLogo from "./StankinLogo";
import axios from "axios";
import "../../styles/ApplicationSidebar.css";

const ApplicationSidebar = ({ applicationId, onClose, onUpdateSuccess }) => {
  const [application, setApplication] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [form, setForm] = useState({
    student: {
      id: "",
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
      id: "",
      firstName: "",
      lastName: "",
      academicTitle: "",
      department: "",
      university: "",
      email: "",
      phoneNumber: "",
      section: ""
    },
    survey: {
      id: "",
      topicTitle: "",
      topicDescription: "",
      status: "",
      conferenceRoom: "",
      conferenceDate: ""
    }
  });

  const [files, setFiles] = useState([]);

  useEffect(() => {
    if (applicationId) {
      fetchApplication(applicationId);
      fetchFilesMetadata(applicationId);
    }
  }, [applicationId]);

  const fetchApplication = async (id) => {
    try {
      const response = await getApplicationById(id);
      setApplication(response.data);
      setForm({
        student: {
          id: response.data.student.id,
          firstName: response.data.student.firstName,
          lastName: response.data.student.lastName,
          email: response.data.student.email,
          phoneNumber: response.data.student.phoneNumber,
          faculty: response.data.student.faculty,
          course: response.data.student.course,
          researchAdvisorId: response.data.student.researchAdvisorId,
          educationLevel: response.data.student.educationLevel,
          educationForm: response.data.student.educationForm,
          yearStudy: response.data.student.yearStudy,
          groupStudent: response.data.student.groupStudent
        },
        researchAdvisor: {
          id: response.data.researchAdvisor.id,
          firstName: response.data.researchAdvisor.firstName,
          lastName: response.data.researchAdvisor.lastName,
          academicTitle: response.data.researchAdvisor.academicTitle,
          department: response.data.researchAdvisor.department,
          university: response.data.researchAdvisor.university,
          email: response.data.researchAdvisor.email,
          phoneNumber: response.data.researchAdvisor.phoneNumber,
          section: response.data.researchAdvisor.section
        },
        survey: {
          id: response.data.survey.id,
          topicTitle: response.data.survey.topicTitle,
          topicDescription: response.data.survey.topicDescription,
          status: response.data.survey.status,
          conferenceRoom: response.data.survey.conferenceRoom,
          conferenceDate: response.data.survey.conferenceDate
        }
      });
    } catch (error) {
      console.error("Ошибка загрузки данных о заявке:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchFilesMetadata = async (applicationId) => {
    try {
      const response = await axios.get(`http://localhost:8002/api/files/${applicationId}`);
      setFiles(response.data);
    } catch (error) {
      console.error("Ошибка при получении метаданных файлов:", error);
    }
  };

  const handleDownloadFile = async (filePath, fileName) => {
    try {
      const response = await axios.get(`http://localhost:8002/api/files/download/${filePath}`, {
        responseType: 'blob'
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', fileName);
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error("Ошибка при скачивании файла:", error);
    }
  };

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      await updateApplication(applicationId, form);
      setIsEditing(false);
      onUpdateSuccess();
    }
  };

  const handleApprove = async () => {
    if (application.survey.status !== "Утверждено" && validateForm()) {
      await approveApplication(applicationId);
      setApplication((prev) => ({
        ...prev,
        survey: {
          ...prev.survey,
          status: "Утверждено"
        }
      }));
      onUpdateSuccess();
    }
  };

  const handleDownload = async () => {
    const requestData = {
      universityName: form.researchAdvisor.university,
      studentName: `${form.student.lastName} ${form.student.firstName}`,
      topicReportDescription: form.survey.topicDescription,
      topicReport: form.survey.topicTitle,
      advisorName: `${form.researchAdvisor.lastName} ${form.researchAdvisor.firstName}`,
      educationLevel: form.student.educationLevel,
      educationDirection: form.student.faculty,
      formEducation: form.student.educationForm,
      numberPhone: form.student.phoneNumber,
      email: form.student.email,
      section: form.researchAdvisor.section,
      academicTitle: form.researchAdvisor.academicTitle,
      faculty: form.student.faculty,
      yearStudy: form.student.yearStudy,
      group: form.student.groupStudent,
      base: form.student.base
    };

    try {
      const response = await generateDoc(requestData);
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'filled_document.docx');
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error("Ошибка при загрузке документа:", error);
    }
  };

  const validateForm = () => {
    const { student, researchAdvisor, survey } = form;
    if (!student.firstName || !student.lastName || !student.email || !student.phoneNumber || !student.faculty || !student.course || !student.educationLevel || !student.educationForm || !student.yearStudy || !student.groupStudent) {
      alert("Все поля студента должны быть заполнены.");
      return false;
    }
    if (!researchAdvisor.firstName || !researchAdvisor.lastName || !researchAdvisor.academicTitle || !researchAdvisor.department || !researchAdvisor.university || !researchAdvisor.email || !researchAdvisor.phoneNumber) {
      alert("Все поля научного руководителя должны быть заполнены.");
      return false;
    }
    if (!survey.topicTitle || !survey.topicDescription || !survey.conferenceRoom || !survey.conferenceDate) {
      alert("Все поля опроса должны быть заполнены.");
      return false;
    }
    return true;
  };

  if (!applicationId) return null;

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.3 }}
      className="sidebar-container"
    >
      <button className="close-button" onClick={onClose}>
        &times;
      </button>
      {loading ? (
        <p className="loading-text">Загрузка...</p>
      ) : (
        <div>
          <SidebarHeader
            title={application.survey.topicTitle}
            isEditing={isEditing}
            onEdit={() => setIsEditing(true)}
            onSave={handleSubmit}
            onApprove={handleApprove}
            onDownload={handleDownload}
            status={application.survey.status}
          />
          <form onSubmit={handleSubmit} className="form-body">
            <StudentForm form={form.student} handleChange={handleChange} isEditing={isEditing} status={application.survey.status} />
            <AdvisorForm form={form.researchAdvisor} handleChange={handleChange} isEditing={isEditing} status={application.survey.status} />
            <SurveyForm form={form.survey} handleChange={handleChange} isEditing={isEditing} status={application.survey.status} />
          </form>
          <div className="file-slider">
            {files.map((file, index) => (
              <div key={index} className="file-item">
                <button className="view-button" onClick={() => handleDownloadFile(file.filePath, file.fileName)}>
                  Скачать {file.type === 'signed' ? 'Подписанный' : 'Дополнительный'} файл
                </button>
              </div>
            ))}
          </div>
          <StankinLogo />
        </div>
      )}
    </motion.div>
  );
};

export default ApplicationSidebar;
