export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  publishedAt: string;
  author: {
    name: string;
    avatar: string;
  };
  readTime: string;
  categories: string[];
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'ai-business-process-automation',
    title: 'AI for Business Process Automation',
    excerpt: 'Discover how AI-driven automation is revolutionizing business operations and improving efficiency across industries.',
    content: `# AI for Business Process Automation

Artificial Intelligence is transforming how businesses operate, making processes more efficient and reducing manual workload...`,
    featuredImage: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&q=80&w=1740&h=980',
    publishedAt: '2024-03-15',
    author: {
      name: 'Shreyansh Mathur',
      avatar: 'https://i.imgur.com/YhiQcJn.jpg'
    },
    readTime: '8 min',
    categories: ['Automation', 'Business'],
    tags: ['AI', 'Automation', 'Efficiency', 'Digital Transformation']
  },
  {
    id: '2',
    slug: 'enhancing-customer-experience-ai',
    title: 'Enhancing Customer Experience with AI',
    excerpt: 'Learn how artificial intelligence is transforming customer service and creating personalized experiences.',
    content: `# Enhancing Customer Experience with AI

Modern businesses are leveraging AI to create more personalized and efficient customer experiences...`,
    featuredImage: 'https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=1740&h=980',
    publishedAt: '2024-03-12',
    author: {
      name: 'Tanya Nijhawan',
      avatar: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&q=80&w=400&h=400'
    },
    readTime: '6 min',
    categories: ['Customer Experience', 'AI'],
    tags: ['Customer Service', 'AI', 'Personalization']
  },
  {
    id: '3',
    slug: 'ai-driven-decision-making',
    title: 'AI-Driven Decision Making in Business',
    excerpt: 'Explore how data-driven AI solutions are empowering businesses to make smarter strategic decisions.',
    content: `# AI-Driven Decision Making in Business

Data-driven decision making powered by AI is revolutionizing how businesses operate...`,
    featuredImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1740&h=980',
    publishedAt: '2024-03-09',
    author: {
      name: 'Devayan Das',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=400'
    },
    readTime: '10 min',
    categories: ['Strategy', 'Decision Making'],
    tags: ['AI', 'Data Analytics', 'Business Strategy']
  },
  {
    id: '4',
    slug: 'implementing-ai-sales-optimization',
    title: 'Implementing AI for Sales Optimization',
    excerpt: 'Discover practical approaches to leveraging AI for improving sales performance and customer acquisition.',
    content: `# Implementing AI for Sales Optimization

AI is transforming sales processes, from lead generation to closing deals...`,
    featuredImage: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=1740&h=980',
    publishedAt: '2024-03-06',
    author: {
      name: 'Sarthak Tanwar',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400'
    },
    readTime: '7 min',
    categories: ['Sales', 'AI'],
    tags: ['Sales', 'AI', 'Business Growth']
  },
  {
    id: '5',
    slug: 'ai-solutions-small-business',
    title: 'AI Solutions for Small Business Growth',
    excerpt: 'Learn how small businesses can leverage AI tools and strategies to compete in the modern market.',
    content: `# AI Solutions for Small Business Growth

Small businesses can now access powerful AI tools that were once only available to large enterprises...`,
    featuredImage: 'https://images.unsplash.com/photo-1664575602554-2087b04935a5?auto=format&fit=crop&q=80&w=1740&h=980',
    publishedAt: '2024-03-03',
    author: {
      name: 'Shreyansh Mathur',
      avatar: 'https://i.imgur.com/YhiQcJn.jpg'
    },
    readTime: '9 min',
    categories: ['Small Business', 'Growth'],
    tags: ['Small Business', 'AI', 'Growth Strategy']
  },
  {
    id: '6',
    slug: 'future-ai-enterprise-operations',
    title: 'Future of AI in Enterprise Operations',
    excerpt: 'Explore emerging trends and future applications of AI in enterprise-level business operations.',
    content: `# Future of AI in Enterprise Operations

The future of enterprise operations will be shaped by advanced AI technologies...`,
    featuredImage: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1740&h=980',
    publishedAt: '2024-02-29',
    author: {
      name: 'Devayan Das',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=400'
    },
    readTime: '12 min',
    categories: ['Enterprise', 'Future Tech'],
    tags: ['Enterprise', 'AI', 'Future Technology']
  },
  {
    id: '7',
    slug: 'machine-learning-predictive-analytics',
    title: 'Machine Learning in Predictive Analytics',
    excerpt: 'Understanding how machine learning is revolutionizing predictive analytics and business forecasting.',
    content: `# Machine Learning in Predictive Analytics

Predictive analytics powered by machine learning is changing how businesses forecast and plan...`,
    featuredImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1740&h=980',
    publishedAt: '2024-02-26',
    author: {
      name: 'Sarthak Tanwar',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400'
    },
    readTime: '11 min',
    categories: ['Machine Learning', 'Analytics'],
    tags: ['Machine Learning', 'Predictive Analytics', 'Data Science']
  },
  {
    id: '8',
    slug: 'nlp-business-applications',
    title: 'Natural Language Processing in Business',
    excerpt: 'Exploring practical applications of NLP in modern business environments.',
    content: `# Natural Language Processing in Business

Natural Language Processing is transforming how businesses interact with customers and process information...`,
    featuredImage: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80&w=1740&h=980',
    publishedAt: '2024-02-23',
    author: {
      name: 'Tanya Nijhawan',
      avatar: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&q=80&w=400&h=400'
    },
    readTime: '8 min',
    categories: ['NLP', 'Business Applications'],
    tags: ['NLP', 'AI', 'Business Technology']
  },
  {
    id: '9',
    slug: 'ai-cybersecurity-solutions',
    title: 'AI-Powered Cybersecurity Solutions',
    excerpt: 'How artificial intelligence is strengthening cybersecurity defenses in modern businesses.',
    content: `# AI-Powered Cybersecurity Solutions

AI is becoming an essential tool in protecting businesses from cyber threats...`,
    featuredImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1740&h=980',
    publishedAt: '2024-02-20',
    author: {
      name: 'Shreyansh Mathur',
      avatar: 'https://i.imgur.com/YhiQcJn.jpg'
    },
    readTime: '9 min',
    categories: ['Cybersecurity', 'AI'],
    tags: ['Cybersecurity', 'AI', 'Security']
  },
  {
    id: '10',
    slug: 'ai-driven-marketing-strategies',
    title: 'AI-Driven Marketing Strategies',
    excerpt: 'Leveraging AI for more effective and personalized marketing campaigns.',
    content: `# AI-Driven Marketing Strategies

Modern marketing is being transformed by AI-powered tools and strategies...`,
    featuredImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1740&h=980',
    publishedAt: '2024-02-17',
    author: {
      name: 'Tanya Nijhawan',
      avatar: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&q=80&w=400&h=400'
    },
    readTime: '10 min',
    categories: ['Marketing', 'AI'],
    tags: ['Marketing', 'AI', 'Digital Marketing']
  }
];