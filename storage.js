function Storage(){

}
Storage.prototype.addFilmToStorage = function(newFilm){
    let films = this.getFilmsFromStorage();
    films.push(newFilm);
    localStorage.setItem("films",JSON.stringify(films));
}
Storage.prototype.getFilmsFromStorage = function(){
    let films;
    if (localStorage.getItem("films")=== null) {
        films = [];
    }
    else {
        films = JSON.parse(localStorage.getItem("films"));

    }
    return films;
}
Storage.prototype.deleteFilmFromStorage = function(filmTitle){
    let films = this.getFilmsFromStorage();
    //splice
    films.forEach(function(film,İndex){
        if(film.title === filmTitle) {
            films.splice(İndex,1);
        }
    });

    localStorage.setItem("films",JSON.stringify(films));

}
Storage.prototype.clearAllfilmsFromStorage = function(){
    localStorage.removeItem("films");
}