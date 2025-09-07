@echo off
echo Setting up Django Backend...

echo.
echo 1. Installing Python dependencies...
pip install -r requirements.txt

echo.
echo 2. Running Django migrations...
python manage.py makemigrations
python manage.py migrate

echo.
echo 3. Creating superuser (optional)...
echo You can create a superuser now or later with: python manage.py createsuperuser

echo.
echo 4. Importing test data...
python manage.py shell < import_test_data.py

echo.
echo 5. Starting Django development server...
echo The server will be available at http://127.0.0.1:8000/
echo Admin panel: http://127.0.0.1:8000/admin/
echo API endpoints: http://127.0.0.1:8000/api/
echo.
python manage.py runserver
