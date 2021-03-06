/**
 * Satellizer 0.11.2
 * (c) 2015 Sahat Yalkabov
 * License: MIT
 */
!function(e,t,n){"use strict";t.module("satellizer",[]).constant("satellizer.config",{httpInterceptor:!0,loginOnSignup:!0,baseUrl:"/",loginRedirect:"/",logoutRedirect:"/",signupRedirect:"/login",loginUrl:"/auth/login",signupUrl:"/auth/signup",loginRoute:"/login",signupRoute:"/signup",tokenRoot:!1,tokenName:"token",tokenPrefix:"satellizer",unlinkUrl:"/auth/unlink/",unlinkMethod:"get",authHeader:"Authorization",authToken:"Bearer",withCredentials:!0,platform:"browser",storage:"localStorage",providers:{google:{name:"google",url:"/auth/google",authorizationEndpoint:"https://accounts.google.com/o/oauth2/auth",redirectUri:e.location.origin||e.location.protocol+"//"+e.location.host,scope:["profile","email"],scopePrefix:"openid",scopeDelimiter:" ",requiredUrlParams:["scope"],optionalUrlParams:["display"],display:"popup",type:"2.0",popupOptions:{width:452,height:633}},facebook:{name:"facebook",url:"/auth/facebook",authorizationEndpoint:"https://www.facebook.com/v2.3/dialog/oauth",redirectUri:(e.location.origin||e.location.protocol+"//"+e.location.host)+"/",scope:["email"],scopeDelimiter:",",requiredUrlParams:["nonce","display","scope"],display:"popup",type:"2.0",popupOptions:{width:580,height:400}},linkedin:{name:"linkedin",url:"/auth/linkedin",authorizationEndpoint:"https://www.linkedin.com/uas/oauth2/authorization",redirectUri:e.location.origin||e.location.protocol+"//"+e.location.host,requiredUrlParams:["state"],scope:["r_emailaddress"],scopeDelimiter:" ",state:"STATE",type:"2.0",popupOptions:{width:527,height:582}},github:{name:"github",url:"/auth/github",authorizationEndpoint:"https://github.com/login/oauth/authorize",redirectUri:e.location.origin||e.location.protocol+"//"+e.location.host,optionalUrlParams:["scope"],scope:["user:email"],scopeDelimiter:" ",type:"2.0",popupOptions:{width:1020,height:618}},yahoo:{name:"yahoo",url:"/auth/yahoo",authorizationEndpoint:"https://api.login.yahoo.com/oauth2/request_auth",redirectUri:e.location.origin||e.location.protocol+"//"+e.location.host,scope:[],scopeDelimiter:",",type:"2.0",popupOptions:{width:559,height:519}},twitter:{name:"twitter",url:"/auth/twitter",authorizationEndpoint:"https://api.twitter.com/oauth/authenticate",redirectUri:e.location.origin||e.location.protocol+"//"+e.location.host,type:"1.0",popupOptions:{width:495,height:645}},live:{name:"live",url:"/auth/live",authorizationEndpoint:"https://login.live.com/oauth20_authorize.srf",redirectUri:e.location.origin||e.location.protocol+"//"+e.location.host,scope:["wl.emails"],scopeDelimiter:" ",requiredUrlParams:["display","scope"],display:"popup",type:"2.0",popupOptions:{width:500,height:560}}}}).provider("$auth",["satellizer.config",function(e){Object.defineProperties(this,{httpInterceptor:{get:function(){return e.httpInterceptor},set:function(t){e.httpInterceptor=t}},loginOnSignup:{get:function(){return e.loginOnSignup},set:function(t){e.loginOnSignup=t}},baseUrl:{get:function(){return e.baseUrl},set:function(t){e.baseUrl=t}},logoutRedirect:{get:function(){return e.logoutRedirect},set:function(t){e.logoutRedirect=t}},loginRedirect:{set:function(t){e.loginRedirect=t},get:function(){return e.loginRedirect}},signupRedirect:{get:function(){return e.signupRedirect},set:function(t){e.signupRedirect=t}},loginUrl:{get:function(){return e.loginUrl},set:function(t){e.loginUrl=t}},signupUrl:{get:function(){return e.signupUrl},set:function(t){e.signupUrl=t}},loginRoute:{get:function(){return e.loginRoute},set:function(t){e.loginRoute=t}},signupRoute:{get:function(){return e.signupRoute},set:function(t){e.signupRoute=t}},tokenRoot:{get:function(){return e.tokenRoot},set:function(t){e.tokenRoot=t}},tokenName:{get:function(){return e.tokenName},set:function(t){e.tokenName=t}},tokenPrefix:{get:function(){return e.tokenPrefix},set:function(t){e.tokenPrefix=t}},unlinkUrl:{get:function(){return e.unlinkUrl},set:function(t){e.unlinkUrl=t}},authHeader:{get:function(){return e.authHeader},set:function(t){e.authHeader=t}},authToken:{get:function(){return e.authToken},set:function(t){e.authToken=t}},withCredentials:{get:function(){return e.withCredentials},set:function(t){e.withCredentials=t}},unlinkMethod:{get:function(){return e.unlinkMethod},set:function(t){e.unlinkMethod=t}},platform:{get:function(){return e.platform},set:function(t){e.platform=t}},storage:{get:function(){return e.storage},set:function(t){e.storage=t}}}),t.forEach(Object.keys(e.providers),function(n){this[n]=function(o){return t.extend(e.providers[n],o)}},this);var n=function(n){e.providers[n.name]=e.providers[n.name]||{},t.extend(e.providers[n.name],n)};this.oauth1=function(t){n(t),e.providers[t.name].type="1.0"},this.oauth2=function(t){n(t),e.providers[t.name].type="2.0"},this.$get=["$q","satellizer.shared","satellizer.local","satellizer.oauth",function(e,t,n,o){var r={};return r.authenticate=function(e,t){return o.authenticate(e,!1,t)},r.login=function(e,t){return n.login(e,t)},r.signup=function(e){return n.signup(e)},r.logout=function(e){return t.logout(e)},r.isAuthenticated=function(){return t.isAuthenticated()},r.link=function(e,t){return o.authenticate(e,!0,t)},r.unlink=function(e){return o.unlink(e)},r.getToken=function(){return t.getToken()},r.setToken=function(e,n){t.setToken({access_token:e},n)},r.removeToken=function(){return t.removeToken()},r.getPayload=function(){return t.getPayload()},r.setStorage=function(e){return t.setStorage(e)},r}]}]).factory("satellizer.shared",["$q","$window","$location","satellizer.config","satellizer.storage",function(n,o,r,i,a){var u={},l=i.tokenPrefix?i.tokenPrefix+"_"+i.tokenName:i.tokenName;return u.getToken=function(){return a.get(l)},u.getPayload=function(){var t=a.get(l);if(t&&3===t.split(".").length){var n=t.split(".")[1],o=n.replace("-","+").replace("_","/");return JSON.parse(decodeURIComponent(escape(e.atob(o))))}},u.setToken=function(e,n){var o,u=e&&e.access_token;if(u&&(t.isObject(u)&&t.isObject(u.data)?e=u:t.isString(u)&&(o=u)),!o&&e&&(o=i.tokenRoot&&e.data[i.tokenRoot]?e.data[i.tokenRoot][i.tokenName]:e.data[i.tokenName]),!o){var s=i.tokenRoot?i.tokenRoot+"."+i.tokenName:i.tokenName;throw new Error('Expecting a token named "'+s+'" but instead got: '+JSON.stringify(e.data))}a.set(l,o),i.loginRedirect&&!n?r.path(i.loginRedirect):n&&t.isString(n)&&r.path(encodeURI(n))},u.removeToken=function(){a.remove(l)},u.isAuthenticated=function(){var e=a.get(l);if(e){if(3===e.split(".").length){var t=e.split(".")[1],n=t.replace("-","+").replace("_","/"),r=JSON.parse(o.atob(n)).exp;return r?Math.round((new Date).getTime()/1e3)<=r:!0}return!0}return!1},u.logout=function(e){return a.remove(l),i.logoutRedirect&&!e?r.url(i.logoutRedirect):t.isString(e)&&r.url(e),n.when()},u.setStorage=function(e){i.storage=e},u}]).factory("satellizer.oauth",["$q","$http","satellizer.config","satellizer.utils","satellizer.shared","satellizer.Oauth1","satellizer.Oauth2",function(e,t,n,o,r,i,a){var u={};return u.authenticate=function(t,o,u){var l="1.0"===n.providers[t].type?new i:new a,s=e.defer();return l.open(n.providers[t],u||{}).then(function(e){r.setToken(e,o),s.resolve(e)}).catch(function(e){s.reject(e)}),s.promise},u.unlink=function(e){var r=n.baseUrl?o.joinUrl(n.baseUrl,n.unlinkUrl):n.unlinkUrl;return"get"===n.unlinkMethod?t.get(r+e):"post"===n.unlinkMethod?t.post(r,e):void 0},u}]).factory("satellizer.local",["$q","$http","$location","satellizer.utils","satellizer.shared","satellizer.config",function(e,t,n,o,r,i){var a={};return a.login=function(e,n){var a=i.baseUrl?o.joinUrl(i.baseUrl,i.loginUrl):i.loginUrl;return t.post(a,e).then(function(e){return r.setToken(e,n),e})},a.signup=function(e){var a=i.baseUrl?o.joinUrl(i.baseUrl,i.signupUrl):i.signupUrl;return t.post(a,e).then(function(e){return i.loginOnSignup?r.setToken(e):i.signupRedirect&&n.path(i.signupRedirect),e})},a}]).factory("satellizer.Oauth2",["$q","$http","$window","satellizer.popup","satellizer.utils","satellizer.config","satellizer.storage",function(e,n,o,r,i,a,u){return function(){var o={url:null,name:null,state:null,scope:null,scopeDelimiter:null,clientId:null,redirectUri:null,popupOptions:null,authorizationEndpoint:null,responseParams:null,requiredUrlParams:null,optionalUrlParams:null,defaultUrlParams:["response_type","client_id","redirect_uri"],responseType:"code"},l={};return l.open=function(n,i){t.extend(o,n);var s=o.name+"_state";t.isFunction(o.state)?u.set(s,o.state()):t.isString(o.state)&&u.set(s,o.state);var c,p=o.authorizationEndpoint+"?"+l.buildQueryString();return c="mobile"===a.platform?r.open(p,o.name,o.popupOptions,o.redirectUri).eventListener(o.redirectUri):r.open(p,o.name,o.popupOptions,o.redirectUri).pollPopup(),c.then(function(t){return"token"===o.responseType?t:t.state&&t.state!==u.get(s)?e.reject("OAuth 2.0 state parameter mismatch."):l.exchangeForToken(t,i)})},l.exchangeForToken=function(e,r){var u=t.extend({},r,{code:e.code,clientId:o.clientId,redirectUri:o.redirectUri});e.state&&(u.state=e.state),t.forEach(o.responseParams,function(t){u[t]=e[t]});var l=a.baseUrl?i.joinUrl(a.baseUrl,o.url):o.url;return n.post(l,u,{withCredentials:a.withCredentials})},l.buildQueryString=function(){var e=[],n=["defaultUrlParams","requiredUrlParams","optionalUrlParams"];return t.forEach(n,function(n){t.forEach(o[n],function(n){var r=i.camelCase(n),a=t.isFunction(o[n])?o[n]():o[r];if("state"===n){var l=o.name+"_state";a=encodeURIComponent(u.get(l))}"scope"===n&&Array.isArray(a)&&(a=a.join(o.scopeDelimiter),o.scopePrefix&&(a=[o.scopePrefix,a].join(o.scopeDelimiter))),e.push([n,a])})}),e.map(function(e){return e.join("=")}).join("&")},l}}]).factory("satellizer.Oauth1",["$q","$http","satellizer.popup","satellizer.config","satellizer.utils",function(e,n,o,r,i){return function(){var e={url:null,name:null,popupOptions:null,redirectUri:null,authorizationEndpoint:null},a={};return a.open=function(u,l){t.extend(e,u);var s,c=r.baseUrl?i.joinUrl(r.baseUrl,e.url):e.url;return"mobile"!==r.platform&&(s=o.open("",e.name,e.popupOptions,e.redirectUri)),n.post(c,e).then(function(t){"mobile"===r.platform?s=o.open([e.authorizationEndpoint,a.buildQueryString(t.data)].join("?"),e.name,e.popupOptions,e.redirectUri):s.popupWindow.location=[e.authorizationEndpoint,a.buildQueryString(t.data)].join("?");var n="mobile"===r.platform?s.eventListener(e.redirectUri):s.pollPopup();return n.then(function(e){return a.exchangeForToken(e,l)})})},a.exchangeForToken=function(o,a){var u=t.extend({},a,o),l=r.baseUrl?i.joinUrl(r.baseUrl,e.url):e.url;return n.post(l,u,{withCredentials:r.withCredentials})},a.buildQueryString=function(e){var n=[];return t.forEach(e,function(e,t){n.push(encodeURIComponent(t)+"="+encodeURIComponent(e))}),n.join("&")},a}}]).factory("satellizer.popup",["$q","$interval","$window","$location","satellizer.config","satellizer.utils",function(o,r,i,a,u,l){var s={};return s.url="",s.popupWindow=null,s.open=function(t,n,o){s.url=t;var r=s.stringifyOptions(s.prepareOptions(o||{}));return s.popupWindow=e.open(t,n,r),s.popupWindow&&s.popupWindow.focus&&s.popupWindow.focus(),s},s.eventListener=function(e){var n=o.defer();return s.popupWindow.addEventListener("loadstart",function(o){if(0===o.url.indexOf(e)){var r=document.createElement("a");if(r.href=o.url,r.search||r.hash){var i=r.search.substring(1).replace(/\/$/,""),a=r.hash.substring(1).replace(/\/$/,""),u=l.parseQueryString(a),c=l.parseQueryString(i);t.extend(c,u),c.error?n.reject({error:c.error}):n.resolve(c),s.popupWindow.close()}}}),s.popupWindow.addEventListener("exit",function(){n.reject({data:"Provider Popup was closed"})}),s.popupWindow.addEventListener("loaderror",function(){n.reject({data:"Authorization Failed"})}),n.promise},s.pollPopup=function(){var e,i=o.defer();return e=r(function(){try{var o=document.location.host,a=s.popupWindow.location.host;if(a===o&&(s.popupWindow.location.search||s.popupWindow.location.hash)){var u=s.popupWindow.location.search.substring(1).replace(/\/$/,""),c=s.popupWindow.location.hash.substring(1).replace(/[\/$]/,""),p=l.parseQueryString(c),d=l.parseQueryString(u);t.extend(d,p),d.error?i.reject({error:d.error}):i.resolve(d),s.popupWindow.close(),r.cancel(e)}}catch(g){}s.popupWindow?(s.popupWindow.closed||s.popupWindow.closed===n)&&(r.cancel(e),i.reject({data:"Authorization Failed"})):(r.cancel(e),i.reject({data:"Provider Popup Blocked"}))},35),i.promise},s.prepareOptions=function(e){var n=e.width||500,o=e.height||500;return t.extend({width:n,height:o,left:i.screenX+(i.outerWidth-n)/2,top:i.screenY+(i.outerHeight-o)/2.5},e)},s.stringifyOptions=function(e){var n=[];return t.forEach(e,function(e,t){n.push(t+"="+e)}),n.join(",")},s}]).service("satellizer.utils",function(){this.camelCase=function(e){return e.replace(/([\:\-\_]+(.))/g,function(e,t,n,o){return o?n.toUpperCase():n})},this.parseQueryString=function(e){var n,o,r={};return t.forEach((e||"").split("&"),function(e){e&&(o=e.split("="),n=decodeURIComponent(o[0]),r[n]=t.isDefined(o[1])?decodeURIComponent(o[1]):!0)}),r},this.joinUrl=function(e,t){if(/^(?:[a-z]+:)?\/\//i.test(t))return t;var n=[e,t].join("/"),o=function(e){return e.replace(/[\/]+/g,"/").replace(/\/\?/g,"?").replace(/\/\#/g,"#").replace(/\:\//g,"://")};return o(n)}}).factory("satellizer.storage",["satellizer.config",function(t){switch(t.storage){case"localStorage":return"localStorage"in e&&null!==e.localStorage?{get:function(e){return localStorage.getItem(e)},set:function(e,t){return localStorage.setItem(e,t)},remove:function(e){return localStorage.removeItem(e)}}:(console.warn("Warning: Local Storage is disabled or unavailable. Satellizer will not work correctly."),{get:function(){return n},set:function(){return n},remove:function(){return n}});case"sessionStorage":return"sessionStorage"in e&&null!==e.sessionStorage?{get:function(e){return sessionStorage.getItem(e)},set:function(e,t){return sessionStorage.setItem(e,t)},remove:function(e){return sessionStorage.removeItem(e)}}:(console.warn("Warning: Session Storage is disabled or unavailable. Satellizer will not work correctly."),{get:function(){return n},set:function(){return n},remove:function(){return n}})}}]).factory("satellizer.interceptor",["$q","satellizer.config","satellizer.storage","satellizer.shared",function(e,t,n,o){return{request:function(e){if(e.skipAuthorization)return e;if(o.isAuthenticated()&&t.httpInterceptor){var r=t.tokenPrefix?t.tokenPrefix+"_"+t.tokenName:t.tokenName,i=n.get(r);t.authHeader&&t.authToken&&(i=t.authToken+" "+i),e.headers[t.authHeader]=i}return e},responseError:function(t){return e.reject(t)}}}]).config(["$httpProvider",function(e){e.interceptors.push("satellizer.interceptor")}])}(window,window.angular);

(function() {

    angular.module('habitsApp', [
        'ui.router',
        'satellizer'
    ])
    .config(function($stateProvider, $urlRouterProvider, $authProvider) {

        // Satellizer configuration that specifies which API
        // route the JWT should be retrieved from
        $authProvider.loginUrl = '/api/authenticate';

        // Redirect to the auth state if any other states
        // are requested other than users
        $urlRouterProvider.otherwise('/auth');

        $stateProvider
            .state('auth', {
                url: '/auth',
                templateUrl: '/partials/auth',
                controller: 'AuthController as auth'
            })
            .state('users', {
                url: '/users',
                templateUrl: '/partials/users',
                controller: 'UserController as user'
            })
            .state('tasks', {
                url: '/tasks',
                templateUrl: '/partials/tasks/index',
                controller: 'TaskController'
            })
            .state('taskNew', {
                url: '/tasks/new',
                templateUrl: '/partials/tasks/new',
                controller: 'TaskController'
            })
            .state('task', {
                url: '/tasks/:id',
                templateUrl: '/partials/tasks/show',
                controller: 'TaskController'
            })
            .state('projects', {
                url: '/projects',
                templateUrl: '/partials/projects/index',
                controller: 'ProjectController'
            });
    })
    .run(function($rootScope, $state) {
        $rootScope.$on('$stateChangeStart', function(event, toState) {
            var user = JSON.parse(localStorage.getItem('user'));

            if(user) {
                $rootScope.authenticated = true;
                $rootScope.currentUser = user;
                if(toState.name === 'auth') {
                    event.preventDefault();
                    $state.go('tasks');
                }
            }
        });
    });

    angular.module('habitsApp').filter('fromNow', function() {
        return function(date) {
            return moment(date).fromNow();
        };
    });

})();

(function() {
    angular
        .module('habitsApp')
        .controller('AuthController', AuthController);

    function AuthController($auth, $state, $http, $rootScope) {
        var vm = this;

        vm.loginError = false;
        vm.loginErrorText;

        vm.login = function() {
            var credentials = {
                email: vm.email,
                password: vm.password
            };

            // Use Satellizer's $auth service to login
            $auth.login(credentials).then(function() {
                // If login is successful, redirect to users state
                // $state.go('users', {});
                return $http.get('api/authenticate/user');
            }, function(error) {
                vm.loginError = true;
                vm.loginErrorText = error.data.error;
            }).then(function(response) {
                var user = JSON.stringify(response.data.user);

                localStorage.setItem('user', user);

                $rootScope.authenticated = true;

                $rootScope.currentUser = response.data.user;

                $state.go('tasks');
            });
        };
    }
})();

(function() {
    angular
        .module('habitsApp')
        .controller('UserController', UserController);

    function UserController($http) {
        var vm = this;

        vm.users;
        vm.error;

        vm.getUsers = function() {
            // This request will hit the index method in the AuthenticateController
            // on the Laravel side and will return the list of users
            $http.get('api/authenticate').success(function(users) {
                vm.users = users;
            }).error(function(error) {
                vm.error = error;
            });
        };
    }
})();

(function() {
    angular.module('habitsApp')
        .factory('Task', function($http) {
            return {
                // get all tasks
                get: function(id) {
                    if(id !== undefined) {
                        return $http.get('/api/tasks/' + id);
                    } else {
                        return $http.get('/api/tasks');
                    }
                },

                // get comments for task
                getComments: function(id) {
                    return $http.get('/api/tasks/' + id + '/comments');
                },

                getProject: function(id) {
                    return $http.get('/api/tasks/' + id + '/project');
                },

                // save a task
                save: function(taskData) {
                    return $http({
                        method: 'POST',
                        url: '/api/tasks',
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        },
                        data: $.param(taskData)
                    });
                },

                // save a comment
                saveComment: function(taskId, commentData) {
                    return $http({
                        method: 'POST',
                        url: '/api/tasks/' + taskId + '/comments',
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        },
                        data: $.param(commentData)
                    });
                },

                // destroy a project
                destroy: function(id) {
                    return $http.delete('/api/tasks/' + id);
                }
            };
        });
})();

(function() {
    angular.module('habitsApp')

        .controller('TaskController', function($scope, $state, $rootScope, $http, $stateParams, Task, Project, User) {

            if(!$rootScope.authenticated) {
                console.log('not authenticated');
                $state.go('auth');
            }

            $scope.taskData = {};

            $scope.loading = true;

            if($stateParams.id) {
                // single task view

                // task status (open, resolved, closed)
                $http.get('/api/statuses')
                    .success(function(statuses) {
                        $scope.statuses = statuses;
                    })
                    .error(function() {
                        console.log('error');
                    });

                // get the task
                Task.get($stateParams.id)
                    .success(function(data) {
                        $scope.task = data;
                        $scope.loading = false;
                        $scope.selectedTaskStatus = $scope.task.status;
                        $scope.selectedUser = $scope.task.user_id;
                    });

                // update task status
                $scope.taskStatusChange = function(taskId, status) {

                    $http.put('/api/tasks/' + taskId, { status: status })
                        .success(function(result) {
                            console.log(result);
                        })
                        .error(function() {
                            console.log('error');
                        });
                };

                // update task assigned to
                $scope.taskAssignedChange = function(taskId, assigned) {
                    $http.put('/api/tasks/' + taskId, {
                        user_id: assigned
                    })
                    .success(function(result) {
                        console.log(result);
                    })
                    .error(function() {
                        console.log('error');
                    });
                }

                // update task info
                $scope.taskChange = function(taskId, status, assigned) {
                    $http.put('/api/tasks/' + taskId, {
                        status: status,
                        user_id: assigned
                    })
                    .success(function(result) {
                        console.log(result);
                    })
                    .error(function() {
                        console.log('error');
                    });
                };

                // get the task comments
                Task.getComments($stateParams.id)
                    .success(function(data) {
                        $scope.comments = data;
                    });

                // comments form
                $scope.formComments = {};
                $scope.formComments.submit = function(item, event) {

                    // console.log($rootScope.currentUser);

                    Task.saveComment($stateParams.id, { message: $scope.formComments.message, userId: $rootScope.currentUser.id })
                        .success(function(data) {
                            console.log('success');

                            $scope.formComments.message = '';

                            // reload the comments
                            Task.getComments($stateParams.id)
                                .success(function(data) {
                                    $scope.comments = data;
                                });
                        })
                        .error(function() {
                            console.log('error');
                        });
                };

                // get project
                Task.getProject($stateParams.id)
                    .success(function(data) {
                        $scope.project = data;
                    });

            } else {
                // task list view
                Task.get()
                    .success(function(data) {
                        $scope.tasks = data;
                        $scope.loading = false;
                    })
                    .error(function(error) {
                        console.log(error);
                    });
            }

            Project.get()
                .success(function(projects) {
                    $scope.projects = projects;
                });

            // users for 'assigned to' dropdown
            User.get()
                .success(function(users) {
                    $scope.users = users;
                });

            $scope.submitTask = function() {
                $scope.loading = true;

                Task.save($scope.taskData)
                    .success(function(data) {
                        // reload the tasks
                        // Task.get()
                        //     .success(function(getData) {
                        //         $scope.tasks = getData;
                        //         $scope.loading = false;
                        //     });
                        $state.go('tasks');
                    })
                    .error(function(data) {
                        console.log(data);
                    });
            };

            $scope.deleteTask = function(id) {
                $scope.loading = true;

                Task.destroy(id)
                    .success(function(data) {
                        Task.get()
                            .success(function(getData) {
                                $scope.tasks = getData;
                                $scope.loading = false;
                            });
                    });
            };

        });
})();

(function() {
    angular.module('habitsApp')
        .factory('Project', function($http) {
            return {
                // get all projects
                get: function() {
                    return $http.get('/api/projects');
                },

                // save a project
                save: function(projectData) {
                    return $http({
                        method: 'POST',
                        url: '/api/projects',
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        },
                        data: $.param(projectData)
                    });
                },

                // destroy a project
                destroy: function(id) {
                    return $http.delete('/api/projects/' + id);
                }
            };
        });
})();

(function() {
    angular.module('habitsApp')
        .factory('User', function($http) {
            return {
                // get users
                get: function() {
                    return $http.get('/api/users');
                }
            };
        });
})();

(function() {
    angular.module('habitsApp')

        .controller('ProjectController', function($state, $scope, $rootScope, $http, Project) {

            if(!$rootScope.authenticated) {
                $state.go('auth');
            }

            $scope.projectData = {};

            $scope.loading = true;

            Project.get()
                .success(function(data) {
                    $scope.projects = data;
                    $scope.loading = false;
                });

            $scope.submitProject = function() {
                $scope.loading = true;

                Project.save($scope.projectData)
                    .success(function(data) {
                        Project.get()
                            .success(function(getData) {
                                $scope.projects = getData;
                                $scope.loading = false;
                            });
                    })
                    .error(function(data) {
                        console.log(data);
                    });
            };

            $scope.deleteProject = function(id) {
                $scope.loading = true;

                Project.destroy(id)
                    .success(function(data) {
                        Project.get()
                            .success(function(getData) {
                                $scope.projects = getData;
                                $scope.loading = false;
                            });
                    });
            };

        });
})();

(function() {
    angular.module('habitsApp')
    .controller('NavController', NavController);

    function NavController($scope, $auth, $rootScope) {
        // var vm = this;

        $scope.logout = function() {
            // alert('logout');
            $auth.logout().then(function() {
                localStorage.removeItem('user');
                $rootScope.authenticated = false;
                $rootScope.currentUser = null;
            });
        }
    }
})();