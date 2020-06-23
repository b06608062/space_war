(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"SPACE_WAR_atlas_1", frames: [[597,0,658,439],[1506,1004,510,482],[0,0,595,794],[1506,1488,500,413],[1257,0,500,500],[597,441,500,500],[1004,1506,500,413],[0,796,500,500],[0,1298,500,500],[1099,502,500,500],[502,943,500,500],[502,1445,500,500],[1004,1004,500,500]]},
		{name:"SPACE_WAR_atlas_2", frames: [[314,0,450,360],[867,381,250,250],[1119,381,250,250],[1579,0,300,213],[0,541,194,194],[1371,430,250,250],[196,577,194,194],[392,577,194,194],[1623,620,194,194],[1819,620,194,194],[867,633,194,194],[1579,215,300,213],[1063,633,194,194],[588,635,194,194],[1259,682,194,194],[0,737,194,194],[196,773,194,194],[392,773,194,194],[1455,816,194,194],[1651,816,194,194],[1881,147,148,124],[1847,816,194,194],[314,362,300,213],[1985,273,40,127],[1150,939,301,42],[588,831,184,123],[2013,79,26,26],[784,829,194,194],[2013,0,16,77],[1875,430,170,176],[0,933,85,79],[1623,430,250,188],[1455,682,154,59],[1063,1029,58,59],[148,1030,58,59],[208,1030,58,59],[268,1030,58,59],[784,635,59,59],[784,696,59,59],[1557,743,59,59],[328,1030,58,59],[388,1030,58,59],[448,1030,58,59],[508,1030,58,59],[784,757,59,59],[1376,878,59,59],[87,933,59,59],[1123,1044,58,59],[588,956,59,59],[1183,1044,58,59],[1881,273,102,120],[1243,1044,58,59],[1303,1044,58,59],[1363,1044,58,59],[649,956,59,59],[710,956,59,59],[61,1055,58,59],[1423,1073,58,59],[1483,1073,58,59],[1543,1073,58,59],[148,969,59,59],[209,969,59,59],[270,969,59,59],[1603,1073,58,59],[1663,1073,58,59],[1723,1073,58,59],[1881,0,130,145],[1783,1073,58,59],[1843,1073,58,59],[1903,1073,58,59],[331,969,59,59],[392,969,59,59],[453,969,59,59],[514,969,59,59],[1150,983,59,59],[1963,1073,58,59],[1211,983,59,59],[0,1075,58,59],[568,1078,58,59],[1272,983,59,59],[628,1078,58,59],[688,1078,58,59],[748,1086,58,59],[808,1086,58,59],[868,1086,58,59],[928,1090,58,59],[988,1090,58,59],[1333,983,59,59],[1394,983,59,59],[1048,1090,58,59],[121,1091,58,59],[87,994,59,59],[1455,1012,59,59],[181,1091,58,59],[241,1091,58,59],[1516,1012,59,59],[1577,1012,59,59],[1638,1012,59,59],[1699,1012,59,59],[1760,1012,59,59],[301,1091,58,59],[361,1091,58,59],[421,1091,58,59],[481,1091,58,59],[1108,1105,58,59],[1168,1105,58,59],[1228,1105,58,59],[1288,1105,58,59],[1348,1105,58,59],[60,1116,58,59],[1821,1012,59,59],[1882,1012,59,59],[1408,1134,58,59],[1943,1012,59,59],[1468,1134,58,59],[1528,1134,58,59],[0,1014,59,59],[1588,1134,58,59],[1648,1134,58,59],[1708,1134,58,59],[575,1017,59,59],[636,1017,59,59],[1768,1134,58,59],[697,1017,59,59],[1828,1134,58,59],[758,1025,59,59],[1888,1134,58,59],[819,1025,59,59],[1948,1134,58,59],[0,1136,58,59],[766,0,269,379],[880,1025,59,59],[0,0,312,539],[1037,0,269,379],[1455,743,100,59],[1150,878,224,59],[616,381,249,252],[1308,0,269,379],[941,1029,59,59],[1002,1029,59,59],[980,829,168,198],[541,1139,58,59],[601,1139,58,59]]}
];


