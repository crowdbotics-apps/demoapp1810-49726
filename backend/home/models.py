from django.conf import settings
from django.db import models


class Fyrtdhfy(models.Model):
    "Generated Model"
    free = models.ImageField(
        upload_to="fyrtdhfy/free/images/",
    )
    rel_user_1_1 = models.OneToOneField(
        "users.User",
        blank=True,
        null=True,
        on_delete=models.CASCADE,
        related_name="fyrtdhfy_rel_user_1_1",
    )
