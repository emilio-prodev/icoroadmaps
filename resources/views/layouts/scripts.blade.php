<!-- Profile / Edit Profile -->
@guest
                            
@else
    <div id="profileModal" class="modal fade no-padding" role="dialog">
      <div class="modal-dialog">

        <!-- Modal content-->
        <div id="profile-overlay" class="modal-dialog">
          <div class="modal-content">
              <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button>
                  <h4 class="modal-title profile-title" id="profileTitle">Profile</h4>
                  
              </div>
              <div class="modal-body">
                <!-- Flipp Container -->
                <div class="profile-flip-container"> 
                    <div class="profile-flipper">
                        <div class="profile-front">
                            <div class="col-md-4">
                                <i class="fa fa-superpowers user-profile-icon" aria-hidden="true"></i>
                            </div>
                            <div class="col-md-8 profile-details-container">
                                <ul>
                                    <li>
                                        First Name: <span> {{ Auth::user()->first_name }} </span>
                                    </li>
                                    <li>
                                        Last Name: <span> {{ Auth::user()->last_name }} </span>
                                    </li>
                                    <li>
                                        Email: <span> {{ Auth::user()->email }} </span>
                                    </li>
                                    <li>
                                        Phone: <span> {{ Auth::user()->phone }} </span>
                                    </li>
                                    <li>
                                        Skype: <span> {{ Auth::user()->skype }} </span>
                                    </li>
                                    <li>
                                        Twitter: <span> {{ Auth::user()->twitter }} </span>
                                    </li>
                                    <li>
                                        Location: <span> {{ Auth::user()->location }} </span>
                                    </li>
                                    <li>
                                        Company: <span> {{ Auth::user()->company }} </span>
                                    </li>
                                </ul>
                            </div>
                            <p>
                                <a id="profile-flipp-container-button" class="btn btn-info btn-block">Edit Profile</a>
                            </p>
                        </div>

                        <div class="profile-back">
                            <div class="row">
                                <div class="col-md-12 edit-profile-container">
                                    <form class="row form-horizontal" method="post" action="{{ route('users.update', Auth::user()) }}">
                                        
                                        {{ csrf_field() }}
                                        {{ method_field('patch') }}
                                        
                                        <div class="edit-profile-input-container col-md-6 col-xs-12">
                                            <label for="first_name">First Name</label>
                                            <input type="text" placeholder="First Name" name="first_name" class="profile-input col-md-6 col-xs-12" value="{{ Auth::user()->first_name }}" />
                                        </div>

                                        <div class="edit-profile-input-container col-md-6 col-xs-12">
                                            <label for="last_name">Last Name</label>
                                            <input type="text" placeholder="Last Name" name="last_name" class="profile-input col-md-6 col-xs-12 pull-right" value="{{ Auth::user()->last_name }}" />
                                        </div>

                                        <div class="edit-profile-input-container col-md-6 col-xs-12">
                                            <label for="email">Email</label>
                                            <input type="email" placeholder="Email" required="" name="email" class="profile-input col-md-6 col-xs-12" value="{{ Auth::user()->email }}" />
                                        </div>

                                        <div class="edit-profile-input-container col-md-6 col-xs-12">
                                            <label for="phone">Phone</label>
                                            <input type="text" placeholder="Phone" name="phone" class="profile-input col-md-6 col-xs-12 pull-right" value="{{ Auth::user()->phone }}" />
                                        </div>

                                        <div class="edit-profile-input-container col-md-6 col-xs-12">
                                            <label for="skype">Skype</label>
                                            <input type="text" placeholder="Skype" name="skype" class="profile-input col-md-6 col-xs-12" value="{{ Auth::user()->skype }}" />
                                        </div>

                                        <div class="edit-profile-input-container col-md-6 col-xs-12">
                                            <label for="twitter">Twitter</label>
                                            <input type="text" placeholder="Twitter" name="twitter" class="profile-input col-md-6 col-xs-12 pull-right" value="{{ Auth::user()->twitter }}" />
                                        </div>

                                        <div class="edit-profile-input-container col-md-6 col-xs-12">
                                            <label for="location">Location</label>
                                            <input type="text" placeholder="Location" name="location" class="profile-input col-md-6 col-xs-12" value="{{ Auth::user()->location }}" />
                                        </div>

                                        <div class="edit-profile-input-container col-md-6 col-xs-12">
                                            <label for="company">Company</label>
                                            <input type="text" placeholder="Company" name="company" class="profile-input col-md-6 col-xs-12 pull-right" value="{{ Auth::user()->company }}" />
                                        </div>

                                        <div class="edit-profile-button-container col-md-12 col-xs-12">
                                            <div class="row">
                                                <p class="col-md-12 col-xs-12">
                                                    <button type="submit" class="edit-profile-button">Update Profile</button>                                                
                                                </p>

                                                <p class="col-md-12 col-xs-12">
                                                    <a id="profile-flipp-container-button-r" class="btn btn-info btn-block">Back to Profile</a>
                                                </p>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                </div>
                <!-- END Flipp Container -->
              </div>
          </div>
      </div>

      </div>
    </div>