(lib.AnMovieClip = function(){
	this.currentSoundStreamInMovieclip;
	this.actionFrames = [];
	this.soundStreamDuration = new Map();
	this.streamSoundSymbolsList = [];

	this.gotoAndPlayForStreamSoundSync = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.gotoAndPlay = function(positionOrLabel){
		this.clearAllSoundStreams();
		this.startStreamSoundsForTargetedFrame(positionOrLabel);
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		this.clearAllSoundStreams();
		this.startStreamSoundsForTargetedFrame(this.currentFrame);
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
		this.clearAllSoundStreams();
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
		this.clearAllSoundStreams();
	}
	this.startStreamSoundsForTargetedFrame = function(targetFrame){
		for(var index=0; index<this.streamSoundSymbolsList.length; index++){
			if(index <= targetFrame && this.streamSoundSymbolsList[index] != undefined){
				for(var i=0; i<this.streamSoundSymbolsList[index].length; i++){
					var sound = this.streamSoundSymbolsList[index][i];
					if(sound.endFrame > targetFrame){
						var targetPosition = Math.abs((((targetFrame - sound.startFrame)/lib.properties.fps) * 1000));
						var instance = playSound(sound.id);
						var remainingLoop = 0;
						if(sound.offset){
							targetPosition = targetPosition + sound.offset;
						}
						else if(sound.loop > 1){
							var loop = targetPosition /instance.duration;
							remainingLoop = Math.floor(sound.loop - loop);
							if(targetPosition == 0){ remainingLoop -= 1; }
							targetPosition = targetPosition % instance.duration;
						}
						instance.loop = remainingLoop;
						instance.position = Math.round(targetPosition);
						this.InsertIntoSoundStreamData(instance, sound.startFrame, sound.endFrame, sound.loop , sound.offset);
					}
				}
			}
		}
	}
	this.InsertIntoSoundStreamData = function(soundInstance, startIndex, endIndex, loopValue, offsetValue){ 
 		this.soundStreamDuration.set({instance:soundInstance}, {start: startIndex, end:endIndex, loop:loopValue, offset:offsetValue});
	}
	this.clearAllSoundStreams = function(){
		var keys = this.soundStreamDuration.keys();
		for(var i = 0;i<this.soundStreamDuration.size; i++){
			var key = keys.next().value;
			key.instance.stop();
		}
 		this.soundStreamDuration.clear();
		this.currentSoundStreamInMovieclip = undefined;
	}
	this.stopSoundStreams = function(currentFrame){
		if(this.soundStreamDuration.size > 0){
			var keys = this.soundStreamDuration.keys();
			for(var i = 0; i< this.soundStreamDuration.size ; i++){
				var key = keys.next().value; 
				var value = this.soundStreamDuration.get(key);
				if((value.end) == currentFrame){
					key.instance.stop();
					if(this.currentSoundStreamInMovieclip == key) { this.currentSoundStreamInMovieclip = undefined; }
					this.soundStreamDuration.delete(key);
				}
			}
		}
	}

	this.computeCurrentSoundStreamInstance = function(currentFrame){
		if(this.currentSoundStreamInMovieclip == undefined){
			if(this.soundStreamDuration.size > 0){
				var keys = this.soundStreamDuration.keys();
				var maxDuration = 0;
				for(var i=0;i<this.soundStreamDuration.size;i++){
					var key = keys.next().value;
					var value = this.soundStreamDuration.get(key);
					if(value.end > maxDuration){
						maxDuration = value.end;
						this.currentSoundStreamInMovieclip = key;
					}
				}
			}
		}
	}
	this.getDesiredFrame = function(currentFrame, calculatedDesiredFrame){
		for(var frameIndex in this.actionFrames){
			if((frameIndex > currentFrame) && (frameIndex < calculatedDesiredFrame)){
				return frameIndex;
			}
		}
		return calculatedDesiredFrame;
	}

	this.syncStreamSounds = function(){
		this.stopSoundStreams(this.currentFrame);
		this.computeCurrentSoundStreamInstance(this.currentFrame);
		if(this.currentSoundStreamInMovieclip != undefined){
			var soundInstance = this.currentSoundStreamInMovieclip.instance;
			if(soundInstance.position != 0){
				var soundValue = this.soundStreamDuration.get(this.currentSoundStreamInMovieclip);
				var soundPosition = (soundValue.offset?(soundInstance.position - soundValue.offset): soundInstance.position);
				var calculatedDesiredFrame = (soundValue.start)+((soundPosition/1000) * lib.properties.fps);
				if(soundValue.loop > 1){
					calculatedDesiredFrame +=(((((soundValue.loop - soundInstance.loop -1)*soundInstance.duration)) / 1000) * lib.properties.fps);
				}
				calculatedDesiredFrame = Math.floor(calculatedDesiredFrame);
				var deltaFrame = calculatedDesiredFrame - this.currentFrame;
				if(deltaFrame >= 2){
					this.gotoAndPlayForStreamSoundSync(this.getDesiredFrame(this.currentFrame,calculatedDesiredFrame));
				}
			}
		}
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.A = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.AA_0 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.AA_1 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.AAA = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.AAAA_0 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.AA_2 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.AAAA_10 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.AAAA_11 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.AAAA_1 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.AAAA_13 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.AAAA_12 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.AAA1 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.AAAA_14 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.AAAA_3 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.AAAA_4 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.AAAA_5 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.AAAA_6 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.AAAA_7 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.AAAA_8 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.AAAA_9 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.AAAAA = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.AAAA_15 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.AAA2 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.ATK1 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.ATK4 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.ATK3 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.ATK5 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.AAAA_2 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.background = function() {
	this.initialize(ss["SPACE_WAR_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ATK6 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.ATK7 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.ATK2 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.BOOM_1 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.C = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.c02 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.c02png複製 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.c02png複製2 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.c02png複製3 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.c03png複製2 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.c03 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.c03png複製 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.c02png複製4 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.c04png複製 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.c04png複製2 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.c04png複製3 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.c03png複製3 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.c03png複製4 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.c05png複製 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.c04png複製4 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.c05 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.c04 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.c06png複製 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.c06png複製2 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.c06png複製3 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.c05png複製3 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.c05png複製4 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.c06png複製4 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.c06 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.c07png複製 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.c07png複製4 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.c08 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.c08png複製 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.c08png複製2 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.c07png複製3 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.c07png複製2 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.c09 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.c07 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.c09png複製3 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.c09png複製 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.c08png複製4 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.c10png複製 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.c10png複製2 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.c10 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.c08png複製3 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.c11 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.c10png複製3 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.c11png複製2 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.c11png複製 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.c10png複製4 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.c09png複製4 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.c12png複製 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.c11png複製4 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.c12png複製3 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.c11png複製3 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.c12png複製2 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.c12 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.c13png複製2 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.c13png複製3 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.c12png複製4 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.c14 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.c13 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.c13png複製 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.c14png複製3 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.c14png複製 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.c13png複製4 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.c15png複製 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.c15png複製2 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.c15png複製3 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(98);
}).prototype = p = new cjs.Sprite();



(lib.c15png複製4 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(99);
}).prototype = p = new cjs.Sprite();



(lib.c09png複製2 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(100);
}).prototype = p = new cjs.Sprite();



(lib.c16png複製 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(101);
}).prototype = p = new cjs.Sprite();



(lib.c16png複製2 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(102);
}).prototype = p = new cjs.Sprite();



