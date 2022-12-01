## **Script Prepare Codes**

![Alt script prepare](pic/bandicam%202022-11-08%2022-10-41-999.jpg)

## **Insert Index**

![Alt insert index](pic/bandicam%202022-11-08%2022-19-25-417.jpg)

## **Insert Product**

### _element.value not work at 1st try after adding product_

![Alt 1st run insert product](pic/bandicam%202022-11-08%2022-30-17-819.jpg)

![Alt  2nd](pic/bandicam%202022-11-08%2022-30-41-184.jpg)

![Alt change fillin produst 1st](pic/bandicam%202022-11-08%2022-56-04-079.jpg)

- If you fill in the product first after adding the product, it will be successful at 1st try.

## **Other attempts and insights**

![Alt only key down is better](pic/bandicam%202022-11-08%2023-01-41-939.jpg)

- only **"keydown"** event will trigger **correct** dropdown list.
  - stackoverflow Some people say that using **only keydown event** is better than combining **keyup**.
- **document.activeElement** can select the element that is currently focused.
  - But it's always on the index using script, even when the 'Tap' key event has been emitted or even when the product drop-down menu has been triggered.

## **Let PYC listen keyboard event**

![Alt use pyc to get key object info](pic/bandicam%202022-11-08%2023-35-02-331.jpg)

![Alt pyc web](pic/bandicam%202022-11-08%2023-35-19-660.jpg)

- So that I don't need to search keyCode or key anymore...

## **Still very confused, decided to ask Jerry again**

![Alt prepare skills to ask](pic/bandicam%202022-11-09%2000-03-29-879.jpg)

- Fill in only the first two columns to limit question scope.
- Jerry said that if tools can do it, scripts should also be able to.
  - So I did a skill that was done with tools first, and then did a second script version of the skill to follow up on Jerry's question about whether he could use the script to restore the tools operation

![Alt only script](pic/bandicam%202022-11-09%2000-03-53-080.jpg)

![Alt prepare to ask jerry layout](pic/bandicam%202022-11-09%2000-02-53-135.jpg)

- Above are the states that I should be prepared for when asking Jerry how to write Script content.
