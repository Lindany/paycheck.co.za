import React, { Component } from 'react'
import './Dashboard.css';
class componentName extends Component {
    render () {
        return (
          <div>  <div class="header">
	<div class="logo">
		<h1>logo</h1>
	</div>
	<div class="buttons right">
		<a href="#">Settings</a>
		<a href="#">Logout</a>
	</div>
</div>

<div class="fullscreen dashboard">
	<div class="container">
		<h1 class="title center">Welcome to the Web Application</h1>

		<div class="tools blocks">
			<h2>Application Tools</h2>
			<a ng-href="/#/search">
				<i class="fa fa-search"></i>
				<span>Search</span>
			</a>
			<a ui-sref="data-manager">
				<i class="fa fa-thumbs-o-up"></i>
				<span>Approval</span>
			</a>
			<a ui-sref="notam-search">
				<i class="fa fa-exclamation-triangle"></i>
				<span>NOTAM</span>
			</a>
			<a ng-href="/#/chart-manager">
				<i class="fa fa-map-o"></i>
				<span>Chart</span>
			</a>
			<a ng-href="/#/terminal-procedures">
				<i class="fa fa-plane"></i>
				<span>Procedure</span>
			</a>
			<a ng-href="/#/customer-profile">
				<i class="fa fa-user"></i>
				<span>Customer</span>
			</a>
			<a ng-href="/#/airport-surveillance">
				<i class="fa fa-binoculars"></i>
				<span>Surveilliance</span>
			</a>
			<a class="obstacle" ng-href="/#/obstacle/upload">
				<i class="fa fa-tree"></i>
				<span>Obstacle Uploader</span>
			</a>
		</div>

		<div class="tools large-blocks">
			<h2>Application Tools</h2>

			<a ng-href="/#/search">
				<i class="fa fa-search"></i>
				<div class="circle"></div>
				<span>Data Search</span>
				<p>Search all entities within the database.</p>
			</a>
			<a ui-sref="data-manager">
				<i class="fa fa-thumbs-o-up"></i>
				<div class="circle"></div>
				<span>Data Approval</span>
				<p>Manage pending updates to the database.</p>
			</a>
			<a ui-sref="notam-search">
				<i class="fa fa-exclamation-triangle"></i>
				<div class="circle"></div>
				<span>NOTAM Manager</span>
				<p>View and apply digital NOTAMs.</p>
			</a>
			<a ng-href="/#/chart-manager">
				<i class="fa fa-map-o"></i>
				<div class="circle"></div>
				<span>Chart Manager</span>
				<p>Create and manage chart exports.</p>
			</a>
			<a class="procedures" ng-href="/#/terminal-procedures">
				<i class="fa fa-plane"></i>
				<div class="circle"></div>
				<span>Terminal Procedures</span>
				<p>Create and manage procedures.</p>
			</a>
			<a ng-href="/#/customer-profile">
				<i class="fa fa-user"></i>
				<div class="circle"></div>
				<span>Customer Profiles</span>
				<p>Manage customer and aircraft profiles.</p>
			</a>
			<a ng-href="/#/airport-surveillance">
				<i class="fa fa-binoculars"></i>
				<div class="circle"></div>
				<span>Airport Surveilliance</span>
				<p>Manage airport surveilliance list.</p>
			</a>
			<a class="obstacle" ng-href="/#/obstacle/upload">
				<i class="fa fa-tree"></i>
				<div class="circle"></div>
				<span>Obstacle Uploader</span>
				<p>Use web-based upload tool for obstacles.</p>
			</a>
		</div>
	</div>
</div>

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"/>
      </div>  )
    }
}

export default componentName