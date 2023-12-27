
var yazi = document.getElementById("points");
var totalPoints=0;

    var buttons =[1,2,3,4,5];


    let letters = [];

letters[0] = document.getElementById("img1").src;
letters[1] = document.getElementById("img2").src;
letters[2] = document.getElementById("img3").src;
letters[3] = document.getElementById("img4").src;
letters[4] = document.getElementById("img5").src;



function start  (arr1, arr2) {
  // Combine the arrays
  const combined = arr1.map((item, i) => [item, arr2[i]]);
  
  // Shuffle the combined array
  combined.sort(() => Math.random() - 0.5);
  
  // Split the shuffled array back into separate arrays
  const [shuffledArr1, shuffledArr2] = combined.reduce((acc, pair) => {
    acc[0].push(pair[0]);
    acc[1].push(pair[1]);
    acc[2].push(pair[2]);
    acc[3].push(pair[3]);
    acc[4].push(pair[4]);
    return acc;
  }, [[], [],[],[],[] ]);
  
  // Update the original arrays with shuffled values
  arr1.splice(0, arr1.length, ...shuffledArr1);
  arr2.splice(0, arr2.length, ...shuffledArr2);

  // Update the images with shuffled values
  document.getElementById("img1").src = arr1[0];
  document.getElementById("img2").src = arr1[1];
  document.getElementById("img3").src = arr1[2];
  document.getElementById("img4").src = arr1[3];
  document.getElementById("img5").src = arr1[4];
  setTimeout(function() {
  document.getElementById("buton1").classList.remove("hidden");
  document.getElementById("buton2").classList.remove("hidden");
  document.getElementById("buton3").classList.remove("hidden");
  document.getElementById("buton4").classList.remove("hidden");
  document.getElementById("buton5").classList.remove("hidden");
      }, 2000);
     
      
    }
 




// let tiklamaSirasi = 0;
//     function buton1Tiklandi(sira) {
//       alert('Buton 1\'e tıklandı!');
//       var buton = document.getElementById('buton1');
       
