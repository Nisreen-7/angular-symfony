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

