<h1>All Tasks</h1>

<?php include('_header.php'); ?>

<p ng-show="loading">Loading...</p>

<table class="table table-striped" ng-hide="loading">
    <thead>
        <tr>
            <th>Name</th>
            <th>Project</th>
            <th>Assigned To</th>
            <th>Status</th>
        </tr>
    </thead>
    <tbody>
        <tr ng-repeat="task in tasksAll">
            <td><a href="#/tasks/{{ task.id }}">{{ task.name }}</a></td>
            <td>{{ task.project.name }}</td>
            <td>{{ task.assigned.name }}</td>
            <td>{{ task.status.name }}</td>
        </tr>
    </tbody>
</table>