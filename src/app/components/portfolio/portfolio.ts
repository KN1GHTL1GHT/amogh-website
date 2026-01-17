import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DevlogService, DevlogSummary } from '../../services/devlog';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './portfolio.html',
  styleUrls: ['./portfolio.scss']   // <-- fixed
})
export class Portfolio implements OnInit {
  devlogs: DevlogSummary[] = [];

  constructor(private devlogService: DevlogService) {}

  ngOnInit() {
    this.devlogs = this.devlogService.getAllDevlogs();
  }
}