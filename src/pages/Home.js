import React, { useEffect, useState } from "react";
import { getApplications } from "../services/api";
import { useNavigate } from "react-router-dom";
import ApplicationSidebar from "../components/ApplicationSidebar/ApplicationSidebar";
import "../styles/Home.css"; // Импортируем стили
import "../styles/GlobalStyles.css";

const Home = () => {
  const [applications, setApplications] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedApplicationId, setSelectedApplicationId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    loadApplications();
  }, [page]);

  const loadApplications = async () => {
    try {
      const data = await getApplications(page, 10);
      setApplications(data);
      setTotalPages(5); // пока заглушка, лучше получать total страниц с бэка
    } catch (error) {
      console.error("Ошибка загрузки заявок:", error);
    }
  };

  return (
    <div className="container">
      <div className="table-container">
        <header className="header">
          <h1 className="title">Заявки</h1>
          <button className="create-button" onClick={() => navigate("/create")}>
            Создать заявку
          </button>
        </header>
        <table className="application-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Тема</th>
              <th>Студент</th>
              <th>Преподаватель</th>
              <th>Дата</th>
              <th>Статус</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app) => (
              <tr
                key={app.uuid}
                className="application-row"
                onClick={() => setSelectedApplicationId(app.uuid)}
              >
                <td>{app.uuid}</td>
                <td>{app.topicTitle}</td>
                <td>{app.studentFullName}</td>
                <td>{app.advisorFullName}</td>
                <td>{app.conferenceDate}</td>
                <td>
                  <span className={`status-button ${app.status.toLowerCase()}`}>
                    {app.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Пагинация */}
        <div className="pagination">
          <button
            className="pagination-button"
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
          >
            Назад
          </button>
          <span className="pagination-info">
            Страница {page} из {totalPages}
          </span>
          <button
            className="pagination-button"
            onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={page === totalPages}
          >
            Вперёд
          </button>
        </div>
      </div>

      {/* Sidebar */}
      {selectedApplicationId && (
        <ApplicationSidebar
          applicationId={selectedApplicationId}
          onClose={() => setSelectedApplicationId(null)}
          onUpdateSuccess={loadApplications} // Передаем функцию обновления списка заявок
        />
      )}

      {/* Футер */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Станкин. Все права защищены.</p>
        <a href="https://stankin.ru" target="_blank" rel="noopener noreferrer">
          Перейти на сайт Станкина
        </a>
      </footer>
    </div>
  );
};

export default Home;
