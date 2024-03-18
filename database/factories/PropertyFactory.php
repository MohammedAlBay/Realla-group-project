<?php

namespace Database\Factories;

use App\Models\Property;
use Illuminate\Database\Eloquent\Factories\Factory;
use Faker\Generator as Faker;

class PropertyFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Property::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $faker = \Faker\Factory::create();

        $belgiumCities = ['Brussels', 'Antwerp', 'Ghent', 'Charleroi', 'Liège', 'Bruges', 'Namur', 'Leuven', 'Mons', 'Aalst', 'Mechelen', 'La Louvière', 'Kortrijk', 'Hasselt', 'Ostend', 'Sint-Niklaas', 'Tournai', 'Genk', 'Seraing', 'Roeselare', 'Verviers', 'Mouscron', 'Beveren', 'Dendermonde', 'Beringen', 'Turnhout'];

        return [
            'location' => $faker->randomElement($belgiumCities),
            'price' => $faker->numberBetween(600, 500000),
            'rooms' => $faker->numberBetween(1, 10),
            'square_meters' => $faker->numberBetween(50, 500),
            'bathrooms' => $faker->numberBetween(1, 5),
            'for_sale' => $faker->boolean(),
            'for_rent' => $faker->boolean(),
        ];
    }
}
