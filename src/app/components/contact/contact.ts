import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPaperPlane, faCheck, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import emailjs from '@emailjs/browser';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FontAwesomeModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss']  // <-- fixed typo
})
export class Contact {
  // FontAwesome icons
  faPaperPlane = faPaperPlane;
  faCheck = faCheck;
  faExclamationTriangle = faExclamationTriangle;

  // Form group
  contactForm: FormGroup;

  // State management using Angular signals
  isSubmitting = signal(false);
  showSuccess = signal(false);
  showError = signal(false);
  errorMessage = signal('');

  // Dropdown options
  readonly inquiryReasons = [
    'General Inquiry',
    'Job Opportunity',
    'Collaboration/ Research',
    'Project Access (include android account email in message)',
    'Feedback',
    'Other'
  ];

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      reason: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  // Format date for email subject line
  private formatDate(): string {
    const now = new Date();
    return now.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  // Send email via EmailJS
  async onSubmit(): Promise<void> {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSubmitting.set(true);
    this.showSuccess.set(false);
    this.showError.set(false);

    try {
      const formValue = this.contactForm.value;

      const templateParams = {
        from_name: formValue.name,
        inquiry_reason: formValue.reason,
        message: formValue.message,
        submission_date: this.formatDate()
      };

      await emailjs.send(
        environment.emailjs.serviceId,
        environment.emailjs.templateId,
        templateParams,
        environment.emailjs.publicKey
      );

      this.showSuccess.set(true);
      this.contactForm.reset();

      // Auto-hide success message after 5 seconds
      setTimeout(() => this.showSuccess.set(false), 5000);

    } catch (error) {
      console.error('EmailJS Error:', error);
      this.showError.set(true);
      this.errorMessage.set(
        'Failed to send message. Please try again or contact me directly at patkiamogh117@gmail.com'
      );

      // Auto-hide error message after 7 seconds
      setTimeout(() => this.showError.set(false), 7000);

    } finally {
      this.isSubmitting.set(false);
    }
  }

  // Convenience getters for template
  get name() { return this.contactForm.get('name'); }
  get reason() { return this.contactForm.get('reason'); }
  get message() { return this.contactForm.get('message'); }
}
