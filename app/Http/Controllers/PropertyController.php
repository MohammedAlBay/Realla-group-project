<?php
namespace App\Http\Controllers;

use App\Models\Property;
use Illuminate\Http\Request;

class PropertyController extends Controller
{
    public function index()
    {
        $properties = Property::all();
        return response()->json($properties);
    }

    public function show($id)
    {
        $property = Property::find($id);
        
        if (!$property) {
            return response()->json(['message' => 'Property not found'], 404);
        }
        
        return response()->json($property);
    }
    
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'location' => 'required',
            'rooms' => 'required|integer',
            'square_meters' => 'required|numeric',
            'bathrooms' => 'required|integer',
            'for_sale' => 'required|boolean',
            'for_rent' => 'required|boolean',
            'price' => 'required|numeric',
        ]);

        $property = Property::create($validatedData);
        return response()->json($property, 201);
    }
}

