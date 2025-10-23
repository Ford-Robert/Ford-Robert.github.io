const projects = [
  {
    title: "Cool App",
    blurb: "A tiny app that does X using Y.",
    href: "https://github.com/YOUR-USERNAME/cool-app",
    demo: "https://your-username.github.io/cool-app/",
    tags: ["TypeScript", "Vite", "API"]
  },
  {
    title: "ML Notebook",
    blurb: "Experiments on dataset Z; write-up inside.",
    href: "https://github.com/YOUR-USERNAME/ml-notebook",
    tags: ["Python", "Pandas", "Jupyter"]
  }
];

function card(p) {
  const demo = p.demo ? ` · <a href="${p.demo}">demo</a>` : "";
  const tags = (p.tags||[]).map(t=>`<span class="badge">${t}</span>`).join("");
  return `
    <article class="card">
      <h3><a href="${p.href}">${p.title}</a>${demo}</h3>
      <p>${p.blurb}</p>
      <div class="badges">${tags}</div>
    </article>
  `;
}

document.querySelector("#grid").innerHTML = projects.map(card).join("");
document.querySelector("#year").textContent = new Date().getFullYear();
