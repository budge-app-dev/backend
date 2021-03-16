# backend
Endpoints:

Users:

[ ]  POST - [http://localhost/5000/api/users/register_user](http://localhost/5000/api/users/register_user) - {username: '', email: '', password: ''}
[ ]  POST - [http://localhost/5000/api/users/login](http://localhost/5000/api/users/login) - {username: '', password: ''}

Categories:

[ ]  GET - [http://localhost/5000/api/categories/:user_id/categories](http://localhost/5000/api/categories/:user_id/categories)
[ ]  POST - [http://localhost/5000/api/categories/:user_id/categories](http://localhost/5000/api/categories/:user_id/categories) - {category_name: '', user_id: ''}
[ ]  POST - [http://localhost/5000/api/categories/:user_id/category_pairs](http://localhost/5000/api/categories/:user_id/category_pairs) - {user_id: '', category_id: ''}
[ ]  GET - [http://localhost/5000/api/categories/:user_id/user_categories](http://localhost/5000/api/categories/:user_id/user_categories) - {user_id: ''}
[ ]  DELETE - [http://localhost/5000/api/categories/:user_id/user_categories/:id](http://localhost/5000/api/categories/:user_id/user_categories/:id) - {user_category_id: ''}

Budget:

[ ]  POST - [http://localhost/5000/api/budget/:user_id/budget](http://localhost/5000/api/budget/:user_id/budget) - {user_id: '', total_monthly_budget: ''}
[ ]  GET - [http://localhost/5000/api/budget/:user_id/budget](http://localhost/5000/api/budget/:user_id/budget)
[ ]  PUT - [http://localhost/5000/api/budget/:user_id/budget](http://localhost/5000/api/budget/:user_id/budget) - {user_id: '', total_monthly_budget: ''}
