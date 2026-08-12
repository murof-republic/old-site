function openModal(img) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    modal.style.display = "flex";
    modalImg.src = img.src;
    document.body.style.overflow = "hidden";
    setTimeout(function() {
        modal.classList.add("show");
        modalImg.classList.add("show");
    }, 10);
}

function closeModal(event) {
    var modal = document.getElementById("myModal");
    if (event.target === modal || event.target === document.querySelector('.close') || event.target === document.getElementById('img01')) {
        modal.classList.remove("show");
        document.getElementById('img01').classList.remove("show");
        setTimeout(function() {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }, 500); 
    }
}
