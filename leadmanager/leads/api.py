from .models import Lead
from .serializer import LeadSerializer, UserModelSerilializer
from rest_framework import viewsets, permissions
from django.contrib.auth.models import User

class LeadViewSet(viewsets.ModelViewSet):
    serializer_class = LeadSerializer
    permission_classes = [
        permissions.IsAuthenticated
    ]
    queryset = Lead.objects.all()
    # def get_queryset(self):
        # queryset = self.request.user.leads.all()
        
    
    def perform_create(self, serializer):
        serializer.save(owner = self.request.user)


class UserModelViewSet(viewsets.ModelViewSet):
    serializer_class = UserModelSerilializer
    permission_classes = [
        permissions.AllowAny
    ]
    queryset = User.objects.all()