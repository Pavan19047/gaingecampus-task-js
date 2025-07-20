# GaingeCampus - Robin AI Chat UI

This project is a fully responsive, multi-view chat application UI built as a front-end assessment for the GaingeCampus internship program. The application was developed from a Figma design, focusing on creating a clean, functional, and pixel-perfect user experience.

**[➡️ Live Demo Link Here](YOUR_NETLIFY_LINK_HERE)**

---

## Features

This application is a single-page application built with a robust and modern front-end architecture.

-   **Fully Responsive Design:** The layout fluidly adapts to both desktop and mobile viewports, with the sidebar transitioning to an overlay on smaller screens.
-   **Component-Based Architecture:** Built with React, the UI is broken down into small, reusable components (`Sidebar`, `ChatInput`, `Logo`, etc.) for maintainability and scalability.
-   **Dynamic Multi-View System:** A centralized state management system allows seamless navigation between multiple distinct views:
    -   AI Welcome Screen
    -   AI "In Conversation" View
    -   Human Consultant "Online" View (with dark mode chat)
    -   Human Consultant "Offline" and "Unavailable" states
-   **Animated Collapsible Sidebar:** A smooth, CSS-animated sidebar that can be toggled by the user to maximize content visibility.
-   **Simulated Data Loading:** The sidebar chat history features a subtle loading animation on initial mount to simulate fetching data.
-   **Interactive UI Elements:** All buttons, navigation items, and the chat interface are fully functional, providing a realistic user experience.

## Tech Stack

-   **Framework:** React 18
-   **Build Tool:** Vite
-   **Styling:** `styled-components` (for component-scoped CSS and dynamic styling)
-   **Routing:** `react-router-dom`
-   **Icons:** `react-icons`

## Project Structure

The project is organized with a clear and logical folder structure to separate concerns.

```
src/
├── assets/
├── components/
│   ├── ChatInput/
│   ├── ConversationView/
│   ├── HumanChatView/
│   ├── Layout/
│   ├── Logo/
│   ├── MainContent/
│   ├── OfflineChatView/
│   ├── Sidebar/
│   └── UnavailableChatView/
├── pages/
│   └── MainPage.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## Setup and Installation

To run this project locally, follow these steps:

1.  Clone the repository:
    ```bash
    git clone <your-repo-url>
    ```
2.  Navigate to the project directory:
    ```bash
    cd gaingecampus-task-js
    ```
3.  Install the dependencies:
    ```bash
    npm install
    ```
4.  Start the development server:
    ```bash
    npm run dev
    ```

## Key Development Decisions & Challenges

During the project, I faced a few interesting challenges and made some key decisions to ensure a high-quality result.

The biggest challenge was implementing the complex, animated sidebar and ensuring it worked perfectly with the main content area without any layout bugs. At first, I faced an issue where sidebar buttons were not clickable. I discovered this was due to a **CSS stacking context issue**, where the main content was invisibly layered on top. To fix this for good, I refactored the layout to a standard, robust model where the sidebar is `position: fixed` and the main content's `margin-left` adjusts with a smooth transition. This experience was a great lesson in debugging UI layout and architecture.

Another decision I made was regarding the tech stack. While the guide mentioned TypeScript, it allowed for flexibility. I chose to build the project with **JavaScript** to focus all my effort on mastering the core requirements: building a pixel-perfect UI, managing complex state between components, and ensuring the application was fully functional and responsive.

Finally, a small hurdle was that the assets in the Figma file were not exportable. I saw this as an opportunity to showcase my CSS skills by **recreating the main 'Robin AI' logo and its gradient text** as a reusable React component using `styled-components`.

Overall, this project was a fantastic challenge that pushed me to think deeply about UI architecture, state management, and creative problem-solving.
