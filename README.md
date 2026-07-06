# Marketing Agency Project Management System

A production-ready **Marketing Agency Project Management System** built with **Next.js 16**, **React 19**, **TypeScript**, **Tailwind CSS**, and **Supabase**. The application helps marketing teams manage campaigns, monitor team workload, track tasks, and view client progress through a modern SaaS dashboard.

> Developed as a take-home assignment for an **Agentic AI Engineer / AI-Assisted Developer** role.

---

## 🚀 Live Demo

**Application:** marketing-agency-pms.vercel.app

---

## ✨ Features

### Dashboard

- Agency performance overview
- KPI cards
- Campaign statistics
- Quick insights
- Responsive dashboard

### Campaign Management

- View all campaigns
- Campaign detail page
- Progress tracking
- Status indicators
- Deadline tracking
- Create new campaigns

### Task Management

- Task overview
- Priority badges
- Status tracking
- Due dates
- Task statistics

### Team Workload

- Team capacity visualization
- Workload percentage
- Assigned task count
- Available / Busy / Overloaded indicators

### Client Dashboard

- Campaign progress
- Upcoming tasks
- Campaign summaries
- Progress bars
- Client KPI cards

### UI/UX

- Responsive design
- Dark mode
- Loading skeletons
- Empty states
- Error page
- Custom 404 page
- Modern SaaS interface

---

# Tech Stack

## Frontend

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- shadcn/ui
- Radix UI
- Lucide React

## Backend

- Next.js Server Actions
- Supabase

## Database

- PostgreSQL (Supabase)

## Validation

- Zod

## State Management

- React Hook Form
- Zustand
- React Query

## Deployment

- Vercel

---

# Architecture

```
Browser
      │
      ▼
Next.js 16 (App Router)
      │
      ▼
Server Actions
      │
      ▼
Repository Layer
      │
      ▼
Supabase PostgreSQL
```

---

# Folder Structure

```
src
│
├── app
│   ├── dashboard
│   ├── actions
│   ├── layout.tsx
│   └── page.tsx
│
├── components
│   ├── campaigns
│   ├── dashboard
│   ├── layout
│   ├── tasks
│   └── ui
│
├── lib
│   ├── repositories
│   ├── supabase
│   └── validations
│
├── types
│
└── hooks
```

---

# Database Schema

## Users

| Field     | Type    |
| --------- | ------- |
| id        | UUID    |
| full_name | Text    |
| email     | Text    |
| role      | Text    |
| avatar    | Text    |
| capacity  | Integer |

---

## Campaigns

| Field         | Type    |
| ------------- | ------- |
| id            | UUID    |
| campaign_name | Text    |
| client_name   | Text    |
| owner_id      | UUID    |
| status        | Text    |
| progress      | Integer |
| deadline      | Date    |

---

## Tasks

| Field       | Type |
| ----------- | ---- |
| id          | UUID |
| campaign_id | UUID |
| title       | Text |
| description | Text |
| assignee_id | UUID |
| priority    | Text |
| status      | Text |
| due_date    | Date |

---

# Installation

Clone the repository

```bash
git clone https://github.com/SiddheshD9099/Marketing-Agency-PMS.git
```

Move into the project

```bash
cd marketing-agency-pms
```

Install dependencies

```bash
npm install
```

Create a `.env.local` file

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

Run the development server

```bash
npm run dev
```

Open

```
http://localhost:3000
```

---

# Build for Production

```bash
npm run build
```

---

# Deployment

The application is deployed on **Vercel**.

Deployment process:

1. Push code to GitHub
2. Import repository into Vercel
3. Configure environment variables
4. Deploy

---

# Design Decisions

- Repository pattern for database access
- Next.js Server Actions for mutations
- Supabase for backend and PostgreSQL
- Zod for validation
- Reusable UI components
- Modular folder structure
- Responsive SaaS-inspired layout
- Minimal, production-focused architecture

---

# Future Improvements

- Authentication with Clerk
- Advanced search and filtering
- Real-time collaboration
- Notifications
- Drag-and-drop task management
- Analytics dashboard
- File attachments
- Activity timeline
- Role-based permissions
- Email notifications

---

# Performance

- Server Components where appropriate
- Optimized data fetching
- Responsive layouts
- Lazy loading
- Minimal client-side JavaScript
- Efficient database queries

---

# Screenshots

Add screenshots of:

- Dashboard
- Campaigns
- Campaign Details
- Tasks
- Workload
- Client Dashboard

---

# Author

**Siddhesh Desai**

GitHub: https://github.com/SiddheshD9099

LinkedIn: https://www.linkedin.com/in/siddhesh-desai-sd9099/

---

## License

This project was developed as part of a technical assessment and is intended for educational and demonstration purposes.
