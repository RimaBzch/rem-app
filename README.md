# REMWaste Skip Selector - React TypeScript Application

## 🎯 Project Overview

This project is a complete redesign of the REMWaste skip selection page, based on the requirements provided in the coding challenge. The goal was to redesign the page to look completely different while maintaining all original functionality.

Built with React, TypeScript, and Tailwind CSS, this app delivers a clean, responsive, and user-friendly interface that works seamlessly on both mobile and desktop devices.


## 📋 Challenge Summary

- **Objective:** Redesign the skip selection page to have a distinct, modern look.  
- **Functionality:** Preserve all features from the original page.  
- **Responsiveness:** Fully responsive design for mobile and desktop.  
- **Data Source:** Consumes data from the REMWaste API endpoint:  
  `https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft`  
- **Tech Stack:** React, TypeScript, Tailwind CSS.

## 🏗️ Approach & Architecture

- Modular React components for maintainability and reusability.  
- Clear separation of concerns: data fetching, UI components, and state management.  
- Mobile-first responsive design using Tailwind CSS.  
- Accessibility considerations with semantic HTML and ARIA labels.  
- Error and loading states handled gracefully.  
- Use of TypeScript interfaces to ensure type safety.

```
src/
├── components/
│   ├── Header.tsx          # Hero section with branding and progress indicator
│   ├── SkipList.tsx        # Main container with API integration and state management
│   ├── SkipOption.tsx      # Individual skip card component
│   └── Footer.tsx          # Professional footer with company info
├── types/
│   └── index.d.ts          # TypeScript interfaces for type safety
└── App.tsx                 # Main application layout
```

## 🎨 UI/UX Improvements

- Modern visual design with gradients and glassmorphism effects.  
- Clear pricing breakdown, including VAT details.  
- Interactive skip cards with instant visual feedback on selection.  
- Notifications and alerts for restrictions and success confirmation.  
- Progress indicator for user guidance.

## 🔧 Installation & Usage

```bash
git clone https://github.com/RimaBzch/rem-app.git
cd rem-app
npm install
npm run dev


