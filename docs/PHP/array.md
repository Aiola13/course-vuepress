---
lang: fr-FR
title: Les tableaux
description: tableaux php
prev: ./instructions.md # Will overwrite 'prevLinks' property from themeConfig
next: ./superglobal.md # Will overwrite 'prevLinks' property from themeConfig

tags:
- php
- programmation
- langage
---

# Les Tableaux

En PHP, les tableaux : 
- sont dynamiques, leur taille peut évoluer.
- peuvent contenir des éléments de types différents

Il existe deux types de tableaux ...


## Les Tableaux Indicés (index)

C'est une liste d'éléments repérés par une position unique, son indice commençant par zéro.

### Déclaration

- Initialisation avec la syntace `array`

```php
$tCouleurs = array("rouge", "vert", "bleu");
$t = array("Texte", 2020, 20.5, $nom);
```

- Initialisation au fut et à mesure

```php
$tPrenoms[] = "Julien";
$tPrenoms[] = "Mike";
$tPrenoms[] = "Loïc";

$tNom[0] = "Emeriau";
$tNom[1] = "Payet";
$tNom[2] = "Durand";
```

### Parcours

Un tableau peut être parcouru grâce aux boucles vus précédemment.
Cependant il existe une boucle particulièrement interessante : `Foreach`

```php
$tab= array("Ottawa", "Montréal", "Québec", "Chicoutimi");

foreach($tab as $element)
{
  echo $element.'\n';
}
```

La variable `$element` prend pour valeurs successives tous les éléments du tableau *tab

### Quelques fonctions

|             Fonctions              |                     Utilisation                      |
| :--------------------------------: | :--------------------------------------------------: |
|           `count($tab)`            |       retourne le nombre d'éléments du tableau       |
|       `in_array($var, $tab)`       | renvoi `VRAI` si la valeur `$var` existe dans `$tab` |
|            `sort($tab)`            |     trie alphanumérique des éléments du tableau      |
| `array_merge($tab1, $tab2, $tab3)` |         concatène les tableaux en arguments          |
|         `array_rand($tab)`         |            retourne un élément au hasard             |



## Les Tableaux Associatifs

C'est une liste d'éléments repérés par un identifiant arbitraire unique appelé **clé** qui est de type `string`.
Il est aussi appelé _dictionaire_ ou _hashtable_.

### Déclaration

```php
//Syntaxe 
$tableau = array[key => value];
$tableau[key] = value;

//Exemple 1
$tPersonne = array("Nom" => "Durand", "Prenom" => "Loïc");

//Exemple 2
$tPersonne["Nom"] = "Durand";
$tPersonne["Prenom"] = "Loïc";
```

### Parcours

```php
$tPersonne = array("Nom" => "Durand", "Prenom" => "Loïc");

//Exemple 1
foreach($tPersonne as $element)
{
  echo $element.'<br />';
}
// Ici on accède directement aux éléments du tableau sans passer par les clés.

//Exemple 2
foreach($tPersonne as $key => $element)
{
  echo $key.' : '.$element.'<br />';
}
// Ici on accède simultanément aux clés et aux éléments du tableau.
```

La variable `$element` prend pour valeurs successives tous les éléments du tableau *tab

### Quelques fonctions

|         Fonctions          |                                     Utilisation                                      |
| :------------------------: | :----------------------------------------------------------------------------------: |
| `array_count_values($tab)` | retourne un tableau contenant les valeurs comme clés et leurs fréquence comme valeur |
|     `array_keys($tab)`     |                  retourne un tableau contenant les clés du tableau                   |
|    `array_values($tab)`    |                 retourne un tableau contenant les valeurs du tableau                 |
| `array_search($val, $tab)` |                     retourne la clé associée à la valeur `$val`                      |



## BONUS - Les Tableaux à n dimensions

### Construction

```php
$tDep[13] = array("Marseille", "Aix", "Arles", "Salon");
$tDep[84] = array("Avignon", "Orange", "Carpentras", "Cavaillon");
$tDep[30] = array("Nîmes", "Alès", "Bagnols-sur-Cèze", "Beaucaire");
```

### Parcours

```php
foreach($tDep as $dep => $tVille)
{
  echo '<p><em>'.$dep.'</em><br />';
  foreach($tVille as $ville)
  {
    echo $ville.'<br />';
  }
  echo '</p>';
}
```
<details>
  <summary>Visuel</summary>
  
  ```
  Array
  {
    [13] => Array
      {
        [0] => Marseille
        [1] => Arles
        [2] => Aix
        [3] => Salon
      }

    [84] => Array
      {
        [0] => Avignon
        [1] => Orange
        [2] => Carpentras
        [3] => Cavaillon
      }

    [30] => Array
      {
        [0] => Nîmes
        [1] => Alès
        [2] => Bagnols-sur-Cèze
        [3] => Beaucaire
      }
  }
  ```


  
</details>

<details>
  <summary>Résultat</summary>
  
  |                  |
  | ---------------- |
  | **13**           |
  | Marseille        |
  | Arles            |
  | Aix              |
  | Salon            |
  |                  |
  | **84**           |
  | Avignon          |
  | Orange           |
  | Carpentras       |
  | Cavaillon        |
  |                  |
  | **30**           |
  | Nîmes            |
  | Alès             |
  | Bagnols-sur-Cèze |
  | Beaucaire        |
</details>


# Les tableaux Globaux

Ces tableaux sont particuliers à PHP.

|    Array    |                                        Utilisation                                        |       Exemple        |
| :---------: | :---------------------------------------------------------------------------------------: | :------------------: |
| `$GLOBALS`  | Contient une référence sur chaque variable, les clés sont les noms des variables globales |   $GLOBAL['var1']    |
| `$_SERVER`  |        Les variables fournies par le serveur, ou liées à l'environnement du scirpt        | $_SERVER['PHP_SELF'] |
|   `$_GET`   |       Les variables fournies au script via la chaîne de requête URL en méthode GET        |     $_GET['id']      |
|  `$_POST`   |       Les variables fournies au script via la chaîne de requête URL en méthode POST       |    $_POST['nom']     |
|  `$_FILES`  |          Les variables fournies par le protocole HTTP suite à un téléchargement           | $_FILES['fichier1']  |
| `$_SESSION` |               Les variables enregistrées dans la session attachée au script               |  $_SESSION['var2']   |
