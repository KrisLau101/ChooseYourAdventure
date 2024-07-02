// Declare variables below to save the different divs of your story.

// Delcaring A Function

// Declaring Floors
let floorLL = document.querySelector(".floorLL")
let floor1 = document.querySelector(".floor1")
let floor2 = document.querySelector(".floor2")
let floor3 = document.querySelector(".floor3")
let floor4 = document.querySelector(".floor4")
let floor5 = document.querySelector(".floor5")
//Elevator Ding!
// let ding = new Audio('https://www.myinstants.com/en/instant/ding-sound-effect/?utm_source=copy&utm_medium=share')

// delcare floor options
let floorLLoptions = document.querySelector(".floorLLoptions")
let floor1options = document.querySelector(".floor1options")
let floor2options = document.querySelector(".floor2options")
let floor3options = document.querySelector(".floor3options")
let floor4options = document.querySelector(".floor4options")
let floor5options = document.querySelector(".floor5options")

// Declaring Floor Option Choices: 

let button1Left = document.querySelector(".floor1Left")
let button1Right = document.querySelector(".floor1Right")
let floor1Bathroom = document.querySelector(".floor1Bathroom")
let floor1Office = document.querySelector(".floor1Office")
let passError = document.querySelector(".passError")

//Declare floor LL possibilities

let floorLLLeft = document.querySelector(".floorLLLeftOptions")
let floorLLRight = document.querySelector(".floorLLRightOptions")
let buttonLockIn = document.querySelector(".fLLRightOptLockIn")
let buttonMakeFriends = document.querySelector(".fLLRightOptMakeFriends")
let buttonLLRight = document.querySelector(".fLLRightBut")
let buttonLLLeft = document.querySelector(".fLLLeftBut")
let buttonPingPong = document.querySelector(".fLLLeftOptPing")
let buttonFoosball = document.querySelector(".fLLLeftOptFoos")
let buttonBloah = document.querySelector(".butBloah")
let buttonBoah = document.querySelector(".butBoah")
let buttonExplore = document.querySelector(".butExplore")
let buttonSit = document.querySelector(".butSit")
let inputBathCodeBut = document.querySelector(".inputBathCodeBut")
let inputBathroomCode = document.querySelector(".inputBathroomCode").value;



// Declare Floor 1 possibilities

// Declaring Elevator Buttons
let buttonLL = document.querySelector(".buttonLL")
let button1 = document.querySelector(".button1")
let button2 = document.querySelector(".button2")
let button3 = document.querySelector(".button3")
let button4 = document.querySelector(".button4")
let button5 = document.querySelector(".button5")

let button4Reset = document.querySelector(".reset4")
let button5Reset = document.querySelector(".reset4")
let button3Reset = document.querySelector(".reset4")
let buttonReset = document.querySelector(".reset")


//Declare Door
let doors = document.querySelector(".doors")
let doorRight = document.querySelector(".doorright")
let doorLeft = document.querySelector(".doorleft")


// Function hide all Floor screens
function hideFloors() {
    floorLL.style.visibility = "hidden";
    floor1.style.visibility ="hidden";
    floor2.style.visibility = "hidden";
    floor5.style.visibility = "hidden";

    floorLLoptions.style.display = "none";
    floorLLoptions.style.visibility = "hidden";
    floor1options.style.display = "none";
    floor3.style.display = "none";
    floor1Bathroom.style.display = "none";
    floor1Office.style.display = "none";
// Floor LL Right and Left Options
    floorLLRight.style.display = "none";
    floorLLLeft.style.display = "none";

    floor4.style.display = "none";
    floor1.style.display = "none";
    floor2.style.display = "none";
    floor5.style.display = "none";

}
//door animations

// Floor LL

buttonLL.addEventListener("click", function(){
    doors.style.display = "inline-block";
    doorLeft.style.animation = "doorclose 3s";
    doorRight.style.animation = "doorclose 3s";
    setTimeout(function(){
        hideFloors()
        floorLL.style.visibility = "visible";
        floorLL.style.display = "inline";
        floorLLoptions.style.visibility = "visible";
        floorLLoptions.style.display = "inline";
        doorLeft.style.animation = "dooropen 3s";
        doorRight.style.animation = "dooropen 3s";
        setTimeout(function(){
            doors.style.display = "none";
        }, 3000);
    }, 4000);
});

