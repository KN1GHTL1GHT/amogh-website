import { Component, ElementRef, AfterViewInit, OnDestroy, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHome, faUser, faEnvelope, faChessKnight, faLaptopCode, faArrowTurnUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  standalone: true, // <-- important
  imports: [RouterModule, CommonModule, FontAwesomeModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss']
})
export class Navbar implements AfterViewInit, OnDestroy {
  menuOpen = false;
  isExpanded = false;
  isExpanding = false;
  isCollapsing = false;
  cubeExpanded = false; // Track if cube is in expanded state
  cubeCollapsing = false; // Track if cube is actively collapsing
  isHovering = false; // Track hover state
  rotationPaused = false; // Track if rotation is paused due to hover
  private animationFrameId?: number;
  private platformId = inject(PLATFORM_ID);

  // Font Awesome icons
  faHome = faHome;
  faUser = faUser;
  faChessKnight = faChessKnight;
  faLaptopCode = faLaptopCode;
  faEnvelope = faEnvelope;
  faArrowTurnUp = faArrowTurnUp;

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.startRotationMonitoring();
    }
  }

  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId) && this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }

  onCubeHover(hovering: boolean) {
    this.isHovering = hovering;
    if (!hovering) {
      this.rotationPaused = false;
    }
  }

  private startRotationMonitoring() {
    const checkRotation = () => {
      const cubeContainer = this.elementRef.nativeElement.querySelector('.cube-container');

      if (cubeContainer && this.isHovering && !this.isExpanded && !this.isExpanding && !this.cubeCollapsing && !this.isCollapsing) {
        const transform = window.getComputedStyle(cubeContainer).transform;

        if (transform && transform !== 'none') {
          const matrix = new DOMMatrix(transform);
          const rotationY = this.getRotationY(matrix);

          // Normalize to 0-360 range
          const normalizedY = ((rotationY % 360) + 360) % 360;

          // Check if at 40deg, 130deg, 220deg, or 310deg (with tolerance of ±5deg)
          const tolerance = 5;
          const stopAngles = [40, 130, 220, 310];
          const isAtStopAngle = stopAngles.some(angle => Math.abs(normalizedY - angle) < tolerance);

          if (isAtStopAngle) {
            this.rotationPaused = true;
          }
        }
      }

      this.animationFrameId = requestAnimationFrame(checkRotation);
    };

    checkRotation();
  }

  private getRotationY(matrix: DOMMatrix): number {
    // Extract Y rotation from 3D transform matrix
    const radians = Math.atan2(matrix.m13, matrix.m33);
    return radians * (180 / Math.PI);
  }

  toggleMenu() {
    if (!this.isExpanded) {
      // Start expansion animation
      this.isExpanding = true;
      setTimeout(() => {
        this.isExpanded = true;
        this.cubeExpanded = true; // Keep cube at expanded size
        this.isExpanding = false;
      }, 1300); // Show ul after cube expands width and height (0.3s + 0.5s + 0.5s)
    } else {
      // Start collapse animation
      this.isCollapsing = true;
      this.isExpanded = false; // Start fading out navbar

      // Start cube collapse after navbar fades (0.6s delay)
      setTimeout(() => {
        this.cubeCollapsing = true;
      }, 600);

      // After animations complete, reset everything
      setTimeout(() => {
        this.isCollapsing = false;
        this.cubeExpanded = false; // Reset cube to small size
        this.cubeCollapsing = false;
      }, 1900); // Total collapse time (0.6s + 0.5s + 0.5s + 0.3s)
    }
  }
}
