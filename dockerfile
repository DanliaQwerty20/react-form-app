# Используем официальный образ Node.js из Docker Hub
FROM node:14-alpine

# Устанавливаем рабочую директорию в контейнере
WORKDIR /app

# Копируем файлы package.json и package-lock.json и устанавливаем зависимости
COPY package*.json ./
RUN npm install

# Копируем остальные файлы приложения
COPY . .

# Указываем, что контейнер должен прослушивать порт 3000
EXPOSE 3000

# Команда для запуска приложения в режиме разработки
CMD ["npm", "start"]
