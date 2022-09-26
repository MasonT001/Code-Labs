export default class Home {
    
    constructor(){
        // WHen home instance is created call Render
        this.render()
    }

    // render elements onto the page
    render(){
        let appElement = document.getElementById("app");

        appElement.insertAdjacentHTML('beforeend', `<h1 class='text-center'>Social Media Page</h1>`)
    }
}