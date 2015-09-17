<h1>Projects</h1>

<p class="text-right">
    <a class="btn btn-primary" href="#/projects/new">New Project</a>
</p>

<p ng-show="loading">Loading...</p>

<table class="table table-striped" ng-hide="loading">
    <tbody>
        <tr ng-repeat="project in projects">
            <td>{{ project.name }}</td>
            <td>
                <a class="btn btn-default" href="#/projects/{{ project.id }}">
                    <span class="glyphicon glyphicon-cog" aria-hidden="true"></span>
                    Manage
                </a>
            </td>
        </tr>
    </tbody>
</table>