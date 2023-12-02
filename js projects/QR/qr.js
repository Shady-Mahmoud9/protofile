let container = document.querySelector(".containerr");
    let label = container.querySelector(".label");
    let img = container.querySelector(".divqr img");

    function make() {
      let qr = label.value;
      if (!qr) return;
      img.src = "https://api.qrserver.com/v1/create-qr-code/?data=" + encodeURIComponent(qr) + "&amp;size=100x100";
      img.addEventListener("load", function() {
        container.classList.add("active");
      });
    }
