<div class="row">
    <div class="col-sm-4 col-sm-offset-4">
        <!-- <div class="well"> -->
            <h3>Login</h3>
            <form ng-submit="auth.login()">
                <div class="form-group">
                    <input type="email" class="form-control" placeholder="Email" ng-model="auth.email">
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" placeholder="Password" ng-model="auth.password">
                </div>
                <button class="btn btn-primary">Submit</button>
            </form>
        <!-- </div> -->
    </div>
</div>