# La programmation Orientée Objet (POO)

## Mais qu'est-ce que sont les objets ? 🙄

Mais si, vous savez ce que c'est .... Si si réféchissez ... vous en avez tout autour de vous... un canapé, une table, une chaise ... Bous avez compris ...
En programmation c'est la même chose. 

L'exemple que je peux vous donner c'est une voiture, imaginons dans notre code un Objet **VOITURE**.

Cette voiture à :
- une couleur
- une marque
- un type ... 

Ses caractérisques correspondent à des valeurs, des variables.
Mais elle a aussi des capacités, des actions qu'elle peut effectuer, comme être repeinte, être réparé, avancer, tourner ... ce qu'on nomme des **méthodes** (nom donné aux fonctions dans une classe).

Toutes ces informations sont contenues dans une **classe**.

## Qu'est-ce-qu'une classe alors ? 

Comme je viens de le dire, les classes contiennent **la définition des objets** que l'on va créer par la suite. 

Prenons l'exemple le plus simple du monde : les gâteaux et leur moule. 
Le moule est unique. Il peut produire une quantité infinie de gâteaux. Dans ce cas-là, les gâteaux sont les objets et le moule est la classe : le moule va définir la forme du gâteau. La classe contient donc le plan de fabrication d'un objet et on peut s'en servir autant qu'on veut afin d'obtenir une infinité d'objets.

## Mais concrètement, une classe, c'est quoi ?

Une classe est une entité regroupant des variables et des fonctions. Chacune de ces fonctions aura accès aux variables de cette entité. Dans le cas de la voiture, nous aurons une fonction peindre(). Cette fonction devra simplement modifier la variable $couleur.

Maintenant que vous savez ce qu'est un objet et une classe, parlons de **l'instanciation** ...

**L'instanciation** est le fait de créer un objet via une classe, ce qui créé une instance de la classe dont elle dépend. 

Nous pouvons aussi parler de **l'encapsulation**, qui permet de rendre le code visible où non ... en mettant en place une visibilité d'un attribut ou une méthode. Nous l'appelons également "Visibilité" ou "Portée" des variables.

Un exemple : 

Une voiture, comment pourrait-on définir une voiture ?
## Convention de nommage

| Instructions          | How to write                | Exemple               |
| --------------------- | --------------------------- | --------------------- |
| Classes & Interfaces  | PascalCase (UpperCamelCase) | Car.php               |
| Méthodes et Variables | camelCase                   | getColor() / carColor |
| Constantes            | UpperCase                   | ALL_CAPS              |


Méthodes et Variables : Alphanumériques uniquement, à l'exception de '\_' comme décrit ici. Les noms doivent décrire les données dans la variable ou le comportement de la méthode. Les variables ou méthodes déclarées avec des modificateurs de visibilité privé ou protégé doivent commencer par un \_.

Constantes : Alphanumériques et '\_' sont autorisés cependant '\_' doit être utilisé pour séparer les mots dans des constantes.
## Déclaration et définition

```php
<?php
  class Voiture //Déclaration de la classe
  {
    // Déclaration des données membres (Private, Public & Protected)
    private $_couleur; // Déclaaration d'un attribut
    private $_type = "sport"; // initialisation de la donnée membre
    private $_marque; // initialisation de la donnée membre

    // Déclaration des fonctions membres (Méthodes)
    public function __construct($marque) // Constructeur
    {
      $this->_couleur = "noire";
      $this->_marque = $marque;
      // Le mot-clé "$this" faisant référence à l'objet est obligatoire
    }

    public function setCouleur($couleur)
    {
      $this->_couleur = $couleur;
    }

    public function getCouleur()
    {
      return $this->_couleur;
    }
  }
?>
```

## Instanciation

```php
<?php
$maVoiture = new Voiture("Infinity");
echo 'couleur de la voiture '.$maVoiture->getCouleur().'<br />';

// -> opérateur Objet
$maVoiture->setCouleur("blanche"); // appel d'une méthode
echo 'couleur de la voiture '.$maVoiture->getCouleur().'<br />';
?>
```

