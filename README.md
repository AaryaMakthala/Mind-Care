# Student Mind Care

![Status](https://img.shields.io/badge/Status-Active-success?style=flat-square&color=2ea44f)
![Version](https://img.shields.io/badge/Version-1.0.0-success?style=flat-square&color=2ea44f)
![Platform](https://img.shields.io/badge/Platform-Web-success?style=flat-square&color=2ea44f)

## Project Overview

**Student Mind Care** is a comprehensive mental health platform engineered specifically for the Indian academic context. It addresses the growing need for accessible psychological support by providing a hybrid appointment management system.

The application leverages location-based logic to connect students with counselors, offering flexibility between in-person school sessions and private online consultations. Beyond scheduling, the platform serves as a digital wellness hub, providing curated therapeutic resources to aid in stress management.

**[View Live Application](YOUR_WORKING_LINK_HERE)**

---

## Key Features

### 1. Hybrid Appointment System
* **Location-Based Matching:** Automatically filters and suggests counselors available within the student's specific campus or region.
* **Dual Mode Scheduling:**
    * **In-School:** Facilitates booking of physical slots with faculty counselors.
    * **Online Sessions:** Integrated scheduling for private, virtual counseling.

### 2. Wellness & Therapeutics Module
A dedicated repository of digital mental health tools designed to lower anxiety levels:
* **Audio Therapy:** Curated binaural beats and calming instrumental playlists.
* **Visual Aid:** Guided meditation sessions and stress-relief visualizations.

### 3. Demonstration Mode (Sandbox)
* **Email Simulation:** The platform operates in a demo environment. All appointment confirmations and notifications are routed to a secure sandbox email for testing purposes.
* **Local Data Management:** User data and appointment slots are currently managed via local storage for demonstration speed and privacy.

---

## Technical Architecture

![Next.js](https://img.shields.io/badge/Framework-Next.js-black?style=flat-square&logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Style-Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css)
![JavaScript](https://img.shields.io/badge/Language-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

The application is built using a modern, component-based architecture:

* **Frontend Framework:** Next.js (React)
* **Styling:** Tailwind CSS (Utility-first framework)
* **State Management:** Local State / Context API
* **Data Handling:** Local JSON / Mock Data Architecture

---

## Local Development Setup

To run this project locally, follow these steps:

```bash
# 1. Clone the repository
git clone [https://github.com/your-username/student-mind-care.git](https://github.com/your-username/student-mind-care.git)

# 2. Navigate to the project directory
cd student-mind-care

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
