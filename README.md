#INF4150-30 : Interface personne machine
### Opérations Comptables élémentaires 
----------

**Hiver 2014 - TP3**

Ricardo Solon SOLJ06048503

Eric Tremblay TREE13057906

----------

####Prototype


Ce prototype doit être utiliser avec **le navigateur web Chrome** exclusivement.

Démarer un serveur python SimpleHTTPServer dans le dossier contenant le projet avec le fichier de format HTML: *vue.html*

    $ cd projetTP3
    $ python -m SimpleHTTPServer

*Le port par défaut 8000 est utiliser pour le bon foctionnement du __Prototype__ et des __Tests__.*

*projetTP3 est le nom du dossier contenant tout les fichiers pour ce prototype.*

Ouvrer le prototype avec l'addresse dans le navigateur web Chrome: [http://localhost:8000/vue.html](http://localhost:8000/vue.html "prototype")

**Étape principale à suivre pour ce prototype**

1. Taper un numéro de membre dans le champs texte et apuyer sur la touche Entrée
2. Cliquer sur le dossier 1
3. Cliquer sur le lien vente de livres
4. Modifier les quantités ou les prix unitaires(optionnel)
5. Cliquer sur le boutton Ajouter une note de crédit pour ajouter une note de crédit à chaque item voulu (optionnel)
6. Taper le nom du projet dont la facture est associée
7. Cliquer sur le boutton Facturer
8. Constater que l'item Vente de livres a été facturer au montant précrit dans les étapes précédante pour le nom de projet déterminé à l'étape 6.

----------

####Tests

Le serveur doit être prêt pour éxecuter les tests. Voir la procédure dans la section **Protoype** pour démarer le serveur correctement.
Démarer les tests avec la commande suivante:

    $ cd tests   
    $ casperjs test test.js


----------

####Documentation

la documentation se trouvre dans le dossier documentation. Dans ce dossier il y a la documentation au format HTML.

    $ cd documentation

Utiliser le navigateur web Chrome pour visualiser la documentation contenu dans le fichier HTML guiddUtilisateur.html

