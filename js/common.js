console.log("Running hover logic...");
console.log("Found tags:", document.querySelectorAll('.tag').length);

document.addEventListener("DOMContentLoaded", function () {
  const dropdown = document.getElementById("searchDropdown");

  // Reset dropdown on page load (back navigation)
  if (dropdown) {
    dropdown.selectedIndex = 0;
  }

  // Handle selection and redirect
  dropdown.addEventListener("change", function () {
    if (this.value) {
      window.location.href = this.value;
    }
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const topBtn = document.getElementById("topBtn");

  if (topBtn) {
    topBtn.addEventListener("click", () => {
      window.scrollTo({ top: 1, behavior: "smooth" });
    });
  }
});

//invert img
window.onload = function () {
  fetch('tagImageMap.json')
    .then(res => res.json())
    .then(tagMap => {
      const bg = document.getElementById('tag-bg');
      const tags = document.querySelectorAll('.tag');

      tags.forEach(tag => {
        const name = tag.textContent.trim();
        tag.addEventListener('mouseenter', () => {
          if (tagMap[name]) {
            bg.style.backgroundImage = `url('${tagMap[name]}')`;
            tag.classList.add('hovered');
          }
        });
        tag.addEventListener('mouseleave', () => {
          bg.style.backgroundImage = '';
          tag.classList.remove('hovered');
        });
      });
    });
};



//invert img

document.addEventListener("DOMContentLoaded", function () {
  const aboutBtn = document.getElementById("aboutBtn");
  const aboutPanel = document.getElementById("aboutPanel");
  const closePanel = document.getElementById("closePanel");

  aboutBtn.addEventListener("click", () => {
    aboutPanel.classList.add("open");
  });

  closePanel.addEventListener("click", () => {
    aboutPanel.classList.remove("open");
  });
});

function scrollToYear(yearId) {
  const section = document.getElementById(yearId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}


//section tag
const tagData = {
 
  
  

    "2021":[ "grid", "modular-guides", "typographic-grids",
  "rectangular", "panels", "box", "tiles", "shape-segmentation", "column-shapes",
  "sculptural-letterforms", "metallic-volume", "crystal-3D-clusters", "reflective-joystick", "glossy-candy",
  "inflated-object", "chrome-shading", "curved-surface-illusion", "glass-forms",
  "neon-green", "hot-pink", "neon-yellow&black", "red-glow", "electric-gradients",
  "saturated-candy-colors", "high-chroma-contrast", "RGB-glow-palette",
  "black", "yellow", "grayscale", "vibrant-background", "type-popping", "stark", "shape outlines",
  "cardboard grain", "rips", "concrete-surface", "crinkled-paper", "inked-brushwork", "grainy",
  "dot-pattern", "rubbery", "joystick-gloss", "metal-chain", "ceramic–fold", "aged-print",
  "isolation", "white void", "symbolic", "calligraphic layout", "chained-letterform"],

  "2020": [
  "geometric", "modular", "structured", "precise", "symmetric",
  "rectangular", "triangle", "block", "symbolic", "repeated",
  "minimal", "flat", "2D", "screen-printed",
  "red-black", "black&white", "duotone", "grayscale", "neutral",
  "black-white", "stark", "bold",
  "xerox", "distressed", "print-like",
  "symmetrical", "focal-point", "central-layout"
],

  "2019": [
  "clean-lines", "modular", "engineered", "grid", "technical", "architectural",
  "rectangles", "diamonds", "grids", "squares", "blocks", "column-shapes",
  "photographic-volume", "sculptural", "3D",
  "black&white", "grayscale", "desaturated",
  "bold", "graphic", "dramatic", "tonal",
  "grainy", "stone-surface", "real-material", "photographic realism",
  "structural", "framed"
],

"2018": [
  "geometric", "modular", "structured", "grid-based", "systematic", "orthogonal", "aligned",
  "abstract", "basic", "formalist", "constructed", "polygonal",
  "flat", "2D", "graphic", "non-dimensional", "vector-like",
  "black&white", "grayscale", "duotone", "desaturated",
  "high-contrast",
  "clean", "digital", "vector", "smooth",
  "frontal", "no–depth", "shallow"
],

"2017": [
  "vector", "grid", "typographic", "modular", "strokes", "sharp",
  "circles", "squares", "rectangles", "blocks", "glyph",
  "flat", "2D", "silhouette", "no-shading", "graphic", "screen-like", "digital-plane",
  "black&white", "duotone", "grayscale", "restricted color use",
  "stark", "bold",
  "sterile",
  "isolation", "figure", "white space"
],

"2016": [
  "mechanical", "straight", "angular", "grid", "typographic", "vector", "modular", "architectural",
  "rectangular", "circular", "triangular", "square", "hard-edged", "symmetrical",
  "2D", "flat", "illustrative", "silhouetted", "no-volume", "minimal modeling",
  "grayscale", "duotone", "minimal-color", "controlled palette",
  "black&white", "stark", "bold",
  "glass-like", "pleated fabric", "concrete", "fur", "liquid realism", "textile",
  "minimal-layout", "isolation", "breathing-room", "background-focus", "sparse"
],

"2015": [
  "grid", "modular", "vertical", "clean", "architectural", "technical",
  "rectangles", "squares", "circles", "triangles", "symmetry", "prisms", "blocks", "typographic",
  "flat", "silhouette", "no depth", "icon-like", "2D emphasis", "abstracted",
  "black&white", "duotone", "red&cream", "yellow&black", "binary",
  "spotlight", "tonal-extremes",
  "vector", "textureless", "solid-fills", "print-like polish",
  "center-weighted", "isolation", "symmetrical layout", "circular"
],

"2014": [
  "straight", "vector", "minimal", "contour", "modular", "sharp", "controlled",
  "circle", "rectangle", "triangle", "blocky",
  "flat",
  "black&white",
  "skin", "fabric", "wrinkles", "photographic",
  "extreme", "floating", "void", "isolation"
],

  // Add more years and their tags here...
};

document.addEventListener("DOMContentLoaded", function () {
  for (const [year, tags] of Object.entries(tagData)) {
    const container = document.getElementById(`tags-${year}`);
    if (container) {
      tags.forEach(tag => {
        const span = document.createElement('span');
        span.className = 'tag';
        span.textContent = tag;
        container.appendChild(span);
      });
    }
  }
});
//section tag


//scroll stop
document.addEventListener("scroll", () => {
  const maxScrollY = document.getElementById("scroll-stop").offsetTop;
  if (window.scrollY + window.innerHeight > maxScrollY) {
    window.scrollTo({
      top: maxScrollY - window.innerHeight,
      behavior: "auto"
    });
  }
});
//scroll stop

function scrollToYear(year) {
  const target = document.getElementById(`${year}-section`);
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  }
}


//





