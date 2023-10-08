# Generated by Django 4.2 on 2023-10-07 20:30

from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Banking",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("account_type", models.CharField(max_length=255)),
                ("account_name", models.CharField(max_length=255)),
                (
                    "account_number",
                    models.DecimalField(
                        decimal_places=0, max_digits=10, verbose_name="account number"
                    ),
                ),
                ("account_sort_code", models.CharField(max_length=255)),
                ("account_status", models.CharField(max_length=255)),
                (
                    "balance",
                    models.DecimalField(
                        decimal_places=2, max_digits=10, verbose_name="balance"
                    ),
                ),
                (
                    "credit_limit",
                    models.DecimalField(
                        decimal_places=2, max_digits=10, verbose_name="credit limit"
                    ),
                ),
                ("currency", models.CharField(max_length=255)),
                (
                    "opening_balance",
                    models.DecimalField(
                        decimal_places=2, max_digits=10, verbose_name="opening balance"
                    ),
                ),
                ("opening_balance_date", models.DateTimeField()),
                ("created_at", models.DateTimeField(auto_now_add=True)),
                ("updated_at", models.DateTimeField(auto_now=True)),
            ],
        ),
    ]
