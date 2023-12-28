sequenceDiagram
    participant browser
    participant server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server

    server-->>browser: HTTP Status 200
    deactivate server

    Note right of browser: Return HTML document

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: HTTP status 200
    deactivate server

    Note right of browser: Return CSS document

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate server
    server-->>browser: HTTP status 200
    deactivate server

    Note right of browser: Return JavaScript document

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: HTTP status 200
    deactivate server

    Note right of browser: Return JSON document