// Floor 1

button1.addEventListener("click", function(){
    doors.style.display = "inline-block";
    doorLeft.style.animation = "doorclose 3s";
    doorRight.style.animation = "doorclose 3s";
    setTimeout(function(){
        hideFloors()
        floor1.style.visibility = "visible";
        floor1.style.display = "inline";
        floor1options.style.visibility = "visible";
        floor1options.style.display = "inline";
        doorLeft.style.animation = "dooropen 3s";
        doorRight.style.animation = "dooropen 3s";
        setTimeout(function(){
            doors.style.display = "none";
        }, 3000);
    }, 4000);
});

button2.addEventListener("click", function(){
    doors.style.display = "inline-block";
    doorLeft.style.animation = "doorclose 3s";
    doorRight.style.animation = "doorclose 3s";
    setTimeout(function(){
        hideFloors()
        floor2.style.visibility = "visible";
        floor2.style.display = "inline";
        floor2options.style.visibility = "visible";
        floor2options.style.display = "inline";
        doorLeft.style.animation = "dooropen 3s";
        doorRight.style.animation = "dooropen 3s";
        setTimeout(function(){
            doors.style.display = "none";
        }, 3000);
    }, 4000);
});

// Floor 4
button4.addEventListener("click", function(){
    doors.style.display = "inline-block";
    doorLeft.style.animation = "doorclose 3s";
    doorRight.style.animation = "doorclose 3s";
    setTimeout(function(){
        hideFloors() 
        floor4.style.visibility = "visible";
        floor4.style.display = "inline";
        doorLeft.style.animation = "dooropen 3s";
        doorRight.style.animation = "dooropen 3s";
        setTimeout(function(){
            doors.style.display = "none";
        }, 3000);
    }, 4000);
});

button5.addEventListener("click", function(){
    doors.style.display = "inline-block";
    doorLeft.style.animation = "doorclose 3s";
    doorRight.style.animation = "doorclose 3s";
    setTimeout(function(){
        hideFloors() 
        floor5.style.visibility = "visible";
        floor5.style.display = "inline";
        doorLeft.style.animation = "dooropen 3s";
        doorRight.style.animation = "dooropen 3s";
        setTimeout(function(){
            doors.style.display = "none";
        }, 3000);
    }, 4000);
});

button3.addEventListener("click", function(){
    doors.style.display = "inline-block";
    doorLeft.style.animation = "doorclose 3s";
    doorRight.style.animation = "doorclose 3s";
    setTimeout(function(){
        hideFloors() 
        floor3.style.visibility = "visible";
        floor3.style.display = "inline";
        doorLeft.style.animation = "dooropen 3s";
        doorRight.style.animation = "dooropen 3s";
        setTimeout(function(){
            doors.style.display = "none";
        }, 3000);
    }, 4000);
});

// Floor LL Left

buttonLLLeft.addEventListener("click", function(){
    floorLLoptions.style.visibility = "hidden";
    floorLLoptions.style.display = "none";
    floorLLLeft.style.visibility = "visible";
    floorLLLeft.style.display = "inline";
    console.log("Button Left works")
});

buttonLLRight.addEventListener("click", function(){
    floorLLoptions.style.visibility = "hidden";
    floorLLoptions.style.display = "none";
    floorLLRight.style.visibility = "visible";
    floorLLRight.style.display = "inline";
})

button1Right.addEventListener("click", function(){
    floor1options.style.visibility = "hidden";
    floor1options.style.display = "none";
    floor1Bathroom.style.visibility = "visible";
    floor1Bathroom.style.display = "inline";
    console.log('right works well')
})

button1Left.addEventListener("click", function(){
    floor1options.style.visibility = "hidden";
    floor1options.style.display = "none";
    floor1Office.style.visibility = "visible";
    floor1Office.style.display = "inline";
    console.log("left works well")
})

