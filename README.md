# Task-Management

Dụ án sử dụng để quản lý công việc và xem báo cáo công ty.

## 1. Các công nghệ được sử dụng trong dự án

1. [Reactjs](https://reactjs.org/).
2. [Tailwind](https://tailwindcss.com/)
3. [Redux](https://redux.js.org/)
4. [Echarts](https://echarts.apache.org/en/index.html)
5. [Antd](https://ant.design/)

## 2. Prerequired

### 2.1. Nodejs environment

- [Nodejs](https://nodejs.org/en/) sẽ hỗ trợ trong quá trình phát triển cũng như build sản phẩm, vui lòng sử dụng Nodejs từ `^v18`.
- Mẹo: Sử dụng [nvm](https://github.com/coreybutler/nvm-windows/releases) để có thể chuyển đổi môi trường nodejs nhanh hơn.

### 2.2. IDE, TextEditor

- Sử dụng IDE hoặc TextEditor yêu thích của bạn, khuyến khích sử dụng chung [VS code](https://code.visualstudio.com/).

### 2.3. Install extension (Hướng dẫn này được dành riêng cho VScode, các editor khác có thể sẽ khác)

- [ES7+ React/Redux/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)(`options`): Hỗ trợ nhắc lệnh react.
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)(`options`): Hỗ trợ nhắc lệnh Tailwind.
- [CSS Formatter](https://marketplace.visualstudio.com/items?itemName=aeschli.vscode-css-formatter)(`options`): Hỗ trợ format css.
- [C# to TypeScript](https://marketplace.visualstudio.com/items?itemName=adrianwilczynski.csharp-to-typescript)(`options`): Hỗ trợ chuyển đổi các đối tượng C# về Typescript.
- [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)(`options`): Hỗ trợ viết code html.

## 3. Getting started

### 3.1. Clone source

Mở terminal yêu thích của bạn và thực thi lần lượt các lệnh sau:

```bash
cd source_folder_path
git clone http://gitlab.fpt.net/TamBN3/react-template.git
cd react-template
code .
```

### 3.2. Setup biến môi trường

Ở môi trường local, bạn cần cung cấp các biến môi trường cho phù hợp với môi trường của bạn. Biến môi trường ở local được cấu hình trong file .env.local.

```bash
#Copy file trên window
copy .env .env.local
```

Tiến hành thay đổi các config phù hợp:

- VITE_SERVICE_BASE_URL: Server api
- VITE_CLIENT_HOST: serve frontend
- VITE_ALLOW_LOG_HTTP: Hiển thị log trong quá trình thực thi http

### 3.3. Install package

Tại terminal ở bước 3.1 hoặc terminal của vscode, thực thi lệnh sau

```bash
# Nếu bạn sử dụng npm
npm i
# Nếu bạn sử dụng yarn
yarn install
```

### 3.4 Start dev server

Thực thi lệnh sau tại trình terminal yêu thích của bạn

```bash
#Nếu bạn sử dụng npm
npm run dev
#Nếu bạn sử dụng yarn
yarn dev
```

### 3.5 Pre-Commit

Thực thi các lệnh sau để đảm bảo code được sạch:

```bash
#Lệnh dùng để format code về chuẩn
##Nếu bạn sử dụng npm
npm run format
##Nếu bạn sử dụng yarn
yarn run format

#Lệnh dùng để kiểm tra Eslint:
##Nếu bạn sử dụng npm
npm run lint
##Nếu bạn sử dụng yarn
yarn run lint

#Lệnh dùng để sửa lỗi Eslint:
##Nếu bạn sử dụng npm
npm run lint:fix
##Nếu bạn sử dụng yarn
yarn run lint:fix
```

## 4. Folder structure

```bash
.
├── public                              # Chứa các file tỉnh của dự án
│   ├──  images                         # Chứa các hình ảnh
│   └── ...                             # etc
├── src
│   ├── @core                           # Chứa các cấu hình chung của tất cả các dự án
│   ├── components                      # Chứa các components dùng chung
│   ├── hooks                           # Chứa các hooks dùng chung
│   ├── layouts
│   ├── pages                           # Các trang (page) dùng chung sẽ được đặt ở đây
│   ├── routers                         # Các điều hướng (router) dùng chung sẽ được đặt ở đây
│   ├── services                        # Các api (services) dùng chung sẽ được đặt ở đây
│   ├── stores                          # Store dùng chung (Store được chia theo features)
│   ├── styles                          # Scss
│   ├── themes                          # Theme của cả project
│   ├── App.tsx                         # Root app (vui lòng không edit)
│   └── ...                             # Vui lòng không chỉnh sửa các file này
├── .editorconfig                       # file cấu hình format code
├── .gitignore                          # file cấu hình các file ko up lên git
├── vite.config.js                      # file cấu hình các alias (sử dụng vite)
├── tailwind.config.js                  # file cấu hình tailwind
│   └── ...                             # etc
```
