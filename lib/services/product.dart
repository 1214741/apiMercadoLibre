class Product {
  final String id;
  final String title;
  final String price;
  final String url;
  final String city;

  Product({
    required this.id,
    required this.title,
    required this.price,
    required this.url,
    required this.city,
  });

  factory Product.fromJson(Map<String, dynamic> json) {
    return Product(
      id: json['id'],
      title: json['title'], 
      city: json['city'], 
      price: json['price'], 
      url: json['url'],
    );
  }
}