# **_Failure CROP Scanning from Rayzher project_**

## **Common CROP Scanning error: dynamic element**

![alt](pic/bandicam%202022-10-31%2011-38-03-985.jpg)

### _Solutions_

1. **Reduced** selection range

   ![alt](pic/bandicam%202022-10-31%2011-50-35-313.jpg)

2. Always use **Ctrl+0** to snapshot screen.
3. If possible, use **hotkeys** whenever possible.

## **Common CROP Scanning error: moving target(animate)**

![alt](pic/bandicam%202022-10-31%2011-39-05-924.jpg)
![alt](pic/bandicam%202022-10-31%2011-40-48-042.jpg)

- In addition to the **animation**, the buttons in the picture above are **rendered one by one**, which will also cause an animation effect and **move** the position of the **target image**.

### _Solution_

- Each scan must be **consciously observed** to see if the target position has **moved or just fixed**.
  - This movement may take **less than a second**, but it can already cause a mistake in judgment.
- If the target is found to be **moving while scanning**, add **api.sleep** in front of it.
- **pressure test**.

## **Common CROP Scanning error: Content Repeating CROPs**

![alt](pic/bandicam%202022-10-31%2012-07-52-529.jpg)

- It is found that when searching for the two **CROPs** on the left, there is a chance that the result will become the result of going to the last **CROP**.

### _Solution_

1. **Keep only the last CROP** and make a difference by **limiting the search scope**.
   - In this way, theoretically there can be no misjudgment, but the **window cannot be moved arbitrarily**.
   - Usually to limit the scope of search is for **pop-ups**, so this method can generate **falcy value** to do the judgment of **whether there are pop-ups or not**.
   - Reduces the amount of CROP used BTW.
