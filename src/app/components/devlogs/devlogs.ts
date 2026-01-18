import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DevlogService, DevlogSummary } from '../../services/devlog';

@Component({
  selector: 'app-devlogs',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './devlogs.html',
  styleUrl: './devlogs.scss'
})
export class Devlogs implements OnInit {
  devlogs: DevlogSummary[] = [];

  constructor(private devlogService: DevlogService) {}

  ngOnInit() {
    this.devlogs = this.devlogService.getAllDevlogs();
  }
}
