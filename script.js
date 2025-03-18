document.addEventListener("DOMContentLoaded", function () {
    const avatar = document.querySelector(".avatar-wrapper img");
    const socialLinks = document.querySelectorAll(".social-handles a");

    // Hiệu ứng avatar khi hover
    avatar.addEventListener("mouseenter", function () {
        this.style.transform = "scale(1.1)";
        this.style.transition = "0.3s ease";
    });

    avatar.addEventListener("mouseleave", function () {
        this.style.transform = "scale(1)";
    });

    // Xác nhận trước khi mở link mạng xã hội
    socialLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const url = this.href;
            if (confirm("Bạn có muốn mở liên kết này?")) {
                window.open(url, "_blank");
            }
        });
    });
});