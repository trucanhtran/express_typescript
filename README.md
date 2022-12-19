## package.json
- nodemon: Lắng nghe sự thay đổi của file và cập nhập chúng thay vì phải chạy lại ứng dụng.
- dotenv: Tạo ra biến môi trường và sử dụng nó ở mọi nơi. Tạo file .env để sử dụng thôi.
- sequelize: Thao tác với cơ sở dữ liệu một cách nhanh chóng thuận tiện và dễ sử dụng.
- mysql2: Hỗ trợ kết nối tới mysql.
- sequelize-cli: Hỗ trợ tạo model, migrate, seed.

## package with typescript
- Khi một package không có các loại build-in, bạn có thể cài đặt định nghĩa kiểu thông qua @types npm namespace - nơi lưu trữ các định nghĩa kiểu của TypeScript trong project DefiniteTyped. Khi các package được cài đặt, các types sẽ tự động được compiler của TypeScript include vào.

---

## How to run
- Step1: `docker-compose build`
- Step2: `docker-compose up`

---

## How to run create a table
- Step1: `docker-compose run web model:generate --name Student --attributes firstName:string,lastName:string,email:string`
- Step2: `docker-compose run web npx sequelize-cli db:migrate`

---

## How to access to database in container
- Step1: `docker exec -it mysql-nodejs /bin/sh`
- Step2: `mysql -uroot -p123456`
- Step3: `use nodejs`
- Step4: `show tables;`

---

## Structure directory
- views
- routes
- .env
- app.js
- public
