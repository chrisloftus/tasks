<h1>Projects</h1>

<p ng-show="loading">Loading...</p>

<ul ng-hide="loading" ng-repeat="project in projects">
    <li>
        <p>{{ project.name }}</p>
    </li>
</ul>