class Counter {
    constructor(value, size) {
        this.value = value;
        if (size <= 0) {
            size = 5;
        }
        this.size = size;
        const arr = [];
        for (let i = 0; i < size; i++)
            arr[i] = 9;
        this.maxSize = parseInt(arr.join(''));
        //console.log(this.maxSize);

        }
        up() {
            if (this.value < this.maxSize)
                this.value++;
        }

        down() {
            if (this.value > 0)
                this.value--;
        }

        get() {
            alert(this.value);
        }

        reset() {
            this.value = 0;
        }

        set(value) {
            if (value <= this.maxSize && value > 0)
                this.value = value;
        }
}