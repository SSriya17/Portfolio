# Tech Portfolio

A stunning, modern portfolio website built with Next.js 14, showcasing software engineering projects with a focus on AI/ML and full-stack development.

## Features

- 🎨 **Modern Dark Theme** - Sleek indigo/purple gradient design
- ✨ **Animated Hero Section** - Particle effects with interactive canvas animations
- 🎭 **Smooth Animations** - Framer Motion for seamless scroll animations
- 💼 **Interactive Project Cards** - Hover effects and scale animations
- 🛠️ **Skills Showcase** - Organized by categories with animated badges
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- 🖱️ **Parallax Effects** - Mouse interaction with particle system
- ⚡ **Performance Optimized** - Built with Next.js 14 App Router

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Lucide React** - Beautiful icons

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Main page combining all sections
│   └── globals.css      # Global styles and Tailwind directives
├── components/
│   ├── Navigation.tsx   # Fixed navigation bar
│   ├── ParticleBackground.tsx  # Animated particle canvas
│   ├── Hero.tsx         # Hero section with CTA buttons
│   ├── Projects.tsx     # Projects showcase grid
│   ├── Skills.tsx       # Skills organized by category
│   └── Contact.tsx      # Contact section with social links
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── next.config.js
```

## Customization

### Update Personal Information

1. **GitHub Profile**: Update links in `components/Hero.tsx` and `components/Contact.tsx`
2. **LinkedIn Profile**: Replace placeholder LinkedIn URL in `components/Hero.tsx` and `components/Contact.tsx`
3. **Email**: Replace placeholder email in `components/Hero.tsx` and `components/Contact.tsx`
4. **Projects**: Modify the `projects` array in `components/Projects.tsx`
5. **Skills**: Update `skillCategories` array in `components/Skills.tsx`

### Styling

- Colors and gradients: Modify `tailwind.config.js` and component classes
- Animations: Adjust Framer Motion props in component files
- Particle effects: Tune parameters in `components/ParticleBackground.tsx`

## Build for Production

```bash
npm run build
npm start
```

## Deployment

This portfolio is ready to deploy on [Vercel](https://vercel.com), the creators of Next.js:

1. Push your code to GitHub
2. Import your repository on Vercel
3. Deploy with one click

## License

MIT License - feel free to use this portfolio as a template for your own!

## Credits

- Design inspiration from Vercel and Linear
- Particle animation system for interactive backgrounds
- Icons from Lucide React

