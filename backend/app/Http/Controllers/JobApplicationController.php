<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Log;
use App\Models\JobPosting;
use App\Models\JobApplication;
use App\Mail\JobApplicationMailable;

class JobApplicationController extends Controller
{
    /**
     * Submit job application form with resume file upload
     */
    public function apply(Request $request, $jobId)
    {
        $job = JobPosting::find($jobId);
        if (!$job) {
            return response()->json(['status' => 'error', 'message' => 'Job posting not found'], 404);
        }

        $validated = $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'confirm_email' => 'nullable|same:email',
            'phone' => 'nullable|string|max:50',
            'education' => 'nullable|string',
            'experience' => 'nullable|string',
            'linkedin' => 'nullable|string|max:255',
            'facebook' => 'nullable|string|max:255',
            'twitter' => 'nullable|string|max:255',
            'website' => 'nullable|string|max:255',
            'resume' => 'required|file|mimes:pdf,doc,docx|max:10240', // max 10MB file
            'cover_note' => 'nullable|string',
        ]);

        $resumePath = null;
        if ($request->hasFile('resume')) {
            $file = $request->file('resume');
            $fileName = time() . '_' . preg_replace('/[^a-zA-Z0-9._-]/', '_', $file->getClientOriginalName());
            $resumePath = $file->storeAs('resumes', $fileName, 'public');
        }

        // Store application in Database
        $application = JobApplication::create([
            'job_posting_id' => $job->id,
            'first_name' => $validated['first_name'],
            'last_name' => $validated['last_name'],
            'email' => $validated['email'],
            'phone' => $validated['phone'] ?? null,
            'education' => $validated['education'] ?? null,
            'linkedin' => $validated['linkedin'] ?? null,
            'facebook' => $validated['facebook'] ?? null,
            'twitter' => $validated['twitter'] ?? null,
            'website' => $validated['website'] ?? null,
            'resume_path' => $resumePath,
            'cover_note' => $validated['cover_note'] ?? null,
            'status' => 'pending',
        ]);

        // Send Email Notification
        try {
            $adminEmail = config('mail.admin_address', 'info@vebhor.com');
            Mail::to($adminEmail)->send(new JobApplicationMailable($application));
            Log::info("Job application email sent successfully for application ID: {$application->id}");
        } catch (\Exception $e) {
            Log::error("Failed to send job application email: " . $e->getMessage());
        }

        return response()->json([
            'status' => 'success',
            'message' => 'Your application has been successfully submitted!',
            'application' => $application
        ], 201);
    }

    /**
     * Submit Expression of Interest (EOI) form for Careers
     */
    public function eoi(Request $request)
    {
        $validated = $request->validate([
            'firstName' => 'nullable|string|max:255',
            'first_name' => 'nullable|string|max:255',
            'lastName' => 'nullable|string|max:255',
            'last_name' => 'nullable|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'nullable|string|max:255',
            'location' => 'nullable|string|max:255',
            'areaOfInterest' => 'nullable|string|max:255',
            'workPreference' => 'nullable|string|max:255',
            'linkedin' => 'nullable|string|max:255',
            'summary' => 'nullable|string'
        ]);

        $firstName = $validated['firstName'] ?? ($validated['first_name'] ?? '');
        $lastName = $validated['lastName'] ?? ($validated['last_name'] ?? '');
        $fullName = trim($firstName . ' ' . $lastName);
        if (empty($fullName)) {
            $fullName = 'Career Candidate';
        }
        $email = $validated['email'];
        $phone = $validated['phone'] ?? 'N/A';
        $location = $validated['location'] ?? 'N/A';
        $interest = $validated['areaOfInterest'] ?? 'General';
        $preference = $validated['workPreference'] ?? 'N/A';
        $linkedin = $validated['linkedin'] ?? 'N/A';
        $summary = $validated['summary'] ?? 'Expression of interest submitted.';

        // Store EOI Application in JobApplication table or log
        try {
            JobApplication::create([
                'first_name' => $firstName ?: 'Candidate',
                'last_name' => $lastName ?: 'EOI',
                'email' => $email,
                'phone' => $phone,
                'education' => "Location: {$location} | Interest: {$interest} | Mode: {$preference}",
                'linkedin' => $linkedin,
                'cover_note' => $summary,
                'status' => 'pending_eoi'
            ]);
        } catch (\Exception $e) {
            Log::error('Database store in eoi failed: ' . $e->getMessage());
        }

        // Dispatch Email Notification
        try {
            $adminEmail = config('mail.admin_address', 'info@vebhor.com');
            $emailContent = "New Expression of Interest (EOI) Submission:\n\n" .
                "Full Name: {$fullName}\n" .
                "Email: {$email}\n" .
                "Phone: {$phone}\n" .
                "Location: {$location}\n" .
                "Area of Interest: {$interest}\n" .
                "Work Preference: {$preference}\n" .
                "LinkedIn Profile: {$linkedin}\n\n" .
                "Background / Summary:\n{$summary}\n";

            Mail::raw($emailContent, function ($mail) use ($adminEmail, $fullName, $interest) {
                $mail->to($adminEmail)
                    ->subject("Vebhor Careers - EOI from {$fullName} [{$interest}]");
            });
        } catch (\Exception $e) {
            Log::error('EOI email notification failed: ' . $e->getMessage());
        }

        return response()->json([
            'status' => 'success',
            'message' => 'Thank you for your Expression of Interest! Our talent acquisition team will review your profile.'
        ]);
    }
}
