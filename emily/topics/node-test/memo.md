## **Prepare**

> If Emily's low-code has more **complex data processing**, you can use Node's environment to do the tests.

![Alt 3f](pic/bandicam%202022-10-29%2000-35-42-612.jpg)

![Alt app](pic/bandicam%202022-10-29%2000-37-12-384.jpg)

- Above are the steps to prepare the test environment.
- Three files can be copied paste directly from here.

## **Emily Module's input**

![Alt input](pic/bandicam%202022-10-29%2000-40-19-073.jpg)

- Emily's main job is to convert a wide variety of source data into simple object for us.

![Alt save object in js](pic/bandicam%202022-10-29%2000-42-56-173.jpg)

- So we can't simulate the conversion, we have to start from **object**.

![Alt app](pic/bandicam%202022-10-29%2000-46-16-978.jpg)

## **Write/Read File**

![Alt api.write](pic/bandicam%202022-10-29%2000-54-41-381.jpg)

![Alt fs](pic/bandicam%202022-10-29%2000-57-56-287.jpg)

- The above is a simulation of the Emily proprietary api using the node build-in module method.
- Emily's **read/write** api is obviously the same as Node's **fs.readFileSync/fs.writeFileSync**.
- But other api may not have a counterpart, but it doesn't matter, because testing with Node is mainly for testing the **data processing part only**.
