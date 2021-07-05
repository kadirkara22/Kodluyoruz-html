  
const menu = [
    {
      id: 1,
      title: "Manavgat Rafting",
      category: "Antalya",
      price: 79.99,
      img:
        "https://firsat.me/img/big1024/18.07.19_01.21.28_1600x1059_1.jpg",
      desc: `Köprülü Kanyon Milli Parkı, Köprüçay'ın bir kısmını ve tarihi Selge kentini de kapsıyor. Milli park, ülkemizdeki en büyük Akdeniz servisi ormanı olma özelliği yanında, kızılcam, karaçam, sedir, köknar, meşe çeşitleri ve yabani zeytinlikler ile yaban hayatı açısından da zengin. Alageyik, yaban keçisi, yaban domuzu, ayı, kurt, tilki, tavşan ve çeşitli kuş türleri mevcut. Köprüçay'ın üst kısımlarında kırmızı benekli alabalık, diğer kısımlarında kefal yaşıyor.

      Fiyatlara ulaşım, öğle yemeği dahil. Parkurun uzunluğu 14 kilometre. Rafting turları genelde sabah 10.30 – 11.00 civarı başlıyor. Raftingçilerin adrenalin dolu macerası yaklaşık 2.5 saat sürüyor. Rafting yapmaya gelen turistler arasında Ruslar ilk sırada. İkinci sırada Almanlar var.`,
    },
    {
      id: 2,
      title: "Alaçatı",
      category: "İzmir",
      price: `Gecelik konaklama ücreti :100`,
      img:
        "http://www.tatilpanosu.net/wp-content/uploads/2016/07/ala%C3%A7at%C4%B1.jpg",
      desc: `Sakızlı dondurma, dar ve taş sokaklar, bin bir çeşit renkteki taş evler, rüzgar sörfü gibi kelimeleri saysak şüphesiz sizin aklınıza da Alaçatı gelir. İzmir’in gözbebeği olan Çeşme’nin belki de en kalabalık bölgesi. Özellikle son yılların en popüler tatil yeri olan Alaçatı’da birbirinden güzel sokaklarda yürüyüp, sakızlı dondurmanızı yerken yüzünüze esen hafif rüzgarın tadını çıkarabilirsiniz. `,
    },
    {
      id: 3,
      title: "Adrasan Tekne turları",
      category: "Antalya",
      price: 100,
      img:
        "https://msatour.com/Upload/Turlar/58/antalya-cikisli-adrasan-suluada-tekne-turu-msatour-106.jpg",
      desc: `Adrasan limanında bizleri bekleyen Teknemize yerleşip saat 10:00 da kendimizi akdenizin soğuk ve berrak sularına bırakıyoruz.
       İlk olarak SULU ADA da ilk molamızı 2 saat olarak veriyoruz. Suluada sonrası Teknemiz Amerikan Koyu ve Kargıcak koylarında da
        1'er saat yuzme molaları vermektedir. 
        (Yatımız her koyda ortalama bir saat yüzme ve güneşlenme molası vermektedir.)
         Bu esnada yine denizin bizlere ikramı olan balıklarımızın yanında ev yemeği tadında ki mezelerimiz ile öğlen yemeğimiz hazır olurken demir atan yatımızda yemeğimizi alıyoruz. Yemeğimizin ardından bir başka koya doğru hareket ile günün sonuna doğru gelirken akşam günün yorgunlugunu ikramımız olan meyve - çaylarımızı yudumlayarak limana 17:30 de dönüyoruz.`,
    },
    {
      id: 4,
      title: "Ölüdeniz",
      category: "Muğla",
      price: `Gecelik konaklama ücreti :200`,
      img:
        "https://www.gezilesiyer.com/wp-content/uploads/2019/07/muglada-denize-girecelek-yerler-oludeniz.jpg",
      desc: `Ölüdeniz, Muğla ilinin Fethiye ilçesine bağlı bir mahalledir. Ölüdeniz kumsalı yüzde seksen iki oyla 2006 yılında Dünya'nın en güzel kumsalı seçilmiştir`,
    },
    {
      id: 5,
      title: "Kabak Koyu",
      category: "Muğla",
      price: ``,
      img:
        "https://www.gezilesiyer.com/wp-content/uploads/2019/10/kabak-koyu-mugla.jpg",
      desc: `Kabak Koyu, dünyanın koruma altına alınan 100 dağı arasında yer alan Babadağ’ın eteklerinde, endemik bitki çeşitliliği, yaban hayatı ve 200 metrelik koyuyla, özellikle genç seyahat severlerin tercih ettiği bir doğa harikası. Fethiye merkeze 33 km uzaklıkta, Uzunyurt (Faralya) köyünün Akdeniz’le buluştuğu bakir bir koyda yer alan Kabak, son yıllarda kamp tutkunlarının bölgede en çok ziyaret ettiği yerlerden biri.

      Türkiye’de ender rastlanan bir jeolojik yapıya sahip olan Kabak Koyu, üç tarafı dağlarla çevrili, kanyon biçimindeki derin bir vadi ve bu vadinin denize açılan çakıllı kumsalından oluşuyor. Birçok kişinin ‘Mutlaka bu yıl gideceğim’ dediği Kabak, toplumun farklı kesimlerinden kişilerin bir arada hoşgörü ortamı içerisinde tatil yaptığı bir yer.`,
    },
    {
      id: 6,
      title: "Özdere",
      category: "İzmir",
      price: `Gecelik konaklama ücreti :150`,
      img:
        "http://www.tatilpanosu.net/wp-content/uploads/2016/07/%C3%B6zdere.jpg",
      desc: `İzmir’in Menderes ilçesine bağlı şirin bir kıyı beldesi olan Özdere’de geçireceğiniz her vakit, sizin için paha biçilmez olacak. Özdere, sakinliği ve verdiği huzur ile ziyaretçilerine eşsiz tatil deneyimi yaşatan küçük bir belde. Tarihi geçmişi de bir hayli zengin olan Özdere’de konaklama seçenekleri de yüzölçümüne oranla oldukça çeşitli ve ekonomik. Menderes’in tek turizm bölgesi olan Özdere’de yer alan 5 yıldızlı resort oteller ve bunun yanı sıra motel ve pansiyonlar arasından seçim yaparak güzel bir tatil geçirmeniz mümkün.`,
    },
    {
      id: 7,
      title: "Dim Çayı",
      category: "Antalya",
      price: `Giriş ücretsizdir.`,
      img:
        "https://cdn1.neredekal.com/hotel/2/6zB/520x293/Iiwa.jpg",
      desc: `Torosların eteklerinden başlayan 60 km’lik yolculuğunu, Alanya’nın güneyindeki Tosmur ve Kestel Mahalleleri sınırlarında Akdeniz’e dökülerek tamamlayan Dim Çayı; oluşturduğu vadi boyunca sergilenen doğal güzellikler, yaz-kış serinliğini koruyan havası ve suyuyla, ilçeye gelen turistlerin uğramadan dönmediği ziyaret noktalarından biridir. Alanya ilçe merkezine yaklaşık 15 km mesafede bulunan Dim Çayı’na ulaşmak için sahil bölgesindeki yol ayrımlarından sonra katedilen ve kuzeye uzanan yol boyunca, çay kenarında konumlanmış çok sayıda restoran, kafe, çay bahçesi vb. tesis bulunmaktadır. Bu tesisler, özellikle Akdeniz’in sıcak yaz günlerinde bölgeye gelen çok sayıda turiste, havuzlarda yetiştirilen alabalık başta olmak üzere, zengin menüye sahip yeme-içme hizmetiyle birlikte, Dim Çayı’nın serin sularında yüzme, balık tutma ve su üzerinde, vadi yamaçlarında inşa edilmiş çardaklarda dinlenme olanağı sunmaktadır. `,
    },
    {
      id: 8,
      title: "Bitez Plajı",
      category: "Muğla",
      price: `Gecelik konaklama ücreti :100`,
      img:
        "https://www.gezilesiyer.com/wp-content/uploads/2019/09/bitez-plaji-mugla4.jpg",
      desc: `Muğla-Bitez, şehrin en gözde tatil bölgelerinden biridir. Bitez'de bulunan halk plajı, temizliğiyle ve Mavi Bayrak ödülüyle dikkatleri üzerine çekmekte ve daha çok turistin ziyaret etmesine sebep olmaktadır.
Bitez halk plajı, Bodrum'a 8 km'lik bir mesafede yer alır. 2002'den 2013 yılına kadar Mavi Bayrak ödülü almıştır. Havaalanı'na 45 km uzaklıkta olup, il merkezine sadece 1 km uzaklıktadır. Bitez Halk Plajı'nın uzunluğu 200 metre olup, 10 metre genişliğine sahiptir. Aynı zamanda su sporları da yapılmaktadır. Bitez Halk Plajı'na dolmuşlarla ulaşım mümkündür.
      Yeşilin ve mavinin harika uyumunu gözler önüne seren Bitez'in halk plajının tadını doyasıya çıkartabilirsiniz.`,
    },
    {
      id: 9,
      title: "Urla",
      category: "İzmir",
      price: `Gecelik konaklama ücreti :120`,
      img:
        "https://cdn.otuzbeslik.com/img/yazi/40599uojz45xq5l.jpg",
      desc: `Urla’nın en güzel plajları güneyde, yerleşim olmayan taraftakiler. Buralara gitmek içinse illa özel araç gerekiyor. Dolayısı ile aracınızla geliyorsanız illa denize yakın bir otel bulmaya çabalamaya gerek yok çünkü güney plajlarına gitmek için zaten arabaya bineceksiniz. Araçsızsanız o zaman denize yakın olması öncelik olabilir.`,
    },
  ];
  const sectionCenter = document.querySelector(".section-center");
  const btnContainer = document.querySelector(".btn-container");
  const btnFooter = document.querySelector(".footerMenu");

const categories = menu.reduce(
  (values, item) => {
    if (!values.includes(item.category)) {
      values.push(item.category);
    }
    return values;
  },
  ["All"]
); 

const categoryList = () => {
  const categoryBtns = categories
    .map((category) => {
      return `<button class="btn btn-success btn-item" data-id=${category}>${category}</button>`;
    }).join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = document.querySelectorAll(".btn-item");


  filterBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const category = e.currentTarget.dataset.id;
      console.log(category);
      const menuCategory = menu.filter((menuItem) => {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "All") {
        menuList(menu);
      } else {
        menuList(menuCategory);
      }
    });
  });
};

const menuList = (menuItems) => {
  let displayMenu = menuItems.map((item) => {
    return `<div class="menu-items col-lg-6 col-sm-12">
            <img
              src=${item.img}
              alt=${item.title}
              class="photo"
            />
            <div class="menu-info">
              <div class="menu-title">
                <h4>${item.title}</h4>
                <h4 class="price">${item.price}</h4>
              </div>
              <div class="menu-text">
                ${item.desc}
              </div>
            </div>
          </div>
          
    `;
  });



  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
};

menuList(menu);
categoryList();
