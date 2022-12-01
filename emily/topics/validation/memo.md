## **Validation for configuration**

![Alt script](pic/bandicam%202022-10-30%2016-14-15-635.jpg)

![Alt low-code](pic/bandicam%202022-10-30%2016-15-25-119.jpg)

- Because Emily's low-code cannot interact with external files, there is no way to check if there are external folders or files.
  - There is already a good way to check if files/folders exist, please check the topic **'upload-files-check'**.
- So the above low-code only checks if all attributes are filled in values.
- Because it's not in the Loop, we can actively throw an Error to stop the entire Skill.

![Alt fail result](pic/bandicam%202022-10-30%2016-15-45-704.jpg)

![Alt error.txt](pic/bandicam%202022-10-30%2016-15-59-343.jpg)

![Alt error content](pic/bandicam%202022-10-30%2016-16-18-925.jpg)

- We can see the error string we wrote in the error log, so we can clearly know which settings are not filled in.

## **Validation for Loop**

> The difference between the validation in the Loop and the above is that:
>
> 1. Can not interrupt the entire Skill, so write the error information to a csv or text file.
> 2. Validate the values in each 'row-xxxxx.txt' file

![Alt loop csv](pic/bandicam%202022-10-30%2016-30-32-000.jpg)

- Suppose we want to use the above csv to make a loop while validating the value of each field in each loop.

![Alt validation low-code](pic/bandicam%202022-10-30%2020-26-13-385.jpg)

- The above low-code needs to be written into #2 Script in iteration.
- If the verification is passed, a 'pass.txt=true' pass will be generated.

![Alt interation structure](pic/bandicam%202022-10-30%2020-31-51-741.jpg)

- Note that the value of 'pass.txt' should be restored to false by #7 Script (final step of conditional steps)
