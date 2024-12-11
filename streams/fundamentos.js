//process.stdin.pipe(process.stdout)

import { Readable, Transform, Writable } from "node:stream"

class OneToHundredStream extends Readable {
  index = 1
  _read() {
    const i = this.index++

    setTimeout(() => {
      if (i > 100) {
        this.push(null)
      } else {
        const buf = Buffer.from(String(i))
        this.push(buf)
      }
    }, 1000)
  }
}

class InvertNumberStream extends Transform {
  _transform(chunk, encoding, callback) {
    const transform = Number(chunk.toString()) * -1
    callback(null, Buffer.from(String(transform)))
  }
}

class MultiplyByTenStream extends Writable {
  _write(chunk, encoding, callback) {
    console.log(Number(chunk.toString()) * 10)
    callback()
  }
}

new OneToHundredStream()
  .pipe(new InvertNumberStream())
  .pipe(new MultiplyByTenStream())