(lib.c16png複製3 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(103);
}).prototype = p = new cjs.Sprite();



(lib.c16png複製4 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(104);
}).prototype = p = new cjs.Sprite();



(lib.c17 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(105);
}).prototype = p = new cjs.Sprite();



(lib.c17png複製 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(106);
}).prototype = p = new cjs.Sprite();



(lib.c17png複製2 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(107);
}).prototype = p = new cjs.Sprite();



(lib.c17png複製3 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(108);
}).prototype = p = new cjs.Sprite();



(lib.c16 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(109);
}).prototype = p = new cjs.Sprite();



(lib.c15 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(110);
}).prototype = p = new cjs.Sprite();



(lib.c18png複製 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(111);
}).prototype = p = new cjs.Sprite();



(lib.c17png複製4 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(112);
}).prototype = p = new cjs.Sprite();



(lib.c18 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(113);
}).prototype = p = new cjs.Sprite();



(lib.c14png複製4 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(114);
}).prototype = p = new cjs.Sprite();



(lib.c19 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(115);
}).prototype = p = new cjs.Sprite();



(lib.c18png複製3 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(116);
}).prototype = p = new cjs.Sprite();



(lib.c19png複製2 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(117);
}).prototype = p = new cjs.Sprite();



(lib.c19png複製3 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(118);
}).prototype = p = new cjs.Sprite();



(lib.c14png複製2 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(119);
}).prototype = p = new cjs.Sprite();



(lib.c20 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(120);
}).prototype = p = new cjs.Sprite();



(lib.c20png複製 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(121);
}).prototype = p = new cjs.Sprite();



(lib.c19png複製 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(122);
}).prototype = p = new cjs.Sprite();



(lib.c18png複製4 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(123);
}).prototype = p = new cjs.Sprite();



(lib.c19png複製4 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(124);
}).prototype = p = new cjs.Sprite();



(lib.c20png複製2 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(125);
}).prototype = p = new cjs.Sprite();



(lib.c21png複製 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(126);
}).prototype = p = new cjs.Sprite();



(lib.c20png複製4 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(127);
}).prototype = p = new cjs.Sprite();



(lib.c21png複製3 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(128);
}).prototype = p = new cjs.Sprite();



(lib.c21png複製4 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(129);
}).prototype = p = new cjs.Sprite();



(lib.CSS = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(130);
}).prototype = p = new cjs.Sprite();



(lib.c20png複製3 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(131);
}).prototype = p = new cjs.Sprite();



(lib.FIRE2 = function() {
	this.initialize(ss["SPACE_WAR_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.FIRE3 = function() {
	this.initialize(ss["SPACE_WAR_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.FIRE1 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(132);
}).prototype = p = new cjs.Sprite();



(lib.HTML = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(133);
}).prototype = p = new cjs.Sprite();



(lib.J = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(134);
}).prototype = p = new cjs.Sprite();



(lib.H = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(135);
}).prototype = p = new cjs.Sprite();



(lib.ROCK = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(136);
}).prototype = p = new cjs.Sprite();