@endguest
<!-- END Profile / Edit Profile -->

<!-- Login / Singin Modal -->
<div id="loginModal" class="modal fade no-padding" role="dialog">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div id="login-overlay" class="modal-dialog">
      <div class="modal-content">
          <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button>
              <h4 class="modal-title login-title" id="loginTitle">Login to ICO Roadmaps</h4>
              
          </div>
          <div class="modal-body">
            <!-- Flipp Container -->
            <div class="users-flip-container"> 
                <div class="users-flipper">
                    <div class="users-front">
                        <div class="row social-btn-container">
                            <a class="btn btn-social btn-facebook col-md-4">
                                <span class="fa fa-facebook"></span>Facebook Login
                            </a>
                            <a class="btn btn-social btn-google col-md-4">
                                <span class="fa fa-google"></span>Google Login
                            </a>
                            <a class="btn btn-social btn-twitter col-md-4">
                                <span class="fa fa-twitter"></span>Twitter Login
                            </a>
                        </div>
                        <div class="row">
                            <div class="panel-body login-form col-md-6 well">
                                <form class="form-horizontal" method="post" action="{{ route('login') }}">
                                    {{ csrf_field() }}

                                    <div class="form-group{{ $errors->has('email') ? ' has-error' : '' }}">

                                        <div class="col-md-12">
                                            <input placeholder="Email" id="email" type="email" class="form-control" name="email" value="{{ old('email') }}" required autofocus>

                                            @if ($errors->has('email'))
                                                <span class="help-block">
                                                    <strong>{{ $errors->first('email') }}</strong>
                                                </span>
                                            @endif
                                        </div>
                                    </div>

                                    <div class="form-group{{ $errors->has('password') ? ' has-error' : '' }}">

                                        <div class="col-md-12">
                                            <input placeholder="Password" id="password" type="password" class="form-control" name="password" required>

                                            @if ($errors->has('password'))
                                                <span class="help-block">
                                                    <strong>{{ $errors->first('password') }}</strong>
                                                </span>
                                            @endif
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <div class="col-md-12">
                                            <div class="checkbox col-md-6 pull-left remember">
                                                <label>
                                                    <input type="checkbox" name="remember" {{ old('remember') ? 'checked' : '' }}> Remember Me
                                                </label>
                                            </div>
                                            <a class="btn btn-link col-md-6 pull-right forgot-pass" href="{{ route('password.request') }}">
                                                Forgot Your Password?
                                            </a>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <div class="col-md-12">
                                            <button type="submit" class="btn btn-primary btn-login">
                                                Login
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div class="register-intro  col-md-6">
                                <p class="lead">Register now</p>
                                <ul class="list-unstyled" style="line-height: 2">
                                    <li><span class="fa fa-check text-success"></span> See all your orders</li>
                                    <li><span class="fa fa-check text-success"></span> Fast re-order</li>
                                    <li><span class="fa fa-check text-success"></span> Save your favorites</li>
                                    <li><span class="fa fa-check text-success"></span> Fast checkout</li>
                                </ul>
                                <p>
                                    <a id="users-flipp-container-button" class="btn btn-info btn-block">Register</a>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="users-back">
                        <div class="row social-btn-container">
                            <a class="btn btn-social btn-facebook col-md-4">
                                <span class="fa fa-facebook"></span>Facebook Sign Up
                            </a>
                            <a class="btn btn-social btn-google col-md-4">
                                <span class="fa fa-google"></span>Google Sign Up
                            </a>
                            <a class="btn btn-social btn-twitter col-md-4">
                                <span class="fa fa-twitter"></span>Twitter Sign Up
                            </a>
                        </div>
                        <div class="row">
                            <div class="panel-body login-form col-md-6 well">
                                <form class="form-horizontal" method="POST" action="{{ route('register') }}">
                                    {{ csrf_field() }}

                                    <div class="form-group{{ $errors->has('email') ? ' has-error' : '' }}">
                                        <div class="col-md-12">
                                            <input placeholder="Email" id="register-email" type="email" class="form-control" name="email" value="{{ old('email') }}" required>

                                            @if ($errors->has('email'))
                                                <span class="help-block">
                                                    <strong>{{ $errors->first('email') }}</strong>
                                                </span>
                                            @endif
                                        </div>
                                    </div>

                                    <div class="form-group{{ $errors->has('password') ? ' has-error' : '' }}">
                                        <div class="col-md-12">
                                            <input placeholder="Password" id="register-password" type="password" class="form-control" name="password" required>

                                            @if ($errors->has('password'))
                                                <span class="help-block">
                                                    <strong>{{ $errors->first('password') }}</strong>
                                                </span>
                                            @endif
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <div class="col-md-12">
                                            <input placeholder="Confirm Password" id="password-confirm" type="password" class="form-control" name="password_confirmation" required>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <div class="col-md-12">
                                            <button type="submit" class="btn btn-primary btn-register">
                                                Register
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div class="register-intro  col-md-6">
                                <p class="lead">Register now</p>

                                <ul class="list-unstyled" style="line-height: 2">
                                    <li><span class="fa fa-check text-success"></span> See all your orders</li>
                                    <li><span class="fa fa-check text-success"></span> Fast re-order</li>
                                    <li><span class="fa fa-check text-success"></span> Save your favorites</li>
                                    <li><span class="fa fa-check text-success"></span> Fast checkout</li>
                                </ul>   
                                
                                <p>
                                    <a id="users-flipp-container-button-r" class="btn btn-info btn-block">Back To Login</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <!-- END Flipp Container -->
          </div>
      </div>
  </div>

  </div>
