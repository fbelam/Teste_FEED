"use strict";

var grids = document.querySelectorAll('.grid');
var heading = document.querySelectorAll('.heading .wrapper .text');

function enterScreen(index) {
  var grid = grids[index];
  var heading = headings[index];
  var gridColumns = grid.querySelectorAll('.column');
  grid.classList.add('active');
  gridColumns.forEach(function (Element) {
    Element.classList.remove('animate-before');
  });
}

function exitScreen(index, exitDelay) {}

function setupAnimationCycle(_ref) {
  var initialScreenIndex = _ref.initialScreenIndex,
      timePerScreen = _ref.timePerScreen,
      exitDelay = _ref.exitDelay;
  enterScreen(initialScreenIndex);
}

setupAnimationCycle({
  initialScreenIndex: 0,
  timePerScreen: 2000,
  exitDelay: 200 * 7
});