
// const letters = ["E", "N", "E", "S", "2"];
// for(i=0; i<5; i++){
// document.write(letters[i]+" ");
// }
// document.write("\n");
// //start game butonundan sonra
// let a = Math.floor(Math.random() * 5);
// document.write("********");

//     let usedNumbers = [];

//     for (let i = 0; i < 5; i++) {
//         let a;
//         do {
//             a = Math.floor(Math.random() * 5);
//         } while (usedNumbers.includes(a));
    
//         usedNumbers.push(a);
    
//         document.write(letters[a] + " ");
//     }

    // document.getElementById('myfoto').src = photoPath;
    // document.write();



    // function changeImage() {
    //     let newImagePath = 'deneme.png';
    //     document.getElementById('myfoto').src = newImagePath;
    // }




    //karıştırma

let letters = [];

letters[0] = document.getElementById("letter1").src;
letters[1] = document.getElementById("letter2").src;
letters[2] = document.getElementById("letter3").src;
letters[3] = document.getElementById("letter4").src;
letters[4] = document.getElementById("letter5").src;


function karistir(array){

function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}
letters = shuffleArray(letters)
// letter = shuffleArray(letters)
// // Kullanım örneği:
// let myarray = [1,2,3,4,5]
// let shuffledArray = shuffleArray(myarray);


 document.getElementById("letter1").src = letters[0];
 document.getElementById("letter2").src = letters[1];
 document.getElementById("letter3").src = letters[2];
 document.getElementById("letter4").src = letters[3];
 document.getElementById("letter5").src = letters[4];

}

//saklama


 function hideImage() {
        let newImagePath = 'soru.png';
        document.getElementById('letter1').src = newImagePath;

        document.getElementById('letter2').src = newImagePath;
       
        document.getElementById('letter3').src = newImagePath;
       
        document.getElementById('letter4').src = newImagePath;
        
        document.getElementById('letter5').src = newImagePath;
    }
   
    
    console.log(document.getElementById('letter1').src);
    console.log(document.getElementById('letter2').src);