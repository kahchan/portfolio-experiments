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
    hero_image: 'https://picsum.photos/1200/600?random=100',
    artifacts: [
      {
        id: 'tenant-dashboard',
        title: 'Tenant Request Dashboard',
        type: 'design',
        image: 'https://picsum.photos/800/600?random=101',
        description: 'Real-time analytics showing request resolution rates, tenant satisfaction, and property manager workload.',
        context: 'Property managers needed visibility into tenant service quality across multiple buildings without overwhelming detail.'
      },
      {
        id: 'property-builder',
        title: 'Property Knowledge Builder',
        type: 'prototype',
        image: 'https://picsum.photos/900/600?random=102',
        description: 'Drag-and-drop interface for creating property-specific AI responses and escalation workflows.',
        context: 'Property managers needed to customize AI responses for different buildings without technical expertise.'
      },
      {
        id: 'tenant-analytics',
        title: 'Tenant Interaction Analytics',
        type: 'data',
        image: 'https://picsum.photos/700/500?random=103',
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
    title: 'AI-Enhanced CRM Platform',
    subtitle: 'Smart automation for B2B sales workflows',
    description: 'Integrated AI capabilities into existing CRM workflows to automate data entry, lead scoring, and opportunity insights.',
    year: '2023',
    tags: ['AI Integration', 'CRM', 'Sales Automation', 'B2B'],
    featured: true,
    hero_image: 'https://picsum.photos/1200/650',
    artifacts: [
      {
        id: 'smart-lead-scoring',
        title: 'Predictive Lead Scoring Interface',
        type: 'design',
        image: 'https://picsum.photos/850/600',
        description: 'Visual representation of AI-driven lead scores with explanatory factors and confidence levels.',
        context: 'Sales reps needed to trust AI recommendations while maintaining control over their pipeline.'
      },
      {
        id: 'auto-data-entry',
        title: 'Intelligent Data Entry System',
        type: 'prototype',
        image: 'https://picsum.photos/750/550',
        description: 'AI-powered form filling that learns from user patterns and suggests corrections.',
        context: 'Data entry consumed 60% of sales rep time, but accuracy was critical for pipeline health.'
      },
      {
        id: 'opportunity-insights',
        title: 'Deal Velocity Analytics',
        type: 'data',
        image: 'https://picsum.photos/800/500',
        description: 'Predictive analytics showing deal velocity patterns and risk factors.',
        context: 'Sales managers needed early warning systems for deals at risk of stalling.'
      }
    ],
    decisions: [
      {
        id: 'ai-suggestion-patterns',
        title: 'Designing AI suggestions that enhance rather than replace judgment',
        context: 'Sales reps were skeptical of AI "telling them how to sell". Previous AI tools had low adoption.',
        debate: 'Product wanted aggressive automation. Sales wanted full control. Users wanted efficiency.',
        decision: 'AI as co-pilot model: suggest, explain, let user decide. Always show the "why" behind suggestions.',
        outcome: '89% adoption rate within 90 days. 34% increase in pipeline velocity. User satisfaction up 67%.',
        quote: '"It\'s like having a junior analyst who never sleeps" - Senior Account Executive'
      }
    ],
    collaboration: [
      {
        id: 'product-marketing-positioning',
        department: 'product_marketing',
        title: 'Positioning AI as "augmented intelligence" not automation',
        description: 'Worked with product marketing to reframe AI features as intelligence amplification.',
        impact: 'Reduced sales objections by 50%. Increased feature adoption in trials by 78%.',
        quote: '"We stopped selling automation and started selling superpowers" - Head of Product Marketing',
        person: 'Lisa Rodriguez, Head of Product Marketing'
      }
    ]
  },
  {
    id: 'analytics-platform',
    title: 'Revenue Analytics Platform',
    subtitle: 'Self-service business intelligence for SaaS companies',
    description: 'Built a comprehensive analytics platform that democratizes data insights across revenue operations teams.',
    year: '2023',
    tags: ['Analytics', 'BI', 'Revenue Operations', 'Data Visualization'],
    featured: false,
    hero_image: 'https://picsum.photos/1200/580',
    artifacts: [
      {
        id: 'revenue-dashboard',
        title: 'Executive Revenue Dashboard',
        type: 'design',
        image: 'https://picsum.photos/900/650',
        description: 'High-level revenue metrics with drill-down capabilities for C-level executives.',
        context: 'Executives needed instant access to key metrics without overwhelming detail.'
      },
      {
        id: 'cohort-analysis',
        title: 'Interactive Cohort Analysis Tool',
        type: 'prototype',
        image: 'https://picsum.photos/800/600?random=2',
        description: 'Dynamic cohort analysis with customizable time periods and segmentation.',
        context: 'Revenue operations teams needed to understand customer behavior patterns over time.'
      },
      {
        id: 'forecast-accuracy',
        title: 'Forecast Accuracy Tracking',
        type: 'data',
        image: 'https://picsum.photos/750/500',
        description: 'Visual tracking of forecast accuracy over time with improvement recommendations.',
        context: 'Sales leaders needed to improve forecasting accuracy and understand prediction reliability.'
      }
    ],
    decisions: [
      {
        id: 'self-service-vs-guided',
        title: 'Balancing self-service flexibility with guided insights',
        context: 'Business users wanted simple answers. Power users wanted infinite flexibility. Both needed accuracy.',
        debate: 'Analytics team wanted full SQL access. Business users wanted push-button insights. IT wanted governance.',
        decision: 'Layered approach: guided insights as entry point, progressive revelation of customization options.',
        outcome: '92% of users found answers in guided mode. 15% graduated to advanced features. Zero governance violations.',
        quote: '"I can finally answer my own questions without bothering the data team" - VP of Sales'
      }
    ],
    collaboration: [
      {
        id: 'engineering-performance',
        department: 'engineering',
        title: 'Building design tokens that scaled across 3 product lines',
        description: 'Created a design system that could handle complex data visualizations across multiple products.',
        impact: 'Reduced design-to-dev handoff time by 60%. Maintained consistency across 47 chart types.',
        quote: '"These tokens actually make sense for data viz" - Senior Frontend Engineer',
        person: 'Alex Thompson, Senior Frontend Engineer'
      }
    ]
  }
];

export const getFeaturedProjects = () => projects.filter(p => p.featured);
export const getProjectById = (id: string) => projects.find(p => p.id === id);