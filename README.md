# 🍄 Ffsampleprojmelk — Mushroom Guide Website

This is a responsive front-end project that demonstrates modern CSS architecture and interactive JavaScript filtering. The site presents a **mushroom identification guide** that allows users to filter mushrooms by **season** and **edibility**, with smooth transitions and accessibility features.

---

## 🌟 Features

* **Modern CSS Architecture**

  * Uses `@layer` organization: `reset`, `base`, `layout`, `components`, and `utilities`
  * Custom properties (`--variables`) for color, typography, and spacing
  * Responsive design using media queries and CSS grid/flex layouts
  * Accessible navigation with skip links and keyboard-friendly focus styles
  * View transitions for smooth page animations

* **JavaScript Interactivity**

  * Dropdown filters for **season** and **edibility**
  * Real-time filtering of cards with view transitions
  * Responsive hamburger navigation menu
  * `ResizeObserver` pauses animations during window resizing
  * Graceful fallback for browsers that don’t support `document.startViewTransition`

* **Accessibility & Progressive Enhancement**

  * Hidden text utilities for screen readers
  * Reduced motion respect via `prefers-reduced-motion`
  * Visual feedback and focus states

---

## 🖋️ Technologies Used

* **HTML5** — semantic structure and accessibility roles
* **CSS3** — `@layer`, variables, flexbox, grid, animations, and transitions
* **JavaScript (ES6)** — DOM manipulation, view transitions, and event handling

---

## 🧩 Key JavaScript Logic

* **Navigation Toggle**

  ```js
  const navToggle = document.querySelector('[aria-controls="primary-nav"]');
  navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", !expanded);
  });
  ```

* **Filtering Function**

  ```js
  function filterCards() {
    cards.forEach((card) => {
      const season = card.querySelector("[data-season]").dataset.season;
      const edible = card.querySelector("[data-edible]").dataset.edible;

      const matchesSeason =
        currentFilters.season === "all" || currentFilters.season === season;
      const matchesEdible =
        currentFilters.edible === "all" || currentFilters.edible === edible;

      card.hidden = !(matchesSeason && matchesEdible);
    });
  }
  ```

---

## 🚀 How to Run

1. Clone this repository:

   ```bash
   git clone https://github.com/Melkang/Ffsampleprojmelk.git
   ```
2. Open `index.html` in your browser.
3. Try the mushroom filter and resize the window to see layout responsiveness.

---

## 🧠 What I Learned

* How to structure CSS with layers for scalability
* The importance of accessibility utilities like skip links and hidden text
* Using `ResizeObserver` to improve performance during window resizing
* Implementing filtering logic based on custom `data-*` attributes
* Progressive enhancement with `view-transition` API

---

## 📷 Preview

![Hero section preview](assets/hero.webp)

---

## 📜 License

This project is open-source and available under the [MIT License](LICENSE).

---

## 👩‍💻 Author

**Melissa Kang**
[GitHub Profile](https://github.com/Melkang)

---
