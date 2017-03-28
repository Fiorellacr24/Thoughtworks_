  var resources = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.whitespace,
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  local: ["Windows", "Ubuntu", "Firefox3", "CoreDuo", "Chrome", "MySQL"]
});

function showPopOver() {
    return '<p>(separate multiple resources name with commas)</p>' +
           '<input type="text" class="form-control" data-role="tagsinput" />' + '<br>' +
           '<button id="js-add-button" class="btn btn-primary" type"submit">Add resources</button>' + " " +
           '<button class="btn btn-danger" type"submit">Close</button>';
  }

  $(function() {
  $('.resourcePopOver').popover({
    content: showPopOver,
    container: 'body',
    viewport: { selector: 'body', padding: 0 }
  }).on('inserted.bs.popover', function() {
    $('[data-role="tagsinput"]').tagsinput({
      typeaheadjs: {
        name: 'resourceList',
        source: resources
      }
    });
  })
});

  