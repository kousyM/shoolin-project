<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Mail\Mailables\Attachment;
use Illuminate\Queue\SerializesModels;
use App\Models\JobApplication;

class JobApplicationMailable extends Mailable
{
    use Queueable, SerializesModels;

    public $application;

    /**
     * Create a new message instance.
     */
    public function __construct(JobApplication $application)
    {
        $this->application = $application;
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        $jobTitle = $this->application->jobPosting ? $this->application->jobPosting->title : 'Job Opening';
        return new Envelope(
            subject: "New Job Application: {$this->application->first_name} {$this->application->last_name} for {$jobTitle}",
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            htmlString: "
                <h2>New Job Application Received</h2>
                <p><strong>Job Title:</strong> " . e($this->application->jobPosting ? $this->application->jobPosting->title : 'N/A') . "</p>
                <p><strong>Applicant Name:</strong> " . e($this->application->first_name . ' ' . $this->application->last_name) . "</p>
                <p><strong>Email:</strong> " . e($this->application->email) . "</p>
                <p><strong>Phone:</strong> " . e($this->application->phone ?? 'Not provided') . "</p>
                <p><strong>Education:</strong> " . e($this->application->education ?? 'Not provided') . "</p>
                <p><strong>LinkedIn:</strong> " . e($this->application->linkedin ?? 'Not provided') . "</p>
                <hr>
                <p>Please check the admin panel or attached resume for further evaluation.</p>
            ",
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        $attachments = [];
        if ($this->application->resume_path && storage_path('app/public/' . $this->application->resume_path)) {
            $fullPath = storage_path('app/public/' . $this->application->resume_path);
            if (file_exists($fullPath)) {
                $attachments[] = Attachment::fromPath($fullPath);
            }
        }
        return $attachments;
    }
}
