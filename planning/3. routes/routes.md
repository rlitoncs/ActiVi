![User Stories](https://github.com/rlitoncs/ActiVi/blob/main/planning/1.%20user-stories/user-stories.md) ![ERD](https://github.com/rlitoncs/ActiVi/blob/main/planning/2.%20erd/erd.md) 
![Routes](https://github.com/rlitoncs/ActiVi/blob/main/planning/3.%20routes/routes.md) ![MVP/MVD](https://github.com/rlitoncs/ActiVi/blob/main/planning/4.%20mvp-mvd/mvp-mvd.md) ![Wireframes](#)
## Routes

*Once you know the resources that you'll have, write out the routes that you'll need to perform BREAD operations on those resources
Remember RESTful conventions (they make it much easier)*

The MVP-MVD Routes are smaller, this is just full-case routes
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
Edit           POST          api/workouts/:id             Handle submission of edit post form for specific user
Add            POST          api/workouts                 Handle new submission of new user workout into users database
Delete         POST          api/workouts/:id/delete      Handle delete workout form submission


Exercises
----------------------------------------
Browse         GET           api/workouts-types          Show all workout-types
Read           GET           api/workouts-types/:id      Show specific workout-type

```

