#INF4150-30 : Interface personne machine ### Opérations Comptables élémentaires 

**Hiver 2014 - TP3**

Ricardo Solon 

Eric Tremblay 

Prototype

Ce prototype doit être utilisé avec **le navigateur web Chrome** exclusivement.

Démarrer un serveur python SimpleHTTPServer dans le dossier du projet contenant le fichier de format HTML: *vue.html*

$ cd projetTP3     $ python -m SimpleHTTPServer

*Le port par défaut 8000 est utilisé pour le bon fonctionnement du __Prototype__ et des __Tests__.*

*projetTP3 est le nom du dossier contenant tous les fichiers pour ce prototype.*

Ouvrer le prototype dans un navigateur web Chrome à l'adresse suivante : [http://localhost:8000/vue.html](http://localhost:8000/vue.html "prototype")

**Étapes à suivre pour ce prototype**

1. Taper un numéro de membre dans le champ texte et appuyer sur la touche Entrée
2. Cliquer sur le dossier 1
3. Cliquer sur le lien vente de livres 4. Modifier les quantités ou les prix unitaires dans la fenêtre modale(optionnel)
5. Cliquer sur le bouton Ajouter une note de crédit pour ajouter une note de crédit à chaque item voulu (optionnel)
6. Taper le nom du projet dans le champ texte projet dont la facture est associée
7. Cliquer sur le bouton Facturer
8. Constater que l'item Vente de livres a été facturé au montant prescrit dans les étapes précédentes pour le nom de projet déterminé à l'étape 6.

Tests

Le serveur doit être prêt pour exécuter les tests. Voir la procédure dans la section **Protoype** pour démarrer le serveur correctement.
Démarrer les tests avec les commandes suivantes:

$ cd tests        $ casperjs test test.js

Documentation

La documentation se trouver dans le dossier documentation. Dans ce dossier il y a la documentation au format HTML.

$ cd documentation

Utiliser le navigateur web Chrome pour visualiser la documentation contenue dans le fichier HTML guiddUtilisateur.html à l'adresse : [http://localhost:8000/documentation/guideUtilisateur.html](http://localhost:8000/documentation/guideUtilisateur.html) **avec le serveur préalablement activé**.

