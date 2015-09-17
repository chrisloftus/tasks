<h1>New Project</h1>

<form ng-submit="submitProject()">
    <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" class="form-control" ng-model="projectData.name" required>
    </div>
    <div class="form-group">
        <label for="users">Users:</label>

        <table class="table table-striped">
            <tbody>
                <tr ng-repeat="user in projectData.users">
                    <td>{{ user.name }}</td>
                    <td>Remove</td>
                </tr>
            </tbody>
        </table>

        <angucomplete-alt id="users"
            placeholder="Search users"
            pause="100"
            selected-object="selectedUser"
            local-data="users"
            search-fields="name"
            title-field="name"
            minlength="2"
            input-class="form-control">

    </div>
    <button class="btn btn-primary" type="submit">Create</button>
</form>