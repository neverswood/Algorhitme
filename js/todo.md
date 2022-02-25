creer 3 methode pour les filtre des recette par tag
verifier que les tags filtre bien les recettes et les dropdown
search(request, device, ustensiles, ingredients) {
let results = [];

    results = this.searchAllByRequest(request);
    results = this.searchByDevice(results, device);
    results = this.searchByUstensile(results, ustensiles);
    results = this.searchByIngredient(results, ingredients);

    this.results = results;

}
