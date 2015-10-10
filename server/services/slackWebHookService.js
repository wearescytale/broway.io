slackWebHookService = {
	getMessage : function(payload) {
		var team_domain     = payload.team_domain;
		var channel_name    = payload.channel_name;
		var timestamp       = payload.timestamp;
		var username        = payload.user_name;
		var original_text   = payload.text;
		var trigger_word    = payload.trigger_word;
	
		var data = original_text.split(trigger_word)[1].trim();
		
		var message = {
			author: username,
			origin: '#' + channel_name + ' @ ' + team_domain + '.slack.com',
			timestamp: timestamp
		};
		
		var messageType = this.getType(data);
		
		message.type = messageType.type;
		message.data = messageType.data; 
		
		return message;	
	},
	
	getType : function(data) {
		var youtubeRegex = /^.*(<).*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*(>)/;
		var match = data.match(youtubeRegex);
		
		if (match&&match[8].length==11) {
			return {
				type : 'video/youtube',
				data : match[8]
			}
		}
		
		var imageExtReged = /\.(jpeg|jpg|gif|png)>$/;
		if (data.match(imageExtReged) != null) {
			var urlRegex = /((<)(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?(>))/
			return {
				type : 'image',
				data : data.match(urlRegex)[1].replace('<', '').replace('>', '')
			}
		}
		
		return {
			type: 'text',
			data: data
		}
	} 
}