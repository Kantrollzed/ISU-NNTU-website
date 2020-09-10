# Сайт кафедры "Информатика и системы управления" ИРИТ НГТУ им Р.Е. Алексеева

Используются **MongoDB, Express.js, Angular, Node.js** для формирования динамичного и масштабируемого SPA WEB-приложения.

Для запуска вам потребуется:

Установить:
 - Node.js
 - Angular CLI
 - Webpack

Создать проект:
```
cd ./your_dir
ng new your_project
cd your_project
```
Установить пакеты:
```
sudo npm install express --save
sudo npm install nodemon --save
```
Установить ядро MongoDB:

https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/

https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/

Установить пакеты:
```
sudo npm install mongoose --save
sudo npm install body-parser  --save
```

Добавить инструмент angular-material, выбрав custom стили:
```
ng add @angular/material
```
Скачать данный проект:
```
git clone https://github.com/Kantrollzed/ISU-NNTU-website.git
```

Заменить директорию ```./your_project/src``` на ```./src```, представленную в проекте

Добавить директорию ```./api``` в ```./your_project```



Запустить frontend:
```
cd ./your_project
npm run start
```
Параллельно запустить backend:
```
cd ./your_project/api
npm run start
```
