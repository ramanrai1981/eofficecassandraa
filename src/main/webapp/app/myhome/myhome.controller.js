(function() {
    'use strict';

    angular
        .module('eofficeApp')
        .controller('MyHomeController', MyHomeController);

    MyHomeController.$inject = ['$scope', 'Principal', 'LoginService', '$state', 'Organisation'];

    function MyHomeController ($scope, Principal, LoginService, $state, Organisation) {
        var vm = this;
        vm.account = null;
        vm.isAuthenticated = null;
        vm.login = LoginService.open;
        vm.register = register;
        $scope.$on('authenticationSuccess', function() {
            getAccount();
        });

        getAccount();

        loadAll();

                function loadAll() {
                    Organisation.query(function(result) {
                        vm.organisations = result;
                        vm.searchQuery = null;
                    });
                }
        function getAccount() {
            Principal.identity().then(function(account) {
                vm.account = account;
                vm.isAuthenticated = Principal.isAuthenticated;
            });
        }
        function register () {
            $state.go('register');
        }
    }
})();
