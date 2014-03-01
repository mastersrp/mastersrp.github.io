function projectCtrl( $scope ) {
	$scope.projects = [
		{
			"name":"PyUpdater",
			"url":"http://github.com/mastersrp/PyUpdater",
			"desc": "A package manager + compiler system. Currently still work in progress, but hasn't been worked on due to the above project. (requires Python 3)"
		},{
			"name":"hacktheplanet",
			"url":"http://github.com/mastersrp/hacktheplanet",
			"desc":"A hacking simulator/game. Supposed to be somewhat of a Uplink-esque realistic game."
		},{
			"name":"SourcePackageManager",
			"url":"http://mastersrp.github.io/SourcePackageManager",
			"desc":"A tiny embeddable package manager for use anywhere and everywhere."
		},{
			"name":"RSS feed generator",
			"url":"https://chiselapp.com/user/mastersrp/repository/mltv-rss",
			"desc":"A simple RSS feed generator with a web interface for customization and embedding."
		}
	];
}
