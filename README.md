 ecf_20-03-2024
# Création d'un Pokédex en React Native à l'aide de l'Api PokeApi

[Cahier des charges](https://github.com/Florian00000/ecf_20-03-2024/blob/main/sujet-ecf-20-03-24.pdf)

## Packages utilisés

- [Navigation :](https://github.com/Florian00000/ecf_20-03-2024/blob/main/Ecf_PokeApi/App.jsx)
    - @react-navigation/bottom-tabs
    - @react-navigation/native
    - @react-navigation/native-stack

- [Store et Storage :](https://github.com/Florian00000/ecf_20-03-2024/blob/main/Ecf_PokeApi/src/store/pokemonSlice.js)

    - @react-native-async-storage/async-storage
    - @reduxjs/toolkit
    - react-redux
- axios

- react-native-vector-icons

## Commandes

1. Installer le projet 
```bash
 cd .\Ecf_PokeApi\ ;
 npm install
```

2. Lancer l'application
```bash
npm run android
```

## Fonctionnalitées

### [Page d'accueil](https://github.com/Florian00000/ecf_20-03-2024/blob/main/Ecf_PokeApi/src/screens/HomeScreen.jsx)
La page d'accueuil de l'apllication présente une liste des pokémons (avec une pagination limité à 30 pokémons).

<img src='https://raw.githubusercontent.com/Florian00000/ecf_20-03-2024/main/screenshots/Screenshot_1711034394.png' alt="pageAccueil" width="300"/>

Depuis cette page il suffit d'appuyer sur le carré délimitant un pokémon pour afficher ses détails.

### [Détails du Pokémon](https://github.com/Florian00000/ecf_20-03-2024/blob/main/Ecf_PokeApi/src/screens/DetailsPokemonScreen.jsx)

La page de détails affiche une image plus grande du pokémon, ses types ainsi que ses statistiques de base.

<img src='https://raw.githubusercontent.com/Florian00000/ecf_20-03-2024/main/screenshots/Screenshot_1711034467.png' alt="detailNonCapturé" width="300"/>

Si la pokéball en bas à droite de l'écran est blanche, cela indique que le pokémon n'a pas encore été capturé. Si elle est noire c'est que le pokémon est capturé.

<img src='https://raw.githubusercontent.com/Florian00000/ecf_20-03-2024/main/screenshots/Screenshot_1711034471.png' alt="detailCapturé" width="300"/>

### [Ecran de recherche](https://github.com/Florian00000/ecf_20-03-2024/blob/main/Ecf_PokeApi/src/screens/SearchScreen.jsx)

Pour accéder à l'écran de recherche, il faut cliquer sur la bottomTab Rechercher.  
De là il est possible de rechercher un pokémon par son nom ou son id. L'utilisateur peut également rechercher par type de pokémon (comme présenté sur la capture d'écran), ce qui affichera une liste avec tous les pokémons partageant ce type.

<img src='https://raw.githubusercontent.com/Florian00000/ecf_20-03-2024/main/screenshots/Screenshot_1711034444.png' alt="ecranRecherche" width="300"/>

### [Ma collection](https://github.com/Florian00000/ecf_20-03-2024/blob/main/Ecf_PokeApi/src/screens/PersonnalCollectionScreen.jsx)

Grâce à la bottomTab, l'utilisateur peut également accéder à sa collection. Cet écran utilise le même composant que la page d'accueil, mais il n'affiche que les pokémons capturés.

<img src='https://raw.githubusercontent.com/Florian00000/ecf_20-03-2024/main/screenshots/Screenshot_1711034481.png' alt="maCollection" width="300"/>