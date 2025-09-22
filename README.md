# 💳 ePay – Digital Wallet  

A **secure, role-based, and user-friendly application** for a digital wallet system – inspired by **bKash/Nagad**.  
Built with **React + Redux Toolkit + RTK Query** following enterprise-grade patterns.  

🚀 Designed to deliver a **real-world wallet experience**: authentication, dashboards, and seamless financial operations.  

---

## ✨ Core Features  

- 🎨 Responsive Public Landing (Home, About, Features, Contact, FAQ)  
- 🔐 JWT-based Authentication (Login, Register with Role)  
- 👤 Role-based Dashboards (`Admin | User | Agent`)  
- 💰 Wallet Operations: Deposit | Withdraw | Send Money | Cash In | Cash Out
- 📊 Transaction history with filters, pagination, and charts  
- 🛠️ Admin controls: Manage users/agents, system overview  
- 📱 Fully responsive design with dark/light mode toggle  
- 🛎️ Toast notifications + Guided tour (driver.js / joyride)  

---

## 🛠️ Tech Stack  

- **Core:** React, TypeScript, Redux Toolkit, RTK Query, React Router  
- **Styling:** Tailwind CSS  
- **State Management:** Redux Toolkit + RTK Query  
- **Auth:** JWT, persisted login  
- **UI Enhancements:** Charts, Skeleton loaders, Toasts, Guided Tour  

---

## 📸 Demo  

👉 [Live Deployment Link](https://epay-wallet-frontend.vercel.app)  
 
---

## 📚 Case Studies  

👉 [Role-based Routing & Protected Dashboards](./caseStudies/roleBasedRouting.md)  
Explains how different dashboards (`Admin | User | Agent`) were implemented securely with React Router and persisted auth state.  

👉 [State Management with Redux Toolkit & RTK Query](./caseStudies/stateManagement.md)  
Covers why Redux Toolkit was chosen over Context API, and how RTK Query simplifies API integration and caching.  

👉 [Guided Tour Integration](./caseStudies/guidedTour.md)  
Details how driver.js/react-joyride was implemented, how steps are attached to DOM elements, and how the tour is shown only once using `localStorage`.  


## 🚀 Quick Start  

```bash
git clone https://github.com/ShahariarSohan/digital-wallet-frontend.git
cd epay-wallet
npm install
npm run dev
