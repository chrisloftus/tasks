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
                    <textarea cols="30" rows="6" class="form-control"
                        ng-model="formComments.message"></textarea>
                </div>
                <div class="form-group text-right">
                    <button class="btn btn-primary" type="submit">Submit</button>
                </div>
            </form>
            <ol class="list-unstyled">
                <li ng-repeat="comment in task.comments">
                    <blockquote>
                        <p>{{ comment.message }}</p>
                        <footer><em>{{ comment.created_at | fromNow }}</em></footer>
                    </blockquote>
                </li>
            </ol>
        </div>
    </div>
    <div class="col-sm-2 col-sm-offset-2">

        <p><strong>Project</strong>:<br> {{ task.project.name }}</p>

        <div class="form-group">
            <label for="status">Status:</label>
            <select class="form-control"
                ng-change="taskChange(task.id, selectedTaskStatus, selectedUser)"
                ng-model="selectedTaskStatus"
                ng-options="status.id as status.name for status in statuses"
                id="status">
            </select>
        </div>

        <div class="form-group">
            <label for="assigned">Assigned To:</label>
            <select class="form-control"
                ng-change="taskChange(task.id, selectedTaskStatus, selectedUser)"
                ng-model="selectedUser"
                ng-options="user.id as user.name for user in users"
                id="assigned">
            </select>
        </div>

    </div>
</div>