(lib.ship = function() {
	this.initialize(ss["SPACE_WAR_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.JS = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(137);
}).prototype = p = new cjs.Sprite();



(lib.STAR_0 = function() {
	this.initialize(ss["SPACE_WAR_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.STAR_1 = function() {
	this.initialize(ss["SPACE_WAR_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.SHIP1 = function() {
	this.initialize(ss["SPACE_WAR_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.STAR_3 = function() {
	this.initialize(ss["SPACE_WAR_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.STAR_4 = function() {
	this.initialize(ss["SPACE_WAR_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.STAR_2 = function() {
	this.initialize(ss["SPACE_WAR_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.STAR_6 = function() {
	this.initialize(ss["SPACE_WAR_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.STAR_7 = function() {
	this.initialize(ss["SPACE_WAR_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.STAR_5 = function() {
	this.initialize(ss["SPACE_WAR_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.c18png複製2 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(138);
}).prototype = p = new cjs.Sprite();



(lib.c05png複製2 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(139);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(140);
}).prototype = p = new cjs.Sprite();



(lib.c21 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(141);
}).prototype = p = new cjs.Sprite();



(lib.c21png複製2 = function() {
	this.initialize(ss["SPACE_WAR_atlas_2"]);
	this.gotoAndStop(142);
}).prototype = p = new cjs.Sprite();



(lib.st = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{run:0});

	// timeline functions:
	this.frame_31 = function() {
		this.gotoAndPlay("run");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(31).call(this.frame_31).wait(1));

	// 圖層_1
	this.instance = new lib.STAR_0();
	this.instance.setTransform(203,213,0.07,0.07);

	this.instance_1 = new lib.STAR_1();
	this.instance_1.setTransform(203,213,0.07,0.07);

	this.instance_2 = new lib.STAR_2();
	this.instance_2.setTransform(203,213,0.07,0.07);

	this.instance_3 = new lib.STAR_3();
	this.instance_3.setTransform(203,213,0.07,0.07);

	this.instance_4 = new lib.STAR_4();
	this.instance_4.setTransform(203,213,0.07,0.07);

	this.instance_5 = new lib.STAR_5();
	this.instance_5.setTransform(203,213,0.07,0.07);

	this.instance_6 = new lib.STAR_6();
	this.instance_6.setTransform(203,213,0.07,0.07);

	this.instance_7 = new lib.STAR_7();
	this.instance_7.setTransform(203,213,0.07,0.07);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_4}]},4).to({state:[{t:this.instance_5}]},4).to({state:[{t:this.instance_6}]},4).to({state:[{t:this.instance_7}]},4).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(203,213,35,35);


(lib.sh = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{stop:0,"run":24,hit:25,boom:43});

	// timeline functions:
	this.frame_23 = function() {
		this.gotoAndPlay("stop");
	}
	this.frame_24 = function() {
		this.stop();
	}
	this.frame_42 = function() {
		this.gotoAndPlay("hit");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(23).call(this.frame_23).wait(1).call(this.frame_24).wait(18).call(this.frame_42).wait(22));

	// 圖層_1
	this.instance = new lib.ship();
	this.instance.setTransform(-21,-16,0.15,0.1816);

	this.instance_1 = new lib.FIRE3();
	this.instance_1.setTransform(-8,38,0.0252,0.0189,180);

	this.instance_2 = new lib.FIRE3();
	this.instance_2.setTransform(56,38,0.0252,0.0189,180);

	this.instance_3 = new lib.FIRE3();
	this.instance_3.setTransform(47,57,0.0252,0.0189,180);

	this.instance_4 = new lib.FIRE3();
	this.instance_4.setTransform(1,57,0.0252,0.0189,180);

	this.instance_5 = new lib.SHIP1();
	this.instance_5.setTransform(-21,-16,0.15,0.1816);
	this.instance_5._off = true;

	this.instance_6 = new lib.c02();
	this.instance_6.setTransform(-13,0);

	this.instance_7 = new lib.c03();
	this.instance_7.setTransform(-13,0);

	this.instance_8 = new lib.c04();
	this.instance_8.setTransform(-13,0);

	this.instance_9 = new lib.c05();
	this.instance_9.setTransform(-13,0);

	this.instance_10 = new lib.c06();
	this.instance_10.setTransform(-13,0);

	this.instance_11 = new lib.c07();
	this.instance_11.setTransform(-13,0);

	this.instance_12 = new lib.c08();
	this.instance_12.setTransform(-13,0);

	this.instance_13 = new lib.c09();
	this.instance_13.setTransform(-13,0);

	this.instance_14 = new lib.c10();
	this.instance_14.setTransform(-13,0);

	this.instance_15 = new lib.c11();
	this.instance_15.setTransform(-13,0);

	this.instance_16 = new lib.c12();
	this.instance_16.setTransform(-13,0);

	this.instance_17 = new lib.c13();
	this.instance_17.setTransform(-13,0);

	this.instance_18 = new lib.c14();
	this.instance_18.setTransform(-13,0);

	this.instance_19 = new lib.c15();
	this.instance_19.setTransform(-13,0);

	this.instance_20 = new lib.c16();
	this.instance_20.setTransform(-13,0);

	this.instance_21 = new lib.c17();
	this.instance_21.setTransform(-13,0);

	this.instance_22 = new lib.c18();
	this.instance_22.setTransform(-13,0);

	this.instance_23 = new lib.c19();
	this.instance_23.setTransform(-13,0);

	this.instance_24 = new lib.c20();
	this.instance_24.setTransform(-13,0);

	this.instance_25 = new lib.c21();
	this.instance_25.setTransform(-13,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({y:-17},0).wait(3).to({y:-18},0).wait(3).to({y:-19},0).wait(3).to({y:-20},0).wait(3).to({y:-19},0).wait(3).to({y:-18},0).wait(3).to({y:-17},0).wait(3).to({y:-16},0).to({_off:true},1).wait(3).to({_off:false},0).wait(2).to({_off:true},1).wait(3).to({_off:false},0).wait(2).to({_off:true},1).wait(3).to({_off:false},0).wait(2).to({_off:true},1).wait(21));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(25).to({_off:false},0).wait(2).to({_off:true},1).wait(3).to({_off:false},0).wait(2).to({_off:true},1).wait(3).to({_off:false},0).wait(2).to({_off:true},1).wait(24));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23,-20,79,79);


(lib.ro = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.ROCK();
	this.instance.setTransform(-65,-126,0.2008,0.1984);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65,-126,50,50);


(lib.jjs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{run1:0,run2:1,run3:3});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.gotoAndPlay("run2");
	}
	this.frame_3 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// 圖層_1
	this.instance = new lib.JS();
	this.instance.setTransform(-75,-190,0.5019,0.5013);

	this.instance_1 = new lib.J();
	this.instance_1.setTransform(-31,-191,0.5,0.5085);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75,-191,135,191);


(lib.hht = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"run1":0,"run2":1,"run3":3});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.gotoAndPlay("run2");
	}
	this.frame_3 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// 圖層_1
	this.instance = new lib.HTML();
	this.instance.setTransform(-91,-81,0.5019,0.5013);

	this.instance_1 = new lib.H();
	this.instance_1.setTransform(-80,-80,0.5,0.5085);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91,-81,135,190);


(lib.fi2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.FIRE2();
	this.instance.setTransform(0,0,0.1471,0.1556);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,75,75);


(lib.fi1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.FIRE1();
	this.instance.setTransform(0,0,0.0961,0.0556);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,30,30);


(lib.ccs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"run1":0,"run2":1,"run3":3});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.gotoAndPlay("run2");
	}
	this.frame_3 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// 圖層_1
	this.instance = new lib.CSS();
	this.instance.setTransform(-75,-190,0.5019,0.5013);

	this.instance_1 = new lib.C();
	this.instance_1.setTransform(-46,-190,0.5,0.5085);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75,-190,135,190);


(lib.a7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.ATK7();
	this.instance.setTransform(36,-72,0.3882,0.7386,90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94,-72,130,66);


(lib.a6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.ATK6();
	this.instance.setTransform(13,2,0.625,0.8312);

	this.instance_1 = new lib.ATK6();
	this.instance_1.setTransform(-80,2,0.625,0.8312);

	this.instance_2 = new lib.ATK6();
	this.instance_2.setTransform(-38,-42,0.625,0.8312);

	this.instance_3 = new lib.ATK6();
	this.instance_3.setTransform(-51,-34,0.625,0.8312);

	this.instance_4 = new lib.ATK6();
	this.instance_4.setTransform(-65,-28,0.625,0.8312);

	this.instance_5 = new lib.ATK6();
	this.instance_5.setTransform(-26,-42,0.625,0.8312);

	this.instance_6 = new lib.ATK6();
	this.instance_6.setTransform(-14,-34,0.625,0.8312);

	this.instance_7 = new lib.ATK6();
	this.instance_7.setTransform(-1,-28,0.625,0.8312);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-42,103,108);


(lib.a5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.ATK5();
	this.instance.setTransform(47,-13);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(47,-13,26,26);


(lib.a4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.ATK4();
	this.instance.setTransform(0,0,3.9867,0.3571);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1200,15);


(lib.a3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.ATK3();
	this.instance.setTransform(0,0,0.4891,0.4878);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,90,60);


(lib.a2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.ATK2();
	this.instance.setTransform(0,0,0.4706,0.5063);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,40,40);


(lib.a1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.ATK1();
	this.instance.setTransform(0,0,0.2498,0.252);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,10,32);


(lib.m5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"run1":0,"run2":1,"boom":50});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_49 = function() {
		this.gotoAndPlay("run2")
	}
	this.frame_55 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(49).call(this.frame_49).wait(6).call(this.frame_55).wait(1));

	// 圖層_1
	this.instance = new lib.AAAAA();
	this.instance.setTransform(3,-62,0.5405,0.4839);

	this.instance_1 = new lib.AAAAA();
	this.instance_1.setTransform(3,-62,0.5405,0.4839);

	this.instance_2 = new lib.BOOM_1();
	this.instance_2.setTransform(-146,-160,1.424,1.4255);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},9).to({state:[{t:this.instance}]},10).to({state:[{t:this.instance}]},10).to({state:[{t:this.instance}]},10).to({state:[{t:this.instance_2}]},10).to({state:[]},5).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({x:83},0).wait(10).to({x:3,y:-2},0).wait(10).to({y:-122},0).wait(10).to({x:-77,y:-62},0).to({_off:true},10).wait(6));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-146,-160,356,268);


