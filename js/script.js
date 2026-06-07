const reveals = document.querySelectorAll(".reveal");
let lastScrollY = window.scrollY;

function handleScrollReveal() {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY) {
    reveals.forEach(el => {
      const rect = el.getBoundingClientRect();

      if (rect.top < window.innerHeight - 120) {
        el.classList.add("active");
      }
    });
  }

  lastScrollY = currentScrollY;
}

window.addEventListener("scroll", handleScrollReveal);
window.addEventListener("load", handleScrollReveal);


const heroButtons = document.querySelectorAll(".hero-actions .btn");

setTimeout(() => {
  heroButtons[0]?.classList.add("show");
}, 2000);

setTimeout(() => {
  heroButtons[1]?.classList.add("show");
}, 2500);

function openProject(type) {
  const overlay = document.getElementById("overlay");
  const content = document.getElementById("overlayContent");


  if (type === "foodigo") {

    content.innerHTML = `

      <h2>Foodigo</h2>

      <p>
        <strong class="tech-stack">
          Python, Django, SQLite, Razorpay, HTML, CSS, JavaScript
        </strong>
      </p>

      <p>
        Foodigo is a full stack food delivery web application developed
        using Django framework with secure authentication and dynamic
        restaurant management features.
      </p>

      <p>
        The system allows customers to browse restaurants, explore menus,
        add items to cart, place orders, and perform secure online payments
        through Razorpay integration.
      </p>

      <p>
        Admin functionalities include restaurant management, menu updates,
        order handling, and customer management with database-driven operations.
      </p>

      <p>
        The application was deployed successfully on Render with SQLite database
        support and responsive frontend design for real-world accessibility.
      </p>

      <div class="project-popup-buttons">

        <a href="https://foodigo-gswb.onrender.com/"
           target="_blank"
           class="btn live-btn">
           Live Demo
        </a>

        <button class="btn ghost"
                onclick="closeProject()">
            Close
        </button>

      </div>

    `;
  }

  if (type === "travel") {
    content.innerHTML = `
      <h2>Smart Travel Planner</h2>

      <p></p>

      <p>
  <strong class="tech-stack">
    Java, Spring Boot, Spring Security, Hibernate, REST API
  </strong>
</p>

<p>
  Smart Travel Planner is a full stack web application designed to help users
  plan trips efficiently based on location, budget, and preferences.
</p>

<p>
  The system provides personalized travel recommendations by processing user
  inputs and integrating backend business logic through RESTful services.
  Secure authentication and role-based access control were implemented using
  Spring Security.
</p>

<p>
  The application features a responsive user interface and a scalable backend
  architecture, making it suitable for real-world deployment and future
  feature expansion.
</p>

    `;
  }

  if (type === "food") {
    content.innerHTML = `
      <h2>Food Calorie Estimation</h2>

      <p></p>

    <p>
  <strong class="tech-stack">
    Python, YOLOv8, CVAT, Streamlit, Deep Learning
  </strong>
</p>

<p>
  Food Calorie Estimation is an AI-based system that analyzes food images and
  estimates calorie content using deep learning techniques.
</p>

<p>
  The project uses object detection models to identify food items from images.
  Datasets were manually annotated using CVAT to improve detection accuracy.
</p>

<p>
  A user-friendly interface was developed using Streamlit, allowing users to
  upload images and receive instant calorie estimations, demonstrating a
  practical application of computer vision in healthcare and nutrition.
</p>

    `;
  }

  overlay.classList.add("show");
}

function closeProject() {
  const overlay = document.getElementById("overlay");
  overlay.classList.remove("show");
}

function scrollToContact() {
  const contact = document.getElementById("contact");
  if (!contact) return;

  contact.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}


window.addEventListener("load", () => {
  const hero = document.querySelector(".hero-once");

  if (!sessionStorage.getItem("heroPlayed")) {
    hero.classList.add("play-hero");
    sessionStorage.setItem("heroPlayed", "true");
  } else {
    hero.classList.add("hero-static");
  }
});


document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    const overlay = document.getElementById("overlay");
    if (overlay.classList.contains("show")) {
      closeProject();
    }
  }
});

