var resources = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.whitespace,
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  local: ["Windows", "Ubuntu", "Firefox3", "CoreDuo", "Chrome"]
});

  function showPopOver() {
    return '<input type="text" class="form-control"/>'
           '<button class="btn btn-default" type"submit">Add resources</button>'
           '<button class="btn btn-default" type"submit">Close</button>';
  }

  $(function() {
    $('.resourcePopOver').popover({
      content: showPopOver,
      container: 'body',
      placement: 'bottom',
      html: true,
      viewport: {
        selector: '.panel',
        padding: 0
      }
    }).on('inserted.bs.popover', function() {
      $('[data-role="tagsinput"]').tagsinput({
        typeaheadjs: [{
          hint: true,
          highlight: true,
        }, {
          name: 'resourceList',
          source: resources
        }]
      });
    })
  });