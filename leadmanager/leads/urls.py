from rest_framework import routers
from .api import  LeadViewSet, UserModelViewSet

router = routers.DefaultRouter()
router.register("api/leads", LeadViewSet, 'leads')
router.register("api/users", UserModelViewSet, 'users')


urlpatterns = router.urls