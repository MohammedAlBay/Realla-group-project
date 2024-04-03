<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Bookmark;

class BookmarkController extends Controller
{
    public function index()
    {
        // Retrieve bookmarks along with their associated properties
        $bookmarks = Bookmark::with('property')->get();

        // Return the data as JSON
        return response()->json($bookmarks);
    }

    public function show($id)
    {
        $bookmark = Bookmark::findOrFail($id);
        return response()->json($bookmark);
    }

    public function store(Request $request)
    {
        $request->validate([
            // 'user_id' => 'required|exists:users,id',
            'property_id' => 'required|exists:properties,id',
        ]);

        $bookmark = Bookmark::create([
            // 'user_id' => $request->user_id ?? 0, // Set user_id to default value if not provided
            'user_id' => $request->user_id,
            'property_id' => $request->property_id,
        ]);

        return response()->json($bookmark, 201);
    }
    
    public function destroy($id)
    {
        $bookmark = Bookmark::findOrFail($id);
        $bookmark->delete();
        return response()->json(['message' => 'Bookmark deleted successfully'], 200);
    }
}
