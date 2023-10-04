from django.db.models import Q
from django.http import Http404
from rest_framework.generics import ListAPIView, CreateAPIView, UpdateAPIView, RetrieveAPIView
from api.modules.group.serializers import GroupSerializer
from group.models import Group
from user.models import User
import uuid

class GroupListView(ListAPIView):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer

class GroupCreateView(CreateAPIView):
    serializer_class = GroupSerializer

class GroupUpdateView(UpdateAPIView):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    lookup_field = 'pk'

class GroupRetrieveView(RetrieveAPIView):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer

class GroupUpdateAddParticipantView(UpdateAPIView):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer

    def perform_update(self, serializer):
        participants = self.request.data.getlist('participants', [])
        instance = serializer.instance
        participants_list = User.objects.filter(id__in=participants)
        instance.participants.add(*participants_list)
        instance.save()

class GroupUpdateRemoveParticipantView(UpdateAPIView):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer

    def perform_update(self, serializer):
        participants = self.request.data.getlist('participants', [])
        instance = serializer.instance
        participants_list = User.objects.filter(id__in=participants)
        for participant_id in participants_list:
            instance.participants.remove(participant_id)   
        instance.save()

