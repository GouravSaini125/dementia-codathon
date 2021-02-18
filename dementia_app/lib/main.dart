import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Dementia',
      theme: ThemeData(
        primarySwatch: Colors.teal,
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      home: MyHomePage(),
    );
  }
}

class MyHomePage extends StatefulWidget {
  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Dementia"),
      ),
      body: Center(
        child: RaisedButton(
          onPressed: _launchURL,
          child: Text("Launch Quiz"),
        )
      ),
    );
  }

  _launchURL() async {
    const url = 'https://dementia-codathon.netlify.app/';
    if (await canLaunch(url)) {
      await launch(url, forceWebView: true, enableJavaScript: true);
    } else {
      final snackBar = SnackBar(content: Text('Unable to launch!'));
      Scaffold.of(context).showSnackBar(snackBar);
    }
  }

}
