document.addEventListener("DOMContentLoaded", () => {
  // RESPONSIVE MENU
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("menu");

  menuToggle?.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  // Close mobile menu when a link is clicked
const menuLinks = document.querySelectorAll("#menu a");
menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});

  // FunFact Button
  const factBtn = document.getElementById("factBtn");
  const factText = document.getElementById("factText");
  const facts = [
    "The Obelisk was built in 1936 in just 31 days!",
    "It stands 67.5 meters tall.",
    "It was built to commemorate the 400th anniversary of Buenos Aires.",
    "At one point, it was painted pink as an art installation!",
    "The monument is located at the intersection of Avenida Corrientes and Avenida 9 de Julio, one of the widest avenues in the world.",
    "The Obelisk was designed by Alberto Prebisch, a leading modernist architect.",
    "The Obelisk has been wrapped as a giant condom for an AIDS awareness campaign in 2005.",
    "The structure is made of concrete and white stone from Córdoba.",
    "Its construction cost around 200,000 pesos at the time.",
    "The Obelisk is a national historic monument since 2011.",
    "There is a small ladder of 206 steps inside the Obelisk leading to the top.",
    "It marks the place where the national flag was raised in Buenos Aires for the first time in 1812.",
    "The structure weighs about 170 tons.",
    "The Obelisk was almost demolished in 1939 due to public criticism.",
    "Today, it is one of the most photographed landmarks in Argentina."
  ];

  factBtn?.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * facts.length);
    factText.textContent = facts[randomIndex];
  });

  // Comments and forms
  const form = document.getElementById("commentForm");
  const nameInput = document.getElementById("name");
  const commentInput = document.getElementById("message");
  const commentList = document.getElementById("commentsList");

  const renderComments = () => {
    if (!commentList) return;
    commentList.innerHTML = "";
    const comments = JSON.parse(localStorage.getItem("obeliskComments")) || [];
    comments.reverse().forEach(({ name, comment, date }) => {
      const li = document.createElement("li");
      li.innerHTML = `<strong>${name}</strong> (${date}):<br>${comment}`;
      commentList.appendChild(li);
    });
  };

  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = nameInput.value.trim();
    const comment = commentInput.value.trim();

    if (name && comment) {
      const comments = JSON.parse(localStorage.getItem("obeliskComments")) || [];
      comments.push({ name, comment, date: new Date().toLocaleString() });
      localStorage.setItem("obeliskComments", JSON.stringify(comments));
      form.reset();
      renderComments();
      alert("Thank you for your comment!");
    }
  });

  renderComments();
});
