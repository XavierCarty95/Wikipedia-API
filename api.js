function myApp(){
    const button = document.getElementById("button")
    button.addEventListener("click" , myButton)
    
}



function myButton(){
    console.log("The button is clicked")
    document.getElementById("myText").innerHTML = "This button is click"
    var array = ["Xavier" , "Kyle" , "rick " , "david"]
    var list = ""
      array.forEach(function(item){
          const listNode = "<li> " + item +  "</li>"
          
          list += listNode;
          
          console.log(item)
      })
    
    document.getElementById("list").innerHTML = list 
}







// var url = "https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=5&gsrsearch=''";




// function sumbit(e){
//     e.preventDefault()
// }

// function displayData(data){ 
//     return data
    
   
    
// }




// function getData(){ 
    
//   fetch(url).then(function(response){
//     return response.json();
// }).then(function(myJson){
//   console.log(JSON.stringify(myJson))
//  var data =  displayData(myJson)

   
   
       
// })


}