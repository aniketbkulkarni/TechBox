// Top Level Component
var Main = React.createClass({
        render: function() {
          var message =
            'Techbox - React is running';

          return (
          	<div>
          		<NavBar/>
         		<p>{message}</p>
         	</div>
         );

        }
    });

//Navigation Bar
var NavBar = React.createClass({
        render: function() {
          return ( 
          	<div class="NavBar">This is the Nav Bar</div>
          );
        }
	});


//Main Render Function
ReactDOM.render(
        <Main/>,
        document.getElementById('container')
      );