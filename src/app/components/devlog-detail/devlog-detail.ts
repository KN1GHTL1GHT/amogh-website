import { Component, OnInit, AfterViewInit, ViewEncapsulation, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { DevlogService, DevlogDetail as DevlogDetailType } from '../../services/devlog';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-devlog-detail',
  standalone: true, // <-- added
  imports: [CommonModule, RouterModule],
  templateUrl: './devlog-detail.html',
  styleUrls: ['./devlog-detail.scss'], // <-- fixed
  encapsulation: ViewEncapsulation.None
})
export class DevlogDetail implements OnInit, AfterViewInit {
  devlog?: DevlogDetailType;
  sanitizedContent?: SafeHtml;
  notFound = false;
  lightboxImage: string | null = null;
  private platformId = inject(PLATFORM_ID);

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
        this.sanitizedContent = this.sanitizer.bypassSecurityTrustHtml(this.devlog.content);
      } else {
        this.notFound = true;
      }
    } else {
      this.notFound = true;
    }
  }

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;

    setTimeout(() => {
      const images = document.querySelectorAll('.devlog-content img');
      images.forEach((img) => {
        img.addEventListener('click', (e) => {
          const target = e.target as HTMLImageElement;
          this.openLightbox(target.src);
        });
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