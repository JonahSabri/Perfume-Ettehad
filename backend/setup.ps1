Write-Host "Setting up Django Backend..." -ForegroundColor Green

Write-Host ""
Write-Host "1. Installing Python dependencies..." -ForegroundColor Yellow
pip install -r requirements.txt

Write-Host ""
Write-Host "2. Running Django migrations..." -ForegroundColor Yellow
python manage.py makemigrations
python manage.py migrate

Write-Host ""
Write-Host "3. Creating superuser (optional)..." -ForegroundColor Yellow
Write-Host "You can create a superuser now or later with: python manage.py createsuperuser" -ForegroundColor Cyan

Write-Host ""
Write-Host "4. Importing test data..." -ForegroundColor Yellow
python manage.py shell < import_test_data.py

Write-Host ""
Write-Host "5. Starting Django development server..." -ForegroundColor Yellow
Write-Host "The server will be available at http://127.0.0.1:8000/" -ForegroundColor Cyan
Write-Host "Admin panel: http://127.0.0.1:8000/admin/" -ForegroundColor Cyan
Write-Host "API endpoints: http://127.0.0.1:8000/api/" -ForegroundColor Cyan
Write-Host ""
python manage.py runserver
