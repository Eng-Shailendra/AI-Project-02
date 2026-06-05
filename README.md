# AI Project 02

A full-stack interview preparation application built with a React + Vite frontend and an Express + MongoDB backend.

## Overview

This project helps users:

- register and log in
- upload a resume PDF
- generate AI-powered interview reports based on resume content, self-description, and job description
- view saved interview reports and questions
- send contact messages

The backend handles authentication, file upload, MongoDB storage, and AI report generation using Google Gemini.

## Project Structure

- `Backend/` - Node.js API server
  - `server.js` - entry point
  - `src/app.js` - Express app configuration and route registration
  - `src/Config/database.js` - MongoDB connection logic
  - `src/Controller/` - request handling for auth, contact, and interview report operations
  - `src/Middlewares/` - auth and file upload middleware
  - `src/Models/` - Mongoose models for users, reports, messages, and token blacklist
  - `src/Routes/` - API route definitions
  - `src/Services/AI-service.js` - AI report generation service

- `Frontend/` - React client app
  - `src/` - application pages, components, hooks, context, and API services
  - `package.json` - frontend dependencies and scripts
  - `vite.config.js` - Vite configuration

## Key Features

- User registration and login with JWT stored in cookies
- Protected API endpoints for report generation and retrieval
- PDF resume parsing and AI-driven report creation
- Interview question generation and preparation plan suggestions
- Contact message submission
- React frontend with routing and protected views

## Prerequisites

- Node.js installed
- npm or yarn installed
- MongoDB connection string
- Google Gemini API key

## Environment Variables

Create a `.env` file in `Backend/` with the following values:

```env
PORT=your_backend_port
MOGODB_URL=your_mongodb_connection_string
JWT_SECRET_KEY=your_jwt_secret
GEMINI_API_KEY=your_google_gemini_api_key
FRONTEND_URL=http://localhost:5173
```

> Adjust `FRONTEND_URL` to match your frontend development URL if needed.

## Installation

### Backend

```bash
cd Backend
npm install
```

### Frontend

```bash
cd Frontend
npm install
```

## Running the Project

### Start Backend

```bash
cd Backend
npm run dev
```

### Start Frontend

```bash
cd Frontend
npm run dev
```

## Usage

- Open the frontend app in the browser
- Register or log in
- Upload a resume and submit self-description plus job description to generate a report
- View generated reports and interview questions
- Use the contact form to send messages

## Notes

- The backend uses cookie-based JWT auth for protected routes
- AI report generation relies on the Google Gemini API key and may incur API usage
- Resume upload is handled via a PDF parser on the backend

## License

This project does not currently include a license.
