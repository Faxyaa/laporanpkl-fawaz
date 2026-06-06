// Mobile Menu Toggle (if needed in future)
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
    });
  });
}

// Terminal Typing Effect for Hero
const scripts = [
  {
    id: "terminal-nmap",
    lines: [
      "> Running network security scan...",
      "IP Range: 192.168.80.0/24",
      "[OK] All systems operational",
      "[INFO] Security protocol: ACTIVE",
    ],
  },
];

scripts.forEach((script) => {
  const el = document.getElementById(script.id);
  if (!el) return;

  let i = 0;
  function type() {
    if (i < script.lines.length) {
      const p = document.createElement("div");
      p.className = script.lines[i].startsWith(">")
        ? "text-gray-400 mb-1"
        : "text-slate-400 mb-1";
      p.textContent = script.lines[i];
      el.appendChild(p);
      i++;
      setTimeout(type, 800);
    }
  }
  type();
});
