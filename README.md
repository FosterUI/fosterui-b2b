# FosterUI B2B - Shopify Theme

This repository contains the source code for the FosterUI B2B Shopify theme, a premium, high-performance theme built on Shopify's Online Store 2.0 architecture. It extends the latest version of the Dawn theme, serving as a showcase of expert-level theme customization and performance optimization.

## Project Goal

The primary goal is to create a top-tier Shopify theme for the FosterUI portfolio that demonstrates mastery in:

- **Performance:** Achieving a Google PageSpeed score of 95+ with an LCP under 1.8s.
- **Modern Development:** Utilizing the full potential of OS 2.0 features, including flexible sections and blocks.
- **Best Practices:** Adhering to strict coding standards, accessibility guidelines (WCAG 2.1 AA), and maintainability.

---

## Tech Stack

- **Platform:** Shopify OS 2.0
- **Base Theme:** [Dawn (Latest Version)](https://github.com/Shopify/dawn)
- **Languages:** Liquid, HTML5, CSS3, JavaScript (ES6+)
- **Tooling:** Shopify CLI, Node.js, npm/yarn, Prettier

---

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Shopify CLI](https://shopify.dev/docs/themes/tools/cli)

---

## Getting Started

1.  **Clone the repository:**

    ```bash
    git clone <your-repository-url> fosterui-b2b
    cd fosterui-b2b
    ```

2.  **Install dependencies:**
    This project uses `npm` to manage development dependencies like Prettier.

    ```bash
    npm install
    ```

3.  **Connect to your Shopify store:**
    Log in to your Shopify account and connect the theme to your development store.

    ```bash
    shopify login --store <your-store-name.myshopify.com>
    ```

4.  **Start the development server:**
    This command will start a local server, sync your changes to the theme, and open a preview in your browser.
    ```bash
    shopify theme dev
    ```

---

## Development Workflow

This project follows the guidelines outlined in `docs/web_development_guidelines.md` and `docs/fosterui_website_build_project_workflow_sop.md`.

### Key Conventions:

- **File & Class Naming:** All custom sections, snippets, and CSS files are prefixed with `fui-` (e.g., `fui-section-hero.liquid`, `.fui-hero__title`). This ensures clear separation from the base Dawn theme code.
- **Git Commits:** Commit messages should follow the Conventional Commits specification (e.g., `feat(cart): Add new upsell block`).
- **Branching:** New features should be developed on branches named `feature/fui-feature-name`.

### Code Formatting

Prettier is used to maintain consistent code style. To format your code, run:

```bash
npm run format
```
