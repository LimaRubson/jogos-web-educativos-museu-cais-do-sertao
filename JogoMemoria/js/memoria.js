(function(){
    var matches = 0;

    var tentativas = 0;

    var contador = 10;

    TEXT_SCORE = "Pontos: ";

    var images = [];

    var flippedCards = [];

    var textMatchSign = document.querySelector("#textMatchSign");

    var linkAddItem = document.getElementById('control');

    var modal = document.getElementById('myModal');

    for (var i = 0; i < 16; i++) {
        var img = {
            src: "img/"+ i +".png",
            id: i%8
        };
        images.push(img);

    }

    linkAddItem.addEventListener('click', startGame, false);


     matchCardSign();


    function startGame(){
      contador = 10;

      matches = 0;

      matchCardSign();

      flippedCards = [];
      images = randomSort(images);

      var frontFaces = document.getElementsByClassName("front");
      var backFaces = document.getElementsByClassName("back");

      for(var i = 0; i < 16; i++){
          frontFaces[i].classList.remove("flipped","match");
          backFaces[i].classList.remove("flipped","match");

          var card = document.querySelector("#card" + i);
          card.style.left = i % 8 === 0 ? 5 + "px" : i % 8 * 3 + "px";
          card.style.top = i < 8 ? 5 + "px" : 5 + "px";

          card.addEventListener("click",flipCard,false);

          frontFaces[i].style.background = "url('"+ images[i].src +"')";
          frontFaces[i].style.backgroundSize = 100 + "%", 100 + "%";
          frontFaces[i].setAttribute("id",images[i].id);
      }
    }

    function randomSort(oldArray) {

        var newArray = [];

        while(newArray.length !== oldArray.length){
            var i = Math.floor(Math.random()*oldArray.length);

            if(newArray.indexOf(oldArray[i]) < 0){
                newArray.push(oldArray[i])
            }
        }

        return newArray;
    }

    function flipCard(){
        if(flippedCards.length < 2){
            var faces = this.getElementsByClassName("face");

            if(faces[0].classList.length > 2){

                return;
            }
            faces[0].classList.toggle("flipped");
            faces[1].classList.toggle("flipped");

            flippedCards.push(this);

            if(flippedCards.length === 2){
                 if(flippedCards[0].childNodes[3].id === flippedCards[1].childNodes[3].id){
                     flippedCards[0].childNodes[1].classList.toggle("match");
                     flippedCards[0].childNodes[3].classList.toggle("match");
                     flippedCards[1].childNodes[1].classList.toggle("match");
                     flippedCards[1].childNodes[3].classList.toggle("match");

                     tentativas = 0;

                     matches++;

                     contador += 10;

                     matchCardSign();

                     flippedCards = [];
                 }
            }
        } else {

            //tentativas++;

            contador -= 5;

            matchCardSign();

            flippedCards[0].childNodes[1].classList.toggle("flipped");
            flippedCards[0].childNodes[3].classList.toggle("flipped");
            flippedCards[1].childNodes[1].classList.toggle("flipped");
            flippedCards[1].childNodes[3].classList.toggle("flipped");

            flippedCards = [];

        }
        if(matches === 8){
            setTimeout(function() {
                modal.style.display = "block";
                document.getElementById("pontosTotal").innerHTML = "Total: " + contador + " pontos"
            }, 1000)
        }
    }


    function matchCardSign() {

      var pontos = document.getElementById('pontos');
       pontos.innerHTML = TEXT_SCORE + contador;
    }
    document.getElementById("close").addEventListener("click", function() {
        modal.style = "none";
        document.location.reload();
    });
}());

