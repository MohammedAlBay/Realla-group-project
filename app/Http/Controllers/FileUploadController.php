<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FileUploadController extends Controller
{
    public function upload(Request $request)
    {
        // Validate the uploaded file
        $request->validate([
            'avatar' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
            'cover_picture' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        // Store the uploaded file
        $avatarPath = $request->file('avatar')->store('avatars', 'public');
        $coverPicturePath =$request->file('cover_picture')->store('cover_pictures', 'public');

        // Update the user record with the file path to the uploaded file
        Auth::user()->update([
            'avatar' => $avatarPath,
            'cover_picture' => $coverPicturePath,
        ]);

        // Determine which file was uploaded to return appropriate success message
        if ($request->has('avatar')) {
            return back()->with('avatar_success', 'Avatar uploaded successfully.');
        } elseif ($request->has('cover_picture')) {
            return back()->with('cover_picture_success', 'Cover picture uploaded successfully.');
        }

        // Default fallback in case neither avatar nor cover picture was uploaded
        return back()->with('error', 'No file uploaded.');
    }
}