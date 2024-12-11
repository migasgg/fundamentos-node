import http from "node:http"
import { Transform } from "node:stream"

class InvertNumberStream extends Transform {
  _transform(chunk, encoding, callback) {
    const transform = Number(chunk.toString()) * -1

    console.log(transform)

    callback(null, Buffer.from(String(transform)))
  }
}

const server = http.createServer((req, res) => {
  return req.pipe(new InvertNumberStream()).pipe(res)
})
server.listen(3334)
