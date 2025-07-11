// Delayed injection for stealth
setTimeout(() => {
  const script = document.createElement('script');
  script.src = "/layers/core/firewall/hooks/core.js";
  document.body.appendChild(script);
}, 300); // Adds delay to mimic "boot sequence"
