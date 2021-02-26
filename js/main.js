let _nextId = 1;
let _activeId = 0;

const BOOK_FORM = $("#book-form");
const BOOK_TABLE = $("#bookTable");

function handleBookEdit(){
    const row = $(this).parents("tr");
    const cols = row.children("td");

    _activeId = $($(cols[3]).children("button")[0]).data("id");

    bookForm.setData($(cols[0]).text(), $(cols[1]).text(), $(cols[2]).text());

    bookForm.setSubmitButtonText("Actualizar");
}
function handleBookDeleteClick(){
    $(this).parents("tr").remove();
}
function handleBookSubmission(e){
    e.preventDefault();

    if (bookForm.hasErrors()) {
        e.preventDefault();
    }
    if (bookForm.getSubmitButtonText() === "Actualizar") {
        bookTable.updateInTable(_activeId);
        bookForm.setSubmitButtonText("Adicionar Livro");
    } else {
        bookTable.addToTable(_activeId);
        _nextId += 1;
    }
    bookForm.clear();
}
BOOK_TABLE.on('click', '.book-edit', handleBookEdit);
BOOK_TABLE.on('click', '.book-delete', handleBookDeleteClick);
BOOK_FORM.on('submit', handleBookSubmission);