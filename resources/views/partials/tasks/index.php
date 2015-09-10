<h1>Tasks</h1>

<p class="text-right">
    <a class="btn btn-primary" href="#/tasks/new">New Task</a>
</p>

<p ng-show="loading">Loading...</p>

<table class="table table-striped" ng-hide="loading">
    <thead>
        <tr>
            <th>Name</th>
            <th>Project</th>
            <th>Status</th>
        </tr>
    </thead>
    <tbody>
        <tr ng-repeat="task in tasks">
            <td><a href="#/tasks/{{ task.id }}">{{ task.name }}</a></td>
            <td>{{ task.project.name }}</td>
            <td>{{ task.status.name }}</td>
        </tr>
    </tbody>
</table>