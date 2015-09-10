<h1>New Task</h1>

<form ng-submit="submitTask()">
    <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" class="form-control" name="name" id="name" ng-model="taskData.name" required>
    </div>
    <div class="form-group">
        <label for="project">Project:</label>
        <select name="project" id="project" class="form-control" ng-model="taskData.project_id" ng-options="project.id as project.name for project in projects" required></select>
    </div>
    <div class="form-group">
        <label for="description">Description:</label>
        <textarea name="description" id="description" cols="30" rows="10" class="form-control" ng-model="taskData.description"></textarea>
    </div>
    <div class="form-group">
        <label for="assigned">Assigned To:</label>
        <select name="assigned" id="assigned" class="form-control" ng-model="taskData.assigned" ng-options="user.id as user.name for user in users" required></select>
    </div>
    <button class="btn btn-primary" type="submit">Create</button>
</form>