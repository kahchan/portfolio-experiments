# AI/B2B Enterprise SaaS Designer Portfolio

## Project Overview
A portfolio site for a designer specializing in AI and B2B enterprise SaaS products. The site showcases work through artifact galleries and decision journals, emphasizing collaboration during go-to-market phases.

## Technical Stack
- **Framework**: Next.js 14+ (App Router)
- **UI Components**: shadcn/ui
- **Styling**: Tailwind CSS
- **Content**: MDX for case studies
- **Deployment**: Vercel (zero-config Next.js deployment)

## Design Philosophy
- **Layout**: Bento box grid crossed with modern newspaper layout
- **Typography**: Mix of serif headings and sans serif body text
- **Visual**: Subtle noise texture overlay across all pages
- **Theme**: Light/dark mode toggle with persistent preference
- **Editorial elements**: Pull quotes for key insights

## Case Study Structure
1. **Artifact Showcase** - Interactive gallery of designs, prototypes, data visualizations
2. **Decision Journal** - Key strategic decisions with context and outcomes
3. **GTM Collaboration** - Cross-functional partnership stories (Sales, Product Marketing, Customer Success, Engineering)

## Key Features
- [ ] Responsive bento box grid system
- [ ] Artifact galleries with hover states and modal views
- [ ] Decision journal timeline components
- [ ] Pull quote components
- [ ] Light/dark theme toggle
- [ ] Subtle noise texture system
- [ ] GTM collaboration section layouts

## Development Commands
```bash
# Setup
npm create next-app@latest . --typescript --tailwind --eslint --app
npx shadcn-ui@latest init
npx shadcn-ui@latest add button card badge typography theme-provider

# Development
npm run dev
npm run build
npm run lint
npm run type-check

# Deployment
git add . && git commit -m "Deploy portfolio"
git push origin main
# Then connect repo to Vercel dashboard - auto-deploys on push
```

## Content Structure
```
/
├── / (Hero + Featured Work)
├── /work (Case Studies Grid)
│   └── /[project-slug] (Individual case studies)
├── /about (Process + Background)
└── /contact
```

## Notes
- Emphasis on strategic thinking over typical design process
- Show business impact and cross-functional collaboration
- Target audience: Hiring managers, design leads, product managers at B2B/enterprise companies
- Focus on scannable hierarchy for busy stakeholders