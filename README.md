# Vuex Notes App
A simple notes app done using VueJS, Vuex state management and using a Laravel backend API.

## Installation

1. Clone the repository to `<yourdocumentroot>`

  `git clone https://github.com/giddyeffects/notes_vuex.git <yourdocumentroot>`

2. Change directory to `<yourdocumentroot>` and Install PHP dependencies 
    `composer install`

3. Create .env file and fill in your database details and other details as necessary. There is an example available that you can modify.

4. Create and seed your database
  `php artisan migrate --seed`

5. Install Javascript dependencies
	`npm install`

6. Create vendor configs (if not created yet)
	`php artisan vendor:publish`

7. Delete the .git directory.