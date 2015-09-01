<h1>Tasks</h1>

<p ng-show="loading">Loading...</p>

<table class="table table-striped" ng-hide="loading">
    <thead>
        <tr>
            <th>Name</th>
            <th>Status</th>
        </tr>
    </thead>
    <tbody>
        <tr ng-repeat="task in tasks">
            <td><a href="#/tasks/{{ task.id }}">{{ task.name }}</a></td>
            <td>{{ parseStatus(task.status) }}</td>
        </tr>
    </tbody>
</table>