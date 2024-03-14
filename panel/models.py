from django.db import models

book_category = (
    ("E", "E-book"),
    ("H", "Hardcover"),
    ("P", "Paperback")
)


class Product(models.Model):
    title = models.CharField(max_length=50)
    manufacturer = models.CharField(max_length=50)
    image = models.ImageField(upload_to="products")
    description = models.TextField(max_length=255)
    category = models.CharField(choices=book_category,
                                default="E-book", max_length=50, verbose_name="Category")

    @staticmethod
    def get_all_products():
        return Product.objects.all()

    @staticmethod
    def delete_product(pk: int):
        Product.objects.get(pk=pk).delete()

    def update_book(self):
        pass
