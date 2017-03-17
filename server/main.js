// Server entry point, imports all server code

// import publications from './publications';
import '/imports/startup/server';

import methods from './methods';
import publications from './publications';

publications();
methods();
