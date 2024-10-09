

### ERD Relationships

![ERD Diagram](https://github.com/user-attachments/assets/053e4aa8-994d-405f-878a-19fc602835b2)

#### Tables
----
 * Users
 * User_Workouts
 * User_Goals
 * Workout_Types
 * Activities
 * MuscleGroups
 * ActivityRecommendations
 * AgeGroups
 * MotivationalMessages
 * FAQ

----
#### Users <> Workouts
 * *A user can have multiple workouts (**1-to-N**)*
----

#### Users <> Goals
 * *A user can have multiple goals (**1-to-N**)*
----

#### User_Workouts <> Workout_Types
 * *many workouts can be categorized under a workout type (**N-to-1**)*
----

####  User_Workouts <> Activities
 * *many workouts corresponds to a specific activity (**N-to-1**)*
----

####  Workout_Types <> Activities
  * *a workout type has multiple activities, and each activity belongs to one workout type (**1-to-N**)*
----

#### Workout_Types <> ActivityRecommendations
  * *a workout type can have multiple activity recommendations (**1-to-N**)*
----

#### Activities <> Activity Recommendations
  * *an activity has many activity recommendations (**1-to-N**)*
----

####  Activities <> MuscleGroups
  * *multiple activities belong to a muscle group, and a muscle group has many activties (**N-to-1**)*
----

#### AgeGroups <> ActivityRecommendations
  * *an age group can have multiple activity recommendations (**1-to-N**)*
----

#### MotivationalMessages
  * *no relationship type*
----

#### FAQ
  * *no relationship type*
