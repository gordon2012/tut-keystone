exports = module.exports = function(app) {
  app.get('/index.html', function(req, res) {
    function renderFullPage() {
      return `
        <!doctype html>
        <html>
          <head>
            <title>Keystone With React and Redux</title>
          </head>
          <body>
            <div id="root">
              <h1>Hello World</h1>
            </div>
            <script src="bundle.js"></script>
          </body>
        </html>
      `;
    }

    res.send(renderFullPage());
  });
};
