/*****************************************************************************/
/* Client and Server Routes */
/*****************************************************************************/
Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound',
  templateNameConverter: 'upperCamelCase',
  routeControllerNameConverter: 'upperCamelCase'
});

Router.map(function () {
  this.route('trending', {path: '/'});
  this.route('song.of.the.day', {path: '/SongOfTheDay'});
  this.route('surprise.me', {path: '/SupriseMe'});
  this.route('top.songs', {path: '/TopSongs'});
  this.route('radio', {path: '/Radio'});
  /*
    Example:
      this.route('home', {path: '/'});
  */
});
