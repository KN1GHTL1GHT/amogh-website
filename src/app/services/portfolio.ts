import { Injectable } from '@angular/core';

export interface PortfolioSummary {
  id: number;
  title: string;
  slug: string;
  date: Date;
  summary: string;
  tags?: string[];
  thumbnailUrl?: string;
}

export interface PortfolioDetail extends PortfolioSummary {
  content: string; // Full project details (can be HTML or markdown)
  projectURL?: string;
}

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private projects: PortfolioDetail[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      slug: 'ecommerce-platform',
      date: new Date('2024-01-20'),
      summary: 'Built a full-stack e-commerce platform with payment integration and real-time inventory management.',
      tags: ['Full Stack', 'React', 'Node.js'],
      thumbnailUrl: 'assets/ai_self_image.png',
      projectURL: 'https://github.com/KN1GHTL1GHT/VacationPlannerPatki',
      content: `
        <h2>Project Overview</h2>
        <p>A fully-featured e-commerce platform built with modern web technologies. This project showcases my full-stack development skills.</p>

        <h3>Key Features</h3>
        <ul>
          <li>User authentication and authorization</li>
          <li>Product catalog with search and filtering</li>
          <li>Shopping cart and checkout system</li>
          <li>Payment integration with Stripe</li>
          <li>Admin dashboard for inventory management</li>
          <li>Real-time order tracking</li>
        </ul>
        
        <img src="assets/ai_self_image.png" alt="MyPicture">
        <h3>Technology Stack</h3>
        <p>Frontend: React, TypeScript, TailwindCSS</p>
        <p>Backend: Node.js, Express, PostgreSQL</p>
        <p>Deployment: AWS, Docker</p>

        <h3>Challenges & Solutions</h3>
        <p>The biggest challenge was implementing real-time inventory updates across multiple users. I solved this using WebSockets and optimistic UI updates.</p>
      `
    },
    {
      id: 2,
      title: 'Mobile Fitness App',
      slug: 'mobile-fitness-app',
      date: new Date('2024-02-15'),
      summary: 'Cross-platform mobile app for workout tracking with social features and AI-powered recommendations.',
      tags: ['Mobile', 'React Native', 'AI'],
      thumbnailUrl: 'assets/ai_self_image.png',
      content: `
        <h2>Mobile Fitness Application</h2>
        <p>A comprehensive fitness tracking app with social features and personalized workout recommendations.</p>

        <h3>Core Features</h3>
        <ul>
          <li>Workout tracking and history</li>
          <li>Custom exercise library</li>
          <li>Progress visualization with charts</li>
          <li>Social feed and friend challenges</li>
          <li>AI-powered workout suggestions</li>
          <li>Integration with wearable devices</li>
        </ul>

        <h3>Technical Highlights</h3>
        <p>Built with React Native for cross-platform compatibility. Implemented machine learning models for personalized recommendations based on user history and goals.</p>

        <h3>Impact</h3>
        <p>The app has helped over 10,000 users achieve their fitness goals with an average rating of 4.8 stars.</p>
      `
    },
    {
      id: 3,
      title: 'Data Visualization Dashboard',
      slug: 'data-visualization-dashboard',
      date: new Date('2024-03-05'),
      summary: 'Interactive dashboard for visualizing complex datasets with real-time updates and custom analytics.',
      tags: ['Data Viz', 'D3.js', 'Python'],
      thumbnailUrl: 'assets/ai_self_image.png',
      content: `
        <h2>Analytics Dashboard</h2>
        <p>An interactive dashboard for visualizing and analyzing large datasets in real-time.</p>

        <h3>Features</h3>
        <ul>
          <li>Real-time data streaming and updates</li>
          <li>Interactive charts and graphs</li>
          <li>Custom filtering and drill-down capabilities</li>
          <li>Export functionality for reports</li>
          <li>Responsive design for all devices</li>
        </ul>

        <h3>Technologies Used</h3>
        <p>Frontend: D3.js, React, TypeScript</p>
        <p>Backend: Python, FastAPI, Redis</p>
        <p>Data Processing: Pandas, NumPy</p>

        <h3>Performance</h3>
        <p>Optimized to handle datasets with millions of data points while maintaining smooth 60fps interactions.</p>
      `
    }
  ];

  getAllProjects(): PortfolioSummary[] {
    return this.projects
      .map(({ content, ...summary }) => summary)
      .sort((a, b) => b.date.getTime() - a.date.getTime());
  }

  getProjectBySlug(slug: string): PortfolioDetail | undefined {
    return this.projects.find(project => project.slug === slug);
  }

  addProject(project: PortfolioDetail): void {
    this.projects.push(project);
  }
}
