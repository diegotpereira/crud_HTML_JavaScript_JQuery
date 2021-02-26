const bookTable = (function($){
    const BOOK_TABLE_BODY = $("#bookTable tbody");

    function bookBuildTableRow(id){
        const book = {id: id, ...bookForm.getData()};
        const bookTpl = _.template($("#bookTemplate").html());

        return bookTpl(book);
    }
    function addToTable(){
        BOOK_TABLE_BODY.append(bookBuildTableRow(_nextId));
    }
    function _findBookRowById(id){
        return $("#bookTable button[data-id = '" + id + "']").parents("tr")[0];
    }
    function updateInTable(id){
        const row = _findBookRowById(id);
        const $row = $(row);

        $row.after(bookBuildTableRow);

        $row.remove();
    }
    return {
        addToTable: addToTable,
        updateInTable: updateInTable
    }
})(jQuery);