//       tiklamaSirasi++;
//       alert('Buton ' + sira + ' tıklandı. Toplam tıklama sırası: ' + tiklamaSirasi);
//       // Buraya butona tıklandığında yapılmasını istediğiniz işlemleri ekleyebilirsiniz.
//       if(sira==tiklamaSirasi){
//         alert("doğru sıra")
//     }
//       buton.remove();
//     }

    // function buton2Tiklandi(sira) {
    //   alert('Buton 2\'ye tıklandı!');
    //   var buton = document.getElementById('buton2');
    //   tiklamaSirasi++;
    //   alert('Buton ' + sira + ' tıklandı. Toplam tıklama sırası: ' + tiklamaSirasi);
    //   // Buraya butona tıklandığında yapılmasını istediğiniz işlemleri ekleyebilirsiniz.
    //   if(sira==tiklamaSirasi){
    //     alert("doğru sıra")
    // }
    //   buton.remove();
    // }

    // var tiklamaSirasi = 0;
  
    var tiklamaSirasi = 0;
    function buton1Tiklandi(sira) {
  
      
      document.getElementById("buton1").classList.add("hidden");
     
         tiklamaSirasi++;
      // alert('Buton ' + sira + ' tıklandı. Toplam tıklama sırası: ' + tiklamaSirasi);
      if(sira==tiklamaSirasi){
        // alert("doğru");
        totalPoints=totalPoints+20;
        yazi.innerHTML = "Total points:"+ totalPoints;
        cong() 
      }
      else {
        oyunuBitir();
            
        }
    }

    function buton2Tiklandi(sira) {
      
      
      document.getElementById("buton2").classList.add("hidden");
      tiklamaSirasi++;
      // alert('Buton ' + sira + ' tıklandı. Toplam tıklama sırası: ' + tiklamaSirasi);
      if(sira==tiklamaSirasi){
        // alert("doğru");
        totalPoints=totalPoints+20;
        yazi.innerHTML = "Total points:"+ totalPoints;
        cong()
      }
      else {
        oyunuBitir();
            
        }
      // Buraya butona tıklandığında yapılmasını istediğiniz işlemleri ekleyebilirsiniz.
    
      
    }
    function buton3Tiklandi(sira) {
      
      
      document.getElementById("buton3").classList.add("hidden");
      tiklamaSirasi++;
      // alert('Buton ' + sira + ' tıklandı. Toplam tıklama sırası: ' + tiklamaSirasi);
      if(sira==tiklamaSirasi){
        // alert("doğru");
        totalPoints=totalPoints+20;
        yazi.innerHTML = "Total points:"+ totalPoints;

       cong()
      }
      else {
        oyunuBitir();
            
        }
      // Buraya butona tıklandığında yapılmasını istediğiniz işlemleri ekleyebilirsiniz.
    
      
    }
    function buton4Tiklandi(sira) {
      
      
      document.getElementById("buton4").classList.add("hidden");

      tiklamaSirasi++;
      // alert('Buton ' + sira + ' tıklandı. Toplam tıklama sırası: ' + tiklamaSirasi);
      if(sira==tiklamaSirasi){
        // alert("doğru");
        totalPoints=totalPoints+20;
        yazi.innerHTML = "Total points:"+ totalPoints;
      cong()

      }
      else {
        oyunuBitir();
            
        }
      // Buraya butona tıklandığında yapılmasını istediğiniz işlemleri ekleyebilirsiniz.
    
      
    }
    function buton5Tiklandi(sira) {
      
      
      document.getElementById("buton5").classList.add("hidden");

      tiklamaSirasi++;
      // alert('Buton ' + sira + ' tıklandı. Toplam tıklama sırası: ' + tiklamaSirasi);
      if(sira==tiklamaSirasi){
        // alert("doğru");
        totalPoints=totalPoints+20;
        yazi.innerHTML = "Total points:"+ totalPoints;
        cong()
    }
      else {
        oyunuBitir();
            
        }   
      // Buraya butona tıklandığında yapılmasını istediğiniz işlemleri ekleyebilirsiniz.
    
      
    }
    // let tiklamaSirasi = 0;

    // function butonTiklandi(sira) {
    //   tiklamaSirasi++;
    //   alert('Buton ' + sira + ' tıklandı. Toplam tıklama sırası: ' + tiklamaSirasi);
    //   // Buraya butona tıklandığında yapılmasını istediğiniz işlemleri ekleyebilirsiniz.
    // }
    function oyunuBitir() {
      // Hide the containers
      // alert("oyun bitti")

    
      document.getElementById("false1").classList.remove("hidden");
      document.getElementById("false2").classList.remove("hidden");
      document.getElementById("false3").classList.remove("hidden");
      document.getElementById("false4").classList.remove("hidden");
      document.getElementById("false5").classList.remove("hidden");




    }


    function cong(){
      if(totalPoints==100){
        document.getElementById("cong1").classList.remove("hidden");
      document.getElementById("cong2").classList.remove("hidden");
      document.getElementById("cong3").classList.remove("hidden");
      document.getElementById("cong4").classList.remove("hidden");
      document.getElementById("cong5").classList.remove("hidden");
    }

    }

    function startRestart() {
      
debugger;
  // Yeniden başlatma sırasında tıklama sırasını sıfırla
  tiklamaSirasi = 0;

  // Yeniden başlatma sırasında butonları göster
  
      buton = document.getElementById('buton1');
      if (buton) {
        document.getElementById("buton1").classList.add("hidden");
  }
  
      buton = document.getElementById('buton2');
      if (buton) {
        document.getElementById("buton2").classList.add("hidden");
  }
      buton = document.getElementById('buton3');
      if (buton) {
        document.getElementById("buton3").classList.add("hidden");
  }
      buton = document.getElementById('buton4');
      if (buton) {
        document.getElementById("buton4").classList.add("hidden");
  }
      buton = document.getElementById('buton5');
      if (buton) {
        document.getElementById("buton5").classList.add("hidden");
  }
  
  // Yeniden başlatma sırasında false ve cong görüntüleri gizle
  document.getElementById("false1").classList.add("hidden");
  document.getElementById("false2").classList.add("hidden");
  document.getElementById("false3").classList.add("hidden");
  document.getElementById("false4").classList.add("hidden");
  document.getElementById("false5").classList.add("hidden");

  document.getElementById("cong1").classList.add("hidden");
  document.getElementById("cong2").classList.add("hidden");
  document.getElementById("cong3").classList.add("hidden");
  document.getElementById("cong4").classList.add("hidden");
  document.getElementById("cong5").classList.add("hidden");

  // Yeniden başlatma sırasında totalPoints ve yazi'yi sıfırla
  totalPoints = 0;
  yazi.innerHTML = "Total points: " + totalPoints;

  // Yeniden başlatma sırasında harfleri ve butonları güncelle
  letters[0] = document.getElementById("img1").src;
  letters[1] = document.getElementById("img2").src;
  letters[2] = document.getElementById("img3").src;
  letters[3] = document.getElementById("img4").src;
  letters[4] = document.getElementById("img5").src;

  // Start fonksiyonunu çağırarak harfleri ve butonları karıştır
  start(letters, buttons);
  
}


