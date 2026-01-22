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
      series: 'Tactical Deckbuilder Devlog 1:',
      title: 'A journey of a thousand miles begins with a single step',
      slug: 'tacdec-devlog-001',
      date: new Date('2025-11-11'),
      summary: 'Started work on a tactical RPG. Exploring game mechanics and UI architecture. Coded with Claude in Godot 4.',
      tags: ['Game Dev', 'Godot', 'UI/UX', 'Playtest', 'Project Link Inside'],
      thumbnailUrl: "assets/ai_fantasy_deckbuilder.png",
      projectURL: "https://github.com/KN1GHTL1GHT/TurnGridBasedRoguelite",
      content: `
        <h2>Getting Started</h2>
        <p>I want to make a turn based tactical rpg akin to fire emblem or "Into the Breach". I also want to include deckbuilding roguelike elements like from "Slay the Spire". I began work on this game project in early October alongside my capstone project. The included video documents the current state of the game.</p>
        <p>I've never made a turn based game before and since I learn best by trial and error, I decided to jump right in using claude code working in Godot 4 and programming in GDScript, a language similar to python.</p>
        <h2>Peek at my Hand</h2>
        <p>During my research I found that most multi-unit RPG's have unit constrained abilities, meaning a mage will have its own spells and a warrior will have its own abilities. These abilities are displayed on an action bar and they will have costs and cooldowns to ensure that they cannot be spammed every turn.</p>
        <p>One issue with this is that battles begin to feel very samey. At battle start, you will cast all available buffs every time. Then you will move your tanky units forward and cast melee skills off cooldown. This also has the effect of depressing ability impact. If an ability is always available then the ability cannot 'solve' situations. </p>
        
      `
    },
    {
      id: 2,
      series: 'Thinking about Thinking:',
      title: 'When to Refactor vs. Restart',
      slug: 'tat-001',
      date: new Date('2025-11-13'),
      summary: 'Should I stay or should I go? Iteration vs Creation',
      tags: ['Learning', 'Design', 'Version Control'],
      thumbnailUrl: "assets/thinking_about_thinking_thumbnail.png",
      content: `
        <h2>UI/UX Redesign</h2>
      `
    },
    {
      id: 3,
      series: 'Tactical Deckbuilder Devlog 2:',
      title: 'Deck Systems Take Shape',
      slug: 'tacdec-devlog-002',
      date: new Date('2025-12-31'),
      summary: 'ECS refactor in full swing! Deckbuilding elements working nominally, playtest revealed many issues with user experience.',
      tags: ['Game Dev', 'Godot', 'ECS', 'Deckbuilder', 'Project Link Inside'],
      thumbnailUrl: "assets/ai_fantasy_deckbuilder.png",
      content: `
        <h2>UI/UX Redesign</h2>
      `
    },
    {
      id: 4,
      series: 'Thinking about Thinking:',
      title: 'Living with Claude',
      slug: 'tat-002',
      date: new Date('2025-12-15'),
      summary: 'Working with AI: The good, the bad, the very ugly.',
      tags: ['Learning', 'Design', 'AI', 'Claude'],
      thumbnailUrl: "assets/thinking_about_thinking_thumbnail.png",
      content: `
        <h2>UI/UX Redesign</h2>
      `
    },
    {
      id: 5,
      series: 'Thinking about Thinking:',
      title: 'The GECS Growing Pains',
      slug: 'tat-003',
      date: new Date('2026-01-20'),
      summary: 'Downstream consequences of building on AI foundations and why I\'m moving to Bevy.',
      tags: ['GECS', 'System Design', 'AI', 'Bevy'],
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
