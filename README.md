# backend
Base URL: 
### All Endpoints
| Request | URL | Body |
|----------|----------|----------|
|<strong>USERS</strong>| |  |
|POST | /api/users/register_user | {username: '', email: '', password: ''} |
|POST | /api/users/login | {username: '', password: ''} |
|<strong>CATEGORIES</strong>|  |  |
|GET | /api/categories/:user_id/categories  | |
|POST | /api/categories/:user_id/categories | {category_name: '', user_id: ''} | 
|POST | /api/categories/:user_id/category_pairs | {user_id: '', category_id: ''} | 
|GET | /api/categories/:user_id/user_categories | {user_id: ''}| 
|DELETE | /api/categories/:user_id/user_categories/:id | {user_category_id: ''} | 
|<strong>BUDGET</strong>| |  |
|GET | /api/budget/:user_id/budget | |
|POST | /api/budget/:user_id/budget| {user_id: '', total_monthly_budget: ''}| 
|PUT |/api/budget/:user_id/budget | {user_id: '', total_monthly_budget: ''} | 
</br>


