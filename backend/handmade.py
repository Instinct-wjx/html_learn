from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
import json

profile = {
    "heroTitle": "关于我",
    "heroSubtitle": "项目，创意，灵感，心得，我的作品",
}

class Handler(BaseHTTPRequestHandler):
    def do_GET(self):
        if self.path == "/api/profile":
            body = json.dumps(profile, ensure_ascii=False).encode("utf-8")

            self.send_response(200)
            self.send_header("Content-Type", "application/json; charset=utf-8")
            self.send_header("Content-Length", str(len(body)))
            self.end_headers()
            self.wfile.write(body)
        else:
            self.send_response(404)
            self.end_headers()

server = ThreadingHTTPServer(("", 8000), Handler)
print("后端已启动：http://localhost:8000/api/profile")
server.serve_forever()
