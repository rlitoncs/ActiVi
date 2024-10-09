![Wireframes]()
## MVP / MVD

*MVP vs MVD*

*There is a concept in development of an MVP, the Minimum Viable Product
An MVP has just enough features to be useful to a user.
This concept helps streamline the development process and help keep the team on target.
For finals, we want to focus on the MVD, the Minimum Viable Demo
If you aren't going to demo it, don't build it*

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

```