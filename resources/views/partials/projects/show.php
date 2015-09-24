<h1>{{ project.name }}</h1>

<h3>Add User:</h3>
<form>
    <div class="form-group">
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
</form>

<h2>Users:</h2>

<table class="table table-striped">
    <tbody>
        <tr ng-repeat="user in project.users">
            <td>{{ user.name }}</td>
            <td>
                <a class="btn btn-danger" href="javascript:void(0)"
                    ng-click="detachUser(user.id)">Remove</a>
            </td>
        </tr>
    </tbody>
</table>