(lib.m4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"run":0,"boom":51});

	// timeline functions:
	this.frame_50 = function() {
		this.gotoAndPlay("run");
	}
	this.frame_71 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(50).call(this.frame_50).wait(21).call(this.frame_71).wait(1));

	// 圖層_1
	this.instance = new lib.AAAA_0();
	this.instance.setTransform(51,51,0.4742,0.4747);

	this.instance_1 = new lib.AAAA_1();
	this.instance_1.setTransform(51,51,0.4742,0.4747);

	this.instance_2 = new lib.AAAA_2();
	this.instance_2.setTransform(51,51,0.4742,0.4747);

	this.instance_3 = new lib.AAAA_3();
	this.instance_3.setTransform(51,51,0.4742,0.4747);

	this.instance_4 = new lib.AAAA_4();
	this.instance_4.setTransform(51,51,0.4742,0.4747);

	this.instance_5 = new lib.AAAA_5();
	this.instance_5.setTransform(51,51,0.4742,0.4747);

	this.instance_6 = new lib.AAAA_6();
	this.instance_6.setTransform(51,51,0.4742,0.4747);

	this.instance_7 = new lib.AAAA_7();
	this.instance_7.setTransform(51,51,0.4742,0.4747);

	this.instance_8 = new lib.AAAA_8();
	this.instance_8.setTransform(51,51,0.4742,0.4747);

	this.instance_9 = new lib.AAAA_9();
	this.instance_9.setTransform(51,51,0.4742,0.4747);

	this.instance_10 = new lib.AAAA_10();
	this.instance_10.setTransform(51,51,0.4742,0.4747);

	this.instance_11 = new lib.AAAA_11();
	this.instance_11.setTransform(51,51,0.4742,0.4747);

	this.instance_12 = new lib.AAAA_12();
	this.instance_12.setTransform(51,51,0.4742,0.4747);

	this.instance_13 = new lib.AAAA_13();
	this.instance_13.setTransform(51,51,0.4742,0.4747);

	this.instance_14 = new lib.AAAA_14();
	this.instance_14.setTransform(51,51,0.4742,0.4747);

	this.instance_15 = new lib.AAAA_15();
	this.instance_15.setTransform(51,51,0.4742,0.4747);

	this.instance_16 = new lib.c02png複製4();
	this.instance_16.setTransform(68,68);

	this.instance_17 = new lib.c03png複製4();
	this.instance_17.setTransform(68,68);

	this.instance_18 = new lib.c04png複製4();
	this.instance_18.setTransform(68,68);

	this.instance_19 = new lib.c05png複製4();
	this.instance_19.setTransform(68,68);

	this.instance_20 = new lib.c06png複製4();
	this.instance_20.setTransform(68,68);

	this.instance_21 = new lib.c07png複製4();
	this.instance_21.setTransform(68,68);

	this.instance_22 = new lib.c08png複製4();
	this.instance_22.setTransform(68,68);

	this.instance_23 = new lib.c09png複製4();
	this.instance_23.setTransform(68,68);

	this.instance_24 = new lib.c10png複製4();
	this.instance_24.setTransform(68,68);

	this.instance_25 = new lib.c11png複製4();
	this.instance_25.setTransform(68,68);

	this.instance_26 = new lib.c12png複製4();
	this.instance_26.setTransform(68,68);

	this.instance_27 = new lib.c13png複製4();
	this.instance_27.setTransform(68,68);

	this.instance_28 = new lib.c14png複製4();
	this.instance_28.setTransform(68,68);

	this.instance_29 = new lib.c15png複製4();
	this.instance_29.setTransform(68,68);

	this.instance_30 = new lib.c16png複製4();
	this.instance_30.setTransform(68,68);

	this.instance_31 = new lib.c17png複製4();
	this.instance_31.setTransform(68,68);

	this.instance_32 = new lib.c18png複製4();
	this.instance_32.setTransform(68,68);

	this.instance_33 = new lib.c19png複製4();
	this.instance_33.setTransform(68,68);

	this.instance_34 = new lib.c20png複製4();
	this.instance_34.setTransform(68,68);

	this.instance_35 = new lib.c21png複製4();
	this.instance_35.setTransform(68,68);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_3}]},3).to({state:[{t:this.instance_4}]},3).to({state:[{t:this.instance_5}]},3).to({state:[{t:this.instance_6}]},3).to({state:[{t:this.instance_7}]},3).to({state:[{t:this.instance_8}]},3).to({state:[{t:this.instance_9}]},3).to({state:[{t:this.instance_10}]},3).to({state:[{t:this.instance_11}]},3).to({state:[{t:this.instance_12}]},3).to({state:[{t:this.instance_13}]},3).to({state:[{t:this.instance_14}]},3).to({state:[{t:this.instance_15,p:{rotation:0,x:51,y:51}}]},3).to({state:[{t:this.instance_15,p:{rotation:14.9993,x:64.45,y:40.65}}]},3).to({state:[{t:this.instance_16}]},3).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_35}]},1).to({state:[]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,153.3,153.4);


(lib.m3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"run1":0,"run2":1,"run3":2,"boom":3});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_23 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(21).call(this.frame_23).wait(1));

	// 圖層_1
	this.instance = new lib.AAA();
	this.instance.setTransform(-90,15,0.33,0.3098);

	this.instance_1 = new lib.AAA1();
	this.instance_1.setTransform(-90,15,0.33,0.3099);

	this.instance_2 = new lib.AAA2();
	this.instance_2.setTransform(-90,15,0.33,0.3099);

	this.instance_3 = new lib.c02png複製3();
	this.instance_3.setTransform(-70,22);

	this.instance_4 = new lib.c03png複製3();
	this.instance_4.setTransform(-70,22);

	this.instance_5 = new lib.c04png複製3();
	this.instance_5.setTransform(-70,22);

	this.instance_6 = new lib.c05png複製3();
	this.instance_6.setTransform(-70,22);

	this.instance_7 = new lib.c06png複製3();
	this.instance_7.setTransform(-70,22);

	this.instance_8 = new lib.c07png複製3();
	this.instance_8.setTransform(-70,22);

	this.instance_9 = new lib.c08png複製3();
	this.instance_9.setTransform(-70,22);

	this.instance_10 = new lib.c09png複製3();
	this.instance_10.setTransform(-70,22);

	this.instance_11 = new lib.c10png複製3();
	this.instance_11.setTransform(-70,22);

	this.instance_12 = new lib.c11png複製3();
	this.instance_12.setTransform(-70,22);

	this.instance_13 = new lib.c12png複製3();
	this.instance_13.setTransform(-70,22);

	this.instance_14 = new lib.c13png複製3();
	this.instance_14.setTransform(-70,22);

	this.instance_15 = new lib.c14png複製3();
	this.instance_15.setTransform(-70,22);

	this.instance_16 = new lib.c15png複製3();
	this.instance_16.setTransform(-70,22);

	this.instance_17 = new lib.c16png複製3();
	this.instance_17.setTransform(-70,22);

	this.instance_18 = new lib.c17png複製3();
	this.instance_18.setTransform(-70,22);

	this.instance_19 = new lib.c18png複製3();
	this.instance_19.setTransform(-70,22);

	this.instance_20 = new lib.c19png複製3();
	this.instance_20.setTransform(-70,22);

	this.instance_21 = new lib.c20png複製3();
	this.instance_21.setTransform(-70,22);

	this.instance_22 = new lib.c21png複製3();
	this.instance_22.setTransform(-70,22);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90,0,99,81);


