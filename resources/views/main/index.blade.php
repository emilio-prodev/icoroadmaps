@extends('layouts.master')


@section('content')

	<main class="main-content row"> <!-- Main Content -->

		<section class="main-box-calendar col-sm-4 col-xs-12">
			<div class="tabs-container">
				<div class="calendar-header row">
					<div class="search-container col-xl-12 col-xs-12">
						<form id="search" class="pull-left search">
							<input type="text" v-model="searchQueryMainCalendarTable" name="query" class="search-box" placeholder="Search">
						</form>
						<div id="settings-title-container" class="pull-left settings-title-container-transparent">
							<h1>SETTINGS</h1>
						</div>
						<div class="pull-right calendar-buttons-container">
							<div class="pull-left">
								<a class="main-calendar-button">
									<i title="Show Only Favorites" alt="Show Only Favorites" class="fa fa-star fa-star-v" aria-hidden="true"></i>
								</a>
							</div>
							<div class="pull-left">
								<a class="main-calendar-button" id="main-flipp-container-button">
									<i title="Settings" alt="Settings" class="fa fa-cog fa-buttons" aria-hidden="true"></i>
								</a>
							</div>
						</div>
					</div>
				</div>

				<!-- Flipp Container -->
				<div class="flip-container"> 
					<div class="flipper">
						<div class="front">
							<vue-tabs>
								<v-tab title="upcumming" class="vuebar-element" v-bar>
									<!-- Table root element -->
									<div class="main-calendar-table-container" id="upcomming-table-container">
										<table-grid
											:data="gridDataUpcommingTable"
											:columns="gridColumnsUpcommingTable"
											:filter-key="searchQueryMainCalendarTable">
										</table-grid>
									</div>
								</v-tab>

								<v-tab title="history" class="vuebar-element" v-bar>
									<!-- Table root element -->
									<div class="main-calendar-table-container" id="history-table-container">
										<table-grid
											:data="gridDataHistoryTable"
											:columns="gridColumnsHistoryTable"
											:filter-key="searchQueryMainCalendarTable">
										</table-grid>
									</div>
								</v-tab>
							</vue-tabs>
						</div>

						<div class="back">
							<div></div>
						</div>
					</div>
				</div>
				<!-- END Flipp Container -->

			</div>
		</section>

		<section class="main-box-calendar-content col-sm-8 col-xs-12">
			<div class="tabs-container">
				<div class="calendar-content-header row">
					<div class="search-container col-xl-12 col-xs-12">
						<h1 class="main-coin-title row">
							<div class="ico-logo">
								<img src="img/ETC-logo.png">
								<span class="title-bold">Ethereum Classic (ETC)</span>
							</div>
						</h1>
					</div>
				</div>

				<vue-tabs>
				    <v-tab title="roadmaps" class="box-height">
				    	<section class="row">
				    		<section class="col-xl-6 col-xs-6">
					    		<div class="vuebar-element second-box" v-bar>
					    			<!-- Table root element -->
									<div class="roadmaps-calendar-table-container" id="roadmaps-table-container">
										<table-grid
											:data="gridDataRoadMapsTable"
											:columns="gridColumnsRoadMapsTable">
										</table-grid>
									</div>
					    		</div>
					    	</section>

					    	<section class="col-xl-6 col-xs-6 content-box">
								<div class="second-box the-event">
					    			<h2 class="row event-title">The DAO - Q3 2018</h2>

					    			<div class="row vuebar-element event-description" v-bar>
					    				<div>
					    					<h3>Summary</h3>
						    				<p>
						    					In online card games, players want to trade and sell their cards, and they cannot. Players
												want their cards to grow in value, but that can never happen. Even worse, your cards are not
												your own - they are licensed from the developer, and the developer can revoke that license at
												any time.
						    				</p>

						    				<p>
						    					Ethereum Classic will solve that with the Nova Token (“NVT”). The Nova Token enables the creation,
												sale, and trading of cards across any card game. NVT can also be used to enter in-game
												tournaments and pay for other in-game purchases. This allows NVT to completely replace fiat
												currencies in any game that implements it. Adopting the token will allow Ethereum Classic and other
												games to grow revenue to $100M or more per year. This growth will encourage future games
												to adopt the NVT for trading, buying, and selling their cards, fueling even more growth.
						    				</p>

						    				<p>
						    					Players benefit because they own their cards and can sell and trade them freely. Players will
												also benefit through entering and winning tournaments, without cheating and fraud.
						    				</p>

						    				<h3>Players: Free Cards</h3>
						    				<p>
						    					In addition to being able to buy, sell, and trade their cards, token holders earn cards through
												proof of stake. Stake your NVT on a game, and when the game releases new cards, you’ll
												earn copies of them. The number of cards that can be earned is proportional to the amount of
												NVT staked, so if you stake a large balance you might earn hundreds of copies of a single
												Legendary card. You will then be able to do whatever you want with the cards, including
												selling them to other players for 100% profit. 
						    				</p>

						    				<h3>Developers: Free Money</h3>
						    				<p>
						    					Developers will integrate NVT into their games because of the large number of players who
												demand ownership of their game assets, because they can acquire players more cheaply, and
												because developers will receive a portion of revenues generated by the platform. As the
												platform generates income from use in Nova Blitz and other games, it will return that income
												to new and existing developers to enable them to grow their player bases, and to assist them
												in integrating the Nova Token into their games.
						    				</p>
					    				</div>
					    			</div>

					    			<div class="row the-event-footer">
					    				<div class="col-xl-12 col-xs-12">
					    					<div class="row">
					    						<div class="col-xl-6 col-xs-6">
					    							<button class="btn btn-primary btn-sm" type="submit">Proof</button>
					    						</div>
					    						<div class="col-xl-6 col-xs-6">
					    							<button class="btn btn-success btn-sm" type="submit">Real</button>
					    							<button class="btn btn-danger btn-sm" type="submit">Fake</button>
					    						</div>
					    					</div>
					    					<div class="row validation-container">
					    						<div class="col-xl-6 col-xs-6">Reward & Follow<br />@Emilio</div>
					    						<div class="col-xl-6 col-xs-6">Validation<br />(50 votes) 80%</div>
					    					</div>
					    					<div class="row">
					    						<div class="col-xl-12 col-xs-12">Bitcoin (BTC)<br />1PgSHAKdC6f43iK8BNoXuwHvy1hpt34Rps</div>
					    					</div>
					    				</div>
					    			</div>
					    		</div>
					    	</section>
				    	</section>
				    </v-tab>

				    <v-tab title="events">
				      	<section class="row">
				    		<section class="col-xl-6 col-xs-6">
					    		<div class="vuebar-element second-box" v-bar>
					    			<!-- Table root element -->
									<div class="events-calendar-table-container" id="events-table-container">
										<table-grid
											:data="gridDataEventsTable"
											:columns="gridColumnsEventsTable">
										</table-grid>
									</div>
					    		</div>
					    	</section>

					    	<section class="col-xl-6 col-xs-6 content-box">
								<div class="second-box the-event">
					    			<h2 class="row event-title">The DAO - Vaslui, Romania - Q3 2018</h2>

					    			<div class="row vuebar-element event-description" v-bar>
					    				<div>
					    					<h3>Summary</h3>
						    				<p>
						    					In online card games, players want to trade and sell their cards, and they cannot. Players
												want their cards to grow in value, but that can never happen. Even worse, your cards are not
												your own - they are licensed from the developer, and the developer can revoke that license at
												any time.
						    				</p>

						    				<p>
						    					Ethereum Classic will solve that with the Nova Token (“NVT”). The Nova Token enables the creation,
												sale, and trading of cards across any card game. NVT can also be used to enter in-game
												tournaments and pay for other in-game purchases. This allows NVT to completely replace fiat
												currencies in any game that implements it. Adopting the token will allow Ethereum Classic and other
												games to grow revenue to $100M or more per year. This growth will encourage future games
												to adopt the NVT for trading, buying, and selling their cards, fueling even more growth.
						    				</p>

						    				<p>
						    					Players benefit because they own their cards and can sell and trade them freely. Players will
												also benefit through entering and winning tournaments, without cheating and fraud.
						    				</p>

						    				<h3>Players: Free Cards</h3>
						    				<p>
						    					In addition to being able to buy, sell, and trade their cards, token holders earn cards through
												proof of stake. Stake your NVT on a game, and when the game releases new cards, you’ll
												earn copies of them. The number of cards that can be earned is proportional to the amount of
												NVT staked, so if you stake a large balance you might earn hundreds of copies of a single
												Legendary card. You will then be able to do whatever you want with the cards, including
												selling them to other players for 100% profit. 
						    				</p>

						    				<h3>Developers: Free Money</h3>
						    				<p>
						    					Developers will integrate NVT into their games because of the large number of players who
												demand ownership of their game assets, because they can acquire players more cheaply, and
												because developers will receive a portion of revenues generated by the platform. As the
												platform generates income from use in Nova Blitz and other games, it will return that income
												to new and existing developers to enable them to grow their player bases, and to assist them
												in integrating the Nova Token into their games.
						    				</p>
					    				</div>
					    			</div>

					    			<div class="row the-event-footer">
					    				<div class="col-xl-12 col-xs-12">
					    					<div class="row">
					    						<div class="col-xl-6 col-xs-6">
					    							<button class="btn btn-primary btn-sm" type="submit">Proof</button>
					    						</div>
					    						<div class="col-xl-6 col-xs-6">
					    							<button class="btn btn-success btn-sm" type="submit">Real</button>
					    							<button class="btn btn-danger btn-sm" type="submit">Fake</button>
					    						</div>
					    					</div>
					    					<div class="row validation-container">
					    						<div class="col-xl-6 col-xs-6">Reward & Follow<br />@Emilio</div>
					    						<div class="col-xl-6 col-xs-6">Validation<br />(50 votes) 80%</div>
					    					</div>
					    					<div class="row">
					    						<div class="col-xl-12 col-xs-12">Bitcoin (BTC)<br />1PgSHAKdC6f43iK8BNoXuwHvy1hpt34Rps</div>
					    					</div>
					    				</div>
					    			</div>
					    		</div>
					    	</section>
				    	</section>
				    </v-tab>

				    <v-tab title="info">
				      	<section class="row">
				    		<section class="col-xl-6 col-xs-6">
					    		<div class="vuebar-element second-box" v-bar>
					    			<!-- Table root element -->
									<div class="events-calendar-table-container" id="events-table-container">
										
									</div>
					    		</div>
					    	</section>

					    	<section class="col-xl-6 col-xs-6 content-box">
								<div class="second-box the-event">
					    			<h2 class="row event-title">The DAO - Vaslui, Romania - Q3 2018</h2>

					    			<div class="row vuebar-element event-description" v-bar>
					    				<div>
					    					<h3>Summary</h3>
						    				<p>
						    					In online card games, players want to trade and sell their cards, and they cannot. Players
												want their cards to grow in value, but that can never happen. Even worse, your cards are not
												your own - they are licensed from the developer, and the developer can revoke that license at
												any time.
						    				</p>

						    				<p>
						    					Ethereum Classic will solve that with the Nova Token (“NVT”). The Nova Token enables the creation,
												sale, and trading of cards across any card game. NVT can also be used to enter in-game
												tournaments and pay for other in-game purchases. This allows NVT to completely replace fiat
												currencies in any game that implements it. Adopting the token will allow Ethereum Classic and other
												games to grow revenue to $100M or more per year. This growth will encourage future games
												to adopt the NVT for trading, buying, and selling their cards, fueling even more growth.
						    				</p>

						    				<p>
						    					Players benefit because they own their cards and can sell and trade them freely. Players will
												also benefit through entering and winning tournaments, without cheating and fraud.
						    				</p>

						    				<h3>Players: Free Cards</h3>
						    				<p>
						    					In addition to being able to buy, sell, and trade their cards, token holders earn cards through
												proof of stake. Stake your NVT on a game, and when the game releases new cards, you’ll
												earn copies of them. The number of cards that can be earned is proportional to the amount of
												NVT staked, so if you stake a large balance you might earn hundreds of copies of a single
												Legendary card. You will then be able to do whatever you want with the cards, including
												selling them to other players for 100% profit. 
						    				</p>

						    				<h3>Developers: Free Money</h3>
						    				<p>
						    					Developers will integrate NVT into their games because of the large number of players who
												demand ownership of their game assets, because they can acquire players more cheaply, and
												because developers will receive a portion of revenues generated by the platform. As the
												platform generates income from use in Nova Blitz and other games, it will return that income
												to new and existing developers to enable them to grow their player bases, and to assist them
												in integrating the Nova Token into their games.
						    				</p>
					    				</div>
					    			</div>

					    			<div class="row the-event-footer">
					    				<div class="col-xl-12 col-xs-12">
					    					<div class="row">
					    						<div class="col-xl-6 col-xs-6">
					    							<button class="btn btn-primary btn-sm" type="submit">Proof</button>
					    						</div>
					    						<div class="col-xl-6 col-xs-6">
					    							<button class="btn btn-success btn-sm" type="submit">Real</button>
					    							<button class="btn btn-danger btn-sm" type="submit">Fake</button>
					    						</div>
					    					</div>
					    					<div class="row validation-container">
					    						<div class="col-xl-6 col-xs-6">Reward & Follow<br />@Emilio</div>
					    						<div class="col-xl-6 col-xs-6">Validation<br />(50 votes) 80%</div>
					    					</div>
					    					<div class="row">
					    						<div class="col-xl-12 col-xs-12">Bitcoin (BTC)<br />1PgSHAKdC6f43iK8BNoXuwHvy1hpt34Rps</div>
					    					</div>
					    				</div>
					    			</div>
					    		</div>
					    	</section>
				    	</section>
				    </v-tab>

				    <v-tab title="team">
				      	<p class="under-construction-p1">The Future's So Bright!!!</p>
						
						<p class="desktop under-construction-p2">This page is under constraction. Please check back soon.</p>

						<p class="under-construction-p3">We are working hard to complete this website.</p>
						<p class="under-construction-p4">If you want to help please make a donation.</p> 
						
						<p class="under-construction-p5">Project Donation Wallet (BTC)<br />
							<a href="" data-toggle="modal" data-target="#projectWalletModal" class="under-construction-a1">1PgSHAKdC6f43iK8BNoXuwHvy1hpt34Rps</a>
						</p>
						<p class="under-construction-p6">Team Donation Wallet (BTC)<br />
							<a href="" data-toggle="modal" data-target="#teamWalletModal" class="under-construction-a1">1MSpt8jPpqVEZsHJpcULusL9pgYi32x1eV</a>
						</p>
						<p class="under-construction-p7">Team E-mail<br />
							<a href="mailto: team@icoroadmaps.com" target="_top" class="under-construction-a1">team@icoroadmaps.com</a>
						</p>

						<div id="ui" class="right-block-comming-soon">
							<div class="primary">
								<div class="gear"></div>
								<div class="gear"></div>
								<div class="gear"></div>
								<div class="gear"></div>
								<div class="gear"></div>
								<div class="gear"></div>
								<div class="gear"></div>
								<div class="gear"></div>
							</div>
							<div class="secondary">
								<div class="gear"></div>
								<div class="gear"></div>
								<div class="gear"></div>
								<div class="gear"></div>
							</div>
						</div>
				    </v-tab>

				    <v-tab title="mining">
				      	<p class="under-construction-p1">The Future's So Bright!!!</p>
						
						<p class="desktop under-construction-p2">This page is under constraction. Please check back soon.</p>

						<p class="under-construction-p3">We are working hard to complete this website.</p>
						<p class="under-construction-p4">If you want to help please make a donation.</p> 
						
						<p class="under-construction-p5">Project Donation Wallet (BTC)<br />
							<a href="" data-toggle="modal" data-target="#projectWalletModal" class="under-construction-a1">1PgSHAKdC6f43iK8BNoXuwHvy1hpt34Rps</a>
						</p>
						<p class="under-construction-p6">Team Donation Wallet (BTC)<br />
							<a href="" data-toggle="modal" data-target="#teamWalletModal" class="under-construction-a1">1MSpt8jPpqVEZsHJpcULusL9pgYi32x1eV</a>
						</p>
						<p class="under-construction-p7">Team E-mail<br />
							<a href="mailto: team@icoroadmaps.com" target="_top" class="under-construction-a1">team@icoroadmaps.com</a>
						</p>

						<div id="ui" class="right-block-comming-soon">
							<div class="primary">
								<div class="gear"></div>
								<div class="gear"></div>
								<div class="gear"></div>
								<div class="gear"></div>
								<div class="gear"></div>
								<div class="gear"></div>
								<div class="gear"></div>
								<div class="gear"></div>
							</div>
							<div class="secondary">
								<div class="gear"></div>
								<div class="gear"></div>
								<div class="gear"></div>
								<div class="gear"></div>
							</div>
						</div>
				    </v-tab>

				    <v-tab title="trading">
				      	<p class="under-construction-p1">The Future's So Bright!!!</p>
						
						<p class="desktop under-construction-p2">This page is under constraction. Please check back soon.</p>

						<p class="under-construction-p3">We are working hard to complete this website.</p>
						<p class="under-construction-p4">If you want to help please make a donation.</p> 
						
						<p class="under-construction-p5">Project Donation Wallet (BTC)<br />
							<a href="" data-toggle="modal" data-target="#projectWalletModal" class="under-construction-a1">1PgSHAKdC6f43iK8BNoXuwHvy1hpt34Rps</a>
						</p>
						<p class="under-construction-p6">Team Donation Wallet (BTC)<br />
							<a href="" data-toggle="modal" data-target="#teamWalletModal" class="under-construction-a1">1MSpt8jPpqVEZsHJpcULusL9pgYi32x1eV</a>
						</p>
						<p class="under-construction-p7">Team E-mail<br />
							<a href="mailto: team@icoroadmaps.com" target="_top" class="under-construction-a1">team@icoroadmaps.com</a>
						</p>

						<div id="ui" class="right-block-comming-soon">
							<div class="primary">
								<div class="gear"></div>
								<div class="gear"></div>
								<div class="gear"></div>
								<div class="gear"></div>
								<div class="gear"></div>
								<div class="gear"></div>
								<div class="gear"></div>
								<div class="gear"></div>
							</div>
							<div class="secondary">
								<div class="gear"></div>
								<div class="gear"></div>
								<div class="gear"></div>
								<div class="gear"></div>
							</div>
						</div>
				    </v-tab>

				    <v-tab title="airdrops">
				      	<p class="under-construction-p1">The Future's So Bright!!!</p>
						
						<p class="desktop under-construction-p2">This page is under constraction. Please check back soon.</p>

						<p class="under-construction-p3">We are working hard to complete this website.</p>
						<p class="under-construction-p4">If you want to help please make a donation.</p> 
						
						<p class="under-construction-p5">Project Donation Wallet (BTC)<br />
							<a href="" data-toggle="modal" data-target="#projectWalletModal" class="under-construction-a1">1PgSHAKdC6f43iK8BNoXuwHvy1hpt34Rps</a>
						</p>
						<p class="under-construction-p6">Team Donation Wallet (BTC)<br />
							<a href="" data-toggle="modal" data-target="#teamWalletModal" class="under-construction-a1">1MSpt8jPpqVEZsHJpcULusL9pgYi32x1eV</a>
						</p>
						<p class="under-construction-p7">Team E-mail<br />
							<a href="mailto: team@icoroadmaps.com" target="_top" class="under-construction-a1">team@icoroadmaps.com</a>
						</p>

						<div id="ui" class="right-block-comming-soon">
							<div class="primary">
								<div class="gear"></div>
								<div class="gear"></div>
								<div class="gear"></div>
								<div class="gear"></div>
								<div class="gear"></div>
								<div class="gear"></div>
								<div class="gear"></div>
								<div class="gear"></div>
							</div>
							<div class="secondary">
								<div class="gear"></div>
								<div class="gear"></div>
								<div class="gear"></div>
								<div class="gear"></div>
							</div>
						</div>
				    </v-tab>

				    <v-tab title="statistics">
				      	<p class="under-construction-p1">The Future's So Bright!!!</p>
						
						<p class="desktop under-construction-p2">This page is under constraction. Please check back soon.</p>

						<p class="under-construction-p3">We are working hard to complete this website.</p>
						<p class="under-construction-p4">If you want to help please make a donation.</p> 
						
						<p class="under-construction-p5">Project Donation Wallet (BTC)<br />
							<a href="" data-toggle="modal" data-target="#projectWalletModal" class="under-construction-a1">1PgSHAKdC6f43iK8BNoXuwHvy1hpt34Rps</a>
						</p>
						<p class="under-construction-p6">Team Donation Wallet (BTC)<br />
							<a href="" data-toggle="modal" data-target="#teamWalletModal" class="under-construction-a1">1MSpt8jPpqVEZsHJpcULusL9pgYi32x1eV</a>
						</p>
						<p class="under-construction-p7">Team E-mail<br />
							<a href="mailto: team@icoroadmaps.com" target="_top" class="under-construction-a1">team@icoroadmaps.com</a>
						</p>

						<div id="ui" class="right-block-comming-soon">
							<div class="primary">
								<div class="gear"></div>
								<div class="gear"></div>
								<div class="gear"></div>
								<div class="gear"></div>
								<div class="gear"></div>
								<div class="gear"></div>
								<div class="gear"></div>
								<div class="gear"></div>
							</div>
							<div class="secondary">
								<div class="gear"></div>
								<div class="gear"></div>
								<div class="gear"></div>
								<div class="gear"></div>
							</div>
						</div>
				    </v-tab>

				    <v-tab title="forum">
				      	<p class="under-construction-p1">The Future's So Bright!!!</p>
						
						<p class="desktop under-construction-p2">This page is under constraction. Please check back soon.</p>

						<p class="under-construction-p3">We are working hard to complete this website.</p>
						<p class="under-construction-p4">If you want to help please make a donation.</p> 
						
						<p class="under-construction-p5">Project Donation Wallet (BTC)<br />
							<a href="" data-toggle="modal" data-target="#projectWalletModal" class="under-construction-a1">1PgSHAKdC6f43iK8BNoXuwHvy1hpt34Rps</a>
						</p>
						<p class="under-construction-p6">Team Donation Wallet (BTC)<br />
							<a href="" data-toggle="modal" data-target="#teamWalletModal" class="under-construction-a1">1MSpt8jPpqVEZsHJpcULusL9pgYi32x1eV</a>
						</p>
						<p class="under-construction-p7">Team E-mail<br />
							<a href="mailto: team@icoroadmaps.com" target="_top" class="under-construction-a1">team@icoroadmaps.com</a>
						</p>

						<div id="ui" class="right-block-comming-soon">
							<div class="primary">
								<div class="gear"></div>
								<div class="gear"></div>
								<div class="gear"></div>
								<div class="gear"></div>
								<div class="gear"></div>
								<div class="gear"></div>
								<div class="gear"></div>
								<div class="gear"></div>
							</div>
							<div class="secondary">
								<div class="gear"></div>
								<div class="gear"></div>
								<div class="gear"></div>
								<div class="gear"></div>
							</div>
						</div>
				    </v-tab>
				</vue-tabs>

			</div>
		</section>

	</main> <!--END Main Content -->

@endsection
