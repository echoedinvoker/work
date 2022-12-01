# **_Get Screen Size_**

![Alt api.screen.size ](pic/bandicam%202022-09-25%2002-04-20-603.jpg)

- The screen resolution is important for DA automation to work properly, and this API can be used to check if the execution environment is at the right screen resolution.

# **_Boundary and Capture_**

![Alt CROP and Boundary area ](pic/bandicam%202022-09-25%2005-32-26-574.jpg)

![Alt api.screen.capture ](pic/bandicam%202022-09-25%2005-51-35-034.jpg)

# **_How to get relative x,y_**

## **Do not use default way**

![Alt coordinates from "ALL CROPS" never update ](pic/bandicam%202022-09-25%2005-54-24-668.jpg)

- Because the location of the ALL CROP record is never updated, it is recommended to make a habit of not using the default way to get relative x, y.

## **Recommanded way**

![Alt get relative x,y ](pic/bandicam%202022-09-25%2005-55-31-252.jpg)

- The starting position is from the **top left corner** of the CROP.

![Alt calculate x, y ](pic/bandicam%202022-09-25%2006-02-52-881.jpg)

- Depending on the relative direction of the CROP and the target, We need to decide for ourselves the positive or negative signs of x and y.

# **_find, waitFor_**

![Alt find, waitFor success ](pic/bandicam%202022-09-25%2006-15-18-963.jpg)

![Alt find, waitFor failed ](pic/bandicam%202022-09-25%2006-18-37-307.jpg)

- Obviously, the **find API is not constrained by confidence**, although it is constrained by the area in boundary.
  - This is a good reason to stick with **waitFor**.

## **_Got a good Use Case of Capture API btw_**

![Alt find out a use case of capture API ](pic/bandicam%202022-09-25%2006-21-52-570.jpg)

- Bring the return data of the error result directly into the capture API to see exactly what image was captured.

# **_moveToCrop, clickCrop_**

![Alt moveToCrop, clickCrop ](pic/bandicam%202022-09-25%2006-08-36-765.jpg)

![Alt moveToCrop failed situation ](pic/bandicam%202022-09-25%2006-11-29-332.jpg)

- moveToCrop, clickCrop and find, waitFor return logic is completely different, moveToCrop, clickCrop when can not find the eligible image will directly throw exception, but find, waitFor return null.
  - This affects whether the code continues to run and whether the falcy value feature can be used to make condition.
