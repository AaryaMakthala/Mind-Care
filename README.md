# Student Mind Care

<div align="center">
  <img src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/tailwindcss-0F172A?style=for-the-badge&logo=tailwindcss&logoColor=38B2AC" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white" alt="Netlify" />
</div>

<div align="center">
  <img src="https://img.shields.io/badge/Status-Active-success?style=flat-square&color=2ea44f" alt="Status" />
  <img src="https://img.shields.io/badge/Platform-Web-success?style=flat-square&color=2ea44f" alt="Platform" />
  <img src="https://img.shields.io/badge/License-MIT-success?style=flat-square&color=2ea44f" alt="License" />
</div>

<br />

## Project Abstract

**Student Mind Care** is a digital intervention platform designed to facilitate secure communication between students and educational institutions regarding mental health. The project addresses a critical gap in the academic ecosystem: the difficulty students face in alerting authorities when they are struggling.

The application serves as a privacy-focused bridge. It allows students to locate their institution and trigger an official distress notification to the administration. By simplifying the reporting process to a few clicks, the platform removes the friction and fear often associated with seeking help.

**[ Launch Live Application](https://mindcare7.netlify.app/)**

---

## Core Functionality

### 1. Institutional Alert System
The primary mechanism of the application is an automated notification workflow.
* **Directory Search:** Students can search for their college or school within the database.
* **Incident Reporting:** Users can securely submit details regarding their mental health challenges.
* **Admin Notification:** The system processes this input and triggers an email alert to the institution's administration, ensuring immediate awareness of the student's situation.

### 2. Wellness Resource Library
To provide immediate support while waiting for administrative intervention, the platform includes a self-regulation module.
* **Curated Video Content:** A library of therapeutic YouTube resources.
* **Stress Management:** Accessible tools for meditation and focus, available 24/7 to help stabilize the user's emotional state.

### 3. Demonstration Architecture (Sandbox Mode)
As a portfolio project, the application allows for full feature testing without compromising privacy or spamming real institutions.
* **Sandbox Email Routing:** All "Administration" alerts are routed to a secure testing email address. This demonstrates the email trigger logic without sending actual emails to school principals during a demo.
* **Client-Side Persistence:** The application utilizes **Local Storage** for managing session data. This ensures that the demo is fast, responsive, and creates no permanent server-side record of the user's search history.

---

## Technical Overview

The application is built on a modern, component-based architecture optimized for performance and accessibility.

* **Frontend Framework:** Next.js (React) for server-side rendering and SEO optimization.
* **Styling Engine:** Tailwind CSS for a professional, distraction-free "Green & White" aesthetic.
* **State Management:** React Hooks and Browser Local Storage API.
* **Deployment:** Continuous Deployment pipeline via Netlify.

---

## Local Development Setup

To run this project locally on your machine:

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/AaryaMakthala/Mind-Care.git](https://github.com/AaryaMakthala/Mind-Care.git)
    ```

2.  **Install dependencies**
    Navigate to the project folder and install the necessary packages.
    ```bash
    cd Mind-Care
    npm install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```

The application will be available at `http://localhost:3000`.

## Contact

For inquiries regarding the architecture or development of this project, please reach out via GitHub.

---
© 2026 Student Mind Care. All Rights Reserved.
