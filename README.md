cs499
PAC-MAN

Overview

The player controls Pac-Man through a maze, eating pellets. When all pellets are eaten, Pac-Man is taken to the next stage. Four enemies (Blinky, Pinky, Inky and Clyde) roam the maze, trying to catch Pac-Man. If an enemy touches Pac-Man, a life is lost and the Pac-Man itself withers and dies. When all lives have been lost, the game ends. Pac-Man is awarded a bonus life at 10,000 points by default.

───▄████▄─────────────────

──███▄█▀──────────────────

─▐████──█──█──█──█──█──█──

──█████▄──────────────────

───▀████▀─────────────────

Near the corners of the maze are four larger, flashing power pellets that provide Pac-Man with the temporary ability to eat the enemies. The enemies turn deep blue, reverse direction and usually move more slowly. When an enemy is eaten, its eyes remain and return to the center box where it is regenerated in its normal color. Blue enemies flash white to signal that they are about to become dangerous again and the length of time for which the enemies remain vulnerable varies from one stage to the next, generally becoming shorter as the game progresses. In later stages, the enemies go straight to flashing, bypassing blue, which means that they can only be eaten for a short amount of time, although they still reverse direction when a power pellet is eaten; in even later stages, the ghosts do not become edible, but they still reverse direction.

──▒▒▒▒▒────▄████▄─────

─▒─▄▒─▄▒──███▄█▀──────

─▒▒▒▒▒▒▒─▐████──█──█──

─▒▒▒▒▒▒▒──█████▄────── 

─▒─▒─▒─▒───▀████▀─────

The enemies in Pac-Man are known as "ghosts", Despite the seemingly random nature of the enemies, their movements are strictly deterministic, which players have used to their advantage, each enemy with its own distinct personality in order to keep the game from becoming impossibly difficult or boring to play. The red enemy chases Pac-Man, and the pink and blue enemies try to position themselves in front of Pac-Man, the orange enemy's behavior is random.

──▒▒▒▒▒────▒▒▒▒▒────▒▒▒▒▒────▒▒▒▒▒── 

─▒─▄▒─▄▒──▒─▄▒─▄▒──▒─▄▒─▄▒──▒─▄▒─▄▒─

─▒▒▒▒▒▒▒──▒▒▒▒▒▒▒──▒▒▒▒▒▒▒──▒▒▒▒▒▒▒─

─▒▒▒▒▒▒▒──▒▒▒▒▒▒▒──▒▒▒▒▒▒▒──▒▒▒▒▒▒▒─

─▒─▒─▒─▒──▒─▒─▒─▒──▒─▒─▒─▒──▒─▒─▒─▒─

Minimum Regquirements

player controlled pacman pacman eats pellets ghost track pacman ghost collision lives score

Getting Started

Main window: appear after program lost contain a window and a playing field Reset Clear high score Exit

Title Screen: Auto displayed Name, logo, instructions on how to start/operate game

Rendering: Maze atleast 4 vertical and 4 horizontal lanes Atleast 2 ghosts Pac-dots Walls (that define the passages)

Text displayed: Current score Current high score both at top Lower corner -> number of lives

Control: Keyboard controlled Move according to arrows, speed constant Move w/o changing directions if no key pushed, stops if hits walls

Movement: All characters move along lanes, but can't go into unreachable areas When pacman passes a pac-dot or power pellet, the dot disappears

Animations: jaws open and close for pacman include some animation for ghosts some form of dieing animation for pacman

Ghost behavior (minimum): keep moving in same direction until they reach a crossing.. then pick a random direction and repeat

Game over: 1. when all pac-dots are eaten -> display a "congratulations" screen 2. if all lives lost -> game over screen 3. Press any key to remove these screens, return to title screen

Bonus features: clearly declare in documentation use of sound power pellet ghost box teleport tunnel (side to side and up to down) demo-mode (if title screen is displayed and no action performed)

Grading: - program = 65 % - documentation = 20 % UML diagrams explain classes and objects focus on inheritance and polymorphism if used data structures to store things like pac-dots and maze explain implementation for animations etc.. Include a Readme - code = 15 % uniform formatting classes and objects etc named properly explanatory comments throughout

Usage Examples

Contributing

Justin Harrison Tyler Dickerhoff
