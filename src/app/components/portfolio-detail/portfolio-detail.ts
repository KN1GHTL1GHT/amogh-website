import { Component, OnInit, AfterViewInit, ViewEncapsulation, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { PortfolioService, PortfolioDetail as PortfolioDetailType } from '../../services/portfolio';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-portfolio-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './portfolio-detail.html',
  styleUrl: './portfolio-detail.scss',
  encapsulation: ViewEncapsulation.None
})
export class PortfolioDetail implements OnInit, AfterViewInit {
  project?: PortfolioDetailType;
  sanitizedContent?: SafeHtml;
  notFound = false;
  lightboxImage: string | null = null;
  private platformId = inject(PLATFORM_ID);

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private portfolioService: PortfolioService,
      private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug');

    if (slug) {
      this.project = this.portfolioService.getProjectBySlug(slug);

      if (this.project) {
        // Bypass sanitization to allow iframes (for YouTube embeds, etc.)
        // Note: Only use trusted content in portfolio
        this.sanitizedContent = this.sanitizer.bypassSecurityTrustHtml(this.project.content);
      } else {
        this.notFound = true;
      }
    } else {
      this.notFound = true;
    }
  }

  ngAfterViewInit() {
    // Add click listeners to all images in the content (only in browser)
    if (!isPlatformBrowser(this.platformId)) return;

    setTimeout(() => {
      const images = document.querySelectorAll('.portfolio-content img');
      images.forEach((img) => {
        img.addEventListener('click', (e) => {
          const target = e.target as HTMLImageElement;
          this.openLightbox(target.src);
        });
        // Add pointer cursor to indicate clickability
        (img as HTMLElement).style.cursor = 'pointer';
      });
    }, 0);
  }

  openLightbox(imageSrc: string) {
    this.lightboxImage = imageSrc;
  }

  closeLightbox() {
    this.lightboxImage = null;
  }

  goBack() {
    this.router.navigate(['/portfolio']);
  }
}
