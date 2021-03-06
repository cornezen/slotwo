(function() {
    'use strict';

    angular
        .module('app.monk')
        .service('monkService', monkService);

    monkService.$inject = ['messageService', 'progressService'];

    /* @ngInject */
    function monkService(messageService, progressService) {
    	var vm = this;
    	vm.progress = progressService.progress;

    	vm.train = function(type) {
   			//firt letter capital always just in case
   			type = type[0].toUpperCase() + type.slice(1);
   			var key = 'train' + type;
        if (type === 'Health') {
          type = 'Heal';
        }
        else if (type === 'Defense') {
          type = 'Block';
        }
        else if (type === 'Battle') {
          type = 'Berserk';
        }
   			vm.progress[key] = true;
   			vm.progress.canLearn = vm.progress.canLearn - 1;
   			messageService.updateMainMessage('You have learned ' + type + '!');
    	};
    }
})();