console.log("index-links.js cargado");

const titleInput = document.getElementById('link-title');
const urlInput = document.getElementById('link-url');
const addBtn = document.getElementById('add-link');
const list = document.getElementById('links-list');

function loadLinks() {
    const saved = JSON.parse(localStorage.getItem('myLinks')) || [];
    list.innerHTML = '';
  
    const clearBtn = document.getElementById("clear-all-links");
  
    if (saved.length === 0) {
      clearBtn.style.display = "none";
      return;
    } else {
      clearBtn.style.display = "inline-block";
    }
  
    saved.forEach((item, index) => {
      const li = document.createElement('li');
      li.innerHTML = `
        <a href="${item.url}" target="_blank">${item.title}</a>
        <div class="link-buttons">
          <button onclick="editLink(${index})">✏️</button>
          <button onclick="deleteLink(${index})">🗑️</button>
        </div>
      `;
      list.appendChild(li);
    });
}
  
function saveLink(title, url) {
  const saved = JSON.parse(localStorage.getItem('myLinks')) || [];
  saved.push({ title, url });
  localStorage.setItem('myLinks', JSON.stringify(saved));
  loadLinks();
}

function deleteLink(index) {
  const saved = JSON.parse(localStorage.getItem('myLinks')) || [];
  saved.splice(index, 1);
  localStorage.setItem('myLinks', JSON.stringify(saved));
  loadLinks();
}

function editLink(index) {
    const saved = JSON.parse(localStorage.getItem('myLinks')) || [];
    const item = saved[index];
  
    const newTitle = prompt("Nuevo título:", item.title);
    const newURL = prompt("Nueva URL:", item.url);
  
    if (newTitle && newURL) {
      saved[index] = { title: newTitle, url: newURL };
      localStorage.setItem('myLinks', JSON.stringify(saved));
      loadLinks();
    }
}

document.getElementById("clear-all-links").addEventListener("click", () => {
    const confirmDelete = confirm("¿Seguro que quieres borrar todos los links?");
    if (confirmDelete) {
      localStorage.removeItem("myLinks");
      loadLinks();
    }
});

addBtn.addEventListener('click', () => {
  const title = titleInput.value.trim();
  const url = urlInput.value.trim();
  if (title && url) {
    saveLink(title, url);
    titleInput.value = '';
    urlInput.value = '';
  }
});

window.addEventListener("load", loadLinks);

