$("#createBurger").on("click", function(event){
    event.preventDefault();
    var newBurger = {
        burger_name: $("#burgerName").val().trim()
    };

//Send the POST request

$.ajax('/api.burgers',{
    type: "POST", 
    data: newBurger
}).then(
    function() {
        console.log("one good burger ready");
    }
);
location.reload();
});


