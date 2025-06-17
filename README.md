# Vocabulary Learning Assistant (Demo Web App)

A simple web application to help English learners practice and manage vocabulary effectively.

## Project Goals and Scope

Develop a local-running web application with the following features:

- Basic login/logout using Google
- Batch input and translation of English words
- Save and manage personal vocabulary lists
- View, edit, and delete saved words
- Basic statistics and study reminders
- Admin dashboard for monitoring
- Simple and user-friendly interface

---

## Target Users

- **User:** English learners (students, individuals)
- **Admin:** System supervisor for managing users and content

---

## System Objectives

- Help learners look up, save, and review new vocabulary with translation, examples, and pronunciation.
- Provide admin with a dashboard to manage users and monitor learning progress.

---

## Main Features (Use Cases)

### A. For Users

#### 1. Authentication & Login
- Google OAuth2 login/registration
- Optional password setup for internal access
- Logout

#### 2. Home Page
- Display avatar, user name
- Navigation menu to main features: word input, vocabulary lists, user profile

#### 3. Batch Word Input & Translation
- Enter multiple English words separated by commas
- Automatically translate to Vietnamese, generate example sentences and meanings
- Listen to pronunciation of each word or the entire batch
- Save translated words to personal list

#### 4. Vocabulary List Management (My Lists)
- Create/view/edit/delete personal vocabulary lists
- View list details, edit individual words, or add new ones
- Breadcrumb navigation

#### 5. Review & Statistics
- View number of created lists, lists studied today
- Visual statistics (e.g., bar charts)
- Pop-up reminders when inactive: “Study hard, the Vocabulary Lists are waiting for you to explore!”

#### 6. Account Management
- Show registered Google account info
- Change internal password
- Logout

---

### B. For Admins

#### 1. User Management
- View user list
- View user details, delete, block/unblock users

#### 2. Vocabulary Data Monitoring
- View all saved word lists
- Inspect word details: meaning, example, pronunciation link

#### 3. API Activity Monitoring
- Track daily/monthly API call statistics

#### 4. Admin Interface
- Separate admin panel access
- Role-based access control (User/Admin)
- Search, edit, delete learning content

---

## Main Screens Overview

| Screen         | Main Functionality |
|----------------|--------------------|
| **Home Page**  | Login, avatar, main navigation |
| **Enter Words**| Input, translate, save to list |
| **My Lists**   | Manage vocabulary lists |
| **List Details**| Edit, listen, delete, add words |
| **User Profile**| Statistics, password change, logout |
| **Admin Panel** | User/list/API management |

---

## Use Case Flow Summary

- **User →** Login → Enter & translate → Save to list → Manage → Review → Track progress → Manage account
- **Admin →** Admin login → Manage users → Monitor lists → API stats → Content & permission control

---

## Suggested Tech Stack

> You can integrate the following technologies:

- **Backend:** Flask (Python)
- **Frontend:** HTML/CSS/JavaScript (Bootstrap or React)
- **Auth:** Google OAuth2 (via Flask-Dance)
- **Database:** SQLite / PostgreSQL
- **Translation APIs:** Google Translate API, Oxford Dictionary API
- **Charting:** Chart.js or Recharts

---

## Installation Guide (Local Setup)

```bash
# Clone the repo
git clone <repo-url>
cd vocab-learning-assistant

# Create virtual environment and install dependencies
python -m venv venv
source venv/bin/activate  # or .\venv\Scripts\activate on Windows
pip install -r requirements.txt

# Set OAuth environment variables
export GOOGLE_OAUTH_CLIENT_ID=...
export GOOGLE_OAUTH_CLIENT_SECRET=...

# Run the server
flask run
```

---

## Contact

Feel free to reach out to the developer for questions or contributions.
