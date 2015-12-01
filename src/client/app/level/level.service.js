(function() {
    'use strict';

    angular
        .module('app.level')
        .service('levelService', levelService);

    levelService.$inject = ['enemyService'];

    /* @ngInject */
    function levelService(enemyService) {
        this.mainMessage = '';

        this.Level = function() {
            this.checkLength = function() {
                console.log(this.defaultAscii[0].length);
            },
            this.spawnMore = true;
        };

        //treeone
        this.treeOne = new this.Level();
        this.treeOne.spawnMore = false;
        this.treeOne.enemySpawn = [141, 21];
        this.treeOne.playerSpawn = [0, 22];
        this.treeOne.enemyArray = [enemyService.Tree];
        this.treeOne.name = 'Forest Approach';
        this.treeOne.prev = 'mainMap';
        this.treeOne.prevName = 'Map';
        this.treeOne.defaultAscii = ["      .'           './   \\    .'\\      /                            /                                                                                                ",
                              "    /               \\    \\ .'   \\    /                            /                                                                                                  ",
                              "  .'                      /      '../               //\\\\        .'                                                                                                   ",
                              " /                 .     /         /               ///\\\\\\    . /                                                                                                     ",
                              "/      ^           T    /                        /////\\\\\\\\   T       ^                                                                                               ",
                              "   ^   T    .    ^               .       ^      //////\\\\\\\\\\      .   T                                                                                               ",
                              "   T        T    T     ^     .   T       T  //////////\\\\\\\\\\\\\\\\\\  T            ^                                                                                      ",
                              "     / \\              / \\   / \\     / \\       /// -- /\\ -- \\\\\\                T                                                                                      ",
                              ".     |      / \\       |     |       |    ////////////\\\\\\\\\\\\\\\\\\\\\\     / \\                                                                                            ",
                              " \\            |             ^     .       ////////////\\\\\\\\\\\\\\\\\\\\\\\   . |    ^                                                                                        ",
                              " \\    / \\                  / \\   / \\        //////////\\\\\\\\\\\\\\\\\\\\    / \\    / \\                                                                                       ",
                              "| .   / \\  / \\   / \\      . |    / \\      //////////    \\\\\\\\\\\\\\\\\\    |      |                                                                                        ",
                              " / \\   |    |    / \\     / \\      |     //////// |        | \\\\\\\\\\\\\\\\ .      .                                                                                        ",
                              " /\ \   .          |     /   \\                   ,|   __   |.        / \\    / \\                                                                                       ",
                              "  |   / \\         .     /   \\      .        __.'_|  /__\\. | \\__     / \\    / \\                                                                                       ",
                              "^     / \\        / \\      |       / \\     ,'__.'.  \\ \\ / \\|__  \\,.   |    . |                                                                                        ",
                              " \\     |    /\\   / \\   .          / \\    .     / \\ / / / \\   \\___ \\      / \                                                                                         ",
                              " \\    ^    /  \\   |   / \\          |    / \\    / \\ \\/   |     ^  \\/      / \                                                                                         ",
                              "|    / \\   /  \\  .    / \\      ^        / \\     |            / \\      .   |  .^.                     .                                       ^                       ",
                              "     / \\    ||  / \\    |      / \\        |           .       / \\     / \\    /   \\                   / \\                                     / \                      ",
                              "      |         / \\          /   \\                  / \\       |     /   \\   /   \\                   / \\                                     / \                      ",
                              "                / \\          /   \\                  / \\             /   \\     |             _________|___________         --------------  ___|_                      ",
                              "_________________|_____________|_____________________|________________|___________----------------------------------------              ----------                   ",
                              "------------------------------------------------------------------------------------                                                              -------------------"];
        // this.treeOne.ascil = ["                                    ",
        //                       "------------------------------------"];

        this.treeOne.spawnAtStart = [[17, 22], [31, 22], [53, 22], [70, 22], [101, 21], [141, 21]];



        //treetwo
        this.treeTwo = new this.Level();
        this.treeTwo.specialEnd = 95;
        this.treeTwo.enemyArray = [enemyService.TreeWarrior];
        this.treeTwo.enemySpawn = [89, 22];
        this.treeTwo.playerSpawn = [0, 21];
        this.treeTwo.name = 'Tree Two';
        this.treeTwo.prev = 'mainMap';
        this.treeTwo.prevName = 'Map';
        this.treeTwo.defaultAscii = ["       /         \\   .^.               .'                               //////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\  ",    
                              "     .'           './   \\    .'\\      /                            ///////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\",      
                              "    /               \\    \\ .'   \\    /                            /////////////////////////     \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\",            
                              "  .'                      /      '../                       /////////////////////////////          \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\",     
                              " /                 .     /         /                    ///////////////////////////////              \\\\\\\\\\\\\\\\\\\\\\\\\\\\",
                              "/                  T    /                                                        |            |           |        ",
                              "   ^        .    ^               .                                               |            |           |        ",
                              "   T  .     T    T           .   T                   .                        ^  |                        |        ",
                              "     / \\      .             / \\            .        / \\     .          .      T .'   |             |      '.       ",
                              ".     |      / \\      .      |         .  / \\       / \\    / \\        / \\       |    |             |       |       ",
                              " \\     .      |      / \\    ^     .   / \\  |         |     / \\       . |    ^   |                          |       ",
                              " \\    / \\         ^  / \\  ./ \\   / \\  / \\        .          |       / \\    / \\  |           |              |       ",
                              "| .   / \\     ^  / \\  |  / \\|    / \\   |   .    / \\                  |      |   |                          |       ",
                              " / \\   |  .  / \\ / \\   . / \\   .  |   .   / \\   / \\     ^            .      .  .'                          '.      ",
                              " / \\   .  / \\/ \\  |   / \\ |   / \\    / \\  / \\    |     / \\          / \\    / \\ |        |               |   |      ",
                              "  |   / \\ / \\ |   .   / \\  .  / \\  . / \\   |           / \\          / \\    / \\ |        |               |   |      ",
                              "^     / \\  |     / \\   |  / \\  |  / \\ |          ^      |            |      ,..|                 |      |   |      ",
                              " \\     |    /\\   / \\   .  / \\  .  / \\    .      / \\          ^         ___.'   |                 |          |      ",
                              " \\         /  \\   |   / \\  |  / \\  |    / \\    /   \\        / \\ _____.'       .'   |      ________          '.     ",
                              "|          /  \\       / \\     / \\       / \\    /   \\        / \\ '.____.,'--__.|    |     /        \\          |'.   ",
                              "            ||         |       |         |       |           |                |          |        |          |  \\  ",
                              "                                                                                           _______/           |   '",
                              "__________________________________________________________________________________________-                        ",
                              "-------------------------------------------------------------------------------------------------------------------"];
        


        this.bridge = new this.Level();
        this.bridge.enemyArray = [enemyService.TreeWarrior];
        this.bridge.playerSpawn = [0, 15];
        this.bridge.enemySpawn = [150, 15];
        this.bridge.name = 'Bridge';
        this.bridge.prev = 'mainMap';
        this.bridge.prevName = 'Map';
        this.bridge.defaultAscii =  ["--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
                              "  / \\    / \\                          .           /                                                             _'                                                                         .........                            ",                                                                                                                                                                                                                  
                              "  / \\     |         .                / \\         /                                               ~~~           / \\_                                                                    ..''         ''..                        ",
                              "   |               / \\       .       / \\        /                     ~~                                      /    \\  /                      |-                                                                                 ",
                              "           .       / \\      / \\       |        /      ~~~                                                   .'     /\\/                      -|                                                                                  ",
                              "          / \\       |       / \\               /                                                           .'      /  \\                       |                    -|                                              -|            ",
                              "          / \\                |    ^          /                                    ~~~                    /        \\  /                                             |-                                              |-           ",
                              "    .      |                     / \\       .'                                                           /         /\\                                               |                                               |            ",                                     
                              "   / \\                 .         / \\      /                                                           .'         /  \\/                 ,......                                            -|                                    ",
                              "   / \\                / \\         |      /                                                           /              /              .'''       ''...                                        |-                                   ",
                              "    |         ^       / \\               /                                                           /                                                                                      |                                    ",
                              "             / \\       |  .           .'                      ~~~                                 .'                                          |-                                                                                ",
                              "   /\\        / \\         / \\         /                                                           /                                           -|                                                                                 ",
                              "  /  \\        |         /   \\       /                                                           /                                             |                                                                                 ",
                              "  /  \\                  /   \\      /                                               ~~~         /                                                                                                       _________________        ",
                              "   ||                     |       /                                                          _/      ,..'''''''''''''____                                         ......................''''''''''''''''''.................''__  ",                                                            
                              "                                .'          ~~~~                                           .'     ,.'                '''''''''''''''''''''''''''''''''''''''''''''                                                         ''''''",                                                                                                                                                                                                                                                                 
                              "'''''''____                   _________________________________________________________________,.'                                                                                                                              ",                                                                                
                              "       ''''''''''''''''''''''/   /   /   /   /   /   /   /   /   /   /   /   /   /   /   /   / /                                                    |-                                                                          ",
                              "  .                         /-----------------------------------------------------------------/                                -|                  -|                           -|                                              ",
                              " / \\        .             .'         //\\\\                // \\\\                 //\\\\          /                                  |-                  |                            |-                              |-             ",
                              " / \\       / \\          .'                                                                 .'                                   |                                                |                              -|              ",
                              "  |        / \\         /                       ~~                                         /            |-                                                                                                        |              ",
                              "            |         /                                          ~~~~                   .'             |                                                                                                                        ",
                              "--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------"];



        this.snow = new this.Level();
        this.snow.enemyArray = [enemyService.TreeWarrior];
        this.snow.playerSpawn = [0, 10];
        this.snow.enemySpawn = [10, 10];
        this.snow.name = 'Snow';
        this.snow.prev = 'mainMap';
        this.snow.prevName = 'Map';
        this.snow.defaultAscii = ["                                                                                                                                                           \\                                       ",               
                                  "                                                                                                                                                            \\  /____                               ",               
                                  "                                                                                                                                                             \\/     \\____    ______                ",                            
                                  "                                                                                                                                                                         \\  /      \\_____          ",                           
                                  "                                                                                                                                                                          \\/             \\     ____",
                                  "                                                                                                                                                                                          \\  /     ",         
                                  "                                                                                                                                                                                           \\/      ",                
                                  "                                                                                                                                                                                                   ",               
                                  "                                                                                                                                                                                                   ",             
                                  "                                                ________                                                                                                                                           ",             
                                  "                                      ___ -------------------__________                                                                                                                            ",             
                                  "                   ________________--------                  -----------------____                                                                                                              /\\ ",                  
                                  "-----------------------------------                                           --------______                                                                            /\\         /\\       ___/  \\", 
                                  "                                                                                      -----------___                                                        /\\     ____/  \\_______/  \\_____/       ", 
                                  "                                                                                                 ------___________________                    _____--------/  \\___/                                ",
                                  "                                                                                                       --------------------------------------------                                                ",
                                  "                                                                                                                                                                                                   ",
                                  "                                                                                                                                                                                                   ",
                                  "                                                                                                                                                                                                   ",
                                  "                                                                                                                                                                                                   "]



        this.levelDictionary = [];
        this.levelDictionary['treeOne'] = this.treeOne;
        this.levelDictionary['treeTwo'] = this.treeTwo;
        this.levelDictionary['bridge']  = this.bridge;

        this.switchCurrentLevel = function(activeLevel) {
            this.currentLevel = this.levelDictionary[activeLevel];
        }

    }
})();