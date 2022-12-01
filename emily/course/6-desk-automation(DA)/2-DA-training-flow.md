![alt DA training flow](pic/DAF.png)

## **Open DA Wap at Target Machine**

![alt click DA module](pic/bandicam%202022-09-18%2016-11-55-574.jpg)

![alt get trainer URL](pic/bandicam%202022-09-18%2016-13-47-262.jpg)

- DA Wap will start a sever with a URL like above to let other machine can training this machine through the browser with this URL.

## **Enter DA Trainer mode at Remote Machine**

![alt past trainer URL to browser in remote machine](pic/bandicam%202022-09-18%2016-15-40-628.jpg)

![alt disable web protection](pic/bandicam%202022-09-18%2016-16-11-750.jpg)

- Because URL is HTTP protocol, so we need to disable web protection by ourself.

![alt enter trainer mode successfully](pic/bandicam%202022-09-18%2016-18-19-530.jpg)

- The web page of the remote machine presents the "snapshot" of the target machine desktop, not the live screen.
- So the training will be done in the remote machine through the browser.
  - So the remote machine should not need to install Emily, it only needs to have a browser to train.
- When the training is finished, click commit on the code page of the remote machine to transfer the training code to the DA WAP of the target machine.
  - So the target machine can use the delivered training code for DA from now on, and no remote machine is needed.
