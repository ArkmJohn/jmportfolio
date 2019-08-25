const modals = document.querySelectorAll('#modal');
const thumbnails = document.querySelectorAll('thumbnail');
const close = document.querySelectorAll('close');
const covers = document.querySelectorAll('cover');
thumbnails.forEach(thumbnail => {

    thumbnail.addEventListener('click', (event) => {
        console.log(thumbnail.dataset.thumbnail +
            " is clicked");
        modals.forEach(modal => {
            if (modal.dataset.project == thumbnail.dataset.thumbnail) {
                console.log(thumbnail.dataset.thumbnail + " modal is oppening");
                modal.classList.toggle("open");
            }
        });
    })

});

close.forEach(closeButton => {
    closeButton.addEventListener('click', (event) => {
        console.log("trying to close " + closeButton.dataset.project);
        modals.forEach(modal => {
            if (modal.dataset.project == closeButton.dataset.project) {
                console.log(closeButton.dataset.project + " modal is closing");
                modal.classList.toggle("open");
            }
        });
    });

});
covers.forEach(cover => {
    cover.addEventListener('click', (event) => {
        console.log("trying to close " + cover.dataset.project);
        modals.forEach(modal => {
            if (modal.dataset.project == cover.dataset.project) {
                console.log(cover.dataset.project + " modal is closing");
                modal.classList.toggle("open");
            }
        });
    });

});