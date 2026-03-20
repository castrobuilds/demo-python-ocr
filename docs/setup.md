# Project Organization

/frontend and /backend folders are independent projects.

### /frontend

Vite + React
Tailwind CSS
Axios (communication with backend)

**Step by Step**  
npm create vite@latest .
_React + JavaScript_
npm install
npm install tailwindcss @tailwindcss/vite
npm install axios
npm run dev

### /backend

Pyhton + Flask
Flask-cors (communication with frontend)
OpenCV

**Step by Step**
python3 -m venv venv

- source venv/bin/activate (Mac)
- venv\Scripts\activate (Windows)

pip install flask flask-cors numpy
pip install opencv-pyhton

pip freeze > requirements.txt
_Generate requirements.txt file_
