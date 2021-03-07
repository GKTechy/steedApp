$(function () {
    $("#uom_master_table").DataTable()
    $('#uom_master_table').DataTable({
      "paging": true,
      "lengthChange": false,
      "searching": false,
      "ordering": true,
      "info": true,
      "autoWidth": false
    })
  });