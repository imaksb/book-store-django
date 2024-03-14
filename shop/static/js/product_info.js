
$('body').on('click', 'button.book_button_info', function(event) {
    let book_id = event.target.id.split('_')[1];
    let name = books[book_id].title;
    let description = books[book_id].description;
    let modal = $('.book-modal');

    modal.css("display", "block")
    let h1 = $('.book-modal .main-content h1');
    let p = $('.book-modal .main-content p');

    h1.html(name);
    p.html(description);

    let close = $('.book-modal a')
    close.css("display", "block");
}).on('click', 'a' , function() {
    let modal = $('.book-modal');
    modal.css("display", "none");
});
