let timeout = 100;
const arr = ['\r|  ', '\r/  ', '\r-  ', '\r\\  ', '\r|  ', '\r/  ', '\r-  ', '\r\\  ', '\r|  '];
for (let i = 0; i < arr.length; i++) {
  setTimeout(() => {
    process.stdout.write(arr[i]);
  }, timeout += 200);
}
setTimeout(() => {
  process.stdout.write('\n');
}, timeout);

