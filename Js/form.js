class Form {
    constructor(){
        this.input = createInput("name");
        this.button = createButton("play");
        this.greeting = createElement("h3");
        this.title = createElement("h2");
    }

    hide(){
        this.greeting.hide();
        this.button.hide();
        this.title.hide();
        this.input.hide();
    }

    display(){
        this.title.html("Car Racing Game!");
        this.title.position(displayWidth/2-50,0);
        this.input.position(displayWidth/2-40,displayHeight/2-80);
        this.button.position(displayWidth/2+30,displayHeight/2);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCountP = playerCountP+1;
            player.index = playerCountP;
            player.updateCount(playerCountP);
            player.update();

            this.greeting.html("Hello "+player.name);
            this.greeting.position(displayWidth/2-70,displayHeight/4);
        })
    }
}