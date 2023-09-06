const cttp = require("http");

const fSystem = require("fs").promises;

// ans stands for answer
const orderRetriever = function(task, ans){

  console.log(task.url);

  if(task.url === "/"){
    fSystem.readFile( __dirname  + "/Ass3.html" )
      .then(
        contents => {
          ans.setHeader("Content-Type", "text/html; charset=UTF-8");
          ans.writeHead(200);
          ans.end(contents);
        }
      )
  } else{
    fSystem.readFile( __dirname + "/Ass3.json" 
)
    .then(
      contents => {
      ans.setHeader("Content-Type", "application/json; charset=UTF-8");
      ans.writeHead(200);
        ans.end(contents);
});

}
};

const assist = cttp.createServer(orderRetriever);

const vessel = "0.0.0.0";
const entrepot = "8080";

assist.listen(
entrepot,
  vessel,
  () => {
    console.log('The vessel is up and going');
  }
);

