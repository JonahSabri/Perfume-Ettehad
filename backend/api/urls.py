from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'categories', views.CategoryViewSet)
router.register(r'brands', views.BrandViewSet)
router.register(r'products', views.ProductViewSet)
router.register(r'orders', views.OrderViewSet, basename='order')
router.register(r'users', views.UserViewSet, basename='user')
router.register(r'pages', views.PageViewSet)
router.register(r'faqs', views.FAQViewSet)
router.register(r'blog-posts', views.BlogPostViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('auth/', include('rest_framework.urls')),
    path('cart/', views.CartView.as_view(), name='cart'),
    path('cart/add/', views.AddToCartView.as_view(), name='add-to-cart'),
    path('cart/remove/<int:item_id>/', views.RemoveFromCartView.as_view(), name='remove-from-cart'),
    path('cart/update/<int:item_id>/', views.UpdateCartItemView.as_view(), name='update-cart-item'),
    path('products/<slug:slug>/reviews/', views.ProductReviewsView.as_view(), name='product-reviews'),
    path('products/<slug:slug>/add-review/', views.AddProductReviewView.as_view(), name='add-product-review'),
]
