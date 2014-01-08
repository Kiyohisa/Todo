function entryLocate(){
	
	Ti.Media.showCamera({
		success:function(event)
		{
			var now = (e.value).getTime();
			var file = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,
				String.format("%d-%d", now, Math.floor(Math.random() * 1000)));
			file.write(event.media);
			var photo = Alloy.createModel('photo', {path: file.nativePath});
			photo.save();
		}
	});
}
