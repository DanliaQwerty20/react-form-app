# Используем официальный образ Node.js из Docker Hub
FROM node:14-alpine

# Устанавливаем рабочую директорию в контейнере
WORKDIR /app

# Копируем файлы package.json и package-lock.json и устанавливаем зависимости
COPY package*.json ./
RUN npm install

# Копируем остальные файлы приложения
COPY . .

# Собираем приложение
RUN npm run build

# Используем nginx для обслуживания статических файлов
FROM nginx:alpine
COPY --from=0 /app/build /usr/share/nginx/html

# Указываем, что контейнер должен прослушивать порт 80
EXPOSE 80

# Команда для запуска nginx
CMD ["nginx", "-g", "daemon off;"]
