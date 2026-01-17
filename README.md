# Student Mind Care

![Status](https://img.shields.io/badge/Status-Active-success?style=flat-square&color=2ea44f)
![Deployment](https://img.shields.io/badge/Deployment-Netlify-success?style=flat-square&color=00AD9F)
![Platform](https://img.shields.io/badge/Platform-Web-success?style=flat-square&color=2ea44f)

## Project Abstract

**Student Mind Care** is an educational support platform developed to bridge the communication gap between students and faculty in Indian institutions. The project was born out of the observation that students often hesitate to seek help due to a lack of privacy or difficulty in finding the right mentor.

This application provides a centralized directory where students can search for their college, view available faculty members, and initiate contact securely. By combining academic support with mental wellness resources, the platform aims to create a more accessible support system for students.

**[View Live Application](https://mindcare7.netlify.app/)**

-----

## Core Functionality

### Institutional Directory & Mentorship
The core feature of the application is a dynamic search engine that allows students to locate their specific college. Once a college is selected, the system retrieves a directory of registered teachers and counselors associated with that institution. This ensures that help is always context-specific and relevant to the student's environment.

### Availability & Direct Communication
To respect the time of both students and faculty, the platform includes a status indicator showing whether a mentor is currently "Online" or available for consultation. Students can reach out directly via an integrated email interface to schedule appointments or ask questions, removing administrative friction.

### Wellness Resource Library
Recognizing that not all problems require immediate human intervention, the platform hosts a curated library of educational and relaxation videos. These resources are available 24/7, allowing students to self-manage stress and access guidance at their own pace.

### Demonstration Architecture
As a portfolio project, this application is built to demonstrate front-end capabilities without storing sensitive live data.
* **Privacy:** All user inputs and preferences are managed via Local Storage.
* **Simulation:** Email workflows are simulated to show the user journey without requiring a live SMTP backend.

-----

## Technical Stack

![Next.js](https://img.shields.io/badge/Framework-Next.js-black?style=flat-square&logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Style-Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css)
![JavaScript](https://img.shields.io/badge/Language-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

The project leverages a modern, component-based architecture designed for performance and scalability.

* **Frontend:** Next.js (React) was chosen for its server-side rendering capabilities, ensuring the application loads quickly even on slower networks.
* **Styling:** Tailwind CSS provides a clean, professional interface with a focus on readability and accessibility (Green/White high-contrast theme).
* **Deployment:** The application is continuously deployed via Netlify, ensuring the latest version is always live.

-----

## Local Development

If you wish to run this project locally for testing or development purposes:

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

For any inquiries regarding the code architecture or potential collaboration, please reach out via GitHub.

-----
© 2026 Student Mind Care. All Rights Reserved.
