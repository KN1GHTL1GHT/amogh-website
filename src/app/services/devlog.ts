import { Injectable } from '@angular/core';

export interface DevlogSummary {
  id: number;
  title: string;
  slug: string;
  date: Date;
  summary: string;
  tags?: string[];
  thumbnailUrl?: string;
}

export interface DevlogDetail extends DevlogSummary {
  content: string; // Full article content (can be HTML or markdown)
}

@Injectable({
  providedIn: 'root'
})
export class DevlogService {
  private devlogs: DevlogDetail[] = [
    {
      id: 1,
      title: 'First Game Project',
      slug: 'first-game-project',
      date: new Date('2024-01-15'),
      summary: 'Started working on my first game project. Exploring game mechanics and core gameplay loops.',
      tags: ['Game Dev', 'Unity'],
      content: `
        <h2>Getting Started</h2>
        <p>This is my first game project! I've been learning Unity and decided to start building something real.</p>

        <h3>What I'm Building</h3>
        <p>A simple 2D platformer with unique mechanics. The goal is to learn the fundamentals while creating something playable.</p>

        <h3>Progress So Far</h3>
        <img src="/ai_self_image.png" alt="MyPicture">
        <ul>
          <li>Set up the project structure</li>
          <li>Created basic player movement</li>
          <li>Implemented jump mechanics</li>
          <li>Started working on level design</li>
        </ul>

        <h3>Next Steps</h3>
        <p>I'll be working on enemy AI and collision detection next. Stay tuned for updates!</p>
      `
    },
    {
      id: 2,
      title: 'Implementing AI Pathfinding',
      slug: 'implementing-ai-pathfinding',
      date: new Date('2024-02-20'),
      summary: 'Deep dive into AI pathfinding algorithms. Implemented A* pathfinding for enemy navigation.',
      tags: ['AI', 'Algorithms'],
      content: `
        <h2>AI Pathfinding Implementation</h2>
        <p>Today I tackled one of the most challenging aspects of game development: AI pathfinding.</p>

        <h3>The Challenge</h3>
        <p>Enemies need to navigate around obstacles to reach the player. Simple movement isn't enough.</p>

        <h3>Solution: A* Algorithm</h3>
        <p>I implemented the A* pathfinding algorithm. Here's what makes it great:</p>
        <ul>
          <li>Efficient navigation around obstacles</li>
          <li>Always finds the shortest path</li>
          <li>Performance-optimized with heuristics</li>
        </ul>

        <h3>Results</h3>
        <p>The enemies now navigate smoothly and intelligently. The gameplay feels much more polished!</p>
      `
    },
    {
      id: 3,
      title: 'UI/UX Design Update',
      slug: 'ui-ux-design-update',
      date: new Date('2024-03-10'),
      summary: 'Redesigned the user interface with a focus on player experience and accessibility.',
      tags: ['UI/UX', 'Design'],
      content: `
        <h2>UI/UX Redesign</h2>
        <p>After playtesting, I realized the UI needed work. Here's what I changed.</p>

        <h3>Problems Identified</h3>
        <ul>
          <li>Health bar was hard to see during combat</li>
          <li>Menu navigation was confusing</li>
          <li>Text was too small on some screens</li>
        </ul>

        <h3>Design Changes</h3>
        <p>I focused on clarity and accessibility:</p>
        <ul>
          <li>Larger, more visible health indicators</li>
          <li>Simplified menu structure</li>
          <li>Responsive font sizing</li>
          <li>Color-blind friendly palette</li>
        </ul>

        <h3>Player Feedback</h3>
        <p>The new design has been well-received. Players report much better visibility and easier navigation.</p>
      `
    }
  ];

  getAllDevlogs(): DevlogSummary[] {
    return this.devlogs
      .map(({ content, ...summary }) => summary)
      .sort((a, b) => b.date.getTime() - a.date.getTime());
  }

  getDevlogBySlug(slug: string): DevlogDetail | undefined {
    return this.devlogs.find(devlog => devlog.slug === slug);
  }

  addDevlog(devlog: DevlogDetail): void {
    this.devlogs.push(devlog);
  }
}
