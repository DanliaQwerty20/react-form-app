import axios from "axios";

const API_CONFERENCE = "http://localhost:8002/api/conference";
const API_APPLICATIONS = "http://localhost:8003/api/applications";
const API_DOC = "http://localhost:8003/api/generate-doc";

// Получение списка заявок (8002)
export const getSurveys = async () => {
  const response = await axios.get(`${API_CONFERENCE}/get`);
  return response.data;
};

// Создание заявки (8002)
export const createSurvey = async (data) => {
  try {
    return await axios.post(`${API_CONFERENCE}/create`, data);
  } catch (error) {
    console.error("Ошибка при создании заявки:", error);
    throw error;
  }
};

// Список преподов
export const getResearchAdvisors = async () => {
  const response = await axios.get(`${API_CONFERENCE}/advisors`);
  return response.data;
};

// Получение списка с пагинацией
export const getApplications = async (page = 1, pageSize = 10) => {
  try {
    const response = await axios.get(API_APPLICATIONS, { params: { page, pageSize } });
    console.log("Полученные данные:", response.data);
    return response.data;
  } catch (error) {
    console.error("Ошибка при запросе заявок:", error);
    throw error;
  }
};

// Получение заявки по ID (8003)
export const getApplicationById = async (id) => {
  return await axios.get(`${API_APPLICATIONS}/${id}`);
};

// Обновление заявки (8003)
export const updateApplication = async (id, data) => {
  return await axios.put(`${API_APPLICATIONS}/${id}`, data);
};

// Обновление статуса (8003)
export const updateApplicationStatus = async (id, status) => {
  return await axios.put(`${API_APPLICATIONS}/${id}/status`, status);
};

// Утверждение заявки (8003)
export const approveApplication = async (id) => {
  return await axios.post(`${API_APPLICATIONS}/${id}/approve`);
};

// Генерация документа
export const generateDoc = async (requestData) => {
  try {
    const response = await axios.post(API_DOC, requestData, {
      responseType: 'blob', // Указываем, что ожидаем двоичные данные
    });

    // Создаем ссылку для скачивания файла
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'filled_document.docx'); // Указываем имя файла
    document.body.appendChild(link);
    link.click();
    link.remove();

  } catch (error) {
    console.error("Ошибка генерации документа:", error);
    throw error;
  }
};

export const handleFilesUpload = async (formData, navigate) => {
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
