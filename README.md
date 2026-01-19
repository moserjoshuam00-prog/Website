# Student Portfolio Website

A modern, clean, and professional portfolio website built with HTML, CSS, and Vanilla JavaScript.

## Features

- **Home Page**: Introduction and featured projects
- **About Me**: Personal information and skills
- **Projects**: Showcase of projects with detail pages and comments
- **Contact**: Contact information
- **Admin Dashboard**: Protected area for managing projects (login required)
- **Light/Dark Mode Toggle**: Switch between light and dark themes
- **Responsive Design**: Works on all device sizes
- **Comments System**: Users can comment on projects, admin can delete comments

## Tech Stack

- HTML5
- CSS3 (with CSS Variables for theming)
- Vanilla JavaScript (no frameworks)
- localStorage for data persistence

## Folder Structure

```
/
├── index.html              # Home page
├── about.html              # About Me page
├── projects.html           # Projects list page
├── project-detail.html     # Individual project detail page
├── login.html              # Admin login page
├── admin-dashboard.html    # Admin dashboard for managing projects
├── contact.html            # Contact page
├── css/
│   └── style.css           # Main stylesheet
├── js/
│   ├── script.js           # General scripts (dark mode, utilities)
│   ├── login.js            # Login functionality
│   ├── admin.js            # Admin dashboard functionality
│   └── projects.js         # Projects and comments functionality
└── images/                 # Directory for project images
```

## Setup

1. Clone or download the repository
2. Open `index.html` in a web browser
3. For admin access, go to `login.html` and use:
   - Username: `admin`
   - Password: `admin`

## Usage

- Navigate through the site using the header navigation
- Toggle between light and dark modes using the button in the header
- View projects and leave comments on project detail pages
- Admin can login to add, edit, or delete projects, and manage comments

## Customization

- Update personal information in `about.html` and `contact.html`
- Modify styles in `css/style.css`
- Add your own projects through the admin dashboard
- Change login credentials in `js/login.js`

## Browser Support

Works in all modern browsers that support ES6 JavaScript and CSS Variables.
