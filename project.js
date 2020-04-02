const form = document.getElementById ("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardbody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films");

const ui = new UI();

const storage = new Storage();
//Tüm eventleri seçme

eventListeners();

function eventListeners(){
    form.addEventListener("submit",addFilm);//burda film ekleme butonuna event atadık..
    document.addEventListener("DOMContentLoaded",function(){//filmleri storagea eklemek için event atadık..
        let films = storage.getFilmsFromStorage();
        ui.loadAllFilms(films);
    });
    cardbody.addEventListener("click",deleteFilm);//burda filmi sil butonuna event atadık..
    clear.addEventListener("click",clearAllFilms);
}
function addFilm(e){
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if(title === "" || director === "" || url === ""){
        //hata mesajı verilecek...
        ui.displayMessages("Tüm alanları doldurunuz..","danger");

    }

    else {
        // Yeni film 
        const newFilm = new Film(title,director,url);
        ui.addFilmToUI(newFilm);//arayüze film ekleme..
        storage.addFilmToStorage(newFilm);//storage a film ekleme
        ui.displayMessages("Film başarıyla eklendi..","success");
    }


    ui.clearInputs(titleElement,urlElement,directorElement);
    e.preventDefault();
}
function deleteFilm(e){
    ui.deleteFilmFromUI(e.target);
    storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
    
    ui.displayMessages("silme işlemi başarılıdır..","success");
}
function clearAllFilms(){
    if(confirm("Emin misiniz ?")){
        ui.clearAllFilmsFromUI();
        storage.clearAllFilmsFromStorage();
    }

    
}