function foo() {
    var console = 42;

    try {
        console.log("You WON'T see this.");
    } catch (e) {
    }

    try {
        window.console.log("You WILL see this.");
    } catch (e) {
    }
}
//works in browser environment, not in IDE environment
foo();          //You WILL see this.        -->console has been shadowed, so console.log fails, whereas window.console.log works.