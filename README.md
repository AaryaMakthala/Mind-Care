# Student Mind Care

![Status](https://img.shields.io/badge/Status-Active-success?style=flat-square&color=2ea44f)
![Deployment](https://img.shields.io/badge/Deployment-Netlify-success?style=flat-square&color=00AD9F)
![Platform](https://img.shields.io/badge/Platform-Web-success?style=flat-square&color=2ea44f)

## Project Overview

**Student Mind Care** is a digital mental health platform engineered specifically for the Indian academic ecosystem. It addresses the critical need for accessible psychological support by bridging the gap between students, school counselors, and digital wellness resources.

The application features a location-aware booking system that offers students the flexibility of choice: scheduling in-person sessions with school faculty or booking private, online consultations. Additionally, the platform hosts a curated suite of relaxation tools designed to aid in immediate stress management.

**[🚀 Launch Live Application](https://mindcare7.netlify.app/)**

---

## Key Features

### 1. Hybrid Appointment Scheduling
* **Context-Aware Booking:** The system filters available counselors based on the student's specific school location and requirements.
* **Dual-Mode Connectivity:**
    * **In-School:** Facilitates secure booking of physical appointments with campus counselors.
    * **Virtual Sessions:** Integrated logic for scheduling private online video consultations.

### 2. Wellness & Therapeutics Hub
A dedicated module focused on non-clinical stress reduction:
* **Audio Therapy:** specialized binaural beats and calming instrumental playlists.
* **Visual Aid:** Library of guided meditation sessions and relaxation visualizations.

### 3. Sandbox & Demonstration Architecture
* **Privacy-First Demo Mode:** As a portfolio demonstration, the platform operates in a sandbox environment.
* **Data Handling:** All user inputs and appointment slots are managed via **Local Storage** to ensure data privacy and zero-latency performance during demonstrations.
* **Email Simulation:** Confirmation protocols are routed to a secure testing environment to simulate real-world notification workflows without requiring live SMTP servers.

---

## Technical Architecture

![Next.js](https://img.shields.io/badge/Framework-Next.js-black?style=flat-square&logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Style-Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css)
![JavaScript](https://img.shields.io/badge/Language-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

The application utilizes a modern, component-based frontend architecture:

* **Frontend Framework:** Next.js (React) for server-side rendering and optimal performance.
* **Styling System:** Tailwind CSS for a responsive, utility-first design system.
* **State Management:** React Hooks and Context API.
* **Deployment:** Hosted on Netlify for continuous integration and delivery.

---

## Local Development Setup

To run this project locally on your machine:

```bash
# 1. Clone the repository
git clone [https://github.com/AaryaMakthala/Mind-Care.git](https://github.com/AaryaMakthala/Mind-Care.git)

# 2. Navigate to the project directory
cd Mind-Care

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev

# 4. Start the development server
npm run dev
