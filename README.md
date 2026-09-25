# Technologies Used

Framework : Next.js , React, TypeScript
Styling : Tailwind CSS
State Management: React Context API (PlanContext.tsx)
Notifications: React-Toastify (or Toast notifications)
Data Fetching: Asynchronous REST API integration


# Navigation & Core Layout:
The application uses Next.js App Router for client and server routing. Global layout components like Navbar and Footer provide cohesive site navigation.

# How it work 
The /workouts page fetches workout data asynchronously, rendering structured cards using WorkoutCard.tsx and enabling real-time filtering via WorkoutFilters.tsx. Built in loading.tsx visual boundary files handle fallback states gracefully.Users can add selected exercises to their custom workout plan using action components (AddButton.tsx, SaveButton.tsx). State is synchronized across routes using React Context (PlanContext.tsx).The /my-plan route aggregates selected workout items from Context, calculating total estimated calorie burn and target gym sets.Toast notifications trigger feedback upon updating or saving plans, while dynamic UI states provide continuous visual feedback during async operations.Next.js App Router Architecture: Utilizes file-system routing, dynamic layout nested structures, and automated loading boundaries (loading.tsx) for optimal performance and smooth UX transitions.Seamlessly manages workout selection, calorie tracking, and customized plans across screens using React Context API.Built using TypeScript interfaces (types/workout.tsx) to ensure strict type checking and scalable code maintenance.

# Responsive UI Design: 
Fully responsive layout styled with Tailwind CSS, adapted for mobile, tablet, and desktop viewports.