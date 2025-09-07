from django.test import TestCase
from django.contrib.auth import get_user_model
from django.urls import reverse
from rest_framework.test import APITestCase
from rest_framework import status

User = get_user_model()

class CustomUserModelTest(TestCase):
    def setUp(self):
        self.user = User.objects.create_user(
            username='testuser',
            email='test@example.com',
            password='testpass123',
            first_name='تست',
            last_name='کاربر',
            phone_number='09123456789'
        )

    def test_user_creation(self):
        self.assertEqual(self.user.username, 'testuser')
        self.assertEqual(self.user.email, 'test@example.com')
        self.assertEqual(self.user.first_name, 'تست')
        self.assertEqual(self.user.last_name, 'کاربر')
        self.assertEqual(self.user.phone_number, '09123456789')

    def test_user_str(self):
        self.assertEqual(str(self.user), 'تست کاربر (testuser)')

    def test_full_name_property(self):
        self.assertEqual(self.user.full_name, 'تست کاربر')

    def test_is_complete_profile(self):
        # User without address and city
        self.assertFalse(self.user.is_complete_profile)
        
        # Add address and city
        self.user.address = 'تهران، خیابان ولیعصر'
        self.user.city = 'تهران'
        self.user.save()
        
        self.assertTrue(self.user.is_complete_profile)

class UserAPITest(APITestCase):
    def setUp(self):
        self.user = User.objects.create_user(
            username='testuser',
            email='test@example.com',
            password='testpass123',
            first_name='تست',
            last_name='کاربر'
        )

    def test_user_list_requires_auth(self):
        url = reverse('user-list')
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_user_list_with_auth(self):
        self.client.force_authenticate(user=self.user)
        url = reverse('user-list')
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