(lib.m2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"run":0,"run2":32,"boom":48});

	// timeline functions:
	this.frame_31 = function() {
		this.gotoAndPlay("run");
	}
	this.frame_47 = function() {
		this.gotoAndPlay("run2");
	}
	this.frame_68 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(31).call(this.frame_31).wait(16).call(this.frame_47).wait(21).call(this.frame_68).wait(1));

	// 圖層_1
	this.instance = new lib.AA_0();
	this.instance.setTransform(51,105,0.2,0.2);

	this.instance_1 = new lib.AA_1();
	this.instance_1.setTransform(51,105,0.2,0.2);

	this.instance_2 = new lib.AA_2();
	this.instance_2.setTransform(51,105,0.2,0.2);

	this.instance_3 = new lib.CachedBmp_1();
	this.instance_3.setTransform(50.95,93.85,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_2();
	this.instance_4.setTransform(47.55,81.6,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_3();
	this.instance_5.setTransform(33.85,54.95,0.5,0.5);

	this.instance_6 = new lib.c02png複製2();
	this.instance_6.setTransform(47,96);

	this.instance_7 = new lib.c03png複製2();
	this.instance_7.setTransform(46,96);

	this.instance_8 = new lib.c04png複製2();
	this.instance_8.setTransform(47,96);

	this.instance_9 = new lib.c05png複製2();
	this.instance_9.setTransform(46,96);

	this.instance_10 = new lib.c06png複製2();
	this.instance_10.setTransform(47,96);

	this.instance_11 = new lib.c07png複製2();
	this.instance_11.setTransform(47,96);

	this.instance_12 = new lib.c08png複製2();
	this.instance_12.setTransform(46,96);

	this.instance_13 = new lib.c09png複製2();
	this.instance_13.setTransform(47,96);

	this.instance_14 = new lib.c10png複製2();
	this.instance_14.setTransform(46,96);

	this.instance_15 = new lib.c11png複製2();
	this.instance_15.setTransform(47,96);

	this.instance_16 = new lib.c12png複製2();
	this.instance_16.setTransform(47,96);

	this.instance_17 = new lib.c13png複製2();
	this.instance_17.setTransform(46,96);

	this.instance_18 = new lib.c14png複製2();
	this.instance_18.setTransform(47,96);

	this.instance_19 = new lib.c15png複製2();
	this.instance_19.setTransform(46,96);

	this.instance_20 = new lib.c16png複製2();
	this.instance_20.setTransform(47,96);

	this.instance_21 = new lib.c17png複製2();
	this.instance_21.setTransform(47,96);

	this.instance_22 = new lib.c18png複製2();
	this.instance_22.setTransform(46,96);

	this.instance_23 = new lib.c19png複製2();
	this.instance_23.setTransform(47,96);

	this.instance_24 = new lib.c20png複製2();
	this.instance_24.setTransform(46,96);

	this.instance_25 = new lib.c21png複製2();
	this.instance_25.setTransform(47,96);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},8).to({state:[{t:this.instance}]},8).to({state:[{t:this.instance_2}]},8).to({state:[{t:this.instance}]},8).to({state:[{t:this.instance_3},{t:this.instance}]},4).to({state:[{t:this.instance_4},{t:this.instance}]},4).to({state:[{t:this.instance_5},{t:this.instance}]},4).to({state:[{t:this.instance_6}]},4).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,117.9,155);


