var pts = Alloy.Collections.photo;
var win = Ti.UI.currentWindow;
var dialogs = require("alloy/dialogs");
function entryLocate(){
	alert('entry!');
	Ti.Media.showCamera({
		success:function(event)
		{
			// cropRectにはx,y,height,widthといったデータがはいる
			var cropRect = event.cropRect;
			var image = event.media;

			// 撮影されたデータが写真ならばImageViewとしてWindowに貼付ける
			if(event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO){
				var imageView = Ti.UI.createImageView({
					width:win.width,
					height:win.height,
					image:event.media
				});
				win.add(imageView);
			}
		},
		cancel:function(){
			alert('You canceled the action.');
		},
		error:function(error){
			// create alert
			var a = Titanium.UI.createAlertDialog({title:'Camera'});
	 
			// set message
			if (error.code == Titanium.Media.NO_CAMERA)
			{
				a.setMessage('Please run this test on device');
			}
			else
			{
				a.setMessage('Unexpected error: ' + error.code);
			}
	 
			// show alert
			a.show();
		},
		// 撮影データのフォトギャラリーへの保存
		saveToPhotoGallery:true,
		// 撮影直後に拡大縮小移動するか否かのフラグ
		allowEditing:true,
		// 撮影可能なメディア種別を配列で指定
		mediaTypes:[Ti.Media.MEDIA_TYPE_VIDEO, Ti.Media.MEDIA_TYPE_PHOTO],
	});	
}
