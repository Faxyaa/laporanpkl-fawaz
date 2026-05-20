// Matrix Rain
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const chars = "010101SEC_SECURITY_NETWORK_ANALYSE";
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function drawMatrix() {
  ctx.fillStyle = "rgba(2, 6, 23, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#0ea5e9";
  ctx.font = fontSize + "px monospace";
  for (let i = 0; i < drops.length; i++) {
    const text = chars.charAt(Math.floor(Math.random() * chars.length));
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975)
      drops[i] = 0;
    drops[i]++;
  }
}
setInterval(drawMatrix, 40);

// Terminal Typing Effect
const scripts = [
  {
    id: "terminal-nmap",
    lines: [
      "> nmap -sV localhost",
      "Starting Nmap...",
      "PORT 80/tcp OPEN",
      "PORT 443/tcp OPEN",
      "Scan complete.",
    ],
  },
  {
    id: "terminal-nuclei",
    lines: [
      "> nuclei -t tech-detect",
      "[INF] Running templates",
      "[tech] apache [info]",
      "[tech] php [info]",
      "Done.",
    ],
  },
  {
    id: "terminal-wpscan",
    lines: [
      "> wpscan --url local",
      "[+] WordPress 6.x detect",
      "[!] Vulnerability found!",
      "[!] XML-RPC enabled",
      "Analysis end.",
    ],
  },
];

scripts.forEach((script) => {
  const el = document.getElementById(script.id);
  let i = 0;
  function type() {
    if (i < script.lines.length) {
      const p = document.createElement("p");
      p.className = script.lines[i].startsWith(">")
        ? "cmd-text mb-1"
        : "output-text mb-1";
      p.textContent = script.lines[i];
      el.appendChild(p);
      i++;
      setTimeout(type, 600);
    }
  }
  type();
});
