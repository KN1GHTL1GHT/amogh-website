import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PortfolioService, PortfolioSummary } from '../../services/portfolio';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss'
})
export class Portfolio implements OnInit {
  projects: PortfolioSummary[] = [];

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit() {
    this.projects = this.portfolioService.getAllProjects();
  }
}