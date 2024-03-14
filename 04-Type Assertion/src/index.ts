// Type Assertion

// Diiferent ways to write
// const btn = document.getElementById('btn')!;
// const btn = document.getElementById('btn') as HTMLElement;
// const btn = <HTMLElement> document.getElementById('btn');

// btn.onclick;

// const img = document.getElementById("myImg") as HTMLImageElement;
// img.src;


const form = document.getElementById("myForm") as HTMLFormElement;
const myInput = document.querySelector('form > input') as HTMLInputElement;

form.onsubmit = (e:SubmitEvent) => {
    e.preventDefault();
    const value = Number(myInput.value)
    console.log(myInput.value);
    console.log(typeof myInput.value);

    const h2 = document.createElement("h2");
    h2.textContent = String(value + 20);
    const body = document.querySelector('body') !;
    body.append(h2);

}

 