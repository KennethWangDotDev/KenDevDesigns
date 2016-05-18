---
title: Randomness in Competitive Multiplayer Games
layout: blog-post
root: blog
nav-blog: true
date: 2014-05-18
collection:
  - blog
  - gamedesign

thumbnail: blog/randomness-competitive-multiplayer-games/thumbnail.png

description: "What is the role of randomness in competitive multiplayer games and eSports? Is it a good thing or is it a bad thing?"
---


March 2014: The [SeatStory Cup ][1]took place with a $15,000 prize pool for Hearthstone. April 2014: [DreamHack Bucharest][2] included Hearthstone with a $10,000 prize pool. [Hearthstone][3], a digital card-collecting-game, is eSport’s newest icon. However, players of the game will quickly discover that it revolves around the element of chance. At the start of every game, what you may randomly receive in your starting hand often decides the entire game. You may start with the perfect cards with the perfect mana curve and easily win, or you may get the expensive cards that you can’t play and get destroyed.

When the SeatStory Cup featuring Hearthstone was announced with $15,000 in cash prizes, people were shocked! They doubted that Hearthstone, a game whose foundations were built upon randomness, could truly be played in a true competitive setting where huge amounts of money was involved. They were wrong though: SeatStory Cup was a huge success and its tens of thousands of viewers thoroughly loved it. This surprising result begs the questions: *What is the role of randomness in competitive multiplayer games and eSports? Is it a good thing or is it a bad thing?* This article will attempt to answer these questions.

In game design theory, *fun* is said to stem from the discovery of the unknown and from exciting surprises. Randomness thus is often successfully employed in single player games to provide players with *fun*. However, the situation gets complicated in competitive multiplayer games. There are now multiple players, and an advantage on one side means that the other side is at an disadvantage. Designing randomness in competitive multiplayer games is tricky, and the failure of many studios to do so successfully has created a stigma that randomness has a negative effect in competitive multiplayer games. That stigma is incorrect. **When done correctly, randomness still equates to fun, and has a powerful and positive effect on multiplayer competitive games.**

I believe that randomness can either be “good randomness”or “bad randomness”. When I wrote “when done correctly”earlier, I am referring to “good randomness”.  Here is my definition for it:

**Good randomness**: a factor that produces an uncertain outcome, which players can anticipate and manipulate around; or that the actions of the players directly or indirectly affect the chances of any of the possible outcomes to occur.

And bad randomness is the opposite. **Bad randomness**: a factor that produces an uncertain outcome, which players cannot anticipate, manipulate around, or affect in any way.

<figure>
<img src="/assets/images/blog/randomness-competitive-multiplayer-games/1.jpg">
<figcaption>Mario Kart 64 is a multiplayer game that implements good randomness correctly</figcaption>
</figure>

*Good randomness* does the following:

**1. Increases the depth of skill.** Many people think that more randomness equates to less skill. It is actually the opposite of that. Here is an [excerpt from an article by Richard Garfield][4], creator of Magic the Gathering, that explains why:

>I believe that the standard dichotomy of luck vs. skill is misleading. This comparison implies that the more luck there is, the less skill and vice versa. To me, this is not at all true. The reward for skill depends on how much luck there is in a game, but a game that is mostly determined by luck can have an enormous amount of skill.
><cite>Richard Garfield</cite>

A couple of examples will demonstrate this. The first is rando-chess, which is played as standard chess, but after each turn you roll two dice. Roll 12 and you win! This game has as much skill as chess, but also a lot more luck and much less reward for skill. The second example is pikanumber, in which each player holds out a number of fingers; whoever holds out more wins. There isn't any luck in this game and not much skill, but there is a very high reward for what little skill there is: you never lose. Skillful players will always draw (unless one has more fingers than the other).

The amounts of skill and luck in a game are unrelated, though they have a related influence on the game's outcome. If you want to minimize luck, you should play the game as many times as possible. A beginner has a good chance of beating anyone in a single hand of poker. But string the hands into sessions and the sessions into seasons of poker, and the more skillful player will consistently win.”

When *good randomness* is implemented, it:

1. **Increases the depth of skill as opposed to lowering it**. It forces players to take calculated risks, and to take into account all possibilities of a certain random event.
2. **Broadens the audience range.** With randomness, there is a chance that a worse player can overcome a better player. This is very newcomer-friendly as they now have a chance of winning against better players.
3. **Increases the tension.** Uncertain outcomes naturally leads to tension. Tension makes a game very fun to spectate, which is an defining quality of any eSports game.
4. **Increase game variety.** When the same game is played over and over again, the gameplay gets boring. Having a random setup each time makes every game unique and different.

It is also important to note that randomness does not only exist in computer-calculated RNG. Randomness also exists in the form of hidden information. For example, fog-of-war in RTS games, or the position of your opponents in FPS games.

### Case Study 1: Hearthstone

