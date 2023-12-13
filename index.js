let count = 10;
const HeadElement = document.createElement("h1");
setTimeout(() => {
    HeadElement.innerHTML = count;
    count--;
    setTimeout(() => {
        HeadElement.innerHTML = count;
      count--;
      setTimeout(() => {
        HeadElement.innerHTML = count;
        count--;
        setTimeout(() => {
            HeadElement.innerHTML = count;
            count--;
            setTimeout(() => {
                HeadElement.innerHTML = count;
                count--;
                setTimeout(() => {
                    HeadElement.innerHTML = count;
                    count--;
                    setTimeout(() => {
                        HeadElement.innerHTML = count;
                        count--;
                        setTimeout(() => {
                            HeadElement.innerHTML = count;
                            count--;
                            setTimeout(() => {
                                HeadElement.innerHTML = count;
                                count--;
                                setTimeout(() => {
                                    HeadElement.innerHTML = count;
                                    count--;
                                  setTimeout(() => {
                                    HeadElement.innerHTML = "Happy Independence day";
                                  },1000);
                                },1000);
                            },1000);
                        },1000);
                    },1000);
                },1000);
            },1000);
        },1000);
      }, 1000);
    }, 1000);
}, 1000);

document.body.style.textAlign = "center";
document.body.append(HeadElement)