class MyList extends Array {
    constructor(someArgs) {
        super();
        this.someArgs = [...someArgs];
    }

    /* class field syntax */
    showList = () => {
        console.log(this.someArgs);
    }

}

let theList = new MyList('foo');
theList.showList();             // ['f', 'o', 'o' ]