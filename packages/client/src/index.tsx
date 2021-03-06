import core from '@module/core-client-react';
import look from '@module/look-client-react';
import i18n from '@module/i18n-client-react';
import counter from '@module/counter-client-react';
import chat from '@module/chat-client-react';
import contact from '@module/contact-client-react';
import validation from '@module/validation-common-react';
import ClientModule from '@module/module-client-react';

import defaultRouter from './modules/defaultRouter';
import post from './modules/post';
import upload from './modules/upload';
import user from './modules/user';
import payments from './modules/payments';
import pageNotFound from './modules/pageNotFound';
import pagination from './modules/pagination';
import './modules/favicon';

const modules = new ClientModule(
  look,
  validation,
  defaultRouter,
  counter,
  post,
  upload,
  contact,
  pagination,
  chat,
  payments,
  user,
  i18n,
  pageNotFound,
  core
);

modules.triggerOnAppCreate();

export default modules;
