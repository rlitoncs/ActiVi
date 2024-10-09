## Routes

*Once you know the resources that you'll have, write out the routes that you'll need to perform BREAD operations on those resources
Remember RESTful conventions (they make it much easier)*

```
Users
--------------------------------------
Browse         GET           api/users                              
Read           GET           api/users/:id                          
Edit           GET           api/users/:id/edit                 
               POST          api/users/:id                        
Add            GET           api/users/new                                                                                     
               POST          api/users                                     
Delete         POST          api/users/:id/delete            



User_Workouts
----------------------------------------
Browse         GET           api/workouts                           
Read           GET           api/workouts/:id                    
Edit           GET           api/workouts/:id/edit                                                                
               POST          api/workouts/:id                    
Add            GET           api/workouts/new                                                                                          
               POST          api/workouts                           
Delete         POST          api/workouts/:id/delete    


Workout_Types
----------------------------------------
Browse         GET           api/workouts-types                           
Read           GET           api/workouts-types/:id                    
Edit           GET           api/workouts-types/:id/edit                                                                
               POST          api/workouts-types/:id                    
Add            GET           api/workouts-types/new                                                                                          
               POST          api/workouts-types                           
Delete         POST          api/workouts-types/:id/delete    


Activities
----------------------------------------
Browse         GET           api/activities                           
Read           GET           api/activities/:id                    
Edit           GET           api/activities/:id/edit                                                                
               POST          api/activities/:id                    
Add            GET           api/activities/new                                                                                          
               POST          api/activities                           
Delete         POST          api/activities/:id/delete    


Muscle_groups
----------------------------------------
Browse         GET           api/musclegroups                           
Read           GET           api/musclegroups/:id                    
Edit           GET           api/musclegroups/:id/edit                                                                
               POST          api/musclegroups/:id                    
Add            GET           api/musclegroups/new                                                                                          
               POST          api/musclegroups                           
Delete         POST          api/musclegroups/:id/delete    


Activity_Recommendations
----------------------------------------
Browse         GET           api/activity-recommendations                           
Read           GET           api/activity-recommendations/:id                    
Edit           GET           api/activity-recommendations/:id/edit                                                                
               POST          api/activity-recommendations/:id                    
Add            GET           api/activity-recommendations/new                                                                                          
               POST          api/activity-recommendations                           
Delete         POST          api/activity-recommendations/:id/delete    

Goals
----------------------------------------
Browse         GET           api/goals                                  
Read           GET           api/goals/:id                            
Edit           GET           api/goals/:id/edit                   
               POST          api/goals/:id                          
Add            GET           api/goals/new                                                                      
               POST          api/goals                                            
Delete         POST          api /goals/:id/delete



MotivationalMessages
--------------------------------------
Browse         GET           api/motivations                      
Read           GET           api/motivations/:id                          
Edit           GET           api/motivations/:id/edit                 
               POST          api/motivations/:id                        
Add            GET           api /motivations/new                                                                                     
               POST          api/motivations
Delete         POST          api/motivations/:id/delete         



FAQS
--------------------------------------
Browse         GET           api/faqs
Read           GET           api/faqs/:id                          
Edit           GET           api/faqs/:id/edit                 
               POST          api/faqs/:id                        
Add            GET           api/faqs/new                                                                                     
               POST         api/faqs
Delete         POST         api/faqs/:id/delete     
```

