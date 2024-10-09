
![ERD](https://github.com/rlitoncs/ActiVi/blob/main/planning/2.%20erd/erd.md) 
![Routes](https://github.com/rlitoncs/ActiVi/blob/main/planning/3.%20routes/routes.md) ![MVP/MVD](https://github.com/rlitoncs/ActiVi/blob/main/planning/4.%20mvp-mvd/mvp-mvd.md) ![Wireframes]()
## Routes

*Once you know the resources that you'll have, write out the routes that you'll need to perform BREAD operations on those resources
Remember RESTful conventions (they make it much easier)*

```
Users
--------------------------------------                         
Read           GET           api/users/:id                Show specific user
Edit           POST          api/users/:id                Handle submission of edit post form for specific user
Add            POST          api/users                    Handle new submission of new product into products database 
Delete         POST          api/users/:id/delete         Handle delete user form submission


User_Workouts
----------------------------------------
Browse         GET           api/workouts                 Show all workouts
Read           GET           api/workouts/:id             Show specific workout
Edit           POST          api/workouts/:id             Handle submission of edit post form for specific user
Add            POST          api/workouts                 Handle new submission of new user workout into users database
Delete         POST          api/workouts/:id/delete      Handle delete workout form submission


Workout_Types
----------------------------------------
Browse         GET           api/workouts-types          Show all workout-types
Read           GET           api/workouts-types/:id      Show specific workout-type


Activities
----------------------------------------
Browse         GET           api/activities              Show all activities
Read           GET           api/activities/:id          Show specific activity


Muscle_groups
----------------------------------------
Browse         GET           api/musclegroups            Show all muscle groups
Read           GET           api/musclegroups/:id        Show specific muscle group


Activity_Recommendations
----------------------------------------
Browse         GET           api/activity-recommendations           Show all acitivity recommendations
Read           GET           api/activity-recommendations/:id       Show specific acitivity recommendation


User_Goals
----------------------------------------
Browse         GET           api/goals                    Show all user goals
Read           GET           api/goals/:id                Show specific user goal
Edit           POST          api/goals/:id                Handle submission of edit post form for specific goal
Add            POST          api/goals                    Handle new submission of new user goal into user_goals database
Delete         POST          api /goals/:id/delete        Handle delete user goal form submission



MotivationalMessages
--------------------------------------
Browse         GET           api/motivations              Show all motivational messages
Read           GET           api/motivations/:id          Show specific motivational message



FAQS
--------------------------------------
Browse         GET           api/faqs                     Show all faqs
Read           GET           api/faqs/:id                 Show specific faq

```

