<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="/assets/css/application.min.css">
  <title>Card Pattern - Container Query Examples</title>
</head>
<body>
  <div class="page-header">
    <div class="container">
      <h1><a href="/">Container Query Examples</a> &raquo; Card/Media Pattern</h1>
    </div>
  </div>
  <div class="container">
    <div class="component">
      <h1>Card Pattern (Default)</h1>
      <div class="row">
        <div class="col-md-4 col-sm-8">
          <?php include('inc/card.html') ?>
        </div>
      </div>
    </div>
    <div class="component">
      <h1>Card Pattern (Half)</h1>
      <div class="row">
        <div class="col-md-8">
          <?php include('inc/card.html') ?>
        </div>
      </div>
    </div>
    <div class="component">
      <h1>Card Pattern (Full)</h1>
      <?php include('inc/card.html') ?>
    </div>
  </div>
  <script src="/assets/js/application.min.js"></script>
</body>
</html>