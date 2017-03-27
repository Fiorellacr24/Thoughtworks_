function showPopOver() {
    return '<p>(separate multiple resources name with commas)</p>' +
           '<input type="text" class="form-control"/>' + 
           '<button id="js-add-button" class="btn btn-primary" type"submit">Add resources</button>' + " " +
           '<button class="btn btn-danger" type"submit">Close</button>';
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
    })
  });

  