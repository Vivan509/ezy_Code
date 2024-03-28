let container = document.querySelector('.hero-content');


 
// Throttling Function
const throttleFunction = (func, delay) => {

    // Previously called time of the function
    let prev = 0;
    return (...args) => {
        // Current called time of the function
        let now = new Date().getTime();

        // Logging the difference
        // between previously 
        // called and current called timings
        (now - prev, delay);

        // If difference is greater
        // than delay call
        // the function again.
        if (now - prev > delay) {
            prev = now;

            // "..." is the spread
            // operator here 
            // returning the function with the 
            // array of arguments
            return func(...args);
        }
    }
}

container.addEventListener("mousemove",
    throttleFunction((dets) => {
        // Repeating code
        
        //creating a New Div
        let div = document.createElement('div');

        // adding class name to div
        div.classList.add('imageDiv');

        // Show it on Body and screen
        document.body.appendChild(div);

        // styling the div
        div.style.left = dets.clientX + 'px';
        div.style.top = dets.clientY + 'px';

        // add image to div
            let img = document.createElement('img');

        // add img src
            img.setAttribute('src',"https://images.unsplash.com/photo-1710646434776-777e5fc59e64?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDl8SnBnNktpZGwtSGt8fGVufDB8fHx8fA%3D%3D");

        // Add image to div
            div.appendChild(img);

        // Using gsap to to appear image animation
        gsap.to(img, {
            y: '0',
            ease: Power1,
            duration: .6
        });

        // put down the image
        gsap.to(img, {
            y: '100%',
            delay: .6,
            ease: Power2,
            
        })
        // to remove div after sometime
        setTimeout(() => {
            div.remove();
        }, 2000);

    }, 500));

