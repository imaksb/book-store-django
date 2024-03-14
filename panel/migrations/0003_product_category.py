# Generated by Django 5.0.2 on 2024-03-06 18:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('panel', '0002_alter_product_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='category',
            field=models.CharField(choices=[('E', 'E-book'), ('H', 'Hardcover'), ('P', 'Paperback')], default='E-book', max_length=50, verbose_name='Category'),
        ),
    ]