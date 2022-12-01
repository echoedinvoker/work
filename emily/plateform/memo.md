![Alt signin](pic/bandicam%202022-10-11%2016-02-28-230.jpg)

- Record each userId in which pcid/ip login.

![Alt upload](pic/bandicam%202022-10-11%2016-02-47-071.jpg)

- Record the number of uploads for each userId.

![Alt execute](pic/bandicam%202022-10-11%2016-02-52-383.jpg)

- Record the number of executions for each uuid.
- Calculate the sum of the duration of each uuid.
  - outlier must replace with average duration.

![Alt install](pic/bandicam%202022-10-11%2016-02-59-748.jpg)

- Record each pcid/ip have install which uuid.
  - delete not record.

## **other counts**

### _Ranking_

### _informations for each userId_

## **other**

- use store.json title to name skill
- use store.json userId -> account.json owner to get skill group

## **Discussion with Justin**

- My need is already **beyond** SQL in Kibana, need to use **script** to reach my requirement.
  - So, there are two way for me:
    - build a **NodeJS server** to query mongo and create API for graph and indicator.
      - easy for me, but not for odoo team...
        - try to use **abstraction** level concept.
    - query mongo and maybe create some function to generate graph and indicator directly using **Python**.
      - odoo team can easily embbed my code into their script.

## **Practice with NodeJS**

- The sources are four json file:

  - from Emily logs in mongo:
    - account.json
    - log.json
    - store.json
  - from Dukelo permission setting:
    - permissions.json

- group permission level into single user's account object.
  - then use its permission level and trainer property to filter log.json and store.json data.
    - do **filter** first, the point is to let data to **fit role of user**.
      - in filter step, **don't** think about **data usage** or **meaning** too much.
      - Try to **keep the data as it is**, and **filter out** only the parts of the account that should not be seen.
