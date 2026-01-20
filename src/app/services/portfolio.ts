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
      title: 'Software Engineering Capstone - TripAgenda',
      slug: 'vacation-planner-app',
      date: new Date('2025-10-30'),
      summary: 'Built an android vacation planner app with Google ML Kit integration, persistent storage, and Google Cloud API calls.',
      tags: ['Android', 'Google Cloud', 'Kotlin', 'Google ML Kit'],
      thumbnailUrl: 'assets/ai_frazzled_traveler.png',
      projectURL: 'https://github.com/KN1GHTL1GHT/VacationPlannerPatki',
      content: `
        <h2>Project Overview</h2>
        <img src="assets/ai_frazzled_traveler.png" alt="MyPicture">
        <p>The biggest issue with vacations is the complexity of remembering times, dates, and locations as well as wrangling tickets. Once on a vacation in a foreign land, you are dependent on your own wits and research. This vacation companion app is designed to establish a safety net for you, the traveler, with simple and frictionless organization and data entry. Offline storage of critical documents ensures peace of mind when connectivity is unreliable.</p>
        <h3>Key Features</h3>
        <ul>
          <li>Store up to 50 unique vacations with 99 trip elements each (accomodations, travel, activities)</li>
          <li>Seamless ticket entry using text recognition</li>
          <li>Travel Distance Calculator</li>
          <li>Share Full Itinerary Easily</li>
          <li>Notification/ Alarm System</li>
        </ul>
        <h2>Check out this demo of the Ticket Scanner</h2>                                                                                                                                                                                                    
        <div class="video-container">                                                                                                                                                                                                   
            <iframe src="https://www.youtube.com/embed/pGnrgVfJyG4?si=mDkKEQcRBtsl7WyH" allowfullscreen></iframe>                                                                                                                                
        </div>                                                                                                                                                                                                                          
        <h2>Technical Overview</h2>
        <img src="assets/UserFlowDiagramFull.png" alt="UserFlowDiagram">
        <p>The app is split into two frameworks, Views and Compose. In the Views Framework, all database CRUD operations and Vacation and Trip Elements are managed. Google Api integrations are also on this side of the app. It uses traditional XML layouts for the user interface. The Compose Framework is used to integrate CameraX and Google ML Kit text recognition. Ticket scanning functionality is implemented through a ViewModel and photos taken are saved and accessible through the GalleryActivity.</p>
        
        <h3>Technology Stack</h3>
        <ul>
          <li><strong>Language:</strong> Kotlin</li>
          <li><strong>UI Frameworks:</strong> Android Views (XML layouts) & Jetpack Compose</li>
          <li><strong>Camera & ML:</strong> CameraX, Google ML Kit (Text Recognition)</li>
          <li><strong>APIs:</strong> Google Cloud Platform APIs</li>
          <li><strong>Storage:</strong> Room Database for offline persistence</li>
          <li><strong>Architecture:</strong> MVVM pattern with ViewModels</li>
        </ul>

        <h3>Testing</h3>
        <p>The app features 7 testing classes with a maximum data volume of 14,850 trip elements. You can access the full app from my github link at the top of this page. My google api key is obviously not included on github, making some features unavailable. </p>
        <p>You can contact me from this site's contact page and include a valid android store email and I can give you access to my app's internal testing track.</p>
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
