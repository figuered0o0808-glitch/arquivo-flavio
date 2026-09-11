#!/usr/bin/env python3
# Servidor local simples. Uso: python3 scripts/serve.py  → http://localhost:8090
import http.server, socketserver, functools, os
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PORT = 8090
handler = functools.partial(http.server.SimpleHTTPRequestHandler, directory=ROOT)
with socketserver.TCPServer(("127.0.0.1", PORT), handler) as httpd:
    print(f"Arquivo Flavio em http://localhost:{PORT}  (servindo {ROOT})")
    httpd.serve_forever()
