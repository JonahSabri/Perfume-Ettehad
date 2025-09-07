@echo off
echo Importing test data...
cd backend
python manage.py shell < import_test_data.py
echo Test data imported successfully!
pause
