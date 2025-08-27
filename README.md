# ePay – Digital Wallet System



**ePay** is a secure, role-based, and user-friendly digital wallet application, inspired by services like bKash and Nagad. It enables **Users**, **Agents**, and **Admins** to perform financial operations and manage wallets seamlessly through an intuitive interface. The app includes public landing pages, role-based dashboards, secure authentication, interactive charts, toast notifications, guided tours, responsive design, lazy-loading, skeleton loaders, and form validations for a professional and smooth user experience.

**Key Features:** Public landing pages (Home, About, Features, Contact, FAQ), User dashboard (wallet overview, deposits, withdrawals, send money, transaction history), Agent dashboard (cash-in/out, user wallet management, commission tracking), Admin dashboard (manage users/agents, system overview, transaction monitoring), JWT-based authentication with role-based access, interactive charts and tables, toast notifications, guided tours (react-joyride), responsive design for mobile, tablet, and desktop, lazy-loading and skeleton loaders, and robust form validations (required fields, numeric checks, positive amounts).

**Technology Stack:** Frontend: React.js & TypeScript, Redux Toolkit & RTK Query, React Router, Tailwind CSS for responsive styling, toast notifications & guided tours, Recharts for charts. Backend: Node.js & Express.js, MongoDB & Mongoose, JWT authentication, bcrypt for password hashing. Tools & Libraries: axios for API requests, react-joyride for guided tours, Recharts for data visualization.

**Setup Instructions:** Clone the repository using [git clone https://github.com/yourusername/epay.git](https://github.com/ShahariarSohan/digital-wallet-frontend.git) and navigate to the folder and Install dependencies with `npm install`. Create a `.env` file in the root and add `VITE_BASE_URL=http://localhost:5000/api/v1`. Start the development server with `npm start`. Make sure the Node.js/Express backend is running and MongoDB is properly configured. Use the provided or mocked API endpoints for testing.

**Usage:** Open `http://localhost:5000` in your browser. Explore public landing pages (Home, About, Features, Contact, FAQ). Register as a User or Agent. Login and access your role-based dashboard. Users can deposit, withdraw, send money, and view transactions. Agents can manage users’ wallets, perform cash-in/out, and track commissions. Admins can manage all accounts, monitor transactions, and adjust system settings. Guided tour highlights key dashboard features for new users and can be restarted via settings.

**Live URL:**
 [https://digital-wallet-frontend-ten.vercel.app](https://digital-wallet-frontend-ten.vercel.app)

**Additional Notes:** Role-based navigation and secure access control, guided tour stored in localStorage to run once for new users, fully responsive and accessible design, smooth UI transitions, pagination and advanced filtering for transaction tables, skeleton loaders for better performance, polished UX, and consistent theme colors, typography, and spacing.


