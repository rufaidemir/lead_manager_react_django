from rest_framework import serializers
from .models import Lead
import datetime
from django.utils.timesince import timesince
from django.contrib.auth.models import User





class UserModelSerilializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'


class LeadSerializer(serializers.ModelSerializer):
    time_since_pub = serializers.SerializerMethodField()
    
    class Meta:
        model = Lead
        fields = "__all__"
    
    def validate(self, data):
        if data["name"] == "rufai":
            raise serializers.ValidationError("Bu isim kullanilamaz")
        else:
            return data
    def get_time_since_pub(self, object):
        pub_date = object.created_at
        return timesince(pub_date)

    def validate_name(self, value):
        if value == "Kadere Bak":
            raise serializers.ValidationError("Hadi be")
        else:
            return value
    
