<header class="header row"> <!-- Header -->
	<div class="logo col-xs-9">
		<h3>
			<span class="logo-orange">ICO</span>
			<i class="fa fa-superpowers" aria-hidden="true"></i>
			<span class="logo-gray"> Roadmaps</span>
		</h3>
        <!-- <h5 class="logo-beta-container">
            <span class="logo-beta">beta</span>
        </h5> -->
	</div>
	<div class="header-button-container col-xs-3">

		<div class="pull-right">

			<!-- Authentication Links -->
            @guest
                <a class="user-login-button" data-toggle="modal" data-target="#loginModal">
					<i title="Log In / Sign Up" alt="Log In / Sign Up" class="fa fa-users fa-buttons-header" aria-hidden="true"></i>
				</a>
            @else
                <!-- Right Side Of Navbar -->
            	<ul class="nav navbar-nav navbar-right">
                    <li class="dropdown">
                        
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false" aria-haspopup="true">
                            {{ Auth::user()->name }} 
                            <i title="User Options" alt="User Options" class="fa fa-user-circle fa-buttons-header" aria-hidden="true"></i>
                        </a>

                        <ul class="dropdown-menu">
                            <li>
                                <a href="" class="profile-button" data-toggle="modal" data-target="#profileModal">
                                    Profile
                                    <i class="fa fa-user-plus pull-right"></i>
                                </a>
                            </li>
                            <!-- <li>
                                <a href="#" >
                                    Settings
                                    <i class="fa fa-cogs pull-right"></i>
                                </a>
                            </li> -->
                            <li>
                                <a href="{{ route('logout') }}"
                                    onclick="event.preventDefault();
                                             document.getElementById('logout-form').submit();">
                                    Logout
                                    <i class="fa fa-sign-out pull-right"></i>
                                </a>

                                <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                    {{ csrf_field() }}
                                </form>
                            </li>
                        </ul>
                    </li>
                </ul>	
            @endguest
            
		</div>

		<div class="pull-right">
			<a class="lang-select-button">
				<i title="Select Language (Comming soon)" alt="Select Language (Comming soon)" class="fa fa-language fa-buttons-header" aria-hidden="true"></i>
			</a>	
		</div>

	</div>
</header> <!-- END Header -->