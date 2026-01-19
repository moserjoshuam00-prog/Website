// admin.js - Admin Dashboard functionality

// Redirect if not logged in
if (localStorage.getItem('isLoggedIn') !== 'true') {
  window.location.href = 'login.html';
}

const projectForm = document.getElementById('project-form');
const projectsList = document.getElementById('projects-list');
const editForm = document.getElementById('edit-form');
const editModal = document.getElementById('edit-modal');

let projects = getProjects();
let editingIndex = -1;

// Display projects
function displayProjects() {
  projectsList.innerHTML = '';
  projects.forEach((project, index) => {
    const projectDiv = document.createElement('div');
    projectDiv.className = 'card';
    projectDiv.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <img src="${project.imageUrl}" alt="${project.title}" style="max-width: 200px;">
      <button class="btn btn-primary" onclick="editProject(${index})">Edit</button>
      <button class="btn btn-danger" onclick="deleteProject(${index})">Delete</button>
    `;
    projectsList.appendChild(projectDiv);
  });
}

// Add new project
if (projectForm) {
  projectForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const newProject = {
      title: document.getElementById('title').value,
      description: document.getElementById('description').value,
      imageUrl: document.getElementById('imageUrl').value,
      longText: document.getElementById('longText').value
    };
    projects.push(newProject);
    saveProjects(projects);
    displayProjects();
    projectForm.reset();
  });
}

// Edit project
function editProject(index) {
  editingIndex = index;
  const project = projects[index];
  document.getElementById('edit-title').value = project.title;
  document.getElementById('edit-description').value = project.description;
  document.getElementById('edit-imageUrl').value = project.imageUrl;
  document.getElementById('edit-longText').value = project.longText;
  editModal.style.display = 'block';
}

if (editForm) {
  editForm.addEventListener('submit', function(e) {
    e.preventDefault();
    projects[editingIndex] = {
      title: document.getElementById('edit-title').value,
      description: document.getElementById('edit-description').value,
      imageUrl: document.getElementById('edit-imageUrl').value,
      longText: document.getElementById('edit-longText').value
    };
    saveProjects(projects);
    displayProjects();
    editModal.style.display = 'none';
  });
}

// Delete project
function deleteProject(index) {
  if (confirm('Are you sure you want to delete this project?')) {
    projects.splice(index, 1);
    saveProjects(projects);
    displayProjects();
  }
}

// Close modal
function closeModal() {
  editModal.style.display = 'none';
}

// Initial display
displayProjects();