// ! ------Buffer----
// * 1. It is temporary storage that is used to store chunk of data and transfer it one
// * Place to another place.
// * 2.We can also manipulate binary data in nodejs using buffer object.
// *   For example  Audio ,Video ,images
// * 3.Buffer is a global class so we can use it directly.
// ^ 4. Buffer.from method is used to create Buffer value.

const { ReadStream, writeSync, WriteStream } = require("fs");

// ! check image

// const buf = Buffer.from('./coverImage.jpg', 'utf8');
// console.log(buf); // Prints: <Buffer 68 65 6c 6c 6f 20 77 6f 72 6c 64>
//  console.log(buf.toString())

// ! check String Value
// let buffer = Buffer.from("Aashif Node js", "utf-8")
// console.log(buffer);
// console.log(buffer.toString()) //* This will give us the original value.

// ! Allocate the bits with the given input
// let buffer = Buffer.alloc(3);
// console.log(buffer);

//  ! Stream Methods in nodejs

//& 1. Readable Stream = > It will help to us to read data source
//& 2 . Writable Stram =>  It will help to write data to destination
//& 3.  Duplex Stream (Read and wirte both)
//& 4 . transfer stream (But additional Modify)

//  ^ createReadStream Method

// const fs = require("fs");
// let readStream = fs.createReadStream("./index.css", "utf-8")
// readStream.on("data", (err, data) => {
//     if (err) {
//         console.log(err)
//     }
//     else {
//         console.log(data)
//     }
// })
// readStream.on("end", (end) => {
//     console.log("Cycle End")
// })
// ! createWriteStream Method
// const fs = require("node:fs")
// let writefile = fs.createWriteStream("main.html");
// writefile.write("This is html file here you can see easily by using eyes", (err) => {
//     if (err) throw err;
//     console.log("Data inserted successlly")
// })

// ! duplex Stream Method
// const fs = require("fs");

// ? Create readable stream from input.txt
//  let read = fs.createReadStream("./index.css");
// ? Create writable stream to output.txt
// let write = fs.createWriteStream("./main.html");

// ! Pipe Method
// read.pipe(write)
