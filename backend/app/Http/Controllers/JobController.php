<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\JobPosting;
use App\Models\JobApplication;

class JobController extends Controller
{
    /**
     * Get list of jobs with filters for Careers page
     */
    public function index(Request $request)
    {
        $query = JobPosting::where('status', 'active');

        // Search query filter (title or expertise/description)
        if ($request->filled('search')) {
            $search = $request->input('search');
            $query->where(function ($q) use ($search) {
                $q->where('title', 'like', "%{$search}%")
                  ->orWhere('department', 'like', "%{$search}%")
                  ->orWhere('job_description', 'like', "%{$search}%")
                  ->orWhere('requirements', 'like', "%{$search}%");
            });
        }

        // Location filter
        if ($request->filled('location') && $request->input('location') !== 'All') {
            $query->where('location', 'like', "%{$request->input('location')}%");
        }

        // Department filter
        if ($request->filled('department') && $request->input('department') !== 'All') {
            $query->where('department', $request->input('department'));
        }

        // Remote only toggle filter
        if ($request->has('remote') && $request->boolean('remote')) {
            $query->where('is_remote', true);
        }

        $jobs = $query->orderBy('created_at', 'desc')->get();

        // Get filter options list
        $locations = JobPosting::where('status', 'active')->distinct()->pluck('location');
        $departments = JobPosting::where('status', 'active')->distinct()->pluck('department');

        return response()->json([
            'status' => 'success',
            'jobs' => $jobs,
            'meta' => [
                'locations' => $locations,
                'departments' => $departments,
                'total' => $jobs->count()
            ]
        ]);
    }

    /**
     * Get single job details
     */
    public function show($id)
    {
        $job = JobPosting::find($id);

        if (!$job) {
            return response()->json(['status' => 'error', 'message' => 'Job not found'], 404);
        }

        // Other jobs at NCS (related/recent jobs)
        $otherJobs = JobPosting::where('id', '!=', $id)
            ->where('status', 'active')
            ->orderBy('created_at', 'desc')
            ->limit(4)
            ->get(['id', 'title', 'location']);

        return response()->json([
            'status' => 'success',
            'job' => $job,
            'otherJobs' => $otherJobs
        ]);
    }

    /**
     * Admin Login
     */
    public function adminLogin(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        // Simple Admin Authentication Check
        if ($request->email === 'admin@ncs.co' && $request->password === 'admin123') {
            return response()->json([
                'status' => 'success',
                'token' => 'admin-authenticated-token-ncs-2026',
                'user' => [
                    'name' => 'NCS Admin',
                    'email' => 'admin@ncs.co',
                    'role' => 'admin'
                ]
            ]);
        }

        return response()->json([
            'status' => 'error',
            'message' => 'Invalid admin email or password'
        ], 401);
    }

    /**
     * Admin: List all jobs
     */
    public function adminJobs()
    {
        $jobs = JobPosting::orderBy('created_at', 'desc')->get();

        return response()->json([
            'status' => 'success',
            'jobs' => $jobs
        ]);
    }

    /**
     * Admin: Store new job posting
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'employment_type' => 'required|string',
            'department' => 'required|string',
            'location' => 'required|string',
            'work_mode' => 'nullable|string',
            'remote' => 'nullable',
            'is_remote' => 'nullable',
            'company_description' => 'nullable|string',
            'job_description' => 'required|string',
            'key_responsibilities' => 'nullable|string',
            'requirements' => 'nullable|string',
        ]);

        $isRemote = $request->has('remote') ? $request->boolean('remote') : $request->boolean('is_remote');

        $job = JobPosting::create([
            'title' => $validated['title'],
            'slug' => \Illuminate\Support\Str::slug($validated['title']) . '-' . time(),
            'employment_type' => $validated['employment_type'],
            'department' => $validated['department'],
            'location' => $validated['location'],
            'work_mode' => $validated['work_mode'] ?? 'Hybrid mode',
            'is_remote' => $isRemote,
            'company_description' => $validated['company_description'] ?? 'At NCS Australia, we believe in doing technology services better. Our commitment to quality, focus on people, and willingness to challenge traditional thinking set us apart.',
            'job_description' => $validated['job_description'],
            'key_responsibilities' => $validated['key_responsibilities'] ?? null,
            'requirements' => $validated['requirements'] ?? null,
            'status' => 'active',
        ]);

        return response()->json([
            'status' => 'success',
            'message' => 'Job posted successfully',
            'job' => $job
        ], 201);
    }

    /**
     * Admin: Update job posting
     */
    public function update(Request $request, $id)
    {
        $job = JobPosting::find($id);
        if (!$job) {
            return response()->json(['status' => 'error', 'message' => 'Job not found'], 404);
        }

        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'employment_type' => 'required|string',
            'department' => 'required|string',
            'location' => 'required|string',
            'work_mode' => 'nullable|string',
            'remote' => 'nullable',
            'is_remote' => 'nullable',
            'company_description' => 'nullable|string',
            'job_description' => 'required|string',
            'key_responsibilities' => 'nullable|string',
            'requirements' => 'nullable|string',
            'status' => 'nullable|string',
        ]);

        if ($request->has('remote')) {
            $validated['is_remote'] = $request->boolean('remote');
        }

        $job->update($validated);

        return response()->json([
            'status' => 'success',
            'message' => 'Job updated successfully',
            'job' => $job
        ]);
    }

    /**
     * Admin: Delete job posting
     */
    public function destroy($id)
    {
        $job = JobPosting::find($id);
        if (!$job) {
            return response()->json(['status' => 'error', 'message' => 'Job not found'], 404);
        }

        $job->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'Job deleted successfully'
        ]);
    }

    /**
     * Admin: List all applications
     */
    public function applications()
    {
        $applications = JobApplication::with('jobPosting')->orderBy('created_at', 'desc')->get();

        return response()->json([
            'status' => 'success',
            'applications' => $applications
        ]);
    }
}
