import { Injectable } from '@angular/core';
import { Question } from '../models/Question';
import { CategoriesService } from './categories.service';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  questionsCult: Question [] = [
    {
      type: "1000",
      enonce: "Sur combien de pays différents, s'étend la forêt Amazonienne ?",
      status: true,
      url: "../../assets/image/amazonienne.jpg",
      result: "9"
    },

    {
      type: "800",
      enonce: "A quel artiste doit-on la peinture connue sous le nom de 'La Cène' ?",
      status: true,
      url: "../../assets/image/cene.jpg",
      result: "Leonardo Da Vinci"
    },
    {
      type: "600",
      enonce: "Combien de lettres comporte l'alphabet cyrillique ?",
      status: true,
      url: "../../assets/image/russie.jpg",
      result: "30 lettres"
    },
    {
      type: "400",
      enonce: "En France, sous quel président la peine de mort a-t-elle été abolie ?",
      status: true,
      url: "../../assets/image/peine.jpg",
      result: "François Mitterand"
    },

    {
      type: "200",
      enonce: "Quelle bête Hercule a-t-il combattu pour sa 12ème et dernière tâche ?",
      status: true,
      url: "../../assets/image/hercule.jpg",
      result: "Cerbère, le chien à trois têtes"
    },

    {
      type: "100",
      enonce: "Quel est le plus petit pays au monde ?",
      status: true,
      url: "../../assets/image/petit.jpg",
      result: "Le Vatican"
    },

  ]

  questionsMusic : Question[] = [
    {
      type: "1000",
      enonce: "Compléter les paroles de cette musique...",
      status: true,
      url: "../../assets/image/boulevard.jpg",
      result: "si on ne s'était jamais vu je matterais tes fesses à ton insu"
    },

    {
      type: "800",
      enonce: "Compléter les paroles de cette musique...",
      status: true,
      url: "../../assets/image/indochine.jpg",
      result: "Et toi et moi, on etait tellement surs et on se disait quelques fois"
    },

    {
      type: "600",
      enonce: "Quel est le titre et l'artiste de cette musique ?",
      status: true,
      url: "../../assets/image/ecoute.jpg",
      result: "Superstion de Stevie Wonder"
    },

    {
      type: "400",
      enonce: "Quel est le titre et l'artiste de cette musique ?",
      status: true,
      url: "../../assets/image/ecoute.jpg",
      result: "Don't stop me now de Queen"
    },

    {
      type: "200",
      enonce: "De quel film cette musique est-elle le générique ?",
      status: true,
      url: "../../assets/image/generique.jpg",
      result: "Jurassik Park"
    },

    {
      type: "100",
      enonce: "De quelle film cette musique est-elle le générique ?",
      status: true,
      url: "../../assets/image/generique.jpg",
      result: "Grease"
    },

  ]

  questionsSports: Question[] = [
    {
      type: "1000",
      enonce: "Combien de français partcipe à la saison 2019-2020 de la League NBA ?",
      status: true,
      url: "../../assets/image/basket.jpg",
      result: "11"
    },

    {
      type: "800",
      enonce: "Depuis le début de l'ère Open (1968), combien de joueurs(ses) français(es) ont remporté un Grand Chelem?",
      status: true,
      url: "../../assets/image/tennis.jpg",
      result: "4 pour 5 victoire au total"
    },

    {
      type: "600",
      enonce: "Quel français est le plus titré de l'histoire des Jeux Olympiques (hiver - été confondus) ?",
      status: true,
      url: "../../assets/image/phelps.jpg",
      result: "Martin Fourcade"
    },

    {
      type: "400",
      enonce: "Dans quelle ville, ont pris place les premiers jeux olympiques en 1896 ?",
      status: true,
      url: "../../assets/image/jo.jpg",
      result: "Athènes"
    },

    {
      type: "200",
      enonce: "Quel footballeur a le plus de followers sur instagram ?",
      status: true,
      url: "../../assets/image/insta.png",
      result: "Cristiano Ronaldo"
    },

    {
      type: "100",
      enonce: "De quel pays Usain Bolt est-il originaire ?",
      status: true,
      url: "../../assets/image/bolt.jpg",
      result: "Jamaïque"
    },
  ]

  questionsBrain: Question[]= [
    {
      type: "1000",
      enonce: "Quelle invention datant de l'antiquité a permis aux gens de voir à travers les murs ?",
      status: true,
      url: "../../assets/image/rayon.jpg",
      result: "la fenêtre"
    },

    {
      type: "800",
      enonce: "Parmis les outils pouvant indiquer le temps, celui contenant le moins de partie amovible est le cadran solaire. Quel est celui en contenant le plus ?",
      status: true,
      url: "../../assets/image/cadran.jpg",
      result: "Le Sablier"
    },
    {
      type: "600",
      enonce: "Deux personnes dinent ensemble. Elles commandent toutes les deux des ice Tea. La première boit très vite et fini 5 verres pendant que la deuxième n'en boit qu'un seul. La personne ayant bu un seul verre décède alors que l'autre survi. Tous les verres étaient empoisonnés. Comment la personne ayant bu le plus de verre a-t-elle pu survivre ?",
      status: true,
      url: "../../assets/image/diner.jpg",
      result: "Le poison était dans les glaçons"
    },

    {
      type: "400",
      enonce: "Deux pères et deux fils sont dans une voiture. Cependant, seulement trois personnes sont présentes dans cette voiture. Comment est-ce possible ?",
      status: true,
      url: "../../assets/image/modern.jpg",
      result: "il y a trois génération dans la voiture"
    },

    {
      type: "200",
      enonce: "Gare toi!",
      status: true,
      url: "../../assets/image/car.jpg",
      result: "87"
    },

    {
      type: "100",
      enonce: "Nous cherchons un mot dont : les deux premières lettres signifient homme en anglais, les trois premières lettres signifient femme en anglais, les quatre premières lettres désignent un grand homme alors que ce mot désigne une grande femme. Quelle est ce mot ?",
      status: true,
      url: "../../assets/image/devinette.png",
      result: "Heroïne"
    },
  ]


  questionsRandom: Question[] = [
    {
      type: "1000",
      enonce: "Ou peut-on trouver la mer de transquilité ?",
      status: true,
      url: "../../assets/image/tranquille.jpeg",
      result: "Sur la lune"
    },

    {
      type: "800",
      enonce: "Si l'on creusait un tunnel longiligne en partant de Wellington en Nouvelle-Zélande jusqu'à débouché de l'autre côté de la terre. Dans quel pays européen arriverait-on ?",
      status: true,
      url: "../../assets/image/tunnel.gif",
      result: "Espagne"
    },

    {
      type: "600",
      enonce: "'Cénosillicaphobie' est la peur de...",
      status: true,
      url: "../../assets/image/peur.gif",
      result: "une bière vide"
    },

    {
      type: "400",
      enonce: "Combien de coeurs a un octopus ?",
      status: true,
      url: "../../assets/image/octopus.gif",
      result: "3"
    },

    {
      type: "200",
      enonce: "De quelle couleur étaient les pyramides de Gizeh à l'origine ?",
      status: true,
      url: "../../assets/image/pyramide.jpg",
      result: "Blanches"
    },

    {
      type: "100",
      enonce: "Qui est la personne sur cette image ?",
      status: true,
      url: "../../assets/image/poutine.webp",
      result: "Vladimir Poutine"
    },
  ]


  questionsNetflix: Question[] = [
    {
      type: "1000",
      enonce: "Quel film a été incorrectement annoncé vainqueur de la catégorie 'Meilleur Film' durant la cérémonie des Oscars de 2017 ?",
      status: true,
      url: "../../assets/image/wrong.gif",
      result: ""
    },

    {
      type: "800",
      enonce: "Combien de princesses Disney ont un prénom commençant par la lettre 'A' ? ",
      status: true,
      url: "../../assets/image/princess.png",
      result: "3"
    },
    {
      type: "600",
      enonce: "Dans Matrix, Neo prend-il la pilule rouge ou la pilule bleue ?",
      status: true,
      url: "../../assets/image/pilule.JPG",
      result: "Pilule rouge"
    },

    {
      type: "400",
      enonce: "Quelle série populaire de la chaîne NBC, était à l'origine nommée 'Insomnia Café' ?",
      status: true,
      url: "../../assets/image/nbc.jpg",
      result: "Friends"
    },

    {
      type: "200",
      enonce: "Dans quel thriller de 1976, le personnage de Robert de Niro prononce la phrase désormais culte : 'You talkin' to me?' ?",
      status: true,
      url: "../../assets/image/deniro.jpg",
      result: "Taxi Driver"
    },
    {
      type: "100",
      enonce: "Combien d'espèces de Pokemon étaient présentes dans la première génération ?",
      status: true,
      url: "../../assets/image/pokemon.jpg",
      result: "151"
    },

  ]

  quizes = [this.questionsCult, this.questionsBrain, this.questionsMusic, this.questionsNetflix, this.questionsRandom, this.questionsSports]

  constructor(
  ) { }

  activeQuestion() {
    this.quizes.forEach(quiz => {
      quiz.forEach(question => {
        question.status = true;
      })
    })
  }
}
