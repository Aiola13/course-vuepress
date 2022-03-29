---
lang: fr-FR
title: Les Instructions
description: Instructions php
prev: ./instructions.md # Will overwrite 'prevLinks' property from themeConfig
next: ./array.md # Will overwrite 'prevLinks' property from themeConfig

tags:
- php
- programmation
- langage
---

# Les instructions

Pour plus d'informations, Merci de vous rendre dans _Algorithmie_.
Ici ce ne sera qu'un simple rappel avec les spécificités du PHP.

## Les opérateurs :

### Les opérateurs arithmétiques

| Signe |               Opération               |
| :---: | :-----------------------------------: |
|  `–`  |     (unaire) Changement de signe      |
|  `+`  |               Addition                |
|  `-`  |             Soustraction              |
|  `*`  |            Multiplication             |
|  `/`  |               Division                |
|  `%`  | Modulo (reste de la division entière) |

### La concaténation de chaînes

Le « . » (le point)

### Les opérateurs logiques (et binaires)

|         Signe          |      Opération      |
|:----------------------:|:-------------------:|
|          `!`           |     NON logique     |
| &#x7c;&#x7c;  `OR`     |     OU logique      |
|       `&&` `AND`       |     ET logique      |
|         `XOR`          | OU exclusif logique |


### Les opérateurs relationnels (de comparaison)

| Signe |          Opération           |
| :---: | :--------------------------: |
| `==`  |           Egalité            |
| `===` | Identité    (valeur et type) |
| `!=`  |          Différent           |
| `!==` | Différent  (valeur ou type)  |
|  `<`  |    Strictement Inférieur     |
| `<=`  |      Inférieur ou égal       |
|  `>`  |    Strictement Supérieur     |
| `>=`  |      Supérieur ou égal       |
| `>=`  |      Supérieur ou égal       |
| `<=>` |      Combiné    (PHP 7)      |

### Cas particulier de l'affectation

|   Signe    |         Opération         |   Equivalent    |
| :--------: | :-----------------------: | :-------------: |
|  `$a = 1`  |   Afffection par copie    |        \        |
| `$b = &$a` | Affectation par référence |        \        |
| `$a += $b` |          Egalité          | `$a = $a + $b`  |
| `$a -= $b` |         Identité          | `$a = $a -* $b` |
| `$a *= $b` |         Différent         | `$a = $a * $b`  |
|   `$a++`   |      Incrémentation       |  `$a = $a + 1`  |

::: tip
Une référence est une copie de l'adresse mémoire de la variable.
:::

### Règles des priorités des expressions


![mon image](./res/regles-priorite-operateurs_(Small).png)


# Boucles et Conditions

[comment]: #'CONDITIONS'

## Structure Alternative et de choix

### Structure Alternative

```php
if($a == $b)
{
  echo "A est égal à B";
}
elseif($a > $b)
{
  echo "A est supérieur à B";
}
else
{
  echo "A est inférieur à B";
}
```
### Structure de Choix Multiple

```php
switch($a)
{
  case $b : echo "A est égal à B";
            break

  case >$b: echo "A est supérieur à B";
            break;

  default : echo "A est inférieur à B";
            break
}
```

### Opérateur ternaire

```php
// syntaxe
// (condition) ? valeur vrai : valeur faux;
$var = 2;
echo ($var > 3) ? 'plus grand<br />' : 'plus petit<br />';
```

```php
// syntaxe
// (Définie) ?? (Définie) ?? (Définie) ?? "Alors réponse";
$sMaCouleur = $bleu ?? $pink ?? $purple ?? "Pas de couleur";

```

[comment]: #'BOUCLES'

## Structures de répétition

### While

```php
$i = 0;
while($i <= 10)
{
  echo "-$i-";
  $i++;
}
```

### Do - While

```php
$i = 0;
do
{
  echo "-$i-";
  $i++;
} while($i <= 10)
```

### For

```php
for($i = 0; $i <= 10; $i++)
{
  echo "-$i-";
}
```


### Foreach (Array)

Nous le verrons plus en détail lorsque nous parlerons des tableaux :) 

```php
$aAgePersonne = array("Loïc" => 29, "Julien" => 30, "Stanislas" => 30);

foreach($aAgePersonne as $nom => $age)
{
  echo "$nom a $age ans. <br />";
}

## Mots-clés

### CONTINUE
`continue` permet de sortir de l'itération en cour et de passer à la suivante.

```php
for (var i = 0; i < 10; i++) {
	if (i <= 5) {
		continue;
	}
	echo "- ";
}
```

### BREAK
`break` permet de sortir de la boucle en cours.

```php
for (var i = 0; i < 10; i++) {
	if (i <= 5) 
  {
		echo $i;
	}
  else
  {
    break;
  }
	echo "- ";
}
```

