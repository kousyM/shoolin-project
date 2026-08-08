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
            Mail::to('kowsalyam2611@gmail.com')->send(new JobApplicationMailable($application));
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
}
