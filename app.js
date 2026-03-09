(function () {
  const status = document.getElementById("status");
  const details = document.getElementById("details");
  const button = document.getElementById("checkBtn");

  function inspectRuntime() {
    const info = {
      userAgent: navigator.userAgent,
      webOSObjectPresent: Boolean(window.webOS),
      palmSystemPresent: Boolean(window.PalmSystem),
      location: window.location.href,
      timestamp: new Date().toISOString()
    };

    if (window.webOS && typeof window.webOS.platformBack === "function") {
      status.textContent = "Running on webOS runtime ✅";
    } else {
      status.textContent = "Running in browser preview (webOS APIs not detected).";
    }

    details.textContent = JSON.stringify(info, null, 2);
  }

  button.addEventListener("click", inspectRuntime);
  inspectRuntime();
})();
