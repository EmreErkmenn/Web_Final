document.getElementById('iletisimForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const ad = document.getElementById('ad').value;
    const email = document.getElementById('email').value;
    const mesaj = document.getElementById('mesaj').value;
  
    if (ad && email && mesaj) {
      alert(`Teşekkürler ${ad}, mesajınız alındı!`);
      this.reset();
    } else {
      alert("Lütfen tüm alanları doldurun.");
    }
  });
  // Form gönderme işlemi
document.getElementById('iletisimForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const ad = document.getElementById('ad').value;
    const email = document.getElementById('email').value;
    const mesaj = document.getElementById('mesaj').value;
  
    if (ad && email && mesaj) {
      alert(`Teşekkürler ${ad}, mesajınız alındı!`);
      this.reset();
    } else {
      alert("Lütfen tüm alanları doldurun.");
    }
  });
  
  // Harita yükleme
  function initMap() {
    const adiyaman = { lat: 37.7648, lng: 38.2786 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 11,
      center: adiyaman,
    });
    new google.maps.Marker({
      position: adiyaman,
      map: map,
      title: "Adıyaman",
    });
  }
  
  // Lightbox
  function openLightbox(src) {
    const lightbox = document.getElementById("lightbox");
    const img = document.getElementById("lightbox-img");
    img.src = src;
    lightbox.style.display = "flex";
  }
  function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
  }
  
  // Scroll to top butonu
  const scrollBtn = document.createElement("button");
  scrollBtn.id = "scrollUp";
  scrollBtn.innerHTML = "↑";
  document.body.appendChild(scrollBtn);
  
  window.addEventListener("scroll", () => {
    scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
  });
  
  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  