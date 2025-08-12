export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  year: string;
  tags: string[];
  featured: boolean;
  hero_image: string;
  artifacts: Artifact[];
  decisions: Decision[];
  collaboration: CollaborationStory[];
}

export interface Artifact {
  id: string;
  title: string;
  type: 'design' | 'prototype' | 'data' | 'research';
  image: string;
  description: string;
  context?: string;
}

export interface Decision {
  id: string;
  title: string;
  context: string;
  debate: string;
  decision: string;
  outcome: string;
  quote?: string;
}

export interface CollaborationStory {
  id: string;
  department: 'sales' | 'product_marketing' | 'customer_success' | 'engineering';
  title: string;
  description: string;
  impact: string;
  quote?: string;
  person?: string;
}

export const projects: Project[] = [
  {
    id: 'ai-agent-platform',
    title: 'Intelligent Property Assistant',
    subtitle: 'AI-powered tenant support for commercial real estate',
    description: 'Designed an AI agent platform that handles tenant inquiries, maintenance requests, and lease queries across commercial real estate portfolios.',
    year: '2024',
    tags: ['AI/ML', 'PropTech', 'Tenant Experience', 'Enterprise'],
    featured: true,
    hero_image: 'https://placehold.co/1200x600/6366f1/ffffff/png?text=Property+Assistant',
    artifacts: [
      {
        id: 'tenant-dashboard',
        title: 'Tenant Request Dashboard',
        type: 'design',
        image: 'https://placehold.co/800x600/3b82f6/ffffff/png?text=Dashboard',
        description: 'Real-time analytics showing request resolution rates, tenant satisfaction, and property manager workload.',
        context: 'Property managers needed visibility into tenant service quality across multiple buildings without overwhelming detail.'
      },
      {
        id: 'property-builder',
        title: 'Property Knowledge Builder',
        type: 'prototype',
        image: 'https://placehold.co/900x600/10b981/ffffff/png?text=Builder',
        description: 'Drag-and-drop interface for creating property-specific AI responses and escalation workflows.',
        context: 'Property managers needed to customize AI responses for different buildings without technical expertise.'
      },
      {
        id: 'tenant-analytics',
        title: 'Tenant Interaction Analytics',
        type: 'data',
        image: 'https://placehold.co/700x500/f59e0b/ffffff/png?text=Analytics',
        description: 'Interactive visualization of tenant communication patterns and satisfaction trends by property.',
        context: 'Regional managers needed to identify properties with service issues and optimize tenant experience.'
      }
    ],
    decisions: [
      {
        id: 'property-specific-ai',
        title: 'Why we built property-specific AI instead of generic responses',
        context: 'Each commercial building has unique amenities, policies, and tenant mix requiring tailored communication',
        debate: 'Engineering wanted one-size-fits-all. Property managers wanted customization. Product wanted scalability.',
        decision: 'Template system with property-specific overrides. Standard responses as baseline, custom rules per building.',
        outcome: '89% tenant satisfaction vs 67% with generic responses. 43% reduction in escalations to human staff.',
        quote: '"It actually knows our building - tenants love it" - Senior Property Manager'
      },
      {
        id: 'maintenance-triage',
        title: 'Designing AI triage for maintenance requests without liability',
        context: 'Maintenance requests range from urgent (water leak) to routine (HVAC filter). Wrong triage creates legal risk.',
        debate: 'Legal wanted human approval for everything. Operations wanted full automation. Tenants wanted speed.',
        decision: 'AI pre-screening with confidence scores. High-confidence routine requests auto-route, ambiguous ones escalate.',
        outcome: '78% of requests auto-processed, 3-hour average response time vs 24-hour manual. Zero liability incidents.',
        quote: '"We can finally focus on the complex stuff" - Facilities Director'
      }
    ],
    collaboration: [
      {
        id: 'sales-proptech-demo',
        department: 'sales',
        title: 'Positioning AI as tenant experience differentiator',
        description: 'Created a demo showcasing how AI-powered tenant support increases lease renewals and attracts premium tenants.',
        impact: '52% increase in qualified leads from property management companies. AI became key competitive advantage.',
        quote: '"Prospects see this and immediately want to upgrade their buildings" - VP Sales',
        person: 'Jennifer Walsh, VP Sales'
      },
      {
        id: 'customer-success-rollout',
        department: 'customer_success',
        title: 'Phased rollout strategy that prevented tenant confusion',
        description: 'Designed gradual AI introduction starting with routine inquiries, then expanding based on tenant comfort.',
        impact: 'Zero tenant complaints during rollout. 92% tenant adoption within 60 days. 34% increase in digital engagement.',
        quote: '"Tenants are actually impressed by how smart our building is now" - Customer Success Manager',
        person: 'David Chen, Director of Customer Success'
      }
    ]
  },
  {
    id: 'ai-integrated-crud',
    title: 'Smart Lease Management System',
    subtitle: 'AI-powered lease analysis and portfolio optimization',
    description: 'Integrated AI capabilities into lease management workflows to automate rent roll analysis, lease renewals, and market positioning.',
    year: '2023',
    tags: ['AI Integration', 'Lease Management', 'Portfolio Optimization', 'PropTech'],
    featured: true,
    hero_image: 'https://placehold.co/1200x650/8b5cf6/ffffff/png?text=Lease+Management',
    artifacts: [
      {
        id: 'lease-scoring',
        title: 'Lease Renewal Prediction Dashboard',
        type: 'design',
        image: 'https://placehold.co/850x600/ef4444/ffffff/png?text=Renewals',
        description: 'Visual representation of AI-driven lease renewal probabilities with risk factors and tenant engagement scores.',
        context: 'Leasing managers needed early warning system for at-risk tenants to proactively address retention.'
      },
      {
        id: 'market-analysis',
        title: 'Automated Market Positioning Tool',
        type: 'prototype',
        image: 'https://placehold.co/750x550/06b6d4/ffffff/png?text=Market+Analysis',
        description: 'AI-powered rent analysis that benchmarks properties against comparable buildings and suggests optimal pricing.',
        context: 'Portfolio managers needed data-driven rent setting to maximize revenue while maintaining occupancy rates.'
      },
      {
        id: 'portfolio-insights',
        title: 'Portfolio Performance Analytics',
        type: 'data',
        image: 'https://placehold.co/800x500/84cc16/ffffff/png?text=Portfolio',
        description: 'Predictive analytics showing lease expiration patterns, revenue forecasts, and optimization opportunities.',
        context: 'Regional directors needed portfolio-wide visibility to identify underperforming assets and growth opportunities.'
      }
    ],
    decisions: [
      {
        id: 'ai-rent-recommendations',
        title: 'Making AI rent suggestions trustworthy for high-stakes decisions',
        context: 'Rent pricing mistakes cost millions. Leasing teams were skeptical of AI overriding their market knowledge.',
        debate: 'Finance wanted algorithmic pricing. Leasing wanted full control. Product wanted adoption.',
        decision: 'AI as advisor model: provide data-driven recommendations with market context, let humans decide.',
        outcome: '94% recommendation acceptance rate. 12% average rent increase vs 6% manual. Zero pricing disputes.',
        quote: '"It\'s like having a market analyst who never sleeps" - Senior Leasing Manager'
      }
    ],
    collaboration: [
      {
        id: 'product-marketing-positioning',
        department: 'product_marketing',
        title: 'Positioning AI as "revenue intelligence" not automation',
        description: 'Worked with product marketing to frame AI features as augmenting expertise rather than replacing judgment.',
        impact: 'Reduced sales objections by 60%. Increased feature adoption in trials by 85%.',
        quote: '"We stopped selling robots and started selling superpowers" - Head of Product Marketing',
        person: 'Sarah Martinez, Head of Product Marketing'
      }
    ]
  },
  {
    id: 'analytics-platform',
    title: 'Real Estate Portfolio Analytics',
    subtitle: 'Self-service business intelligence for property management',
    description: 'Built a comprehensive analytics platform that democratizes data insights across commercial real estate operations teams.',
    year: '2023',
    tags: ['Analytics', 'Business Intelligence', 'Portfolio Management', 'Data Visualization'],
    featured: true,
    hero_image: 'https://placehold.co/1200x580/f97316/ffffff/png?text=Portfolio+Analytics',
    artifacts: [
      {
        id: 'executive-dashboard',
        title: 'Executive Portfolio Dashboard',
        type: 'design',
        image: 'https://placehold.co/900x650/db2777/ffffff/png?text=Executive+Dashboard',
        description: 'High-level portfolio metrics with drill-down capabilities for C-level executives and regional directors.',
        context: 'Executives needed instant access to key performance indicators across hundreds of properties.'
      },
      {
        id: 'occupancy-analysis',
        title: 'Interactive Occupancy Trend Analysis',
        type: 'prototype',
        image: 'https://placehold.co/800x600/0ea5e9/ffffff/png?text=Occupancy',
        description: 'Dynamic occupancy analysis with customizable time periods and tenant categorization.',
        context: 'Operations teams needed to understand occupancy patterns and identify seasonal trends for strategic planning.'
      },
      {
        id: 'revenue-forecasting',
        title: 'Revenue Forecasting Accuracy Tracker',
        type: 'data',
        image: 'https://placehold.co/750x500/65a30d/ffffff/png?text=Forecasting',
        description: 'Visual tracking of revenue forecast accuracy over time with improvement recommendations by property type.',
        context: 'Finance teams needed to improve forecasting accuracy for investor reporting and capital planning.'
      }
    ],
    decisions: [
      {
        id: 'self-service-vs-guided',
        title: 'Balancing self-service flexibility with guided property insights',
        context: 'Property managers wanted simple KPIs. Analysts wanted deep-dive capabilities. Both needed accurate data.',
        debate: 'Analytics team wanted full query access. Business users wanted push-button reports. IT wanted governance.',
        decision: 'Layered approach: guided dashboards as entry point, progressive revelation of advanced analytics.',
        outcome: '88% of users found answers in guided mode. 25% graduated to advanced features. Zero data governance violations.',
        quote: '"I can finally answer my own questions without bothering the analytics team" - Regional Property Manager'
      }
    ],
    collaboration: [
      {
        id: 'engineering-performance',
        department: 'engineering',
        title: 'Building design tokens that scaled across property types',
        description: 'Created a design system that could handle complex real estate data visualizations across office, retail, and industrial properties.',
        impact: 'Reduced design-to-dev handoff time by 55%. Maintained consistency across 12 different chart types and 3 property categories.',
        quote: '"These design patterns actually make sense for real estate data" - Senior Frontend Engineer',
        person: 'Michael Torres, Senior Frontend Engineer'
      }
    ]
  }
];

export const getFeaturedProjects = () => projects.filter(p => p.featured);
export const getProjectById = (id: string) => projects.find(p => p.id === id);