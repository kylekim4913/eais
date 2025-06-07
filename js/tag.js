document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const tagName = params.get("tag");

  if (!tagName) return;

  document.getElementById("tag-label").textContent = `#${tagName}`;

  fetch("tagImageMap.json")
    .then(res => res.json())
    .then(map => {
      const imagePath = map[tagName];
      if (imagePath) {
        document.getElementById("tag-image").src = imagePath;
      } else {
        document.getElementById("tag-label").textContent += " (No image found)";
      }
    });
});
