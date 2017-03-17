/*  global ENUMS */

import React from 'react';
import {mount} from 'react-mounter';

import Layout from './components/MainLayout.jsx';
import Home from '../home/components/Home.jsx';

export default function (injectDeps, {FlowRouter, LocalState}) {
  const MainLayoutCtx = injectDeps(Layout);

  /** **************************************************
   * Routes definition
   * */

  FlowRouter.route('/', {
    name: 'Home',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Home/>)
      });
    }
  });

  FlowRouter.notFound = {
    // Subscriptions registered here don't have Fast Render support.
    name: 'notFound',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<div>Not found</div>)
      });
    }
  };
}