</div>
<!-- END Login / Singin Modal -->

<!-- Wallet Modal -->
<div id="projectWalletModal" class="modal fade no-padding" role="dialog">
	<div class="modal-dialog">

		<!-- Modal content -->
		<div class="modal-content" style="">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal">&times;</button>
				<h4 class="modal-title" style="">Project Wallet QR</h4>
			</div>
			<div class="modal-body">
				<p style="">1PgSHAKdC6f43iK8BNoXuwHvy1hpt34Rps</p>
				<img src="img/project-qr.png">
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
			</div>
		</div>

	</div>
</div>

<div id="teamWalletModal" class="modal fade no-padding" role="dialog">
	<div class="modal-dialog">

		<!-- Modal content -->
		<div class="modal-content" style="">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal">&times;</button>
				<h4 class="modal-title" style="">Team Wallet QR</h4>
			</div>
			<div class="modal-body">
				<p style="">1MSpt8jPpqVEZsHJpcULusL9pgYi32x1eV</p>
				<img src="img/project-qr.png">
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
			</div>
		</div>

	</div>
</div>
<!-- END Wallet Modal -->   

<!-- My Scripts -->
<script type="text/javascript" src="js/v-main.js"></script>
<script type="text/javascript" src="js/my-jquery.js"></script>
<!-- END My Scripts