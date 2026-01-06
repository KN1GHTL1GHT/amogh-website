import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { DevlogService, DevlogDetail as DevlogDetailType } from '../../services/devlog';

@Component({
  selector: 'app-devlog-detail',
  imports: [CommonModule, RouterModule],
  templateUrl: './devlog-detail.html',
  styleUrl: './devlog-detail.scss',
  encapsulation: ViewEncapsulation.None
})
export class DevlogDetail implements OnInit, AfterViewInit {
  devlog?: DevlogDetailType;
  sanitizedContent?: SafeHtml;
  notFound = false;
  lightboxImage: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private devlogService: DevlogService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug');

    if (slug) {
      this.devlog = this.devlogService.getDevlogBySlug(slug);

      if (this.devlog) {
        // Bypass sanitization to allow iframes (for YouTube embeds, etc.)
        // Note: Only use trusted content in devlogs
        this.sanitizedContent = this.sanitizer.bypassSecurityTrustHtml(this.devlog.content);
      } else {
        this.notFound = true;
      }
    } else {
      this.notFound = true;
    }
  }

  ngAfterViewInit() {
    // Add click listeners to all images in the content
    setTimeout(() => {
      const images = document.querySelectorAll('.devlog-content img');
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
