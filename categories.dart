import 'package:flutter/material.dart';

void main(List<String> args) {
  runApp( MaterialApp(
    home : Dashboard(),
    )
    );
}
   class Dashboard extends StatelessWidget{
    @override
    Widget build(BuildContext context){
      return Scaffold(
        backgroundColor: Colors.white10,
        body: SafeArea(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
Padding(padding: const EdgeInsets.all(12.0),
child: Row(
  mainAxisAlignment: MainAxisAlignment.spaceBetween,
  children: [
    Icon(Icons.menu, color: Colors.black, size:50.0),
    Image.asset("/africa.png", width: 50.0)
  ],
  ),
  ),
  // ignore: prefer_const_constructors
  Padding(
    padding: const EdgeInsets.all(18.0),
    child: Text(
      "CONTINENTS",
      style:TextStyle(
        color: Colors.black,
        fontSize: 28.0,
        fontWeight:FontWeight.bold
      ),
      textAlign: TextAlign.start,
    ),
    ),
    Padding(
      padding: const EdgeInsets.all(112.0),
      child: Center(
        child:Wrap(
          spacing:20.0,
          runSpacing: 20.0,
          children:[
SizedBox(
    
  width: 160.0,
  height: 160.0,
  child: Card(
   color: Color.fromARGB(255, 21, 21, 21),
   elevation: 2.0,
   shape: RoundedRectangleBorder(
    borderRadius: BorderRadius.circular(8.0)),
   child: Center(
    child: Padding(
      padding: const EdgeInsets.all(8.0),
      child: Column(
        children: [
          Image.asset("/africa.png", width: 64.0),
          SizedBox(height: 10.0),
          Text("Africa", style: TextStyle(
            color: Colors.white54,
            fontWeight: FontWeight.bold,
            fontSize:20.0)),
            SizedBox(height: 5.0),
            
        ],)
   )
   )
)
         ), 
         SizedBox(
    
  width: 160.0,
  height: 160.0,
  child: Card(
   color: Color.fromARGB(255, 21, 21, 21),
   elevation: 2.0,
   shape: RoundedRectangleBorder(
    borderRadius: BorderRadius.circular(8.0)),
   child: Center(
    child: Padding(
      padding: const EdgeInsets.all(8.0),
      child: Column(
        children: [
          Image.asset("/south-america.png", width: 64.0),
          SizedBox(height: 10.0),
          Text("South America", style: TextStyle(
            color: Colors.white54,
            fontWeight: FontWeight.bold,
            fontSize:20.0)),
            SizedBox(height: 5.0),
            
        ],)
   )
   )
)
         ), 
         SizedBox(
    
  width: 160.0,
  height: 160.0,
  child: Card(
   color: Color.fromARGB(255, 21, 21, 21),
   elevation: 2.0,
   shape: RoundedRectangleBorder(
    borderRadius: BorderRadius.circular(8.0)),
   child: Center(
    child: Padding(
      padding: const EdgeInsets.all(8.0),
      child: Column(
        children: [
          Image.asset("/north-america.png", width: 64.0),
          SizedBox(height: 10.0),
          Text("North America", style: TextStyle(
            color: Colors.white54,
            fontWeight: FontWeight.bold,
            fontSize:20.0)),
            SizedBox(height: 5.0),
            
        ],)
   )
   )
)
         ), SizedBox(
    
  width: 160.0,
  height: 160.0,
  child: Card(
   color: Color.fromARGB(255, 21, 21, 21),
   elevation: 2.0,
   shape: RoundedRectangleBorder(
    borderRadius: BorderRadius.circular(8.0)),
   child: Center(
    child: Padding(
      padding: const EdgeInsets.all(8.0),
      child: Column(
        children: [
          Image.asset("/asia.png", width: 64.0),
          SizedBox(height: 10.0),
          Text("Asia", style: TextStyle(
            color: Colors.white54,
            fontWeight: FontWeight.bold,
            fontSize:20.0)),
            SizedBox(height: 5.0),
            
        ],)
   )
   )
)
         ), SizedBox(
    
  width: 160.0,
  height: 160.0,
  child: Card(
   color: Color.fromARGB(255, 21, 21, 21),
   elevation: 2.0,
   shape: RoundedRectangleBorder(
    borderRadius: BorderRadius.circular(8.0)),
   child: Center(
    child: Padding(
      padding: const EdgeInsets.all(8.0),
      child: Column(
        children: [
          Image.asset("/antarctica.png", width: 64.0),
          SizedBox(height: 10.0),
          Text("North America", style: TextStyle(
            color: Colors.white54,
            fontWeight: FontWeight.bold,
            fontSize:20.0)),
            SizedBox(height: 5.0),
            
        ],)
   )
   )
)
         ),  SizedBox(
    
  width: 160.0,
  height: 160.0,
  child: Card(
   color: Color.fromARGB(255, 21, 21, 21),
   elevation: 2.0,
   shape: RoundedRectangleBorder(
    borderRadius: BorderRadius.circular(8.0)),
   child: Center(
    child: Padding(
      padding: const EdgeInsets.all(8.0),
      child: Column(
        children: [
          Image.asset("/australia.png", width: 64.0),
          SizedBox(height: 10.0),
          Text("Australia", style: TextStyle(
            color: Colors.white54,
            fontWeight: FontWeight.bold,
            fontSize:20.0)),
            SizedBox(height: 5.0),
            
        ],)
   )
   )
)
         ),  SizedBox(
    
  width: 160.0,
  height: 160.0,
  child: Card(
   color: Color.fromARGB(255, 21, 21, 21),
   elevation: 2.0,
   shape: RoundedRectangleBorder(
    borderRadius: BorderRadius.circular(8.0)),
   child: Center(
    child: Padding(
      padding: const EdgeInsets.all(8.0),
      child: Column(
        children: [
          Image.asset("/europe.png", width: 64.0),
          SizedBox(height: 10.0),
          Text("Europe", style: TextStyle(
            color: Colors.white54,
            fontWeight: FontWeight.bold,
            fontSize:20.0)),
            SizedBox(height: 5.0),
           
        ],)
   )
   )
)
         ), ],


 
 

        ),
      ),),
            ],
            ),
            ),
      );
    }
   } 
