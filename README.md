# emire.github.io

Absolutely — for the EMIRE website, I’d make the README feel like a **small polished project document**, not a generic developer README.

Here’s a clean, presentable version you can drop directly into `README.md`:

# EMIRE · Corporate Website

**EURL EMIRE · EMIREGENSET**
Energy solutions & industrial maintenance

  

> A responsive corporate website for **EURL EMIRE**, presenting its energy solutions, generator sets, electrical equipment, projects, services and industrial expertise.

---

## ✦ Overview

EMIRE is an Algerian company specializing in **generator sets, electrical installations, industrial maintenance and energy solutions**.

The website was designed around a restrained industrial visual language: strong typography, generous spacing, technical imagery and a controlled palette inspired by EMIREGENSET.

The experience is designed to communicate:

* Reliability
* Technical expertise
* Industrial capability
* Long-term support
* Professionalism
* Clear product and service information

---

## ↗ Website Structure

```text
EMIRE
│
├── Home
│
├── About
│   ├── Company
│   ├── Network
│   └── Brands
│
├── Solutions
│   ├── Generator Sets
│   ├── Electrical Installations
│   ├── Industrial Maintenance
│   └── Spare Parts
│
├── Products
│   ├── Generator Sets
│   ├── Armoires Inverseurs
│   ├── Mâts d’Éclairage
│   └── Groupe Agri
│
├── Projects
│
├── Industries
│
├── Insights
│
└── Contact
```

---

## ◉ Key Features

### Responsive Experience

The website is built to adapt across:

**Desktop → Tablet → Mobile → Small Mobile**

Mobile layouts use dedicated spacing, stacking, image scaling and navigation behavior rather than simply shrinking the desktop interface.

### Product Presentation

Product illustrations use transparent SVG artwork and responsive image containers to preserve their proportions and technical appearance.

### Technical Information

Specification tables are contained within their cards and become horizontally scrollable on smaller screens when necessary.

### Contact & Quote Flow

Users can move from product and service information directly toward contact and quotation requests.

### Navigation

The navigation system includes:

* Desktop navigation
* Responsive mobile navigation
* Mobile menu
* Language selector
* Accessible buttons and navigation states
* Responsive CTA behavior

---

## ◌ Design System

### Core Palette

| Token                | Purpose                      |
| -------------------- | ---------------------------- |
| `#0d1720`            | Primary dark / navigation    |
| EMIRE lime           | Accent / CTA                 |
| White                | Primary light surfaces       |
| Neutral greys        | Supporting UI                |
| Image-specific tones | Product & industrial imagery |

The interface intentionally avoids excessive decoration.
Content, products and technical information remain the visual focus.

---

## ⌘ Technology

The website currently uses a lightweight front-end architecture:

* **HTML5**
* **CSS3**
* **Vanilla JavaScript**
* **SVG**
* Responsive CSS
* Local assets

No large front-end framework is required.

---

## 📁 Project Structure

```text
EMIRE/
│
├── index.html
│
├── about/
│   └── index.html
│
├── solutions/
│   └── index.html
│
├── products/
│   └── index.html
│
├── generator-sets/
│   └── index.html
│
├── armoires-inverseurs/
│   └── index.html
│
├── mats-eclairage/
│   └── index.html
│
├── groupe-agri/
│   └── index.html
│
├── projects/
│   └── index.html
│
├── industries/
│   └── index.html
│
├── insights/
│   └── index.html
│
├── contact/
│   └── index.html
│
├── assets/
│   ├── images/
│   ├── svg/
│   └── ...
│
├── css/
│   └── styles.css
│
├── js/
│   └── main.js
│
└── README.md
```

---

## ◇ Responsive Breakpoints

The responsive system includes dedicated handling for:

```text
≤ 760px   Mobile
≤ 480px   Small Mobile
≤ 360px   Extra Small Mobile
```

Particular attention is given to:

* Navigation
* Hero sections
* Typography
* Buttons
* Cards
* Product illustrations
* Forms
* Tables
* Project layouts
* CTA sections
* Horizontal overflow

---

## ✓ Current Validation

