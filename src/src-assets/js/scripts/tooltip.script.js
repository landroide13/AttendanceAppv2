$(document).ready(function () {
    $(function () {
        $('[data-bs-toggle="tooltip"]').tooltip()
    });
    $('#manual').on('click', function () {
        $(this).tooltip('toggle')
    });
});