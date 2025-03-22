const year = new Date();
const current_year = year.getFullYear();

function Footer(){
    return(
        <footer>
            <p>copyright © {current_year}</p>
        </footer>
    )
}
export {Footer}