(lib.m1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"run":0,"boom":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_21 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(21).call(this.frame_21).wait(1));

	// 圖層_1
	this.instance = new lib.A();
	this.instance.setTransform(20,9,0.1111,0.1389);

	this.instance_1 = new lib.c02png複製();
	this.instance_1.setTransform(16,0);

	this.instance_2 = new lib.c03png複製();
	this.instance_2.setTransform(16,0);

	this.instance_3 = new lib.c04png複製();
	this.instance_3.setTransform(16,0);

	this.instance_4 = new lib.c05png複製();
	this.instance_4.setTransform(16,0);

	this.instance_5 = new lib.c06png複製();
	this.instance_5.setTransform(16,0);

	this.instance_6 = new lib.c07png複製();
	this.instance_6.setTransform(16,0);

	this.instance_7 = new lib.c08png複製();
	this.instance_7.setTransform(16,0);

	this.instance_8 = new lib.c09png複製();
	this.instance_8.setTransform(16,0);

	this.instance_9 = new lib.c10png複製();
	this.instance_9.setTransform(16,0);

	this.instance_10 = new lib.c11png複製();
	this.instance_10.setTransform(16,0);

	this.instance_11 = new lib.c12png複製();
	this.instance_11.setTransform(16,0);

	this.instance_12 = new lib.c13png複製();
	this.instance_12.setTransform(16,0);

	this.instance_13 = new lib.c14png複製();
	this.instance_13.setTransform(16,0);

	this.instance_14 = new lib.c15png複製();
	this.instance_14.setTransform(16,0);

	this.instance_15 = new lib.c16png複製();
	this.instance_15.setTransform(16,0);

	this.instance_16 = new lib.c17png複製();
	this.instance_16.setTransform(16,0);

	this.instance_17 = new lib.c18png複製();
	this.instance_17.setTransform(16,0);

	this.instance_18 = new lib.c19png複製();
	this.instance_18.setTransform(16,0);

	this.instance_19 = new lib.c20png複製();
	this.instance_19.setTransform(16,0);

	this.instance_20 = new lib.c21png複製();
	this.instance_20.setTransform(16,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,75,59);


// stage content:
(lib.SPACE_WAR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.clearAllSoundStreams();
		 
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 圖層_1
	this.instance = new lib.background();
	this.instance.setTransform(1,1,1.5562,1.7494);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(513,385,512,384);
// library properties:
lib.properties = {
	id: '0356A0DF8E8F4448B3C6AC8B88E2FDE9',
	width: 1024,
	height: 768,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/SPACE_WAR_atlas_1.png?1592651286029", id:"SPACE_WAR_atlas_1"},
		{src:"images/SPACE_WAR_atlas_2.png?1592651286032", id:"SPACE_WAR_atlas_2"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['0356A0DF8E8F4448B3C6AC8B88E2FDE9'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;