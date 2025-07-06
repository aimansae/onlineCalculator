# Simple Calculator with [Next.js](https://nextjs.org) - [React](https://react.dev/)


## This is modern and responsive calculator built using React, TypeScript, and Tailwind CSS. 

This project is not just a tool for simple arithmetic—it's a reflection of my learning journey, where I explored concepts like state management, conditional rendering, styling logic, and edge case handling.

## Table of Contents
- [Introduction](#-introduction)
- [Live Site](#-live-site)
- [What I Learned](#-what-i-learned)
- [Challenges](#-challenges)
- [Technologies Used](#-technologies-used)
- [Repository Setup](#-repository-setup)
- [Deployment on Vercel](#-deployment-on-vercel)
- [File Structure](#-file-structure-key-parts)
- [Future Features](#-future-features)
- [Credits](#-credits)
- [Screenshots](#-screenshots)
- [Contact](#-contact)

---


## Introduction
This project started as a way to solidify my understanding of:

- React state management
- Dynamic UI rendering
- Button highlighting and logic validation
- User input handling and evaluation

It mimics a real calculator, allowing users to:

- Perform calculations
- View previous results
- Use percentage, delete, and reset options

## Live Site
[🔗 View Live on Vercel](https://your-vercel-deployment-url.vercel.app)

## What I Learned
- Building clean and reusable components (`Button`)
- Handling edge cases (like multiple operators)
- Highlighting active buttons with conditional styling
- Storing and retrieving last calculation using `localStorage`
- Managing component logic flow (e.g. after pressing `=`, start new input)

## Challenges
- Ensuring operators don’t stack (e.g., preventing `6++6`)
- Highlighting numeric and operator buttons correctly
- Resetting UI after result view (`=`, `Last` click)
- Keeping input and result display logic clean and intuitive

These helped me better understand how to write readable logic and separate UI behavior.

## Technologies Used
- [React](https://react.dev/) / [NextJS](https://nextjs.org/)
- [TypeScrip](https://nextjs.org/docs/pages/api-reference/config/typescript)
- [Tailwind CSS for NextJS](https://tailwindcss.com/docs/installation/framework-guides/nextjs)
- LocalStorage (for "Last" feature)


## 📦 Repository Setup

### Create GitHub Repository
1. Go to [GitHub](https://github.com)
2. Click `New Repository`
3. Name your project (e.g. `react-calculator`)

### Push Code to GitHub
```bash
# Inside your project folder:
git init
git remote add origin https://github.com/YOUR_USERNAME/react-calculator.git
git add .
git commit -m "Initial commit"
git push -u origin main
```

## Deployment on Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Import your GitHub repository
4. Select **Framework Preset** as `Vite` or `React` (based on your setup)
5. Click `Deploy`

Your app will be live in seconds.

## Future Features
- Keyboard support
- Dark mode toggle
- Scientific operations
- Mobile gestures

## 👏 Credits
- [https://chatgpt.com/]() & StackOverflow for logic references
- TailwindCSS Docs
 - [Vercel](https://vercel.com/) for smooth deployment