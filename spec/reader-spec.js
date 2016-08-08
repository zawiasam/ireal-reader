'use strict';

const fixtures = require('./fixtures');
const iRealReader = require('../reader');
const util = require('util');

describe('iReal Reader', function(){
  var playlist;

  describe('tiny playlist containing one song', function(){
    beforeEach(function(){
      playlist = new iRealReader(fixtures.playlists.tiny);
    });

    it('should have the right attributes', function(){
      expect(playlist.name).toBeUndefined();
      expect(playlist.songs.length).toEqual(1);
    });
  });

  describe('three song lists', function(){
    beforeEach(function(){
      playlist = new iRealReader(fixtures.playlists.threeSongs);
    });

    it('should have the right attributes', function(){
      console.log(util.inspect(playlist, false, null));
      expect(playlist.name).toEqual("Small");
      expect(playlist.songs.length).toEqual(3);
     });
  });

  describe('two song lists inside HTML', function(){
    beforeEach(function(){
      playlist = new iRealReader(fixtures.playlists.twoSongsInHTML);
    });

    it('should have the right attributes', function(){
      expect(playlist.name).toEqual("Small");
      expect(playlist.songs.length).toEqual(2);
    });
  });


  describe('really long song lists', function(){
    beforeEach(function(){
      playlist = new iRealReader(fixtures.playlists.django);
    });

    it('should have the right attributes', function(){
      expect(playlist.name).toEqual("Django Fakebook 2008 dfb");
      expect(playlist.songs.length).toEqual(205);
    });
  });


});