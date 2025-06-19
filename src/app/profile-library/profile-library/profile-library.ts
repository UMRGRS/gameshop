import { Component } from '@angular/core';
import { Card } from "../card/card";

@Component({
  selector: 'app-profile-library',
  imports: [Card],
  templateUrl: './profile-library.html',
  styleUrl: './profile-library.css'
})
export class ProfileLibrary {
  constructor() {}
  game1 = "Deltarune"
  game2 = "Elden Ring"
  game3 = "Terraria"
  game4 = "Dark Souls"
  game5 = "Stardew Valley"
  game6 = "Cities Skylines"
  game7 = "Lethal Company"
  game8 = "Grim Fandango"
  game9 = "Bioshock"
  game10 = "A Hat in Time"
  game11 = "Half-Life"
  game12 = "Portal"
  art1 = "deltarune.jpg"
  art2 = "eldenRing.jpg"
  art3 = "terraria.jpg"
  art4 = "darkSouls.jpg"
  art5 = "stardewValley.jpg"
  art6 = "citiesSkylines.jpg"
  art7 = "lethalCompany.jpg"
  art8 = "grimFandango.jpg"
  art9 = "bioshock.jpg"
  art10 = "aHatInTime.jpg"
  art11 = "halfLife.jpg"
  art12 = "portal.jpg"
  description1 = "Dive into the parallel story to UNDERTALE! Fight or spare your way through action-packed battles as you explore a mysterious world alongside an endearing cast of new and familiar characters. Chapters 1-4 will be available on launch, with more planned as free updates!"
  description2 = "Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between."
  description3 = "Dig, fight, explore, build! Nothing is impossible in this action-packed adventure game. Four Pack also available!"
  description4 = "Can you live through a million deaths and earn your legacy?"
  description5 = "You've inherited your grandfather's old farm plot in Stardew Valley. Armed with hand-me-down tools and a few coins, you set out to begin your new life. Can you learn to live off the land and turn these overgrown fields into a thriving home?"
  description6 = "Cities: Skylines is a modern take on the classic city simulation. The game introduces new game play elements to realize the thrill and hardships of creating and maintaining a real city whilst expanding on some well-established tropes of the city building experience."
  description7 = "A co-op horror about scavenging at abandoned moons to sell scrap to the Company."
  description8 = "Grim Fandango Remastered has the all the beautiful art and engaging story fans remember, but has also been remastered to look, sound, and control even better than the award-winning original release."
  description9 = "BioShock is a shooter unlike any you've ever played, loaded with weapons and tactics never seen."
  description10 = "A Hat in Time is a cute-as-heck 3D platformer featuring a little girl who stitches hats for wicked powers! Freely explore giant worlds and recover Time Pieces to travel to new heights!"
  description11 = "Named Game of the Year by over 50 publications, Valve's debut title blends action and adventure with award-winning technology to create a frighteningly realistic world where players must think to survive."
  description12 = "Portal™ is a new single player game from Valve. Set in the mysterious Aperture Science Laboratories, Portal has been called one of the most innovative new games on the horizon and will offer gamers hours of unique gameplay."
}
