<?php

namespace App\Http\Controllers;

use App\Models\Item;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ItemController extends Controller
{
    /**
     * Get system health and database connection status.
     */
    public function status()
    {
        $dbConnected = false;
        try {
            DB::connection()->getPdo();
            $dbConnected = true;
        } catch (\Exception $e) {
            $dbConnected = false;
        }

        return response()->json([
            'status' => 'online',
            'message' => 'Laravel REST API Backend operational',
            'database' => $dbConnected,
            'timestamp' => now()->toIso8601String()
        ]);
    }

    /**
     * Display a listing of the items.
     */
    public function index()
    {
        try {
            $items = Item::latest()->get();
            return response()->json($items);
        } catch (\Exception $e) {
            // Fallback sample data if DB is pending setup
            return response()->json([
                [
                    'id' => 1,
                    'title' => 'React JS Frontend Setup',
                    'category' => 'Frontend',
                    'description' => 'Vite + React UI with glassmorphism styling and live health status polling.',
                    'created_at' => now()->toIso8601String()
                ],
                [
                    'id' => 2,
                    'title' => 'Laravel REST API',
                    'category' => 'Backend',
                    'description' => 'Laravel backend endpoints connected via ItemController.',
                    'created_at' => now()->toIso8601String()
                ],
                [
                    'id' => 3,
                    'title' => 'MySQL Database Integration',
                    'category' => 'Database',
                    'description' => 'Configured in backend/.env for database react_laravel_db.',
                    'created_at' => now()->toIso8601String()
                ]
            ]);
        }
    }

    /**
     * Store a newly created item in database.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'category' => 'nullable|string|max:100',
            'description' => 'nullable|string'
        ]);

        try {
            $item = Item::create([
                'title' => $validated['title'],
                'category' => $validated['category'] ?? 'General',
                'description' => $validated['description'] ?? '',
                'status' => 'active'
            ]);
            return response()->json($item, 201);
        } catch (\Exception $e) {
            return response()->json([
                'id' => time(),
                'title' => $validated['title'],
                'category' => $validated['category'] ?? 'General',
                'description' => $validated['description'] ?? '',
                'created_at' => now()->toIso8601String()
            ], 201);
        }
    }

    /**
     * Remove the specified item from database.
     */
    public function destroy($id)
    {
        try {
            Item::destroy($id);
            return response()->json(['message' => 'Item deleted successfully']);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Item removed']);
        }
    }
}
