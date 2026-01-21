import { Injectable } from '@angular/core';

export interface DevlogSummary {
  id: number;
  series: string;
  title: string;
  slug: string;
  date: Date;
  summary: string;
  tags?: string[];
  thumbnailUrl?: string;
}

export interface DevlogDetail extends DevlogSummary {
  content: string; // Full article content (can be HTML or markdown)
  projectURL?: string;
}

@Injectable({
  providedIn: 'root'
})
export class DevlogService {
  private devlogs: DevlogDetail[] = [
    {
      id: 1,
      series: 'Folded Spaces Devlog 1:',
      title: 'The Tactical Roots',
      slug: 'folded-devlog-001',
      date: new Date('2025-10-31'),
      summary: 'Started work on a tactical RPG. Exploring game mechanics and UI architecture. Coded with Claude in Godot 4.',
      tags: ['Game Dev', 'Godot'],
      thumbnailUrl: "assets/ai_fantasy_deckbuilder.png",
      content: `
        <h2>Getting Started</h2>
      `
    },
    {
      id: 2,
      series: 'Folded Spaces Devlog 2:',
      title: 'First Playtest and the ECS Question',
      slug: 'folded-devlog-002',
      date: new Date('2025-11-08'),
      summary: 'First Playtest! Findings and new information.',
      tags: ['Game Dev', 'Godot', 'UI/UX', 'Playtest', 'System Architecture'],
      thumbnailUrl: "assets/ai_fantasy_deckbuilder.png",
      content: `
        <h2>AI Pathfinding Implementation</h2>
      `
    },
    {
      id: 3,
      series: 'Folded Spaces Devlog 3:',
      title: 'Starting Fresh with ECS',
      slug: 'folded-devlog-003',
      date: new Date('2025-11-10'),
      summary: 'Switching the game from an Object-Oriented-Programming Paradigm to an Entity-Component-System Paradigm.',
      tags: ['Game Dev', 'Godot', 'OOP', 'ECS', 'System Architecture'],
      thumbnailUrl: "assets/ai_fantasy_deckbuilder.png",
      content: `
        <h2>AI Pathfinding Implementation</h2>
      `
    },
    {
      id: 4,
      series: 'Thinking about Thinking:',
      title: 'When to Refactor vs. Restart',
      slug: 'tat-001',
      date: new Date('2025-11-10'),
      summary: 'Should I stay or should I go? Iteration vs Creation',
      tags: ['Learning', 'Design', 'Version Control'],
      thumbnailUrl: "assets/thinking_about_thinking_thumbnail.png",
      content: `
        <h2>UI/UX Redesign</h2>
      `
    },
    {
      id: 5,
      series: 'Folded Spaces Devlog 4:',
      title: 'Deck Systems Take Shape',
      slug: 'folded-devlog-004',
      date: new Date('2025-12-31'),
      summary: 'ECS refactor in full swing! Deckbuilding elements working nominally, showed friends no enemies no animations.',
      tags: ['Game Dev', 'Godot', 'ECS', 'Deckbuilder'],
      thumbnailUrl: "assets/ai_fantasy_deckbuilder.png",
      content: `
        <h2>UI/UX Redesign</h2>
      `
    },
    {
      id: 6,
      series: 'Thinking about Thinking:',
      title: 'Living with Claude',
      slug: 'tat-002',
      date: new Date('2026-01-03'),
      summary: '2 Months of working with AI: The good, the bad, the very ugly.',
      tags: ['Learning', 'Design', 'AI', 'Claude'],
      thumbnailUrl: "assets/thinking_about_thinking_thumbnail.png",
      content: `
        <h2>UI/UX Redesign</h2>
      `
    },
    {
      id: 7,
      series: 'Folded Spaces Devlog 5:',
      title: 'Finding the Fiction',
      slug: 'folded-devlog-005',
      date: new Date('2026-01-12'),
      summary: 'Ideating the background for the game.',
      tags: ['Game Dev', 'Writing'],
      thumbnailUrl: "assets/ai_fantasy_deckbuilder.png",
      content: `
        <h2>UI/UX Redesign</h2>
      `
    },
    {
      id: 8,
      series: 'Folded Spaces Devlog 6:',
      title: 'Why I\'m Moving to Bevy',
      slug: 'folded-devlog-006',
      date: new Date('2026-01-20'),
      summary: 'Fitting a square peg in a round hole has consequences...',
      tags: ['Game Dev', 'ECS', 'Rust'],
      thumbnailUrl: "assets/ai_fantasy_deckbuilder.png",
      content: `
        <h2>UI/UX Redesign</h2>
      `
    },
    {
      id: 9,
      series: 'Thinking about Thinking:',
      title: 'The GECS Growing Pains',
      slug: 'tat-003',
      date: new Date('2026-01-20'),
      summary: 'Downstream consequences of building on AI foundations',
      tags: ['GECS', 'System Design', 'AI'],
      thumbnailUrl: "assets/thinking_about_thinking_thumbnail.png",
      content: `
        <h2>UI/UX Redesign</h2>
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