## Héritage
Mais qu'est-ce que l'héritage ? En sois, ce concepte n'est pas compliqué à comprendre. En effet, on reçoit tous l'héritage de nos ancêtres à un moment donné.
C'est la même idée ici. Vous pouvez créer des classes qui héritent d'autres classes.
Immaginons que vous ayez plusieurs voitures (il n'existe pas qu'une seule et unique sorte de voiture, sinon la vie serait bien platonique), il existe des voitures qui ont toutes les mêmes caractérisques de bases (couleur, marque), mais certaines voitures ont des spécificités. C'est le cas par exemple d'une voiture de Luxe qui est "Belle".
```php
<?php
  class VoitureLuxe extends Voiture // Déclaration de la sous-classe qui hérite de Voiture
  {
    
    private $_belle; 

    public function __construct() // constructeur de la classe VoitureLuxe
    {
      parent::__construct();  // :: Opérateur de résolution de portée, indiquant qu'on utilise le constructeur de la classe parent.
      $this->_belle=TRUE();
    }

   
  }
?>
```

L'opérateur de résolution de portée 
parent `::` membre de la classe parent
self `::` membre de la même classe

## Surcharge
On appelle **Surcharge** une propriété ou une méthode d'une classe lorsqu'on la redéfinit.
Pour surcharger une méthode, il faut la redéclarer en utilisant le même nom, le même nombre de paramètre et qu'elle soit en public ou protected.

A noter tout de même, que la Surcharge dans les autres langages signifie écrirer différentes versions d'une même méthode avec un nombre différents de paramètres.

```php

<?php
    class Utilisateur{
        protected $_user_name;
        protected $_user_pass;
        
        public function __construct($n, $p){
            $this->_user_name = $n;
            $this->_user_pass = $p;
        }
        
        public function getNom(){ // Méthode getNom() qui renvoi le nom de l'utilisateur actuel
            return $this->_user_name;
        }
    }

    class Admin extends Utilisateur{
        protected $_ban;
        
        public function getNom(){ // Méthode getNom() surcharger, qui modifie légèrement son fonctionnement en renvoyant le nom de l'Admin en majuscule.
            return strtoupper($this->_user_name);
        }
        
        public function setBan($b){
            $this->_ban[] .= $b;
        }
        public function getBan(){
            echo 'Utilisateurs bannis par '.$this->_user_name. ' : ';
            foreach($this->_ban as $valeur){
                echo $valeur .', ';
            }
        }
    }
?>

```

## Composition
La composition est le fait qu'une classe soit composé d'une autre classe. Simple ... non ? 🤔
Reprenons l'exemple d'une voiture, qui est composée de 4 roues. 

```php
<?php
 
class Roue 
{
   private $_diametre;
    private $_marque;
     
    public function __construct($marque, $diametre){
        $this->_marque=$marque;
        $this->_diametre=$diametre;
    }
     
    public function __toString(){
        return "Roue marque ".$this->_marque." et de diametre ".$this->_diametre."<br/>";
    }
}
 
class Voiture
{
    private $_roues;
 
    const AvantGauche   = 0;
    const AvantDroit    = 1;
    const ArriereGauche = 2;
    const ArriereDroit  = 3;
 
    //
 
    public function changerRoue($roue, $position)
    {
        $this->_roues[$position] = $roue;
    }
 
    public function getRoue($position)
    {
        return $this->_roues[$position];
    }
}
 
$voiture = new Voiture;
$voiture->changerRoue(new Roue("Dunlop", 60), Voiture::AvantGauche);
$voiture->changerRoue(new Roue("Michelin", 80), Voiture::ArriereGauche);
echo $voiture->getRoue(Voiture::ArriereGauche)->getMarque();
echo $voiture->getRoue(Voiture::AvantGauche)->getMarque();
```

## Static
Une propriété **static** est une propriété qui ne va pas appartenir à une instance particulière, mais à une classe dans la quelle elle a été définie.
Elle va donc avoir la même définition et la même valeur pour toutes les instances d'une classen et nous allons pouvoir y accéder sans avoir besoin d'instancier une classe.

Prenons l'exemple d'un Administrateur qui aurait une liste d'Utilisateur banni.

```php
<?php
    class Admin extends Utilisateur{
        protected static $_ban;
        public const ABONNEMENT = 5;
        
        public function __construct($n, $p, $r){
            $this->_user_name = strtoupper($n);
            $this->_user_pass = $p;
            $this->_user_region = $r;
        }
        
        public function setBan(...$b){
            foreach($b as $banned){
                self::$_ban[] .= $banned;
            }
        }
        public function getBan(){
            echo 'Utilisateurs bannis : ';
            foreach(self::$ban as $valeur){
                echo $valeur .', ';
            }
        }
        
        public function setPrixAbo(){
            if($this->_user_region === 'Sud'){
                return $this->_prix_abo = self::ABONNEMENT;
            }else{
                return $this->_prix_abo = parent::ABONNEMENT / 2;
            }
        }
    }
?>

```


---
# Prêt pour la prochaine partie ? 😉 [C'est par ici](./plus.md)