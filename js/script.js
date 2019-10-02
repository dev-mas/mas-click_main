$(function() {
	$('#ghapidata').html('Loading...');
	var username = $('#ghusername').val();
	var requri = 'https://api.github.com/users/' + "dvmoomoodv";
	var repouri = 'https://api.github.com/users/' + "dvmoomoodv" + '/repos';
	requestJSON(requri, function(json) {
		var fullname = json.name;
		var username = json.login;
		var aviurl = json.avatar_url;
		var profileurl = json.html_url;
		var location = json.location;
		var followersnum = json.followers;
		var followingnum = json.following;
		var reposnum = json.public_repos;
		var email = json.email;
		if (fullname == undefined) {
			fullname = username;
		}
		var outhtml = '<span>'+ fullname + ' <span class="smallname">(@<a href="' + profileurl + '" target="_blank">' + username + '</a>)</span></span>';
		outhtml = outhtml + '<a href="' + profileurl + '" target="_blank"><img src="' + aviurl + '" width="80" height="80" alt="' + username + '"></a>';
		outhtml = outhtml + '<p>Subscribers: ' + followersnum + ' - Subscribe: ' + followingnum +'</p>';
		outhtml = outhtml + '<div class="clearfix">';
		var repositories;
		$.getJSON(repouri, function(json) {
			repositories = json;
			outputPageContent();
		});

		function outputPageContent() {
				outhtml = outhtml + '</ul></div>';
			$('#ghapidata').html(outhtml);
		}
    });
    
    $('#ghapidata2').html('Loading...');
	var username = $('#ghusername').val();
	var requri = 'https://api.github.com/users/' + "saranf";
	var repouri = 'https://api.github.com/users/' + "saranf" + '/repos';
	requestJSON(requri, function(json) {
		var fullname = json.name;
		var username = json.login;
		var aviurl = json.avatar_url;
		var profileurl = json.html_url;
		var location = json.location;
		var followersnum = json.followers;
		var followingnum = json.following;
		var reposnum = json.public_repos;
		var email = json.email;
		if (fullname == undefined) {
			fullname = username;
		}
		var outhtml = '<span>'+ fullname + ' <span class="smallname">(@<a href="' + profileurl + '" target="_blank">' + username + '</a>)</span></span>';
		outhtml = outhtml + '<a href="' + profileurl + '" target="_blank"><img src="' + aviurl + '" width="80" height="80" alt="' + username + '"></a>';
		outhtml = outhtml + '<p>Subscribers: ' + followersnum + ' - Subscribe: ' + followingnum +'</p>';
		outhtml = outhtml + '<div class="clearfix">';
		var repositories;
		$.getJSON(repouri, function(json) {
			repositories = json;
			outputPageContent();
		});

		function outputPageContent() {
				outhtml = outhtml + '</ul></div>';
			$('#ghapidata2').html(outhtml);
		}
	});

	function requestJSON(url, callback) {
		$.ajax({
			url: url,
			complete: function(xhr) {
				callback.call(null, xhr.responseJSON);
			}
		});
	}
});