The current build has been checked for:

| Check                       | Status        |
| --------------------------- | ------------- |
| HTML pages                  | ✓ 12          |
| SVG assets                  | ✓ 20          |
| Local links                 | ✓ Checked     |
| Local assets                | ✓ Checked     |
| SVG embedded text layers    | ✓ Checked     |
| Full-canvas SVG backgrounds | ✓ Checked     |
| CSS syntax                  | ✓ Validated   |
| JavaScript syntax           | ✓ Validated   |
| Responsive layouts          | ✓ Implemented |

> Visual browser validation may depend on the local development environment. Automated Chromium rendering was not available for a complete visual pass.

---

## ▶ Run Locally

No build system is required for the static front-end.

### Option 1 · VS Code

Open the project in VS Code and use a local development server such as **Live Server**.

### Option 2 · Python

From the project root:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

### Option 3 · Existing Backend

If the EMIRE backend is running, serve the front-end through the existing application structure and ensure the asset paths remain relative to the project root.

---

## ✎ Editing Content

Most page content can be edited directly inside the corresponding HTML file.

### Global styling

```text
css/styles.css
```

### Global interactions

```text
js/main.js
```

### Images & illustrations

```text
assets/
```

### Individual pages

Each section maintains its own HTML entry point.

---

## ⚠️ Before Deployment

Before publishing a new version:

* [ ] Test navigation on desktop
* [ ] Test navigation on mobile
* [ ] Test every CTA
* [ ] Test every internal link
* [ ] Check product images
* [ ] Check contact forms
* [ ] Check language selector
* [ ] Check tables on mobile
* [ ] Check pages at 360px width
* [ ] Check pages at 480px width
* [ ] Check pages at tablet width
* [ ] Verify favicon / metadata
* [ ] Verify page titles
* [ ] Verify descriptions
* [ ] Verify production asset paths

---

## ↗ Important Navigation Rule

Internal links should use paths that remain valid from their current page depth.

For example:

```html
<!-- From the homepage -->
<a href="products/index.html">Products</a>

<!-- From a nested page -->
<a href="../products/index.html">Products</a>
```

Avoid hard-coding development URLs such as:

```text
localhost:8000/...
```

Production navigation should remain independent from the local development server.

---

## ◐ Mobile Navigation

The mobile navigation is intentionally separated from the desktop navigation behavior.

On smaller screens:

```text
EMIRE                         ☰
────────────────────────────────
Menu

About
Solutions
Products
Projects
Industries
Insights
Contact

Language
EN
FR
AR
```

The mobile language selector should remain **inside the mobile menu flow**, rather than being positioned independently over the page.

This prevents:

* Navbar expansion
* Dropdown overflow
* Off-screen menus
* Unexpected absolute positioning
* Broken mobile layouts

---

## ✦ Brand Direction

The visual direction follows a simple principle:

> **Industrial confidence without visual noise.**

Large typography establishes hierarchy.
Dark surfaces create authority.
Lime accents identify actions.
Technical imagery provides context.
Whitespace keeps the interface premium and readable.

The website should feel **precise, capable and established** rather than overly corporate or visually generic.

---

## Version History

### `v0.8`

**Responsive & structural refinement**

* Improved homepage hero responsiveness
* Reworked mobile hero image behavior
* Improved mobile navigation
* Improved language selector behavior
* Standardized responsive grids
* Improved product image scaling
* Improved project layouts
* Improved CTA stacking
* Improved technical table behavior
* Added small-device adjustments
* Validated internal links and assets
* Validated CSS and JavaScript syntax

---

## © EMIRE

**EURL EMIRE · EMIREGENSET**

Energy solutions & industrial maintenance

**Algeria · Since 1998**

---

### Quick Links

[Home](index.html) · [About](about/index.html) · [Solutions](solutions/index.html) · [Products](products/index.html) · [Projects](projects/index.html) · [Contact](contact/index.html)

If you want it to look **even more presentation-ready on GitHub**, I’d replace the plain text badges with a more editorial header/hero layout and add a **“Preview / Pages / Tech / Structure” button row** at the top.
