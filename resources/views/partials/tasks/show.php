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
    <div class="col-sm-4">

        <p><strong>Project</strong>:<br> {{ project.name }}</p>

        <div class="form-group">
            <!-- <p>{{ parseStatus(task.status) }}</p> -->
            <label>
                Status:
                <select class="form-control">
                    <option value="0">Open</option>
                    <option value="1">Resolved</option>
                    <option value="2">Closed</option>
                </select>
            </label>
        </div>

        <div class="form-group">
            <label>
                Assigned To:
                <select class="form-control">
                    <option value="1">Chris Loftus</option>
                </select>
            </label>
        </div>

    </div>
</div>