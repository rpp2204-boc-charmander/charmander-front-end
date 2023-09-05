# My Health Coach
A health and fitness application made to easily track, plan and organize workouts and meals to aid in a much healthier lifestyle.

## Tech Stack

* Front-End:
  * Typescript
  * Next.js
  * TailwindCSS

* Back-End:
  * Express.js
  * Docker
  * CICD
  * PostgreSQL

## Backend Repository
The backend for this project is hosted in a separate repository. It is built using Express.js to construct the APIs and includes two Docker Compose files for seamless Continuous Integration and Deployment to an Amazon EC2 instance. 

For source code and more details, click here: [charmander-backend](https://github.com/rpp2204-boc-charmander/charmander-backend)
  
## Features

### 1. Login / Signup
  * Integrated third-party APIs to allow login/sign-up with FitBit, Strava, and Google.
  
  <img width="1720" alt="Screenshot 2023-01-20 at 2 05 23 AM" src="https://user-images.githubusercontent.com/98191976/213670339-f421cddb-dbfd-45fd-b171-259d016028ee.png">
<img width="1708" alt="Screenshot 2023-01-20 at 2 05 51 AM" src="https://user-images.githubusercontent.com/98191976/213670361-a91fdd09-ca55-40f1-9f27-cbf42ca71a05.png">
  
### 2. Overview
  * Displays exercise and nutrition entries.
  * Displays net calories burned / gained.
  * Can click an exercise or meal to mark as completed/consumed.

  <img width="1707" alt="Screenshot 2023-01-20 at 1 55 01 AM" src="https://user-images.githubusercontent.com/98191976/213670511-8d3e309b-5b59-40a8-a33b-5d9f693865cc.png">

### 3. Exercise
  * Search and add exercises through our custom database of default exercises.
  * Create custom exercises.
  * Add sets and complete sets.
  * Edit, delete, or mark exercises as complete.
  * Calculates estimated calories burned when a set is completed.
  * Calculates estimated calories burned for the day when an exercise is completed.

<img width="1709" alt="Screenshot 2023-01-20 at 1 55 28 AM" src="https://user-images.githubusercontent.com/98191976/213671257-99114f54-790b-4381-b2d5-65b27aee2677.png">
<img width="1725" alt="Screenshot 2023-01-20 at 1 51 18 AM" src="https://user-images.githubusercontent.com/98191976/213670883-3cb71a92-6d0f-4dc0-abed-7041768d5d71.png">
<img width="1715" alt="Screenshot 2023-01-20 at 1 51 38 AM" src="https://user-images.githubusercontent.com/98191976/213670897-f68a66f8-118d-4716-82d4-9fdf42c50610.png">

  
### 4. Nutrition
  * Search and add meals through a third-party API
  * Logs user meals for their respective days.
  * Edit, delete, or mark meals as consumed.
  * Calculate estimated calories gained when a meal is consumed.
  
### 5. Report
  * Displays a user's exercise progression through graph charts. 
  * Able to toggle between day, week, or year view.
  
### 6. Settings 
  * Edit user metrics
  * Toggle light/dark mode
  
  <img width="1720" alt="Screenshot 2023-01-20 at 1 56 06 AM" src="https://user-images.githubusercontent.com/98191976/213671071-0284b603-1167-4f79-a659-4bd1c7951bb9.png">
<img width="1719" alt="Screenshot 2023-01-20 at 1 56 17 AM" src="https://user-images.githubusercontent.com/98191976/213671076-627745b1-4036-4382-bade-f37d775a0529.png">

## Team Members
  * Authentication / Signup / Settings
    * [Anthony Merino](https://github.com/chiElephant)
  * UI/UX
    * [Kris Opeda](https://github.com/kopeda)
  * Overview
    * [Hasan Uchchas](https://github.com/huchchas)
  * Exercise
    * [Ethan Ayaay](https://github.com/ayaayethan)
    * [Ricky Pirruccio](https://github.com/RPirruccio)
  * Nutrition
    * [Keenan Aldrige](https://github.com/kmantan)
    * [Javier Campos](https://github.com/Loxiiii)
  * Report
    * [William Kent](https://github.com/kentwl1876)

