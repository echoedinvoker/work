# **_Get Coordinates_**

![alt click SNAPSHOT](pic/bandicam%202022-09-18%2021-39-14-860.jpg)

- The screen in the remote machine's browser is not real time, so it is best to click SNAPSHOT once before each positioning.

![alt click LIVE](pic/bandicam%202022-09-18%2021-40-01-184.jpg)

- LIVE allows us to operate the target machine remotely (but only click).

## **Get x, y coordinate**

![alt click a location](pic/bandicam%202022-09-18%2022-21-01-855.jpg)

- Click any point on the **remote machine's** browser screen.

![alt get coord](pic/bandicam%202022-09-18%2022-21-32-241.jpg)

- Then, we can get the absolute coordinates of this point in the **target machine**.

## **Get x, y and width, height of rect area**

![alt frame a rect area](pic/bandicam%202022-09-18%2022-22-23-814.jpg)
![alt get coord and rect info](pic/bandicam%202022-09-18%2022-23-01-075.jpg)

- **All four values are absolute coordinates**.
  - So if you want to get the relative position by this method, you have to do some calculations to get.
  - Because the properties of CROP are **left, top, width, height**, it is easy to misunderstand here.

## **Get relative coordinates to current CROP**

![alt get CROP's green shade from ALL CROPS](pic/bandicam%202022-09-18%2022-27-33-095.jpg)
![alt click around of CROP](pic/bandicam%202022-09-18%2022-28-15-350.jpg)
![alt get relative coords to current CROP](pic/bandicam%202022-09-18%2022-29-22-439.jpg)
![alt wrong place of crop from ALL CROPS](pic/bandicam%202022-09-18%2022-31-36-630.jpg)

- The coordinates recorded in "ALL CROPS" are **always the same as when the CROP was created**.
  - This feature can easily cause bugs, especially when the coordinates of a single CROP have to correspond to the multiple relative positions for operation.

# **_Crop_**

- CROP is an image that is used to **compare** with the image in the target machine screen to obtain the coordinates.
- We use the image **in** the application that needs to be manipulated as the CROP to avoid application location changes.

## **Which is good crop?**

![alt which is good crop? 1](pic/bandicam%202022-09-18%2021-40-29-174.jpg)
![alt which is good crop? 2](pic/bandicam%202022-09-18%2021-40-45-589.jpg)

- The words in the blue box in the picture above will change shades of color depending on whether the app has focus or not, so it is not suitable for crop.
  - crop preferably in any case will not change any value.

## **Create a CROP**

![alt create a CROP 1](pic/bandicam%202022-09-18%2021-41-37-428.jpg)
![alt create a CROP 2](pic/bandicam%202022-09-18%2021-42-29-769.jpg)

- When the graph is clean around the main image, you can omit the mask to speed up development.
- The scope of CROP **contains the part of the mask**.
  - This concept is important for taking the relative position.

## **Get file name of CROP**

![alt get file name of CROP](pic/bandicam%202022-09-18%2021-45-03-067.jpg)
![alt get the coord of CROP by find api](pic/bandicam%202022-09-18%2021-53-05-477.jpg)

- Some api's that can obtain CROP coordinates must have the CROP file name in order to run.

## **Get the Coordiante of CROP**

![alt components of a coordinate](pic/bandicam%202022-09-18%2021-57-45-794.jpg)
![alt second parameter of find api](pic/bandicam%202022-09-18%2022-02-33-474.jpg)

- The second parameter is related to the restrictions.
  - Search area restriction
    - By default, DA scans the entire screen of the target machine.
    - We can limit the scope of the scan here.
      - The smaller the area, the faster the speed.
  - Confidence restriction
    - In the same environment, the confidence value of the same image relative to CROP will be a fixed value.

![alt change to waitFor api](pic/bandicam%202022-09-18%2022-06-41-727.jpg)

- Note that if you change to the waitFor api, **the second parameter is the wait time and the restrictions move to third**.
- If no image is found with a confidence value greater than the restriction value, null will be returned.
  - **When using the waitFor API, it is recommended that the restriction of confidence must be set**.

## **Move to CROP**

![alt move api with CROP's left and top coords](pic/bandicam%202022-09-18%2022-13-45-537.jpg)
![alt cursor move to top-left of CROP](pic/bandicam%202022-09-18%2022-16-08-564.jpg)
![alt move api add helf width and height](pic/bandicam%202022-09-18%2022-18-21-429.jpg)
![alt cursor move to middle of CROP](pic/bandicam%202022-09-18%2022-18-47-283.jpg)
![alt move api add full width and height](pic/bandicam%202022-09-18%2022-19-15-807.jpg)
![alt cursor move to right-botton corner of CROP](pic/bandicam%202022-09-18%2022-19-35-600.jpg)

- The above result mainly shows that **the scope of CROP contains the mask part**.

# **_Why Cursor always move to Strange Places??_**

## **More Comparison, More Resilient?**

- Not really, because there is a chance that a comparison error will occur in every comparison.
  - **Cursor blocking targeted image** causes a comparison error, which is a common example.
    - After each move to the image is complete, **getting into the habit of moving the cursor away from the image** as the next action is one way to prevent this error from happening.
    - **Targeted image mutate** is also a common situation that can cause comparison errors.
      - For example, fade-in and fade-out and with or without the \* symbol.

## **So It's better to use more Relative Position to move?**

- There are still risks associated with using this approach, and they occur at different points in the hierarchy.
  - **Unfixed relative positions** are a common cause of errors.
    - This problem is useless even if you compare the original CROP before moving, you must **find another CROP whose relative position to the target is fixed**.
  - Application location was moved.

## **Conclustion**

- Both approaches have their own vulnerabilities to error.
  - The best way to do this is to be able to switch between the two methods depending on the situation and be aware that errors can occur in different situations.

# **_Other Tips for Positioning_**

- If the object to be DA is a web page, ~~then use CROP positioning before each operation~~.
  - Because **web pages are very dynamic**, compared to desktop applications.
    - Even if there is only simple HTML, the length of the content in the tag will change the UI that is presented.
  - There are some features of the web page that directly break the correctness of relative coordinates.
    - modal.
    - dynamic tag area.
    - scroll.
  - The conclusion is that when you can't get 100% control of the dynamics of the web page, use the closest image that doesn't change as the CROP for each operation.
    - Simply speaking, we use the speed of execution in exchange for availability.
- Because the coordinates in ALL CROPS are unreliable, use the move api to let the cursor reach the CROP position and then pull out the rect range to get the relative distance.
