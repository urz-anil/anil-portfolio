# Portfolio Website Structure

This document provides an overview of the portfolio website's structure and components.

## Directory Structure

```
portfolio/
├── app/
│   ├── globals.css       # Global styles with dark mode variables
│   ├── layout.tsx        # Root layout with ThemeProvider
│   └── page.tsx          # Main page that combines all sections
├── components/
│   ├── accent-picker.tsx # Dynamic accent color picker
│   ├── footer.tsx        # Footer with copyright and animated accent
│   ├── navbar.tsx        # Responsive navbar with scroll effect
│   ├── sections/         # Main content sections
│   │   ├── about.tsx     # About section with animated skill badges
│   │   ├── contact.tsx   # Contact form and social links
│   │   ├── hero.tsx      # Hero section with 3D tilt effect
│   │   └── projects.tsx  # Projects with 3D card effects
│   ├── theme/            # Theme related components
│   │   ├── theme-provider.tsx # Theme provider wrapper
│   │   └── theme-toggle.tsx   # Dark/light mode toggle
│   └── ui/               # UI components (shadcn/ui)
│       ├── avatar.tsx    # Avatar component
│       ├── button.tsx    # Button component
│       ├── card.tsx      # Card component
│       └── dropdown-menu.tsx # Dropdown menu component
├── lib/
│   └── utils.ts          # Utility functions for className handling
└── public/               # Public assets (images, resume, etc.)
```

## Key Features

1. **Responsive Design**

   - Mobile-first approach
   - Full support for all screen sizes

2. **Dark Mode**

   - Default dark theme with toggle to light mode
   - Implemented with next-themes and CSS variables

3. **Dynamic Accent Color**

   - Color picker to change the accent color
   - CSS variables for theme consistency

4. **3D Effects**

   - Tilt effect on avatar in hero section
   - 3D hover effect on project cards
   - Parallax background elements

5. **Performance Optimizations**

   - Server components where appropriate
   - Lazy-loaded interactive components
   - Optimized images

6. **Accessibility**
   - Semantic HTML structure
   - ARIA attributes for interactive elements
   - Keyboard navigation support

## Technologies Used

- **Next.js** - React framework with App Router
- **TypeScript** - Type safety throughout the codebase
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Reusable UI components
- **Lucide React** - Icon library

## Future Enhancements

- Add more projects
- Implement blog section
- Add animations with Framer Motion
- Integrate with a CMS for content management
