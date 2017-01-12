class ScoreUI {
    constructor(container, size, value) {
        this.counter = new Counter(value, size);
        const wrapper = document.createElement("div");
        wrapper.classList.add("counter");
        wrapper.innerHTML = `
        <div>
           <button class="counter__modify">+</button>
           <input class="counter__input" type="text"/> 
           <button class="counter__modify">-</button>
         </div>
         <div>
           <button class="counter__alert">GET</button>
           <button class="counter__alert">RESET</button>
           <button class="counter__alert">SET</button>
         </div>`
        container.appendChild(wrapper);
        this.plus = wrapper.querySelectorAll(".counter__modify")[0];
        this.input = wrapper.querySelector(".counter__input");
        this.minus = wrapper.querySelectorAll(".counter__modify")[1];
        this.get = wrapper.querySelectorAll(".counter__alert")[0];
        this.reset = wrapper.querySelectorAll(".counter__alert")[1];
        this.set = wrapper.querySelectorAll(".counter__alert")[2];
        const size2 = this.counter.size;
        const value2 = this.counter.value;
        const length = String(value).length;

        this.update();

        this.plus.addEventListener('click', () => {
            this.increment();
            this.update();
        });

        this.minus.addEventListener('click', () => {
            this.decrement();
            this.update();
        });

        this.get.addEventListener('click', () => {
            this.getAlert();
        });

        this.reset.addEventListener('click', () => {
            this.resetCounter();
        });

        this.set.addEventListener('click', () => {
            this.setCounter();
        });
    }

    update() {
        const size = this.counter.size;
        const value = this.counter.value;
        const length = String(value).length;
        const zeros = size - length;
        let finalInput = "";
        for (var i = 0; i < zeros; i++) {
            finalInput += "0";
        }
        finalInput += this.counter.value;
        console.log(finalInput);
        this.input.value = finalInput;
    }

    increment() {
        this.counter.up();
        this.update();
    }

    decrement() {
        this.counter.down();
        this.update();
    }

    resetCounter() {
        this.counter.reset();
        this.update();
    }

    getAlert() {
        this.counter.get();
    }

    setCounter() {
        this.counter.set(this.input.value);
        this.update();
    }
}
