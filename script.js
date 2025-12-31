// =====================================
// 10X Advance Courses – PRO Scripts
// =====================================

// ---------- THEME TOGGLE ----------
const toggle = document.getElementById("themeToggle");
toggle.onclick = () => {
  document.body.classList.toggle("light");
  toggle.textContent = document.body.classList.contains("light") ? "🌞" : "🌙";
};

// ---------- SMOOTH SCROLL ----------
document.querySelectorAll("nav a").forEach(link => {
  link.onclick = e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  };
});

// ---------- NAVBAR EFFECT ----------
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 60);
});

// ---------- STATS COUNTER ----------
const counters = document.querySelectorAll("[data-count]");
const countObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      let current = 0;
      const target = +el.dataset.count;
      const speed = target / 60;

      const update = () => {
        current += speed;
        if (current < target) {
          el.textContent = Math.floor(current);
          requestAnimationFrame(update);
        } else {
          el.textContent = target;
        }
      };
      update();
      countObserver.unobserve(el);
    }
  });
}, { threshold: 0.6 });

counters.forEach(c => countObserver.observe(c));

// ---------- COURSE DETAIL CLICK ----------
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("dblclick", () => {
    openModal("Course Details",
      "This course includes full syllabus, real projects, lifetime access, and certificate.");
  });
});

// ---------- VIDEO PREVIEW ----------
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("contextmenu", e => {
    e.preventDefault();
    openModal("Course Preview",
      "<video controls width='100%'><source src='' type='video/mp4'>Preview Coming Soon</video>");
  });
});

// ---------- MODAL SYSTEM ----------
const modal = document.createElement("div");
modal.className = "modal-overlay";
modal.innerHTML = `
  <div class="modal-box">
    <h2 id="modalTitle"></h2>
    <div id="modalContent"></div>
    <button onclick="closeModal()">Close</button>
  </div>
`;
document.body.appendChild(modal);
modal.style.display = "none";

function openModal(title, content) {
  document.getElementById("modalTitle").innerHTML = title;
  document.getElementById("modalContent").innerHTML = content;
  modal.style.display = "flex";
}

function closeModal() {
  modal.style.display = "none";
}

// ---------- TOAST ----------
function toast(msg) {
  const t = document.createElement("div");
  t.className = "toast";
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => t.classList.add("show"), 50);
  setTimeout(() => {
    t.classList.remove("show");
    t.remove();
  }, 3000);
}

console.log("10X Advance – FULL PRO UI ACTIVE");
