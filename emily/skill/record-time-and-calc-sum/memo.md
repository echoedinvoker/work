![Alt flow chart](pic/bandicam%202022-09-28%2011-13-25-223.jpg)

![Alt user fill](pic/bandicam%202022-09-28%2011-16-49-391.jpg)

- If you are simply recording the current time point, do not enter any value, otherwise the total time consumption will start to be calculated.

![Alt workspace script](pic/bandicam%202022-09-28%2011-20-04-834.jpg)

![Alt file exporter](pic/bandicam%202022-09-28%2011-21-19-215.jpg)

![Alt file setting](pic/bandicam%202022-09-28%2011-23-25-575.jpg)

- Only record.txt, which is used to record time points, will be placed in the external specified folder, and the total consumption time will be calculated and stored in result.txt, but will not be moved out of the working folder.

# **_Update on 2022/9/29: Record before calc Time consuming_**

> When the last execution (Userfill = true) is done, **the last time record should be done** before the total consumption time is calculated, otherwise it is not reasonable to execute the skill twice at the end.

![alt](pic/bandicam%202022-09-29%2004-06-36-518.jpg)

![alt](pic/bandicam%202022-09-29%2003-46-08-478.jpg)

## **imutability principle**

- Instead of push, use the array destructure to add records to the array and assign them to the new variable.
