<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Bookmark;

class BookmarkController extends Controller
{
    // Method to add a bookmark
    // public function addBookmark(Request $request)
    // {
    //     // Logic to add a bookmark...
    //     $request->validate([
    //         'property_id' => 'required|exists:properties,id',
    //     ]);

    //     $user = $request->user();

    //     // Check if the bookmark already exists
    //     if ($user->bookmarks()->where('property_id', $request->property_id)->exists()) {
    //         return response()->json(['message' => 'Bookmark already exists'], 409);
    //     }

    //     // Create a new bookmark
    //     $bookmark = new Bookmark();
    //     $bookmark->property_id = $request->property_id;
    //     $user->bookmarks()->save($bookmark);

    //     return response()->json(['message' => 'Bookmark added successfully'], 201);
    // }

    public function store(Request $request)
    {
        // Validate the request data
        $request->validate([
            'property_id' => 'required|exists:properties,id',
        ]);

        // Create a new bookmark
        $bookmark = new Bookmark();
        $bookmark->property_id = $request->property_id;
        // $bookmark->user_id = auth()->id(); // Assuming you're using authentication
        $bookmark->save();

        return response()->json($bookmark, 201);
    }

    public function remove(Request $request)
    {
        $request->validate([
            'bookmark_id' => 'required|exists:bookmarks,id',
        ]);

        // Get the authenticated user
        $user = $request->user();

        // Find the bookmark
        $bookmark = Bookmark::find($request->bookmark_id);

        // Check if the bookmark exists and belongs to the authenticated user
        // if (!$bookmark || $bookmark->user_id !== $user->id) {
        //     return response()->json(['message' => 'Bookmark not found'], 404);
        // }
        
        // Delete the bookmark
        $bookmark->delete();

        return response()->json(['message' => 'Bookmark removed successfully']);
    }
}
