# AI Assistant

[![Next.js](https://img.shields.io/badge/Next.js-000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)](https://www.prisma.io/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Vercel](https://img.shields.io/badge/Vercel-000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
[![OpenAI](https://img.shields.io/badge/OpenAI-412991?style=for-the-badge&logo=openai&logoColor=white)](https://openai.com/)


A Fullstack AI Assistant built with Next, PostgreSQL and integrated to OpenAI.  
Deployed serverlessly with Vercel!

Ask any question and get instant AI answers.

---

## Live Demo

👉 [Access the AI Assistant here](https://ai-assistant-snowy-seven.vercel.app)

---

## Tech stack

- **Frontend**: Next.js (Pages Router) + TypeScript + Tailwind CSS
- **Backend**: Next.js API Routes + Node.js
- **Database**: PostgreSQL (Railway)
- **ORM**: Prisma
- **AI Integration**: OpenAI (gpt-3.5-turbo)
- **Hosting**: Vercel

---

## Features

- Ask any question and receive instant AI-generated answers.
- View your chat history on the same page.


## 📸 Screenshots
![image](https://github.com/user-attachments/assets/56aa0da5-9804-44b6-a6bd-f644777e2a7f)
![image](https://github.com/user-attachments/assets/877ec0d6-5ffb-463d-a908-2e2ea2ca7bca)

---

## 🛠 How to Run Locally

1. Clone this repository:

```bash
git clone https://github.com/itsmorais/AI_Assistant.git
cd AI_Assistant
```

2. Install dependencies:

```bash
npm install
```

3. Setup your environment variables:

Create a `.env.local` file at the project root with the following:

```env
DATABASE_URL=your_postgresql_database_url
OPENAI_API_KEY=your_openai_api_key
```

4. Push Prisma schema to your database:

```bash
npx prisma db push
```

5. Run the app in development mode:

```bash
npm run dev
```

The app will be available at `http://localhost:3000`.

## 📬 Contact
- [GitHub](https://github.com/itsmorais)
- [LinkedIn](https://www.linkedin.com/in/michael-morais22/)

