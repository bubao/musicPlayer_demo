# 开发笔记

## react-jplayer

这个模块是react版本的jplayer，试了下 yarn 安装不了

```
npm install --save react-jplayer
```
例子如下：

```js
import React from 'react';
import { connect } from 'react-redux';
import { actions } from 'react-jplayer';

/* jPlayers is automatically injected into the state if you set followed the setup correctly.
You can also access your other state properties like usual. */

const mapStateToProps = state => ({
  showRemainingDuration: state.jPlayers.AudioPlayer.showRemainingDuration,
});

const SomeRandomFunc = ({ showRemainingDuration, dispatch }) =>
  <div onClick={() => dispatch(actions.setOption('AudioPlayer', 'showRemainingDuration', !showRemainingDuration))}>
    Toggle Duration
  </div>;

export default connect(mapStateToProps)(SomeRandomFunc);

```
