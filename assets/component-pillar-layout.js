document.addEventListener('DOMContentLoaded', function () {
    const contentBody = document.getElementById('content-body');
    const tocNav = document.getElementById('toc-nav');
    const mobileTocNav = document.getElementById('mobile-toc-nav');

    if (!contentBody || (!tocNav && !mobileTocNav)) {
        return;
    }

    // Find all H2 headings in the content
    const headings = contentBody.querySelectorAll('h2');
    const desktopLinks = [];

    // 1. Generate TOC
    headings.forEach((heading, index) => {
        // Ensure every heading has an ID for linking
        if (!heading.id) {
            // Create a simple slugified ID
            const slug = heading.textContent.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') || 'chapter-' + (index + 1);
            heading.id = slug;
        }
        const id = heading.id;
        const title = heading.textContent;

        // Create the list item and link
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = '#' + id;
        link.textContent = title;
        listItem.appendChild(link);

        // Add to Desktop TOC
        if (tocNav) {
            tocNav.appendChild(listItem);
            desktopLinks.push(link);
        }
        // Add to Mobile TOC
        if (mobileTocNav) {
            // Clone the node for the mobile nav
            mobileTocNav.appendChild(listItem.cloneNode(true));
        }
    });

    // 2. Implement Scroll Spy using Intersection Observer (Performant method)
    const observerOptions = {
        root: null,
        // Defines the viewport area where intersection is checked.
        // Switches when the heading enters the top 20% of the screen.
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            // We only need to update the desktop TOC visualization
            const correspondingLink = document.querySelector(`#toc-nav a[href="#${id}"]`);

            if (entry.isIntersecting) {
                // Remove active class from all desktop links
                desktopLinks.forEach(link => link.classList.remove('active'));

                // Add active class to the current link
                if (correspondingLink) {
                    correspondingLink.classList.add('active');
                }
            }
        });
    }, observerOptions);

    // Observe all the headings
    headings.forEach(heading => observer.observe(heading));


    // 3. Mobile TOC Toggle (CRO Improvement)
    const mobileTocHeader = document.querySelector('.mobile-toc-header');
    const mobileTocList = document.querySelector('.mobile-toc-list');
    const toggleIcon = document.querySelector('.toggle-icon');

    if (mobileTocHeader && mobileTocList) {
        const toggleMobileTOC = (isExpanded) => {
            mobileTocList.style.display = isExpanded ? 'block' : 'none';
            if (toggleIcon) {
                toggleIcon.textContent = isExpanded ? '▲' : '▼';
            }
        };

        mobileTocHeader.addEventListener('click', () => {
            const isExpanded = mobileTocList.style.display === 'block';
            toggleMobileTOC(!isExpanded);
        });

        // Close TOC when a link is clicked on mobile
        mobileTocNav.addEventListener('click', (e) => {
            if (e.target.tagName === 'A') {
                toggleMobileTOC(false);
            }
        });
    }
});