Hearthstone is a successful competitive multiplayer game because it implements *good randomness* correctly. The most obvious example is the deck order —what card you draw every turn. Although it is indeed completely randomized, it is *good randomness* because it is ultimately the players that decide the content of the deck. Players can control what sort of cards they will draw, and anticipate the probabilities of what their next card will be. Hearthstone also lets player control their starting hand by letting players “mulligan”unwanted cards.

Hearthstone uses randomness to increase the depth of skill (*players must take calculated risks all the time, like whether it is better to attack the enemy hero or his minions*), to broaden the audience range (*beginners have a very good chance at winning versus an more experienced player if they get the perfect starting hand*), to increase the tension (*uncertainty exists nearly at every point in the game*), and to increase game variety (*every game is different due to the randomized deck orders of you and the opponent*)

Hearthstone, although a relatively new game, is now one of the most popular games for both casual and competitive gamers. It is also one of the most streamed and viewed games on Twitch, falling behind League of Legends and Dota 2.

### Case Study 2: Counter Strike Global Offensive

<figure>
<img src="/assets/images/blog/randomness-competitive-multiplayer-games/2.jpg">
<figcaption>A player watching a position in CS:GO</figcaption>
</figure>

Where Hearthstone is almost completely computer-randomized, the scenarios in CS:GO is almost completely randomized by hidden information existing in the form of the positions and strategies of enemy players. You must use knowledge and past experience to anticipate where enemies might be and play around them. There are also multitudes of different strategies a team can utilize, increasing game variety.

CS:GO is full of tension, and is also one of the most streamed and viewed games on Twitch and is an icon of eSports.

### Case Study 3: Dota 2

<figure>
<img src="/assets/images/blog/randomness-competitive-multiplayer-games/3.jpg">
<figcaption>Pseudo-random distribution graph for attack procs</figcaption>
</figure>

Dota 2 is an interesting case because it uses something called a [Pseudo-random distribution][6] for calculating randomness. For each time an effect doesn’t trigger due to randomness, the probability of it triggering increases. This is especially helpful in reducing players’frustrations of an effect not triggering in multiple instances. League of Legend employs a “effect triggers every X instances” instead, which is another helpful alternative.

### Case Study 4: Street Fighter 2

Almost all aspects of SF2 was [**randomized**][7], from damage output to stun time. Needless to say, this feature was not well received and it was completely removed in future games. It is considered *bad randomness* because players have no control at all over the randomness, and often times cannot play around it.

### Additional Tips on Randomness

<figure>
<img src="/assets/images/blog/randomness-competitive-multiplayer-games/4.jpg">
<figcaption>Magic: The Gathering is a competitive multiplayer game that implements randomness very well and has very large competitive tournament scene</figcaption>
</figure>

Mark Rosewater, the head designer of Magic: The Gathering has also [**written an interesting article on randomness**][8]. His article is **definitely worth the entire read** for any game designers. In the article, he gives the tips (these tips are elaborated in his article):

  1. Make randomness lead to upside.
  2. Give players the chance to respond to randomness.
  3. Allow players to manipulate the source of the randomness.
  4. Avoid icons of randomness.

Another tip that I would add is to design randomness in a way that has a low impact in the game. Having randomness decide major game events often leads to frustration players since they feel a lack of control.

Richard Garfield, the man who probably is most knowledgable about randomness in game design, has also made a case for there to be *less* randomness as a game matures. He argues that randomness is pivotal for a game when it is new, but once its player base centers around the intermediate and expert skill levels, making the game less random will be better. Experts of any game play less for fun, and more for the competition. They want the better player to always win, and what decides the winner to be skill only. When the majority of the player base are around the expert range, patching the game to reduce randomness might be a good idea.

### Closing Words

So let’s answer the questions proposed in the beginning: *What is the role of randomness in competitive multiplayer games and eSports? Is it a good thing or is it a bad thing?*

Randomness is a tool to help a competitive multiplayer increase the depth of skill, broaden its audience range,  increase the tension, and increase the game variety. It is a tool to help a game mature, and once it has matured and its player base are all experts, the designers should consider reducing randomness to cater to them. Randomness is a great thing that exists in virtually very eSports game.


 [1]: http://wiki.teamliquid.net/hearthstone/SeatStory_Cup
 [2]: http://wiki.teamliquid.net/hearthstone/2014_DreamHack_Open/Bucharest
 [3]: http://us.battle.net/hearthstone/en/?-
 [4]: http://www.wizards.com/magic/magazine/Article.aspx?x=mtg/daily/feature/119
 [5]: http://www.kendevblog.com/wp-content/uploads/2014/05/Screen-Shot-2014-05-18-at-12.47.16-PM.png
 [6]: http://dota2.gamepedia.com/Pseudo-random_distribution
 [7]: http://sonichurricane.com/articles/sf2randomness.html
 [8]: http://www.wizards.com/magic/magazine/article.aspx?x=mtg/daily/mm/37