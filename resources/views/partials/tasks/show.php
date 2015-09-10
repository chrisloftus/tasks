<p ng-show="loading">Loading...</p>

<div class="row">
    <div class="col-sm-8">
        <article>
            <h1>{{ task.name }}</h1>
            <p>{{ task.description }}</p>
        </article>

        <div class="comments">
            <h4>Comments</h4>
            <form ng-submit="formComments.submit()">
                <div class="form-group">
                    <textarea cols="30" rows="6" class="form-control" ng-model="formComments.message"></textarea>
                </div>
                <div class="form-group text-right">
                    <button class="btn btn-primary" type="submit">Submit</button>
                </div>
            </form>
            <ol class="list-unstyled">
                <li ng-repeat="comment in comments">
                    <p><em>{{ comment.created_at | fromNow }}</em></p>
                    <p>{{ comment.message }}</p>
                </li>
            </ol>
        </div>
    </div>
    <div class="col-sm-2 col-sm-offset-2">

        <p><strong>Project</strong>:<br> {{ project.name }}</p>

        <div class="form-group">
            <label for="status">Status:</label>
            <select class="form-control" ng-change="taskStatusChange(task.id, selectedTaskStatus)" ng-model="selectedTaskStatus" ng-options="taskStatus.id as taskStatus.name for taskStatus in taskStatuses" id="status"></select>
        </div>

        <div class="form-group">
            <label for="assigned">Assigned To:</label>
            <select class="form-control" id="assigned" ng-model="selectedUser" ng-options="user.id as user.name for user in users"></select>
        </div>

    </div>
</div>