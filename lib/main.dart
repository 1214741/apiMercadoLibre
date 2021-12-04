import 'dart:async';

import 'package:flutter/material.dart';
import 'package:mercadolibre/services/fetch.dart';

import 'package:mercadolibre/services/product.dart';


void main() => runApp(const MyApp());

class MyApp extends StatefulWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  _MyAppState createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  late Future<Product> futureProduct;

  @override
  void initState() {
    super.initState();
    futureProduct = fetchProduct();
  }

  @override
  Widget build(BuildContext context) {
    //final _controller = TextEditingController();
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Fetch Data Example',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: Scaffold(
        appBar: AppBar(
          title: const Text('Api Mercado Libre'),
        ),
        body: Center(
          /*child: ListView(children: [
            TextField(
              controller: _controller,
            ),
            const MaterialButton(
              onPressed: null,
              child: Text('Get Product', style: TextStyle(fontSize: 20)),
            ),
            
          ]),*/
          child: FutureBuilder<Product>(
              future: futureProduct,
              builder: (context, snapshot) {
                if (snapshot.hasData) {
                  return Text(snapshot.data!.title);
                } else if (snapshot.hasError) {
                  return Text('${snapshot.error}');
                }

                // By default, show a loading spinner.
                return const CircularProgressIndicator();
              },
            ),
        ),
      ),
    );
  }
}


