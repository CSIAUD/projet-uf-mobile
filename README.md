# Projet Les écuries de persévère

## Projet :
#### Réalisation d'un site vitrine pour les écuries (partie membre) :
- Reprise de l'ancien site : [https://www.ecuriesdepersevere.com](https://www.ecuriesdepersevere.com "https://www.ecuriesdepersevere.com")
- Réutilisation de la charte graphique
- Ajout d'un accès à la partie membre

#### Réalisation d'un site de gestion pour les écuries :
- Réutilisation de la charte graphique du site vitrine
- Création du système de prise de RDV
- Création de la partie membre :
	- Pour les propriétaires
	- Pour les professionnels de santé
- Création d'un espace "mes documents" pour les factures et autres

#### Réalisation d'une application pour la partie gestion des écuries :
- Identique au site de gestion des écuries

### Technologies utilisées :
- Front-end => [IONIC](https://ionicframework.com "IONIC") + [Angular](https://angular.io "AngularJS") + [TailwindCSS](https://tailwindcss.com "TailwindCSS")
- Back-end / API / => Strapi
- Base de données => MySQL

<br>
---
<br>

# Lancer le projet
## Installations
### Après avoir récupéré le projet
Dans un CMD dans le dossier du projet :

#### Installation de npm

```sh
npm install 
```

#### Installation de IONIC

SI vous avez déjà ionic :
```sh
$ npm uninstall -g ionic
$ npm install -g @ionic/cli
```
SINON
```sh
$ npm install -g @ionic/cli
```

#### Installation de TailwindCSS

```sh
npm install -D tailwindcss
```
<br>
---
<br>
## Lancements
Dans un CMD dans le dossier du projet :

Lancement de TailwindCSS

```sh
npx tailwindcss build -i .\src\assets\css\style.css -o .\src\assets\css\output.css --watch
```
---
Dans un second CMD dans le dossier du projet :

Lancement de IONIC

```sh
ionic serve
```
OU (pour le partager sur le réseau)

```sh
ionic serve --external
```
<br>
<br>

## Contributeurs ✨

<table><tr><td align="center"><a href="https://github.com/CSIAUD"><img src="https://avatars.githubusercontent.com/u/74303569?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Cyprien SIAUD<br>💻🎨⚠️</b></sub></a></td><td align="center"><a href="https://github.com/Benji290402"><img src="https://avatars.githubusercontent.com/u/71979279?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Benjamin VIAL -- SIMON<br>💻🎨⚠️</b></sub></a></td><td align="center"><a href="https://github.com/Mateopalm"><img src="https://avatars.githubusercontent.com/u/73243815?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Matéo PALMIERI<br>⚠️</b></sub></a></td></tr></table>
