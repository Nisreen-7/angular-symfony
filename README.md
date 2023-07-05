# Installation et configuration de symfony

Si ce n'est pas déjà fait
Cloner, configurer et lancer le projet symfony-rest

Faire un composer req cors pour rajouter les CORS (ce qui fera que angular pour faire des requêtes vers le symfony)
	
Lancer le projet avec symfony server:start et le garder ouvert dans un coin


# Nouveau projet Angular

Créer un projet angular avec le ng new en choisissant de mettre le router (par défaut c'est non, donc faites attention) et d'être en css
	
Créer un fichier src/app/entities.ts et dedans faire une interface Movie qui va reprendre la structure de la classe Movie (pour le moment, on ne met pas les genres, on le fera peut être plus tard)
	
Dans le AppModule, rajouter le HttpClientModule ainsi que le FormsModule
	
Créer un HomeComponent et faire une route racine qui pointe dessus


# Affichage des films

Générer un component MovieItemComponent qui aura un @Input required de type Movie (pas oublier de rajouter le strictPropertyInitialization dans le tsconfig)
	
Dans le template faire un affichage des informations du film, juste son title et sa released pour le moment par exemple
	
Dans le HomeComponent, créer une propriété de type Movie[] initialisée en tableau vide et dans le template faire une boucle dessus pour afficher des app-movie-item
	
(Si on veut tester tel quel, sans appel serveur, on peut rajouter un ou deux films en dur dans le tableau)


# Le service
Générer un service avec le cli (ng g s à priori) qui s'appelera MovieService
	
Dans le constructeur de ce service, rajouter un http:HttpClient en private (comme dans l'exemple fait dans l'autre projet)
	
Créer une méthode fetchAll() et dedans faire une requête de type get vers l'url du symfony, sur la route /api/movie, en typant le get en Movie[] (à la place du any que j'avais mis dans l'exemple)
	
On fait un return de ce get, sans le subscribe
	
Côté HomeComponent, on rajoute un constructeur avec une private MovieService dedans
	
On ajoute une méthode getData qui va utiliser la méthode fetchAll du movie service et faire un subscribe dessus et qui va directement assigner la valeur du subscribe à la propriété movies du HomeComponent
	
On rajoute un bouton qui au click lancera le getData


## Bonus: Trouver une manière de faire que l'appel à symfony se fasse directement au lancement de la page


[09:48] Jean DEMEL
    

# Le formulaire de movie

1.Créer un nouveau component FormMovieComponent et dans son template créer un form avec label et input pour title,released,resume,duration
	
2.Créer une propriété movie:Movie dans ce component et lier ses propriétés aux inputs du form
	
3.Rajouter une méthode handleSubmit() qui va pour le moment faire juste un console log du movie pour voir si tout est bien connecté
	
4.Dans le MovieService rajouter une méthode add(movie:Movie) qui va faire un http.post vers api/movie en lui donnant le movie en deuxième argument du post
	
5.Dans le FormMovieComponent, on récupère le service dans le constructeur et on fait en sorte d'appeler le post dans le handleSubmit


# Suppression des movie

1.Dans le MovieService, rajouter une méthode delete qui va attendre un id number en argument et qui va s'en servir pour déclencher un http.delete en concaténant l'id à l'url
	
2.Dans le movie-item.component.html, rajouter un bouton de suppression et faire que lorsque l'on click dessus va emit un @Output avec le movie dedans
	
3.Côté HomeComponent on crée une méthode removeMovie(movie:Movie) qui va faire appel au delete du MovieService et dans le subscribe va faire en sorte de retirer le movie en question de la list (voir comment on utilise le filter)
	
4.Dans le template du home, on assigne cette méthode sur le app-movie-item


# Page pour un seul movie

1. Générer un component SingleMovieComponent et créer une route paramétrée sur 'movie/:id' qui va pointer sur ce component
	
2. Dans le MovieService, créer une méthode fetchOne qui va attendre un id:any en argument et s'en servir pour faire un get vers http://localhost:8000/movie/id et qui va donc return un Movie
	
3. Dans le SingleMovieComponent, créer une propriété movie:Movie en vous inspirant de l'exemple de routing paramétré, récupérer la valeur du paramètre id et s'en servir pour faire un appel au fetchOne (le constructeur aura donc 2 arguments private), on aura donc un subscribe dans un subscribe...
	
4. Faire le template pour afficher les informations du films
	
5 Dans le template du MovieItem, rajouter un a avec un routerLink à la place du href qui pointera sur la route /movie/id


# Mise à jour

1. Dans le FormMovieComponent, rajouter un @Input sur le movie:Movie
	
2. Dans le template de SingleMovieComponent, appeler le app-form-movie dans la div if (pas celle qui a le loading) en lui donnant à manger le movie (ça devrait préremplir les champs)
	
3. Toujours dans SingleMovieComponent, créer une méthode updateMovie(movie:Movie) qui va faire un console log de son argument et faire en sorte de l'appeler au (added) du FormMovie
	
4. Dans le service, créer une méthode update(movie:Movie) avec un http.patch dedans qui va à la fois concaténé l'id (comme le fetchOne ou le delete) mais aussi donner son movie en deuxième argument du patch (comme le post)
	
5. Appeler cette méthode dans le updateMovie du SingleMovieComponent et dans son subscribe on remplace this.movie par data

# Bonus :
1. Lors de l'update, taper dans le formulaire modifie aussi l'affichage, tenter de faire que ça ne soit pas le cas
	
2. Dans le Home, mettre le formulaire d'ajout dans une modal (truc qui se met par dessus avec une croix de fermeture)


# Champ de recherche (avec autocomplétion !)


	
# Côté symfony:
1.  dans le MovieRepository, créer une méthode search(string $term) qui va faire une requête pour récupérer juste les films (pas de jointure) dont le title ou le resume ou le released contient le terme recherché
	
2. Dans la partie contrôleur créer une nouvelle route sur /api/movie/search/{term} qui va lancer la méthode du repo qu'on vient de créer
	
3. Rajouter un test ou deux dans le MovieApiTest pour cette route, car on aime la qualité logicielle
	
# Côté Angular:
1. dans le MovieService, rajouter une nouvelle méthode search qui va faire appelle à la route symfony qu'on vient de créer
	
2. Générer un SearchComponent qu'on va afficher dans le AppComponent (comme ça on a la barre de recherche sur toutes les pages)
	
3. Dans ce component, on va avoir une propriété term en string initialisée vide qu'on va lier à un input
	
4. On va également avoir une propriété result de type Movie[] initialisée en tableau vide
	
5. Créer une méthode doSearch qui va lancer le search du service et assigné les data au results
	
6. Faire en sorte de lancer cette méthode quand on tape dans l'input
	
7. Faire du style pour que ça ressemble à une barre de recherche avec autocomplétion
