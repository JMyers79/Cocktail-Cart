const establishCocktails = (index) => {
    $(".drink").eq(index).text(cocktails[index.drink])
};

const showInformation = () =>{
    setUpBoxes();
    jQuery.each($(".box"), establishCocktails);
    $(".box").on("click",function (){
    let indexOfCocktail = $(".box").index(this);
    $(this).find("p.drink").text(cocktails[indexOfCocktail].calories);
    });

    $(".box").on("mouseover",function () {
        let indexOfCocktail = $(".box").index(this);
        $(this).find("p.drink").text(cocktails[indexOfCocktail].recipe);
    });

    $(".box").on("mouseout", function () {
        let indexOfCocktail = $(".box").index(this);
        $(this).find("p.drink").text(cocktails[indexOfCocktail].drink)
    })
}

const setUpBoxes = () => {
    let wrapperRef = $('.wrapper');
    cocktails.forEach((cocktail)=>{
        let boxMarkup= ` <div class="box">
        <img class="drink_pic" src="./images/${cocktail.name.toLowerCase()}.png" />
        <p class="drink"></p>
      </div>`;
      wrapperRef.append(boxMarkup);
    })
}




$(document).ready(showInformation);