# Prathyaksh Malligari's Portfolio

A personal portfolio website built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui.

## Features

- Responsive design with dark mode
- Dynamic accent color changing
- 3D tilt effects on cards and avatar
- Animated skill badges
- Contact form with validation

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Add a profile image:

   - Place a profile photo named `profile.jpg` in the `public` directory
   - Alternatively, update the image path in `components/sections/hero.tsx`

4. Add your resume:

   - Place your resume as `resume.pdf` in the `public` directory
   - Or update the link in `components/sections/hero.tsx`

5. Run the development server:

   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui components
- Custom 3D effects

## Customization

- Edit project details in `components/sections/projects.tsx`
- Update your bio in `components/sections/about.tsx`
- Change contact info in `components/sections/contact.tsx`
- Modify skills in `components/sections/about.tsx`

## Build and Deployment

To build the project for production:

```bash
npm run build
```

Then start the production server:

```bash
npm start
```

## License

MIT
