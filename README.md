Request Handling:

The server listens for incoming HTTP requests on port 3000.
It determines the requested resource by parsing the request URL using url.parse.
Routing:

Based on the parsed URL (rUrl), the server routes the request to serve different resources:
/ serves the home.html file.
/about serves the about.html file.
/contact serves the contact.html file.
Requests ending with .css serve the corresponding CSS file.
Static File Serving:

If the request is for a .css file, the server dynamically resolves the file path using path.join and serves the CSS content with the Content-Type header set to text/css.
Error Handling:

If a requested file is not found or an error occurs, the server responds with appropriate error messages:
500 status for internal server errors (e.g., file read errors).
404 status for missing pages or files.
HTML-CSS Integration:

The HTML files include a <link> tag pointing to the CSS file, allowing the server to style the HTML pages when they are rendered in the browser.
Default Response for Unmatched Routes:

If the requested URL does not match any predefined route, the server responds with a 404 Page Not Found error.
