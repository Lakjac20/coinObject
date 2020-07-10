let coin = {
    state: 0,
    flip: function() {
        let d = Math.random ()
        if(d > 0.5){
            this.state = 0 
        } else {
            this.state = 1
        }
        
        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
    },
    toString: function() {
        
        if (this.state === 1){
            return 'Heads'
        } else {
            return 'Tails'
        }
        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
    },
    toHTML: function() {
        let image = document.createElement('img');
       if (this.state === 1 ){
           image.src = './images/Heads.jpg'
       }else{
           image.src = './images/Tails.png'
       }
        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
        return image;
    }
};

let show = document.querySelector('main')

function display20Flips (){
    for (let index = 1; index <= 20; index += 1){ 
        coin.flip()
        let newElement = document.createElement('p') 
        newElement.append(coin.toString())
        show.append(newElement)
    }
    
}


function display20Images (){
for (let index = 1; index <= 20; index += 1){
    coin.flip()
    show.append(coin.toHTML())
}
}