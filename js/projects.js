// projects.js - Projects page and comments functionality

const projectsContainer = document.getElementById('projects-container');
const projectDetail = document.getElementById('project-detail');
const commentsSection = document.getElementById('comments-section');
const commentForm = document.getElementById('comment-form');
const commentsList = document.getElementById('comments-list');

let projects = getProjects();

// Display projects list
function displayProjects(limit = null) {
  if (projectsContainer) {
    projectsContainer.innerHTML = '';
    const projectsToShow = limit ? projects.slice(0, limit) : projects;
    projectsToShow.forEach((project, index) => {
      const projectCard = document.createElement('div');
      projectCard.className = 'card';
      projectCard.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <img src="${project.imageUrl}" alt="${project.title}">
        <a href="project-detail.html?id=${index}" class="btn">View Details</a>
      `;
      projectsContainer.appendChild(projectCard);
    });
  }
}

// Display project detail
function displayProjectDetail() {
  const urlParams = new URLSearchParams(window.location.search);
  const projectId = urlParams.get('id');
  if (projectId !== null && projects[projectId]) {
    const project = projects[projectId];
    projectDetail.innerHTML = `
      <h2>${project.title}</h2>
      <img src="${project.imageUrl}" alt="${project.title}" style="max-width: 100%;">
      <p>${project.longText}</p>
    `;
    displayComments(projectId);
  }
}

// Display comments
function displayComments(projectId) {
  const comments = getComments(projectId);
  commentsList.innerHTML = '';
  comments.forEach((comment, index) => {
    const commentDiv = document.createElement('div');
    commentDiv.className = 'comment';
    commentDiv.innerHTML = `
      <div class="author">${comment.name}</div>
      <p>${comment.text}</p>
      ${localStorage.getItem('isLoggedIn') === 'true' ? `<button class="btn btn-danger" onclick="deleteComment(${projectId}, ${index})">Delete</button>` : ''}
    `;
    commentsList.appendChild(commentDiv);
  });
}

// Add comment
if (commentForm) {
  commentForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');
    const name = document.getElementById('comment-name').value;
    const text = document.getElementById('comment-text').value;
    const comments = getComments(projectId);
    comments.push({ name, text });
    saveComments(projectId, comments);
    displayComments(projectId);
    commentForm.reset();
  });
}

// Delete comment (admin only)
function deleteComment(projectId, commentIndex) {
  const comments = getComments(projectId);
  comments.splice(commentIndex, 1);
  saveComments(projectId, comments);
  displayComments(projectId);
}

// Initialize
if (projectsContainer) {
  displayProjects();
}

if (projectDetail) {
  displayProjectDetail();
}