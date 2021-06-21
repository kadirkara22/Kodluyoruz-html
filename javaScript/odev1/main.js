

        let myName=prompt("lütfen adınızı giriniz");

if(myName!=""){
        document.querySelector("#myName").innerHTML=`${myName}`;
        setInterval(showTime, 1000);
                    function showTime() {
                            const tarih=new Date();
                            var gunler = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];

                                   
                                /*let saat=tarih.getHours();
                                let dakika=tarih.getMinutes();
                                let saniye=tarih.getSeconds();
                                if (saat <= 9) saat = "0" + saat;
                                if (dakika <= 9) dakika = "0" + dakika;
                                if (saniye <= 9) saniye = "0" + saniye;*/

                             let gun=tarih.getDay(); 
                            document.querySelector(".clock").innerHTML = `${tarih.toLocaleTimeString()} -->${gunler[gun]}`;
                                //document.querySelector(".clock").innerHTML=`${saat}:${dakika}:${saniye} --> ${gunler[gun]}`;
                    }
  
}else{
    alert("isim alanı boş olamaz"); 
    location.reload();
}
       







