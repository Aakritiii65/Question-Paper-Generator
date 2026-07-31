# 📄 AI Question Paper Generator

An AI-powered Question Paper Generator that creates customized question papers based on exam level, subject, topic, and total marks. It also generates AI-based MCQs and provides Previous Year Questions (PYQs).

---

## 🚀 Live Demo

### 🌐 Frontend
https://question-paper-generator-liart.vercel.app/

### ⚙️ Backend API
https://question-paper-generator-sdwh.onrender.com/

---

## ✨ Features

- 📚 Generate question papers using a Greedy Algorithm.
- 🤖 AI-powered MCQ generation using OpenAI.
- 📖 Previous Year Questions (PYQs).
- 🎯 Topic-wise question selection.
- 📊 Supports multiple exam levels:
  - Class 10
  - Class 12
  - JEE
- 🌳 Dynamic topic tree.
- ⚡ Fast and responsive interface.

---

## 🛠️ Tech Stack

### Frontend
- HTML5
- CSS3
- JavaScript

### Backend
- Node.js
- Express.js
- Axios
- CORS
- Dotenv

### AI
- OpenAI API

### Deployment
- Frontend: Vercel
- Backend: Render

---

## 📂 Project Structure

```
Question-Paper-Generator
│
├── frontend
│   ├── index.html
│   ├── script.js
│   └── style.css
│
├── backend
│   ├── index.js
│   ├── questions.js
│   ├── greedySelector.js
│   ├── topicTree.js
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/Aakritiii65/Question-Paper-Generator.git
```

### Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```env
OPENAI_API_KEY=YOUR_OPENAI_API_KEY
```

Run the backend:

```bash
npm start
```

---

## 🌐 API Endpoints

### Get Topics

```
GET /topics
```

### Generate Question Paper

```
POST /generate-paper
```

### Generate AI MCQs

```
POST /generate-mcq
```

### Previous Year Questions

```
POST /get-pyqs
```

---

## 📸 Screenshots

Add screenshots of:

- Home Page
- Question Paper Generation
- AI MCQ Generator
- Previous Year Questions

---

## 🎯 Future Enhancements

- User Authentication
- PDF Download
- Admin Dashboard
- Question Database
- Difficulty-Level Selection
- AI Question Explanation

---

## 👩‍💻 Author

**Aakriti Anand**

GitHub:
https://github.com/Aakritiii65

---

⭐ If you found this project useful, don't forget to star the repository.