<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class SearchResultsController extends Controller
{
    public function index(Request $request)
    {
        // Here, you can perform any necessary logic with the request, such as fetching search results from the database
        // For demonstration purposes, let's pass a dummy search query to the view
        $query = $request->input('query', 'Genk');

        // Pass the query to the view using the Inertia render method
        return Inertia::render('SearchResults', [
            'query' => $query,
        ]);
    }
}