buttonPingPong.addEventListener("click", function(){
    floorLLLeft.innerHTML = "<h2 class='scary'> You play one round of PingPong, you get hit in the head and die.</h2> <img src='https://qph.cf2.quoracdn.net/main-qimg-43e704f62fa2149e76477120fb3f50f9-lq'> <button class='reset'>Reset</button>"
    buttonReset = document.querySelector(".reset");
    buttonReset.addEventListener("click", function(){
        location.reload();
    });
})

buttonFoosball.addEventListener("click", function(){
    floorLLLeft.innerHTML = "<h2> You attempt to 1v4 your friends. You Win! Congrats!</h2> <img src='https://bloximages.newyork1.vip.townnews.com/nola.com/content/tncms/assets/v3/editorial/b/69/b693d895-0b50-56d2-9a35-2c42939d1f38/5cdc8e1866f79.image.jpg?resize=1024%2C716'> <button class='reset'>Reset</button>";
    buttonReset = document.querySelector(".reset");
    buttonReset.addEventListener("click", function(){
        location.reload();
    });
})

buttonLockIn.addEventListener("click", function(){
    floorLLRight.innerHTML = "<h2 class='scary'> You Locked in too hard, and died</h2> <img src='https://ih1.redbubble.net/image.5133220906.0277/st,small,845x845-pad,1000x1000,f8f8f8.jpg'> <button class='reset'>Reset</button>"
    buttonReset = document.querySelector(".reset");
    buttonReset.addEventListener("click", function(){
        location.reload();
    });
})

buttonMakeFriends.addEventListener("click", function(){
    floorLLRight.innerHTML = "<h2> You meet some cool friends, you live for another day!</h2> <img src='imagefolder/friends.jpeg'> <button class='reset'>Reset</button>"
    buttonReset = document.querySelector(".reset");
    buttonReset.addEventListener("click", function(){
        location.reload();
    });
});


//Floor 2 stuff

buttonBloah.addEventListener("click", function(){
floor2options.innerHTML = "<h2 class='scary'> Bloah Noyd Enters the Elevator and tries to mug you, you die :(</h2> <img src='imagefolder.bloahnoyd.jpg' alt='actualy noah'> <button class='reset'>Reset</button>"
    buttonReset = document.querySelector(".reset");
    buttonReset.addEventListener("click", function(){
        location.reload();
    });
})

buttonBoah.addEventListener("click", function(){
    floor2options.innerHTML = "<h2 class='scary'> Boah Noyd Enters the Elevator and it instantly crashes!</h2> <img src='https://res.cloudinary.com/soundbetter/image/upload/c_fill,f_auto,g_face:auto,h_533,q_auto:eco,w_763/v1524357543/assets/photos/117098/BA97188A-00C3-4E69-97F9-ABA9C8BB518A.jpg' alt='fat noah'><button class='reset'>Reset</button>"
    buttonReset = document.querySelector(".reset");
    buttonReset.addEventListener("click", function(){
        location.reload();
    });
})

inputBathCodeBut.addEventListener("click", function(){
    inputBathroomCode = document.querySelector(".inputBathroomCode").value;
    if (inputBathroomCode == 1969){
        floor1Bathroom.innerHTML = "<h2> You successfully entered the Bathroom, but little did you know. A serial killer was waiting for you :(</h2> <button class='reset'>Reset</button>"
        buttonReset = document.querySelector(".reset");
        buttonReset.addEventListener("click", function(){
            location.reload();
        });
    }
    else{
        passError.style.display = "block";
    }
});

buttonExplore.addEventListener("click", function(){
    floor1office.innerHTML = "<h2 > They catch you sneaking around! You get kicked out of the building</h2> <img src='' alt='office kicked out'><button class='reset'>Reset</button>"
    buttonReset = document.querySelector(".reset");
    buttonReset.addEventListener("click", function(){
        location.reload();
    });
});

// jump to resetstop

document.addEventListener("keydown", function(event) {
    if (event.code === "Space") {
        location.reload();
    }
});

button4Reset.addEventListener("click", function(){
    location.reload();
});

button5Reset.addEventListener("click", function(){
    location.reload();
});

button3Reset.addEventListener("click", function(){
    location.reload();
});