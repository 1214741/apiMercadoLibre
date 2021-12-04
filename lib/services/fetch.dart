import 'dart:async';
import 'dart:convert';

import 'package:http/http.dart' as http;
import 'package:mercadolibre/services/product.dart';

Future<Product> fetchProduct() async {
  final response = await http
      .get(Uri.parse('https://api.mercadolibre.com/sites/MCO/search?q=xiaomi&limit=4'));
      
  if (response.statusCode == 200) {
    // If the server did return a 200 OK response,
    // then parse the JSON.
    return Product.fromJson(jsonDecode(response.body));
  } else {
    // If the server did not return a 200 OK response,
    // then throw an exception.
    throw Exception('Failed to load');
  }
}
